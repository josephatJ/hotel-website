import { AppState } from "..";
import { createSelector } from '@ngrx/store';


const basicInformation = (state: AppState) => state.basicInformation;

export const getBasicInformation = createSelector(basicInformation, (basicInfo: any) => basicInfo)
