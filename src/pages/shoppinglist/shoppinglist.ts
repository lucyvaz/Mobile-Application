import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import {IngredientsProvider } from '../../providers/ingredients/ingredients';




@IonicPage()
@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html',
})
export class ShoppinglistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public theShoppingList: IngredientsProvider,public alertCtrl: AlertController) {
  }

//shoppinglist.ts
//this function delete individual items from my shopping list

  public deleteThisIngredient(menu1IngredientsObj)
  {
  	this.theShoppingList.deleteIngredient(menu1IngredientsObj);
  }

//Send you to Home Page
   public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }


//This is my Shoppinglist.ts
//this function reset my shoppling list when click a button and show me an alert message notifying me.
  public StartOver()
  {
    /* This function reset my Shopping List. 
    If the user has not selected any ingredients, then does nothing */
    if (!this.theShoppingList.checkIfShoppingListEmpty())
    {
    this.theShoppingList.clearAllItems();

    const alert = this.alertCtrl.create({
      title: 'Your Shopping List has been Reset',
      subTitle: 'Your Shopping List has been reset. You are going to start selecting your ingredients again',
      buttons: ['Merry Christmas!']
    });
    alert.present();
    }
  }

}
