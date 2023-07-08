/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 15:16:10
 */
// 身份证号
export const idCardReg
  = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/

// 手机号
export const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
// 邮箱
export const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

// 只能输入数字
export const numberReg = /^[-+]?(([0-9]+)([.]([0-9]+))?|([.]([0-9]+))?)$/

// 身份证号码
export const isCardReg = /^\d{17}[\dxX]$/

// 电话座机号码、手机号码
export const islandlinePhoneReg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
