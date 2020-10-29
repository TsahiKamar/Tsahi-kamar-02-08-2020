import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplicationState } from './application.state';
import { screenReducer } from './screen.reducer';

import { ActionReducerMap, combineReducers, MetaReducer } from '@ngrx/store';
import { reset } from './reset.reducer';

//?need
//import { searchReducer } from './reducers/new-arrival/search.reducer';



export const reducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>('Reducers');

export const rootReducer = {
  screen: screenReducer, //Register your screen reducer
};

export function getReducers() {
  return rootReducer;
}

export const reducerProvider = [
  {
    provide: reducerToken,
    useFactory: getReducers
  }
];

export const metaReducers: MetaReducer<ApplicationState>[] =
  environment.production ? [ reset ] : [ reset ];
  
  
export function getMetaReducers(): MetaReducer<ApplicationState>[] {
  return metaReducers;
}