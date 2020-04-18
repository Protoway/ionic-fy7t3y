import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { G17Page } from '../pages/g17/g17';
import { G16Page } from '../pages/g16/g16';
import { G16cPage } from '../pages/g16c/g16c';
import { G16ncPage } from '../pages/g16nc/g16nc';
import { G16sPage } from '../pages/g16s/g16s';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    G17Page,
    G16Page,
    ContactPage,
    HomePage,
    TabsPage,
    G16cPage,
    G16sPage,
    G16ncPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    G17Page,
    G16Page,
    ContactPage,
    HomePage,
    TabsPage,
    G16cPage,
    G16sPage,
    G16ncPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
