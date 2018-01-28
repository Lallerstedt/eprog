$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var viewAllImages = new ViewAllImages($("#viewAllImages"), model);
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