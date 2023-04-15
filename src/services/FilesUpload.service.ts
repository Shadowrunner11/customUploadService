import { Model } from "mongoose";
import { Logger } from "./logger.service";
import { FileUpload } from "../data/mongo/models/fileUploads";

export class FileUploadService{
  private static = new Logger(FileUploadService.name)

  constructor(private model: Model<FileUpload>){}

  async createUploadBucket(fileUploadDTO: FileUpload){
    return await this.model.create(fileUploadDTO)
  }

  async findAll(){
    return await this.model.find().lean()
  }

}
