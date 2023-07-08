/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 19:21:01
 */

export const cUnits = reactive([
  {
    text: 'fM',
    value: 'fM',
  },
  {
    text: 'pM',
    value: 'pM',
  },
  {
    text: 'μM',
    value: 'μM',
  },
  {
    text: 'mM',
    value: 'mM',
  },
  {
    text: 'M',
    value: 'M',
  },
])

export const vUnits = reactive([
  {
    text: 'nL',
    value: 'nL',
  },
  {
    text: 'μL',
    value: 'μL',
  },
  {
    text: 'mL',
    value: 'mL',
  },
  {
    text: 'L',
    value: 'L',
  },
])

export const volumeUnits = reactive([
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
    text: 'L',
    value: 'L',
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
export function molConvertConcentration(value: number, unit: string): number {
  const conversionTable = {
    fM: 1e-15,
    pM: 1e-12,
    μM: 1e-6,
    mM: 1,
    M: 1e3,
  }

  if (unit in conversionTable)
    return value * conversionTable[unit as keyof typeof conversionTable]

  // 默认单位是 mM
  return value
}

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
  console.log('%c [ value ]-114', 'font-size:13px; background:#aef0f4; color:#f2ffff;', value)
  const conversionTable = {
    'mL': 1,
    'μL': 0.001,
    'nL': 0.000001,
    'pL': 0.000000001,
    'L': 1000,
    'cm³': 1,
    'dm³': 1000,
  }

  if (fromUnit in conversionTable && toUnit in conversionTable)
    return (value * conversionTable[fromUnit as keyof typeof conversionTable]) / conversionTable[toUnit as keyof typeof conversionTable]

  // 默认单位是 mL
  return value
}
