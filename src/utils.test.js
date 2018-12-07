import { getSorted, getFiltered } from './utils.js'
import testData from './testData.js'

describe('function getSorted', () => {
  it('sorts the data from newest to oldest import date', () => {
    const sortedData = getSorted(testData);
    expect(sortedData).toBeInstanceOf(Array)
    expect(sortedData[0].id).toEqual(3)
    expect(sortedData[1].id).toEqual(1)
    expect(sortedData[2].id).toEqual(2)
  })
})

describe('function getFiltered', () => {
  it('filters the data based on their rating', () => {
    const filteredDataG = getFiltered('g', testData);
    expect(filteredDataG).toBeInstanceOf(Array)
    expect(filteredDataG).toHaveLength(2)

    const filteredDataPg = getFiltered('pg-13', testData);
    expect(filteredDataPg).toBeInstanceOf(Array)
    expect(filteredDataPg).toHaveLength(1)

  })
})
