import { Schema, model } from "mongoose";


export interface FileUpload{
  name: string;
  html: string;
  css?: string;
  js?: string;
}

const FileUploadsSchema =  new Schema<FileUpload>({
  name: {type: String, unique: true},
  html: String,
  css: String,
  js: String

}, {timestamps: true})


export const fileUploadModel = model<FileUpload>('fileUpload', FileUploadsSchema)
