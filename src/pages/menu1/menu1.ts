import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredientsProvider } from '../../providers/ingredients/ingredients';
import { HomePage } from '../home/home';
import { ShoppinglistPage } from '../../pages/shoppinglist/shoppinglist';

/**
 * Generated class for the Menu1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu1',
  templateUrl: 'menu1.html',
})
export class Menu1Page {

 displayit1=false;
 displayit2=false;
 displayit3=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public theShoppingList: IngredientsProvider) {
  }

  //menu1.ts. ->these functions SHOW and HIDE the recipe instructionss

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

  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

  public openShoppinglistPage(){
  	this.navCtrl.push(ShoppinglistPage)
  }

  
  
  }
