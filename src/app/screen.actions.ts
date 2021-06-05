import { Action } from '@ngrx/store';
import { type } from './util';

export const ActionTypes = {
  SET_SCREEN: type<'SET_SCREEN'>('SET_SCREEN'),
};
const MOBILE_MAX_WIDTH = 480;//ORIG 425;  //Adjust as needed
const TABLET_MAX_WIDTH = 1024;//2048 //Adjust as needed

// Action type for screen
export class SetScreen implements Action {
  type = ActionTypes.SET_SCREEN;
  payload: Readonly<{
    mobile: boolean,
    tablet: boolean,
    desktop: boolean
  }>;

  //6.22 inch ?
  public constructor(width: number) {
    console.log('screen.action ctor');  
    const mobile = width <= MOBILE_MAX_WIDTH;
    const tablet = width <= TABLET_MAX_WIDTH && width > MOBILE_MAX_WIDTH;
    this.payload = {
      mobile,
      tablet,
      desktop: !mobile && !tablet,
    };
  }
}

export type Actions = SetScreen;