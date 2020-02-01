import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { PopoverComponent } from './components/popover/popover/popover.component';
import { ImgPopoverComponent } from './components/img-popover/img-popover/img-popover.component';

@NgModule({
  declarations: [AppComponent, PopoverComponent, ImgPopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    FileOpener,
    SplashScreen,
    AppVersion,
    ScreenOrientation,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, PopoverComponent, ImgPopoverComponent]
})
export class AppModule {}
