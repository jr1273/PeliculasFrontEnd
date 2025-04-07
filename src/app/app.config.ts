import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import{provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import { provideHttpClient, withFetch } from '@angular/common/http';
import{ SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), 
    provideAnimationsAsync(),
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}},
  
  provideMomentDateAdapter({
    parse: {
     dateInput: ['DD-MM-YYYY']
   },
   display:{
     dateInput: 'DD-MMM-YYYY',
     monthYearLabel: 'MMM-YYYY',
     dateA11yLabel: 'LL',
     monthYearA11yLabel: 'MMM YYYY',
    }
}),
provideHttpClient(withFetch()),
importProvidersFrom([SweetAlert2Module.forRoot()])

]
 
};

