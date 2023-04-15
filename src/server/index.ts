import express from "express";
import PinoHttp from "pino-http";
import cors from 'cors'
import { mainRouter } from "../routes";
import multer from "multer";

export const server = express()

server
  .use(PinoHttp({
    transport: {
      "target": "pino-pretty",
      options:{
        colorize:true
      }
    }
  }))
  .use(cors())
  .use('/static', express.static('uploads'))
  .use('/api', mainRouter)
