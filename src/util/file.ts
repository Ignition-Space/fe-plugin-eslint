/*
 * @Author: Cookie
 * @Date: 2021-07-18 19:14:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-06 12:34:23
 * @Description:
 */

import * as fs from "fs"
import { loggerError, loggerSuccess } from './index'

export const loadFile = <T = {}>(path: string): T | false | undefined => {
  try {
    console.log(fs.existsSync(path), path)
    if (!fs.existsSync(path)) {
      return false
    }
    const data = fs.readFileSync(path, 'utf8');
    const config = JSON.parse(data);
    return config
  } catch (err) {
    loggerError(`Error reading file from disk: ${err}`);
  }
}

export const existsFile = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.exists(path, (exists: boolean) => {
      if (exists) resolve(true)
      reject(false)
    })
  })
}

/**
 * @description: 写入文件
 * @param {string} path
 * @param {string} fileName
 * @param {string} file
 * @return {*}
 */
export const writeFile = (path: string, fileName: string, file: string) => {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    fs.writeFile(`${path}/${fileName}`, file, (error) => {
      if (error) {
        loggerError('Write file failed!')
      } else {
        loggerSuccess('Write file successful!')
      }
    })
  } catch (err) {
    loggerError(`Error reading file from disk: ${err}`);
  }
}
