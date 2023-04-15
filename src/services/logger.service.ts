import pino, { DestinationStream, LoggerOptions } from "pino";

const  pinoLocalLogger = pino({
  transport: {
    "target": "pino-pretty",
    options:{
      colorize:true
    }
  }
})

export class Logger{
  private pinoLogger: pino.Logger<(LoggerOptions | DestinationStream) & pino.ChildLoggerOptions>

  constructor(context: string){
    this.pinoLogger = pinoLocalLogger.child({
      context,
    })
  }

  log(message: string){
    this.pinoLogger.info(message)
  }

  error(message: string | any){
    this.pinoLogger.error(message.toString())
  }
}
