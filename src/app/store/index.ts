import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { storeFreeze } from "ngrx-store-freeze";
import { environment } from 'src/environments/environment.prod';
import { basicInfoReducer } from './reducers/basic-information-reducer';

export interface AppState {
    route: RouterReducerState,
    basicInformation: any
}

export const reducers: ActionReducerMap<AppState> = {
    route: routerReducer,
    basicInformation: basicInfoReducer
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
