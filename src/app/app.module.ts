import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IngredientsProvider } from '../providers/ingredients/ingredients';
import { Menu1Page } from '../pages/menu1/menu1';
import { Menu2Page } from '../pages/menu2/menu2';
import { Menu3Page } from '../pages/menu3/menu3';
import { ShoppinglistPage } from '../pages/shoppinglist/shoppinglist';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu1Page,
    Menu2Page,
    Menu3Page,
    ShoppinglistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu1Page,
    Menu2Page,
    Menu3Page,
    ShoppinglistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IngredientsProvider
  ]
})
export class AppModule {}
