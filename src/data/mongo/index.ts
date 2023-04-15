import mongoose from 'mongoose'
import { Logger } from '../../services/logger.service'
import { MONGO_URI } from '../../config'


export async function connect(){
  return await mongoose.connect(MONGO_URI)
}



mongoose.connection.addListener('error', (error)=>{
  const logger = new Logger('error of mongoose')

  logger.error(JSON.stringify(error))
})


mongoose.connection.once('open', ()=>{
  const logger = new Logger('first connection')

  logger.log('Conextion init succesfull')

})
