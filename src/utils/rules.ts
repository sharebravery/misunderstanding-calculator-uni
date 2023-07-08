/*
 * @Author: Ztq
 * @Date: 2022-04-25 10:27:53
 * @LastEditors: lin
 * @LastEditTime: 2022-11-15 14:22:27
 * @Description:
 * @FilePath: \ch2-template-vue\src\utils\rules.ts
 */
import * as regExp from './regExp'

export const rulesNameMap: Record<string, string> = {
  isPhone: '手机号',
  isEmail: '邮箱',
  islandlinePhone: '座机号码或手机号码',
}
// 手机号校验
export function isPhone(value: string | undefined | null): boolean {
  if (value == null)
    return false
  return regExp.phoneReg.test(value)
}
// 邮箱校验
export function isEmail(value: string | undefined | null): boolean {
  if (value == null)
    return false
  return regExp.emailReg.test(value)
}

// 座机号码校验
export function islandlinePhone(value: string | undefined | null): boolean {
  if (value == null)
    return false
  return regExp.islandlinePhoneReg.test(value)
}
