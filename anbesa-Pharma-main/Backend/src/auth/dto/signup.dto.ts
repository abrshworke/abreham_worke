import { IsNotEmpty, IsString, IsEmail, MinLength, IsEnum} from 'class-validator'
import { Role } from '../schemas/user.schema'


export class SignUpDto {
    
    @IsNotEmpty()
    @IsString()
    readonly name: string
     
    @IsNotEmpty()
    @IsEmail({},{message: 'Please Enter the correct email'})
    readonly email: string
    

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string

    @IsNotEmpty()
    @IsEnum(Role, {message: 'Please Enter correct Category'})

    readonly role: Role

}