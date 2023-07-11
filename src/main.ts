// =========== Main

// FizzBuzz
export type FizzBuzzReturnValue = 'Fizz' | 'Buzz' | 'FizzBuzz' | number
type FizzBuzz = (total: number) => FizzBuzzReturnValue[]
type FizzBuzzRecursive = (init: number, total: number, result: FizzBuzzReturnValue[]) => FizzBuzzReturnValue[]

export const fizzBuzz: FizzBuzz = (total) => {
  const result: FizzBuzzReturnValue[] = []

  for (let i = 1; i <= total; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }

  return result
}

export const fizzBuzzRecursive: FizzBuzzRecursive = (init, total, result): FizzBuzzReturnValue[] => {
  if ((init % 3 === 0) && (init % 5 === 0)) {
    result.push('FizzBuzz')
  } else if (init % 3 === 0) {
    result.push('Fizz')
  } else if (init % 5 === 0) {
    result.push('Buzz')
  } else {
    result.push(init)
  }

  if (init === total) {
    return result
  } else {
    return fizzBuzzRecursive(init + 1, total, result)
  }
}

// Palindrom
export const palindromLooping = (text: string): boolean => {
  let reversedText = ''
  for (let index = (text.length - 1); index >= 0; index--) {
    reversedText += text.charAt(index).toLowerCase()
  }
  if (text.toLowerCase() === reversedText) {
    return true
  } else {
    return false
  }
}

export const palindromLoopingWithoutReverseText = (text: string): boolean => {
  for (let index = 0; index < (Math.floor(text.length / 2)); index++) {
    const firstText = text.charAt(index).toLowerCase()
    const endText = text.charAt((text.length - 1) - index).toLowerCase()

    if (firstText !== endText) {
      return false
    }
  }

  return true
}

export const isPlaindrom = (text: string): boolean => {
  return palindromRecursive(text, 0)
}

const palindromRecursive = (text: string, index: number): boolean => {
  if (index < text.length / 2) {
    const firstText = text.charAt(index).toLowerCase()
    const endText = text.charAt((text.length - 1) - index).toLowerCase()

    if (firstText !== endText) {
      return false
    } else {
      return palindromRecursive(text, index + 1)
    }
  } else {
    return true
  }
}

export const factorial = (total: number): number => {
  let result = 1

  for (let index = total; index >= 1; index--) {
    result *= index
  }
  return result
}

// export const factorialRecursive = (total: number): number => {
//   if (total >= 1) {
//     return total * factorialRecursive(total - 1)
//   } else {
//     return 1
//   }
// }

// export const factorialRecursive = (total: number, value: number): number => {
//   if (value <= 0) {
//     return total
//   } else {
//     return factorialRecursive(total * value, value - 1)
//   }
// }

export const factorialRecursive = (total: number, value: number): number => {
  if (value <= 0) {
    return total
  } else {
    return factorialRecursive(total * value, value - 1)
  }
}
