// ========== Main Test
// import all modules)
import { type FizzBuzzReturnValue, fizzBuzz, fizzBuzzRecursive } from '../src/main'

describe('FizzBuzz', () => {
  const expectedResult: FizzBuzzReturnValue[] = [
    1, 2, 'Fizz', 4, 'Buzz',
    'Fizz', 7, 8, 'Fizz', 'Buzz',
    11, 'Fizz', 13, 14, 'FizzBuzz'
  ]

  it('should return "FizzBuzz" (Looping)', () => {
    expect(fizzBuzz(15)).toEqual(expectedResult)
  })

  it('should return "FizzBuzz" (Recursive)', () => {
    expect(fizzBuzzRecursive(1, 15, [])).toEqual(expectedResult)
  })
})
