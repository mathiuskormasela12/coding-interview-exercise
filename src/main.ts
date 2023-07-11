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
