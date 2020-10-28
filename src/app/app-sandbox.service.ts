import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetScreen } from './screen.actions';
import { ApplicationState } from './application.state';

@Injectable()
export class AppSandboxService {
  //Subscribe on new values from the store
  mobile$ = this.store.select(state => state.screen.mobile);
  tablet$ = this.store.select(state => state.screen.tablet);
  desktop$ = this.store.select(state => state.screen.desktop);

  constructor(private store: Store<ApplicationState>) {
  }

  setWindowWidth(windowWidth: number): void {
    console.log('windowWidth:' + windowWidth);

    //Send the new windowWitdth to the store
    this.store.dispatch(new SetScreen(windowWidth));
  }
}