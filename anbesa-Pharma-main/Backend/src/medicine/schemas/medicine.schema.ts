import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



export enum Category {
    PAINKILLER = 'Painkiller',
    ANTIBIOTICS = 'Antibiotics'
}
@Schema({
    timestamps:true,
})

export class Medicine{
    /* [x: string]: any; */
    /* save() {
        throw new Error('Method not implemented.');
    } */

    @Prop()    
    title: string;
    @Prop()
    
    detail: string;
    @Prop()
    
    usedfor: string;

    @Prop() 
    price: number;
    
    @Prop()  
    category: Category;
}
export const MedicineSchema = SchemaFactory.createForClass(Medicine)