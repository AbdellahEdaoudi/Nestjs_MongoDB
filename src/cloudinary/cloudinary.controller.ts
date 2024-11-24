import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class CloudinaryController {
    constructor (private readonly cloudinaryService:CloudinaryService){}

  @Post('file')
  @UseInterceptors(FileInterceptor('file')) //,{limits:{fileSize:1000000}}
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }

//   @Post('files')
//   @UseInterceptors(FilesInterceptor('file[]', 5))
//   uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
//     //... handle multiple files
//   }
}
