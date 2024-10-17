// Datei: index.test.js
// TODO: Setzen Sie die korrekten Imports ein
import { strict as assert } from 'assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })
})

describe('decimal sum', () => {
  it('should add 1.3 + 2.7 to equal 4', () => {
    assert.equal(sum(1.3, 2.7), 4)
  })
})
