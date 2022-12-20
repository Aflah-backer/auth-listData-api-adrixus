import express from 'express'
import { getDataToTable } from '../controllers/tableData.js'

const router = express.Router()

// getall users
router.get("/getTableData", getDataToTable)

export default router