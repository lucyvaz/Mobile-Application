import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IngredientsProvider } from '../../providers/ingredients/ingredients';
import { Menu1Page } from '../../pages/menu1/menu1';
import { Menu2Page } from '../../pages/menu2/menu2';
import { Menu3Page } from '../../pages/menu3/menu3';
import { ShoppinglistPage } from '../../pages/shoppinglist/shoppinglist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public theShoppingList: IngredientsProvider) {

  }
//this functions by clicking a button, take me to the selected page
  //notice that I have to import my pages.

  public openMenu1Page(){
  	this.navCtrl.push(Menu1Page)
  }

  public openMenu2Page(){
  	this.navCtrl.push(Menu2Page)
  }

  public openMenu3Page(){
  	this.navCtrl.push(Menu3Page)
  }

  public openShoppinglistPage(){
  	this.navCtrl.push(ShoppinglistPage)
  }


}
