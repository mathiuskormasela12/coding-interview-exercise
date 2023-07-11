// ========== Main Test
// import all modules)
import { type FizzBuzzReturnValue, fizzBuzz, fizzBuzzRecursive, palindromLooping, palindromLoopingWithoutReverseText, isPlaindrom, factorial, factorialRecursive } from '../src/main'

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

describe('Palindrom', () => {
  it('should return "true" if the text is palindrom (Looping with reverse text)', () => {
    expect(palindromLooping('Kodok')).toBe(true)
    expect(palindromLooping('civic')).toBe(true)
    expect(palindromLooping('peep')).toBe(true)
  })

  it.failing('should return "false" if the text is not palindrom (Looping with reverse text)', () => {
    expect(palindromLooping('who')).toBe(true)
    expect(palindromLooping('you')).toBe(true)
    expect(palindromLooping('are')).toBe(true)
  })

  it('should return "true" if the text is palindrom (Looping)', () => {
    expect(palindromLoopingWithoutReverseText('Kodok')).toBe(true)
    expect(palindromLoopingWithoutReverseText('civic')).toBe(true)
    expect(palindromLoopingWithoutReverseText('peep')).toBe(true)
  })

  it.failing('should return "false" if the text is not palindrom (Looping)', () => {
    expect(palindromLoopingWithoutReverseText('who')).toBe(true)
    expect(palindromLoopingWithoutReverseText('you')).toBe(true)
    expect(palindromLoopingWithoutReverseText('are')).toBe(true)
  })

  it('should return "true" if the text is palindrom (Recursive)', () => {
    expect(isPlaindrom('Kodok')).toBe(true)
    expect(isPlaindrom('civic')).toBe(true)
    expect(isPlaindrom('peep')).toBe(true)
  })

  it.failing('should return "false" if the text is not palindrom (Recursive)', () => {
    expect(isPlaindrom('who')).toBe(true)
    expect(isPlaindrom('you')).toBe(true)
    expect(isPlaindrom('are')).toBe(true)
  })
})

describe('Factorial', () => {
  const data = [
    {
      number: 8,
      total: 40320
    },
    {
      number: 9,
      total: 362880
    },
    {
      number: 5,
      total: 120
    }
  ]

  it.each(data)('should return $total', ({ number, total }) => {
    expect(factorial(number)).toBe(total)
  })

  it.each(data)('should return $total (Tail Recursive)', ({ number, total }) => {
    expect(factorialRecursive(1, number)).toBe(total)
  })
})
