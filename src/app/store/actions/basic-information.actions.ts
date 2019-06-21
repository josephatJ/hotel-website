import { Action } from '@ngrx/store';


export enum BasicInfoActionTypes {
    LoadBasicInformation = '[Basic info] Load basic information',
    LoadBasicInformationSuccess = '[Basic Info] Load basic information success',
    LoadBasicInformationFail = '[Basic info] Load basic information fail'
}

export class LoadBasicInformationAction implements Action {
    readonly type = BasicInfoActionTypes.LoadBasicInformation;
}

export class LoadBasicInformationSuccessAction implements Action {
    readonly type = BasicInfoActionTypes.LoadBasicInformationSuccess;
    constructor(public basicInformation: any) {}
}

export class LoadBasicInformationFailAction implements Action {
    readonly type = BasicInfoActionTypes.LoadBasicInformationFail;
    constructor(public error: any){}
}

export type basicInformationActions = LoadBasicInformationAction
| LoadBasicInformationSuccessAction
| LoadBasicInformationFailAction;
