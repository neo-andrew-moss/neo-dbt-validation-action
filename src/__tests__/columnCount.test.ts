import {expect, test} from '@jest/globals'
import {mockGetYmlDetails, mockRemoveDbtFromSql} from './helpers/index'
import {sqlPatternOne, sqlPatternThree} from './mockSqlFiles/index'

test('Number of columns should be equal', async () => {
  const filePath = 'src/__tests__/mockYmlFiles/mockYml.yml'

  const ymlDetails = mockGetYmlDetails(filePath)
  const sqlToCompare = mockRemoveDbtFromSql(sqlPatternOne)

  expect((await ymlDetails).length).toEqual(sqlToCompare.length)
})

test('Number of columns should be equal', async () => {
  const filePath = 'src/__tests__/mockYmlFiles/mockYmlPatternThree.yml'
  const ymlDetails = mockGetYmlDetails(filePath)
  const sqlToCompare = mockRemoveDbtFromSql(sqlPatternThree)
  console.log(ymlDetails)
  console.log(sqlToCompare)

  expect((await ymlDetails).length).toEqual(sqlToCompare.length)
})
