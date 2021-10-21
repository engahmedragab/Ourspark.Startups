import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components.module';
import { StartupHomeComponent } from './startup-home/startup-home.component';
import { ConfigurationService } from '../configuration/configuration.service';
import { consts, CONSTANTS } from '../constants/constants';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StartupHomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    NoopAnimationsModule,
    ComponentsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'startup/:id', component: StartupHomeComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: getConfiguration,
      deps: [ConfigurationService], multi: true
    },
    { provide: CONSTANTS, useValue: consts }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getConfiguration(config: ConfigurationService) {
  let configLambda = () => config.load();
  return configLambda;
  //config.load()
}
