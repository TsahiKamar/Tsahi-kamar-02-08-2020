import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';

import { AppSandboxService } from './app-sandbox.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
  //title = 'heroloWeather';
//}
  export class AppComponent implements OnInit, OnDestroy {
    title = 'poalim';

    private _resize$: Observable<number>;
    mobile$ = this.sb.mobile$;
    tablet$ = this.sb.tablet$;
    desktop$ = this.sb.desktop$;
  
    constructor(private sb: AppSandboxService) {
    }
  
    ngOnInit(): void {
      this._resize$ = fromEvent(window, 'resize')//Orig Observable.fromEvent
        .pipe(
          debounceTime(200),
          map(() => window.innerWidth),
          distinctUntilChanged(),
          startWith(window.innerWidth),
          tap(width => this.sb.setWindowWidth(width)),
          tap(console.log)
        );
      this._resize$.subscribe();
    }
  
    ngOnDestroy(): void {
      //tbc this._resize$.distinctUntilChanged();
    }
  }




