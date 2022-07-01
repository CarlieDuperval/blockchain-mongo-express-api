import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { blockchainRouter} from './src/routes/blockchain.js'
import { smartContractRouter} from './src/routes/smartContracts.js'


dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());
app.use(blockchainRouter)
app.use(smartContractRouter)



app.listen(3000, () => {
    console.log('Listening on Port: 3000')
})