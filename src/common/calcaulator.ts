/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 19:21:01
 */

export const cUnits = reactive([
  {
    text: 'M',
    value: 'M',
  },
  {
    text: 'mM',
    value: 'mM',
  },
  {
    text: 'μM',
    value: 'μM',
  },
  {
    text: 'nM',
    value: 'nM',
  },
  {
    text: 'pM',
    value: 'pM',
  },
  {
    text: 'fM',
    value: 'fM',
  },
])

export const vUnits = reactive([
  {
    text: 'L',
    value: 'L',
  },
  {
    text: 'mL',
    value: 'mL',
  },
  {
    text: 'μL',
    value: 'μL',
  },
  {
    text: 'nL',
    value: 'nL',
  },
  {
    text: 'pL',
    value: 'pL',
  },
  {
    text: 'fL',
    value: 'fL',
  },
  {
    text: 'cm³',
    value: 'cm³',
  },
  {
    text: 'dm³',
    value: 'dm³',
  },
])

/**
 *摩尔浓度单位转换
 *
 * @export
 * @param {number} value
 * @param {string} unit
 * @return {*}  {number}
 */
export function convertMolarConcentration(value: number, fromUnit: string, toUnit: string): number {
  const conversionTable = {
    M: 1000000000000000,
    mM: 1000000000000,
    μM: 1000000000,
    nM: 1000000,
    pM: 1000,
    fM: 1,
  }

  if (fromUnit in conversionTable && toUnit in conversionTable)
    return (value * conversionTable[fromUnit as keyof typeof conversionTable]) / conversionTable[toUnit as keyof typeof conversionTable]

  // 默认单位是飞摩尔（fM）
  return value
}

// 比毫升更小的单位还有微升、纳升、皮升、飞升
// 换算关系为：
// 1L=1000mL
// 1mL=1000μL
// 1μL=1000nL
// 1nL=1000pL
// 1pL=1000fL

/**
 *液体体积单位换算
 *
 * @export
 * @param {number} value
 * @param {string} fromUnit
 * @param {string} toUnit
 * @return {*}  {number}
 */
export function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const conversionTable = {
    'L': 1000000000000000,
    'mL': 1000000000000,
    'μL': 1000000000,
    'nL': 1000000,
    'pL': 1000,
    'fL': 1,
    'cm³': 1000000000000,
    'dm³': 1000000000000000,
  }

  if (fromUnit in conversionTable && toUnit in conversionTable)
    return (value * conversionTable[fromUnit as keyof typeof conversionTable]) / conversionTable[toUnit as keyof typeof conversionTable]

  // 默认单位是飞升（fL）
  return value
}

// export function convertToScientificNotation(value: number): string {
//   const exponent = Math.floor(Math.log10(value))
//   const mantissa = value / 10 ** exponent
//   return `${mantissa} x 10^${exponent}`
// }
export function convertToScientificNotation(value: number): string {
  if (value < 10)
    return String(value)

  let exponent = 0
  let mantissa = value

  if (value !== 0) {
    while (mantissa >= 10 || mantissa <= -10) {
      mantissa /= 10
      exponent++
    }
  }

  return `${mantissa} x 10^${exponent}`
}
