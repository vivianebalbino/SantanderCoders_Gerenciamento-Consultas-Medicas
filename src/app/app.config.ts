import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppointmentsService } from './shared/services/appointments.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), AppointmentsService, importProvidersFrom(HttpClientModule), provideHttpClient(withFetch())]
};
