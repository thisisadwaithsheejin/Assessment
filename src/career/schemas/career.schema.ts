import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Jobtype{
        FREELANCE = 1,
        PARTTIME = 2,
        PERMANANT = 3,
        INTERN = 4
}

export enum Shift{
        DAY = 'Day',
        NIGHT = 'Night',
}

export enum Differentlyabled{
        YES ='Yes',
        NO = 'No'
}

export enum MaritalStatus{
        SINGLE = 'Single',
        MARRIED = 'Married',  
        DIVORCED = 'Divorced',
        WIDOWED = 'Widowed'   
}

@Schema({
    timestamps:true
})
export class Career{
    
    @Prop()
    industry:string

    @Prop()
    jobtype:Jobtype

    @Prop()
    rolecategory:string

    @Prop()
    worklocation:string

    @Prop()
    shift:Shift

    @Prop()
    salary:number

    @Prop()
    language:string[]

    @Prop()
    differentlyabled:Differentlyabled

    @Prop()
    martialstatus:MaritalStatus
}

export const CareerSchema = SchemaFactory.createForClass(Career)