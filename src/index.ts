import { PORT } from "./config";
import { connect } from "./data/mongo";
import { server } from "./server";
import { Logger } from "./services/logger.service";

const logger = new Logger('bootstrap server')

connect()

server
  .listen(PORT, ()=>{


    logger.log(`Server init on ://[::]:${PORT}`)
  })
  .on('error', (error)=>{
    logger.error(error)
  })
