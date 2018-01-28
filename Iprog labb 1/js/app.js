$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	

	//var exampleView = new ExampleView($("#exampleView"), model);
	var secondView = new SecondView($("#secondView"), model);
	var secondViewImg = new SecondViewImg($("#secondViewImg"), model);
	var secondViewName = new SecondViewName($("#secondViewName"), model);
	var secondViewPrice = new SecondViewPrice($("#secondViewPrice"), model);
	var secondViewPrice2 = new SecondViewPrice2($("#secondViewPrice2"), model);
	var secondViewDishes = new SecondViewDishes($("#SecondViewDishes"), model);
	var secondView2 = new SecondView2($("#secondView2"), model);
	var dishInfoDescription = new DishInfoDescription($("#dishInfoDescription"), model);
	var dishInfoIngredients = new DishInfoIngredients($("#dishInfoIngredients"), model);
	var dishInfoPrice = new DishInfoPrice($("#dishInfoPrice"), model);
	var singlePrice = new SinglePrice($("#singlePrice"), model);
	var secondViewMenu = new SecondViewMenu($("#secondViewMenu"), model);
	var secondViewAgainMenu = new SecondViewAgainMenu($("#secondViewAgainMenu"), model);
	var secondViewAgainPrice = new SecondViewAgainPrice($("#secondViewAgainPrice"), model);
	var viewAllDishes = new ViewAllDishes($("#viewAllDishes"), model);
	//var viewAllImages = new ViewAllImages($("#viewAllImages"), model);
	//var secondViewTotalMenu = new SecondViewTotalMenu($("#SecondViewTotalMenu"), model);
	//var secondViewPrice2 = new SecondViewPrice2($("#secondViewPrice2"), model);
	//var test = new Test($("#test"), model);

	//Siris:

	//var getPrice = new GetPrice($("#getPrice"), model);
	//var getGuest = new GetGuest($("#getGuest"), model);
  	//var getMenu = new GetMenu($("#getMenu"), model);
	//var getDescription = new GetDescription($("#getDescription"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});