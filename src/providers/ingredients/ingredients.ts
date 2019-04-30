import { Injectable } from '@angular/core';

/*
  Generated class for the IngredientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientsProvider {

	optionsMenu1: any[] = new Array();
  optionsCake1: any[] = new Array();
  optionsSide1: any[] = new Array();

  optionsMenu2: any[] = new Array();
  optionsCake2: any[] = new Array();
  optionsSide2: any[] = new Array();


  optionsMenu3: any[] = new Array();
  optionsCake3: any[] = new Array();
  optionsSide3: any[] = new Array();

  //Please notice that I create only one array (ingredientsList []) because
  // I wanted to display all ingredients in a single shopping list.

  ingredientsList: any[] = new Array();


  constructor() {

    //this is my traditional Christmas menu

  	var ing1 = {"ingredientName": "whole turkey", "amount":"2 kg"};
  	var ing2 = {"ingredientName": "olive oil", "amount":"2 tbs of "};
  	var ing3 = {"ingredientName": "salt", "amount":"1 tsp of"};
  	var ing4 = {"ingredientName": "black pepper", "amount":"2 pinchs"};
    var ing5 = {"ingredientName": "parsley", "amount":"100g"};
    var ing6 = {"ingredientName": "rosemary", "amount":"100g"};
  	this.optionsMenu1.push(ing1);
  	this.optionsMenu1.push(ing2);
  	this.optionsMenu1.push(ing3);	
  	this.optionsMenu1.push(ing4);
    this.optionsMenu1.push(ing5);
    this.optionsMenu1.push(ing6);

    var ck1 = {"cakeingredientName": "flour", "amount":"2 kg"};
    var ck2 = {"cakeingredientName": "butter", "amount":"2 tbs of "};
    var ck3 = {"cakeingredientName": "baking Powder", "amount":"1 tsp of"};
    var ck4 = {"cakeingredientName": "sugar", "amount":"2 pinchs"};
    this.optionsCake1.push(ck1);
    this.optionsCake1.push(ck2);
    this.optionsCake1.push(ck3); 
    this.optionsCake1.push(ck4);

    var side1 = {"sideingredientName": "potatoes", "amount":"2 kg"};
    var side2 = {"sideingredientName": "oil", "amount":"2 tbs of "};
    var side3 = {"sideingredientName": "salt", "amount":"1 tsp of"};
    var side4 = {"sideingredientName": "black pepper", "amount":"2 pinchs"};
    var side5 = {"sideingredientName": "rosemary", "amount":"100g"};
    this.optionsSide1.push(side1);
    this.optionsSide1.push(side2);
    this.optionsSide1.push(side3); 
    this.optionsSide1.push(side4);
    this.optionsSide1.push(side5);


    //this is my Vegetarian Christmas Menu

    var ving1 = {"ingredientName": "butternut squash", "amount":"1.5 kilos"};
    var ving2 = {"ingredientName": "flat-leaf parsley", "amount":"100g"};
    var ving3 = {"ingredientName": "roasted peppers", "amount":"560g"};
    var ving4 = {"ingredientName": "onion", "amount":"1"};
    var ving5 = {"ingredientName": "button mushrooms", "amount":"200g"};
    var ving6 = {"ingredientName": "whole chestnuts", "amount":"180g"};
    var ving7 = {"ingredientName": "garlic cloves", "amount":"2"};
    var ving8 = {"ingredientName": "paprika", "amount":"1/2 tsp"};
    var ving9 = {"ingredientName": "thyme sprigs", "amount":"8"};
    var ving10 = {"ingredientName": "spinach leaves", "amount":"200g"};

    this.optionsMenu2.push(ving1);
    this.optionsMenu2.push(ving2);
    this.optionsMenu2.push(ving3); 
    this.optionsMenu2.push(ving4);
    this.optionsMenu2.push(ving5);
    this.optionsMenu2.push(ving6);
    this.optionsMenu2.push(ving7);
    this.optionsMenu2.push(ving8);
    this.optionsMenu2.push(ving9);
    this.optionsMenu2.push(ving10);


    var vside1 = {"sideingredientName": "sweet potatoes", "amount":"3 lb"};
    var vside2 = {"sideingredientName": "pecans", "amount":"1 1/2 cup"};
    var vside3 = {"sideingredientName": "olive oil", "amount":"2 tbs"};
    var vside4 = {"sideingredientName": "parmesan cheese", "amount":"1/4 cup grated"};
    var vside5 = {"sideingredientName": "cayenne", "amount":"1/8 tsp"};
    var vside6 = {"sideingredientName": "fresh rosemary", "amount":"3 tsp"};
    var vside7 = {"sideingredientName": "maple syrup", "amount":"3 tbs pure"};
    var vside8 = {"sideingredientName": "Kosher salt", "amount":""};

    this.optionsSide2.push(vside1);
    this.optionsSide2.push(vside2);
    this.optionsSide2.push(vside3); 
    this.optionsSide2.push(vside4);
    this.optionsSide2.push(vside5);
    this.optionsSide2.push(vside6); 
    this.optionsSide2.push(vside7);
    this.optionsSide2.push(vside8);

    var vck1 = {"cakeingredientName": "raisins", "amount":"1/4"};
    var vck2 = {"cakeingredientName": "dried cranberries", "amount":"1/4 cup"};
    var vck3 = {"cakeingredientName": "dried figs", "amount":"0.25 cup"};
    var vck4 = {"cakeingredientName": "dried cherries", "amount":"1/4 cup"};
    var vck5 = {"cakeingredientName": "dried apricot", "amount":"1/4 cup"};
    var vck6 = {"cakeingredientName": "dried dates", "amount":"0.25 cup"};
    var vck7 = {"cakeingredientName": "grape juice", "amount":"1 cup"};
    var vck8 = {"cakeingredientName": "water warm", "amount":"1.25 cups"};
    var vck9 = {"cakeingredientName": "brown sugar", "amount":"1 cup"};
    var vck10 = {"cakeingredientName": "vegetable oil", "amount":"2/3 cup"};
    var vck11 = {"cakeingredientName": "plain flour ", "amount":"2 cup"};
    var vck12 = {"cakeingredientName": "baking soda", "amount":"1/2 tsp"};
    var vck13 = {"cakeingredientName": "baking powder", "amount":"1 tsp"};
    var vck14 = {"cakeingredientName": "cinnamon powder", "amount":"1/2 tsp"};
    var vck15 = {"cakeingredientName": "nutmeg powder", "amount":"1/4 tsp"};
    var vck16 = {"cakeingredientName": "cardamom powder", "amount":"1/2 tsp"};
    var vck17 = {"cakeingredientName": "almonds", "amount":"1/4 tsp"};

    this.optionsCake2.push(vck1);
    this.optionsCake2.push(vck2);
    this.optionsCake2.push(vck3); 
    this.optionsCake2.push(vck4);
    this.optionsCake2.push(vck5);
    this.optionsCake2.push(vck6);
    this.optionsCake2.push(vck7); 
    this.optionsCake2.push(vck8);
    this.optionsCake2.push(vck9);
    this.optionsCake2.push(vck10);
    this.optionsCake2.push(vck11); 
    this.optionsCake2.push(vck12);
    this.optionsCake2.push(vck13);
    this.optionsCake2.push(vck14);
    this.optionsCake2.push(vck15); 
    this.optionsCake2.push(vck16);
    this.optionsCake2.push(vck17);


    //this is Seafood Christmas menu

    var zing1 = {"ingredientName": "lobsters", "amount":"2 live 1 1/2 pound"};
    var zing2 = {"ingredientName": "clarified butter", "amount":"6 tbs"};
    var zing3 = {"ingredientName": "shallot", "amount":"1 small"};
    var zing4 = {"ingredientName": "celery", "amount":"1 stalk"};
    var zing5 = {"ingredientName": "red pepper", "amount":"1/4"};
    var zing6 = {"ingredientName": "white wine", "amount":"2tbs"};
    var zing7 = {"ingredientName": "cream", "amount":"1 tbs"};
    var zing8 = {"ingredientName": "lemon", "amount":"juice of1/2"};
    var zing9 = {"ingredientName": "cooked shrimps", "amount":"4 ounces"};
    var zing10 = {"ingredientName": "Pankos", "amount":"1/2 cup"};
    var zing11 = {"ingredientName": "parmesan cheese", "amount":"2 tbs grated"};
    var zing12 = {"ingredientName": "fresh parsley", "amount":"2 tbs"};
    this.optionsMenu3.push(zing1);
    this.optionsMenu3.push(zing2);
    this.optionsMenu3.push(zing3); 
    this.optionsMenu3.push(zing4);
    this.optionsMenu3.push(zing5);
    this.optionsMenu3.push(zing6);
    this.optionsMenu3.push(zing7);
    this.optionsMenu3.push(zing8);
    this.optionsMenu3.push(zing9);
    this.optionsMenu3.push(zing10);
    this.optionsMenu3.push(zing11);
    this.optionsMenu3.push(zing12);

    var zside1 = {"sideingredientName": "floury potatoes", "amount":"4-6 large"};
    var zside2 = {"sideingredientName": "onion", "amount":"2"};
    var zside3 = {"sideingredientName": "chopped rosemary", "amount":"1 tbs"};
    var zside4 = {"sideingredientName": "thyme leaves", "amount":"1 tsp"};
    var zside5 = {"sideingredientName": "dried chilli flakes", "amount":"1/4 tsp"};
    var zside6 = {"sideingredientName": "garlic cloves", "amount":"3"};
    var zside7 = {"sideingredientName": "virgin olive oil", "amount":"125ml"};
    var zside8 = {"sideingredientName": "unsalted butter", "amount":"40g"};
    
    this.optionsSide3.push(zside1);
    this.optionsSide3.push(zside2);
    this.optionsSide3.push(zside3); 
    this.optionsSide3.push(zside4);
    this.optionsSide3.push(zside5);
    this.optionsSide3.push(zside6);
    this.optionsSide3.push(zside7);
    this.optionsSide3.push(zside8); 
  

    var zck1 = {"cakeingredientName": "cranberries", "amount":"3 1/2 cup"};
    var zck2 = {"cakeingredientName": "sugar", "amount":"3/4 cup"};
    var zck3 = {"cakeingredientName": "orange juice", "amount":"1/2 cup"};
    var zck4 = {"cakeingredientName": "milk", "amount":"1/2 cup"};
    var zck5 = {"cakeingredientName": "orange zest", "amount":"1 tbs"};
    var zck6 = {"cakeingredientName": "vanilla extract", "amount":"1 tsp"};
    var zck7 = {"cakeingredientName": "egg yolk", "amount":"3 large"};
    var zck8 = {"cakeingredientName": "cornstarch", "amount":"3/4 cup"};
    var zck9 = {"cakeingredientName": "pound cake", "amount":"1 (16-oz.)"};
    var zck10 = {"cakeingredientName": "whipping cream", "amount":"1/2 cup"};
    var zck11 = {"cakeingredientName": "white chocolate curls", "amount":"10g"};
    
    this.optionsCake3.push(zck1);
    this.optionsCake3.push(zck2);
    this.optionsCake3.push(zck3); 
    this.optionsCake3.push(zck4);
    this.optionsCake3.push(zck5);
    this.optionsCake3.push(zck6);
    this.optionsCake3.push(zck7); 
    this.optionsCake3.push(zck8);
    this.optionsCake3.push(zck9);
    this.optionsCake3.push(zck10);
    this.optionsCake3.push(zck11); 
  

  
  }


/* get methods for the options for the interface */

//this is my get method for Menu 1: Traditional Christams Menu

  public getingredientMenu1options()
  {
    return this.optionsMenu1;
  }

  public getingredientCake1options()
  {
    return this.optionsCake1;
  }

  public getingredientSide1options()
  {
    return this.optionsSide1;
  }


//this is my get method for Menu 2: Vegetarian Christams Menu

public getingredientMenu2options()
  {
    return this.optionsMenu2;
  }


  public getingredientCake2options()
  {
    return this.optionsCake2;
  }


  public getingredientSide2options()
  {
    return this.optionsSide2;
  }


//this is my ingredient.ts file and 
  //this is my getmethod for Menu 3 Seafood Christmas Menu

public getingredientMenu3options()
  {
    return this.optionsMenu3;
  }

  public getingredientCake3options()
  {
    return this.optionsCake3;
  }

  public getingredientSide3options()
  {
    return this.optionsSide3;
  }


  //here is my method to get all ingredients from the all Christmas menus

  public getUserSelectedIngredients()
  {
    return this.ingredientsList;
  }



//This method give me the option of deleting from my shopping list.

public deleteIngredient(menu1IngredientsObj)
  {
    let index = this.ingredientsList.indexOf(menu1IngredientsObj, 0);
    
    if (index > -1) {
       this.ingredientsList.splice(index, 1);
  
    }
  }

  

  /* These functions is used in the mnenus(.htlm) to check if the ingredients has been selected or not
  and if true, the item(s) are added to the array
   */
  
  public isIngredientSelectedByUser(menu1IngredientsObj)
  {
    if (this.ingredientsList.indexOf(menu1IngredientsObj) < 0)
    {
      return false;
    }    
    else
    {
      return true;
    }
  }

  public addIngredient(menu1IngredientsObj)
  {
    if (this.ingredientsList.indexOf(menu1IngredientsObj) < 0)
    {
      this.ingredientsList.push(menu1IngredientsObj);
    }
    else
    { /* This is when user clicks/taps on an 
      already added topping */
      this.deleteIngredient(menu1IngredientsObj);  
    }
  }

  
  /** The following two functions are used to Reset my Shopping List

  This function check if the user has select zero or more ingredients 
  */
  public checkIfShoppingListEmpty()
  {
    if (this.ingredientsList.length == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

/* This function Reset all of ingredients/items selected by user */
  public clearAllItems()
  {
    this.ingredientsList = new Array();
    
  }


}
