// ========== Main Test
// import all modules)
import { type FizzBuzzReturnValue, fizzBuzz } from '../src/main'

describe('FizzBuzz', () => {
  it('should return "FizzBuzz"', () => {
    const expectedResult: FizzBuzzReturnValue[] = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz'
    ]
    expect(fizzBuzz(15)).toEqual(expectedResult)
  })
})
