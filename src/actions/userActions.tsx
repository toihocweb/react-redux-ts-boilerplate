import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUserState } from '../reducers/userReducer';

export enum UserActionTypes {
    SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface IUserAnyAction {
    type: UserActionTypes.SET_CURRENT_USER;
    user: any;
}

export type UserActions = IUserAnyAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const setCurrentUser: ActionCreator<ThunkAction<Promise<any>, IUserState, null, IUserAnyAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({ user: 'Admin', type: UserActionTypes.SET_CURRENT_USER });
        } catch (err) {
            console.error(err);
        }
    };
};
