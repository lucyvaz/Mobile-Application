import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredientsProvider } from '../../providers/ingredients/ingredients';
import { HomePage } from '../home/home';
import { ShoppinglistPage } from '../../pages/shoppinglist/shoppinglist';

/**
 * Generated class for the Menu2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html',
})
export class Menu2Page {

  displayit1=false;
  displayit2=false;
  displayit3=false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public theShoppingList: IngredientsProvider) {
  }

  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

  public openShoppinglistPage(){
  	this.navCtrl.push(ShoppinglistPage)
  }


  
  //this display the recipe instructions

  displayInstruction1() 
  {
    this.displayit1 = !this.displayit1;

  }
  displayInstruction2() 
  {
    this.displayit2 = !this.displayit2;

  }
  displayInstruction3() 
  {
    this.displayit3 = !this.displayit3;

  }

}
