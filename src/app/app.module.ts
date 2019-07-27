import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// import { reducers, metaReducers } from './store/reducers';
import { effects } from './store/effects';

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { RouteSerializer, CoreModule } from './core';
import { RoutingModule } from './app.routes';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgxDhis2MenuModule } from '@hisptz/ngx-dhis2-menu';
import * as fromPages from './pages';
import * as sharedComponents from './shared';
import { ServiceWorkerModule } from '@angular/service-worker';
import { reducers, metaReducers } from './store';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SliderGalleryComponent } from './pages/gallery/slider-gallery/slider-gallery.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, ...fromPages.pages, ...sharedComponents.sharedComponents, GalleryComponent, SliderGalleryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    CoreModule.forRoot({
      namespace: 'iapps',
      version: 1,
      models: {
        users: 'id'
      }
    }),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    /**
     * Menu  module
     */
    NgxDhis2MenuModule,

    /**
     * Translation module
     */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store
     */
    StoreRouterConnectingModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: RouteSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
