import { Differentlyabled, Jobtype, MaritalStatus, Shift } from "../schemas/career.schema"

export class CreateCareerDto{
    readonly industry: string
    readonly jobtype:Jobtype
    readonly rolecategory:string
    readonly worklocation:string
    readonly shift:Shift
    readonly salary:number
    readonly language:string[]
    readonly differentlyabled:Differentlyabled
    readonly martialstatus:MaritalStatus
}