import { account } from './data.js'
import { allYearCount, transformExpense } from './footer.js'
import { function1 } from './function.js'

new function1('.table-content', account)

allYearCount(account)