import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './components/star/star.component';
import { SearchComponent } from './components/search/search.component';
import { VerticalAppComponent } from './components/vertical-app/vertical-app.component';
import { HorizontalAppComponent } from './components/horizontal-app/horizontal-app.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    SearchComponent,
    VerticalAppComponent,
    HorizontalAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
