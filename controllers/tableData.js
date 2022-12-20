import TableData from "../models/TableData.js"

export const getDataToTable = async(req,res,next) => {
    try {
        const userData = await TableData.find({})
        res.status(200).json(userData)
    } catch (error) {
        next(error)
    }
}