/*
 * @Author: Cookie
 * @Date: 2021-07-03 20:52:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-06 12:34:59
 * @Description:
 */

import { getEslint } from './eslint'

// eslint 校验
export const execEslint = async () => {
  await getEslint()
}

export const eslintCommand = {
  version: '0.1.1',
  description: 'start eslint and fix code',
  command: 'tEslint',
  action: () => execEslint()
}

export default [
  eslintCommand
]

module.exports = eslintCommand