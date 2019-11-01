import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FeedPage } from '../pages/feed/feed';
import { SafePipe } from '../pages/feed/URLsanitizer';
import { SelectPage } from '../pages/select/select';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoServiceProvider } from '../providers/video-service/video-service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    SelectPage,
    TabsPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    SelectPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoServiceProvider,
    NewsProvider
  ]
})
export class AppModule {}
