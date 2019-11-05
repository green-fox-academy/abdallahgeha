


export function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


import { isEven } from './file_1'

let three = isEven(3)
console.log(three)