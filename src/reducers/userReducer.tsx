import { Reducer } from 'redux';
import { UserActionTypes, UserActions } from '../actions/userActions';

export interface IUser {
    email: string;
}

export interface IUserState {
    currentUser: IUser | null;
}

const initialUserState: IUserState = {
    currentUser: null,
};

export const userReducer: Reducer<IUserState, UserActions> = (state = initialUserState, action: UserActions) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.user,
            };
        }
        default:
            return state;
    }
};
