import { IdName } from './IdName';
export interface Review {
    reviewerId : IdName ;
    comment : string ;
    rate : 1 | 2 | 3 | 4 | 5 ;
    reviews : Review [] ;
    date : Date ;
}