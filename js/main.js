import { account } from './data.js'
import { allYearCount, transformExpense } from './footer.js'
import { function1 } from './function.js'
import { findMinIncome } from './summaryList.js'

new function1('.table-content', account)

allYearCount(account)

findMinIncome()