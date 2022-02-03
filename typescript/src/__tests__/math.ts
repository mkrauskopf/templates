import { addTwo } from '../math'

describe('math', () => {
  it('should add two numbers', () => {
    const result = addTwo(4, 7)
    expect(result).toBe(11)
  })
})
