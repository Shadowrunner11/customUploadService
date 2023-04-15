import fs from 'fs'
import { Router } from "express";
import multer from 'multer'
import { FileUploadService } from "../services/FilesUpload.service";
import { fileUploadModel } from "../data/mongo/models/fileUploads";



const storage = multer.diskStorage({ destination(req, __, callback){
  const path = `uploads/${req.params.name}/`
  fs.mkdirSync(path)
  callback(null, path)
}, filename(_, file, callback) {
  callback(null, file.originalname)
},})

const upload = multer({storage})



export const mainRouter = Router()

const fileUploadInstance = new FileUploadService(fileUploadModel)

mainRouter
  .get('/', async (_, res) => {

    res.json(await fileUploadInstance.findAll())
  })
  .post(
    '/upload/:name',
    upload.fields([{name: 'html', maxCount: 1}, {name: 'css', maxCount: 1}, {name: 'js', maxCount: 1}]),
    (req, res)=>{
      const { name } = req.params
      const { files } = req

      if(!files)
        return res.status(400).send('Not enough data')
  
      console.log(files)

      const [ htmlFile ] = files['html'] ?? []
      const [ cssFile ] = files['css'] ?? []
      const [ jsFile ] = files['js'] ?? []

      const data = {
        name,
        html: htmlFile?.path,
        css: cssFile?.path,
        js: jsFile?.path
      }
    
      fileUploadInstance.createUploadBucket(data)

      res.json({
        data,
        status: 'in procces'
      })
    }
  )
