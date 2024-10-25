import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Role{
    CLIENT = 'Client',
    PHARMACIST = 'Pharmacist',
}
@Schema({
    timestamps: true 
})

export class User{
    static role(name: string): (target: typeof import("../auth.service").AuthService, propertyKey: undefined, parameterIndex: 0) => void {
        throw new Error('Method not implemented.');
    }

    @Prop()

    name:string

    
    @Prop({unique: [true, 'Duplicate email entered']})

    email:string

    
    @Prop()

    password:string

    @Prop()

    role:Role

}

export const UserSchema = SchemaFactory.createForClass(User)