import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { BasicInfoActionTypes } from '../actions/basic-information.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromBasicInfoActions from './../actions/basic-information.actions';


@Injectable()
export class BasicInfoEffects {

    @Effect()
    loadBasicInformation$: Observable<any> = this.actions$.pipe(
        ofType(BasicInfoActionTypes.LoadBasicInformation),
        switchMap((action: fromBasicInfoActions.LoadBasicInformationAction) =>
        this.httpClient.get('assets/data/basic-info.json').pipe(
            map((basicInfo: any) => new fromBasicInfoActions.LoadBasicInformationSuccessAction(basicInfo)),
            catchError((error: any) => of(new fromBasicInfoActions.LoadBasicInformationFailAction(error)))
        )
    )
    )

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private httpClient: HttpClient
      ) {}
}