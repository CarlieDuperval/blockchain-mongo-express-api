import { Router } from 'express'
import { createBlockchain, getAllBlockchains, getBlockchain, updateBlockchain} from '../services/blockchain.js'
export const blockchainRouter = Router();

blockchainRouter.post('/blockchain', async(req, res)=> {
    const blockchain = req.body;
    const id = await createBlockchain(blockchain)
    res.status(200).send(id.toString)
})

blockchainRouter.get('/blockchain', async (req, res) => {
    const blockchainList = await getAllBlockchains()
    res.status(200).send(blockchainList)
})

blockchainRouter.get('/blockchain/:name', async (req, res) => {
    const { name } = req.params
    const blockchain = await getBlockchain(name)
    res.status(200).send(blockchain)
})

blockchainRouter.patch('/blockchain/:name', async (req, res) => {
    const { name, updateObj} = await updateBlockchain(name , updateObj)
    res.status(200).send('This is updated')
})