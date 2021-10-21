import { IdName } from './IdName';

export interface Startup {
    id : number ;
    name : string ;
    description : string ;
    ownerId : IdName ; 
}