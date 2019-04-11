import { BaseModel } from './base.model';

export class Price extends BaseModel {
    day: string;
    start: string;
    end: string;
    value: number;
}
