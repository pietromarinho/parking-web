import { BaseModel } from './base.model';
import { EntranceExit } from './entrance-exit.enum';

export class Entrance extends BaseModel {
    car_id: string;
    type: EntranceExit;
}
