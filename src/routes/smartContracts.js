import { Router } from "express"
import { updateSmartContract, createSmartContract, getAllSmartContract , getSmartContractByName} from "../services/smartContract.js";

const smartContractRouter = Router()

smartContractRouter.post('/smartContract', async (req, res) => {
    const smartContract = req.body
    const id = await createSmartContract(smartContract);
    res.status(200).send(id.toString)
})

smartContractRouter.get('/smartContract', async (req, res)=> {
    const contractList = await getAllSmartContract()
    res.status(200).send(contractList)
})

smartContractRouter.get('/smartContract/:name', async (req, res) => {
    const { name } = req.params
    const smartContractName = await getSmartContractByName(name)
    res.status(200).send(smartContractName)
})

smartContractRouter.patch('/smartContract/:name', async (req, res) => {
    const {name , updateObj} = await updateSmartContract(name, updateObj)
})