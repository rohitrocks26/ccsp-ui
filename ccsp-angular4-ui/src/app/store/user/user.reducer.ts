import { Action } from '../../models/action'

export function userReducer(state: number = 0, action: Action) : string {
  switch (action.type) {
    case 'UPDATE_SELECTED_USER' : return action.payload;
  }
}