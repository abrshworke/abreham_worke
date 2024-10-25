import { IsEnum, IsNumber,IsNotEmpty, IsString } from "class-validator"
import { Category } from "../schemas/medicine.schema"

export class CreateMedicineDto{

     @IsNotEmpty()
     @IsString()
     title: string

     @IsNotEmpty()
     @IsString()
     detail: string

     @IsNotEmpty()
     @IsString()
     usedfor: string

     @IsNotEmpty()
     price: number

     @IsNotEmpty()
     @IsEnum(Category, {message: 'Please Enter correct Category'})
     category: Category
}