import { basicInformationActions, BasicInfoActionTypes } from '../actions/basic-information.actions';


export function basicInfoReducer(state:any = null, action: basicInformationActions) {
    switch(action.type) {
        case BasicInfoActionTypes.LoadBasicInformationSuccess:
            return {
                ...state,
                ...action.basicInformation
            }
    }
}