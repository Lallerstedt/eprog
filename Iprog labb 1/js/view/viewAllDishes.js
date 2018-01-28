/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var ViewAllDishes = function (container, model) {
	
	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	//var img = container.find("#dishImg");

	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

	 var dishes = container.find("#displayAllDishes");
	 dishes.html(model.getDishes());
	

	 //var price = container.find("#test")
	 //price.html(model.getPrice(1));

	//var img_temp=document.createElement("img");
	//img_temp.src= "images/";
    //img_temp.src+= model.getImage(1);
    //img_temp.id="picture";
    //var foo = document.getElementById("fooBar");
    //foo.appendChild(img_temp);
	 //img.html(model.getImage(1));
	 //var img_temp = model.getImage(1);
	 //document.getElementById("dishInfoImage_real").src = img_temp; 

	 //console.log(numberOfGuests)
	 //var temp = model.getIngredients(1);
	 //temp = temp.split("\n").join("<br />");
	 //temp.replace("\n", '<br />')
	 //ingredients.html(model.getIngredients(1));

	 //for(i= 1; i < 2; i++){
	 //	names.html(model.getName(i));
	 //}
	 //names.html(model.getName(1));
	//var temp_array = model.getIngredients(1);
	//numberOfGuests.html(model.setNumberOfGuests(10));
	//for (ingredient in temp_array){
		//document.write("<br> hej");
	//	ingredients.html(temp_array[ingredient]);
		//console.log(temp_array[ingredient]);

	//}
	//numberOfGuests.html(model.getSelectedDish("dessert"));
	//numberOfGuests.html(model.getFullMenu());
	//numberOfGuests.html(model.getAllIngredients());
	//numberOfGuests.html(model.addDishToMenu(201));
	//price.html(model.getPrice(1));
	//numberOfGuests.html(model.getTotalMenuPrice());
	//numberOfGuests.html(model.removeDishFromMenu(200));
	//numberOfGuests.html(model.getAllDishes("starter"));
	//numberOfGuests.html(model.getAllDishes("main dish");
	//numberOfGuests.html(model.getAllDishes("dessert");
	//numberOfGuests.html(model.getDish(2));
}
 
