<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>

<script type="text/javascript">
	
	
// 	   //<![CDATA[

//    var json_obj = jQuery.parseJSON ( ' + <?php echo $json; ?> + ' );
// 		console.log(json_obj);
//    //]]>

	

$( window ).load(function() {
	
	$(".menu-item").each(function(){
		let children = $(this).find(".hfe-menu-item");
		if(children.html() == 'Order<span class="hfe-menu-toggle sub-arrow hfe-menu-child-0"><i class="fa"></i></span>')
			{
				children.attr("href","#");
			}
		console.log(children.html())
	})
	
	$.ajax({
     type: "POST",
     url: 'https://shredmetrix.com/airtable/api/onseason.php',
     data: "check",
     success: function(response){
         let banner_text = response.records[0].fields["Banner Text"];
			  $(".product-offer-bar h5").html(banner_text);
			 console.log(banner_text);
			 
     }
});

	
	if($(".shipping_method").length > 0)
		{
			let mathod = $(".shipping_method").attr("value");
			if(mathod == "local_pickup:8")
				{
					$(".woocommerce-checkout .col-2 .woocommerce-shipping-fields").addClass("d-none");
					$(".woocommerce-shipping-totals th").html("Pickup");
			

// 					$(".woocommerce-billing-fields").find("h3").html("Pickup address");
					
// 					$("#billing_address_1_field").addClass("d-none");
// 					$("#billing_address_2_field").addClass("d-none");
// 					$("#billing_city_field").addClass("d-none");
					
					
// 					$("#billing_postcode_field").addClass("d-none");
					
					
// 					$("#billing_postcode").attr('readonly', true);
// 					$("#billing_city").attr('readonly', true);
// 					$("#billing_billing_state").attr('readonly', true);
// 					$("#billing_country").attr('readonly', true);
				
					
// 					$("#billing_country_field").addClass("d-none");				
// 					$("#billing_billing_state_field").addClass("d-none");
			
					
					$("#shipping_address_1").attr("value","Pick Up 3519 W Commonwealth Ave, Fullerton, CA 92833");
	
				}
			
		}
	
	$("#billing_first_name").on("change",function(){
		$("#shipping_first_name").attr("value",$(this).val());
	})
	
		
	$("#billing_last_name").on("change",function(){
		$("#shipping_last_name").attr("value",$(this).val());
	})
	
	
	
	$(".products-list-tab-mobile").on("change",function(){
		let value = $(this).val();
		 window.location.href = value;
// 		alert(value)
	})
	
		$("tbody.breakfast").prepend("<h5>Breakfast</h5>");
	$("tbody.meals").prepend("<h5>Meals</h5>");
	$("tbody.deserts").prepend("<h5>Healthy Snacks</h5>");
	
	 $(document.body).on('country_to_state_changed', function() {
		$("#calc_shipping_state").html('<option value="CA">California</option>');
      });
	
	 $(document.body).on('adding_to_cart', function() {
		 	alert("test")
      });
	
// 			    var locations = <?= json_encode($locations); ?>

//             // assuming you have jQuery. If not, use a for loop.
//             $.each(locations, function (index, location) {
//                 console.log(location);
//             });
//            console.log(locations);
	

//  $(".shipping-calculator-button").on("click",function(){
// 	 setTimeout(function(){
// 		$("#calc_shipping_state").html('<option value="CA">California</option>');

// 	},1000);

//  })
	
	 $(".form-row-wide").on("click",function(){
	 setTimeout(function(){
		$("#calc_shipping_state").html('<option value="CA">California</option>');
	
	},500)
		 
	
 })

	
	$(".woocommerce-shipping-calculator").submit(function(){
 $(".shipping-calculator-button").html("Change delivery address");
});
	
// 	$("#billing_state").html('<option value="CA">California</option>');
// 	$("#select2-billing_state-container").on("click",function(){
// 		$("#billing_state").html('<option value="CA">California</option>');	
// 	});
	
  
	
	$(".options-style-dropdowns").each(function(){
	 let select = $(this).find(".clear_component_options");
		if(select)
			{
					select.trigger("click");
			}
	

	});
	
		$(".menu-item").each(function(){
			let good = $(this).find(".hfe-menu-item");
			console.log(good)
			
			if(good.html() == "Order" || good.html() == "Our Story")
			{
				good.attr("href", "#");
			}
		})
	
	
$(".menu-item .hfe-menu-item").on("click",function(e){


	let selected = "first";
	$(".options-style-dropdowns").each(function(){
	 let select = $(this).find(".component_options_select");
	 console.log(select.val());
		
		if(select.val() == "")
			{
				selected = "false";
			}
		else if(select.val() != "" && selected != "false")
			{
				selected = "true";
			}
 	})
	
	if(selected == "true")
		{
			e.preventDefault();
			$(".confirmation-popup").removeClass("d-none");
			
			$(".leave-site").attr("href",$(this).attr("href"));
		}
	
});
	
	
	$(".confirmation-popup-close").click(function(){
		$(".confirmation-popup").addClass("d-none");
	})
	
	$(".sub-menu .menu-item").on("click",function(e){
	
		let child = $(this).children(".hfe-sub-menu-item");
		
	let selected = "first";
	$(".options-style-dropdowns").each(function(){
	 let select = $(this).find(".component_options_select");
	 console.log(select.val());
		
		if(select.val() == "")
			{
				selected = "false";
			}
		else if(select.val() != "" && selected != "false")
			{
				selected = "true";
		
			}
 	})
	
	if(selected == "true")
		{
			e.preventDefault();
			$(".confirmation-popup").removeClass("d-none");
			$(".leave-site").attr("href",child.attr("href"));
		}
		
		
	});

	
		$(".woocommerce-shipping-calculator .pickup-myself").on("click",function(){

		let pickup = "CA";
// 		$("#select2-calc_shipping_state-container").attr("title",pickup);
// 		$("#select2-calc_shipping_state-container").html(pickup);
// 		
			$("#calc_shipping_state").val(pickup);
		$("#calc_shipping_postcode").attr("value","35190").change();
			$("#calc_shipping_city").attr("value","Fullerton").change();
	$(".woocommerce-shipping-calculator button").trigger( "click" );
		
		
	})

	
	
	$(".chef-choose-product").on("click",function(){
		let options_meal = [];
		let meal = $(".composite_form").find(`[data-nav_title='Meal 1']`);
		
		
		let options_breakfast = [];
		let breakfast = $(".composite_form").find(`[data-nav_title='Breakfast 1']`);
		
		meal.find(".component_options_select").each(function(){
			let length = $(this).children('option').length;
			let option = $(this).children('option');
			
			for(let i = 0; i < length; i++)
				{
					let text_value = option.eq(i).html();
					let value_ = option.eq(i).attr("value");
					let price_ = option.eq(i).attr("data-price");
					if(parseInt(price_) == 0 )
						{
							options_meal.push(`${text_value}::${value_}`);
						}
								
				}
			
		})
		
		
		breakfast.find(".component_options_select").each(function(){
			let length = $(this).children('option').length;
			let option = $(this).children('option');
			
			for(let i = 0; i < length; i++)
				{
					let text_value = option.eq(i).html();
					let value_ = option.eq(i).attr("value");
					let price_ = option.eq(i).attr("data-price");
					if(parseInt(price_) == 0 )
						{
							options_breakfast.push(`${text_value}::${value_}`);
						}
								
				}
			
		})
	
		
		let options_meal_count = 0;
		let options_breakfast_count = 0;
		
		$(".composite_component").each(function(){
			let value = $(this).data("nav_title");
			if(value.match("Meal"))
				{
					let ex = $(this).find(".component_options_select_wrapper select")
					
					let index = Math.trunc(options_meal.length * Math.random());
					
					
					if(options_meal_count < options_meal.length) {
						let option_value = options_meal[options_meal_count].split("::");
						console.log(option_value[1])
						ex.val(option_value[1]).change();
						options_meal_count++;
					}
					else
						{
							options_meal_count = 0;
							let option_value = options_meal[options_meal_count].split("::");
							console.log(option_value[1])
							ex.val(option_value[1]).change();
							options_meal_count++;
						}
					
					
				}
			else if(value.match("Breakfast"))
				{
					let ex = $(this).find(".component_options_select_wrapper select")
					
					let index = Math.trunc(options_breakfast.length * Math.random());
					
					
					if(options_breakfast_count < options_breakfast.length) {
						let option_value = options_breakfast[options_breakfast_count].split("::");
						console.log(option_value[1])
						ex.val(option_value[1]).change();
						options_breakfast_count++;
					}
					else
						{
							options_breakfast_count = 0;
							let option_value = options_breakfast[options_breakfast_count].split("::");
							console.log(option_value[1])
							ex.val(option_value[1]).change();
							options_breakfast_count++;
						}
				}
		})
		
		
// 		$(".component_options_select_wrapper select").each(function(){ 
			
			
// 		 			let index = Math.trunc(options_meal.length * Math.random());
// 					let option_value = options_meal[index].split("::");
// 					console.log(option_value[1])
// 					$(this).val(option_value[1]).change();
			
			
// 		});
	
		
// 		$(".component_options_select_wrapper select").each(function(){
// 			let options = [];
//  			let value = $(this).children('option').length;
// 			let option = $(this).children('option');
			
// 			for(let i = 0; i < value; i++)
// 				{
// 					let text_value = option.eq(i).html();
// 					let value_ = option.eq(i).attr("value");
// 					let price_ = option.eq(i).attr("data-price");
// 					if(parseInt(price_) == 0 )
// 						{
// 							options.push(`${text_value}::${value_}`);
// 						}
								
// 				}
			
// 			console.log(options)
			
// // 			let index = Math.trunc(options.length * Math.random());
// // 			let option_value = options[index].split("::");
			
// // 			console.log(option_value[1])
// // 			$(this).val(option_value[1]).change();
// // // 			
// // // 				console.log($(this).options.length);
// // 			console.log(options);
			
			
// 		});
		

		
	})
	
	$(".filter-img").on('click',function(){
		$(".accodian-container").toggleClass("d-none");
	})
	
	$(".option-link-container").on("click",function(){
			let filter_value = $(this).children(".options-link").html();

		$(".component-filters-none .toggle_filter_option").each(function(){
		
			if(filter_value == $(this).html())
				{
					$(this).trigger("click");
				}	
			
			$(".accodian-container").addClass("d-none");
	})
		
	
		
		$(this).toggleClass("option-link-container-active");
		
	})
	
	
	let product_count = 0;
	let breakfast_count = 0;
	let meal_count = 0;
	
	let cart_item_array_meal = [];
	let cart_item_array_breakfast = [];
	
	let cart_item_array_meal_val = [];
	let cart_item_array_breakfast_val = [];
	
	
	let group_product = ["the-grind","swing-shift","9-to-5","focus-fuel-plan"];
	let group_product_meal = [10,10,5,5];
	let group_product_breakfast = [5,0,5,0];
	
	let meal_selector = [];
	let breakfast_selector = [];
	
	$(".woocommerce-grouped-product-list-item__quantity .qty-main").each(function(){
		let id = $(this).data("qty");
		let selector;
		let cat = $(this).data("cat");
		
		$(".unique-cart-value").each(function(){
			if($(this).data("productid") == id)
				{
					selector = $(this);
				}
		})
		let html = selector.html();
		
		if(cat == "Breakfast")
			{
				breakfast_selector.push([id,selector,html]);
			}
		
		else if(cat == "Meals")
			{
				meal_selector.push([id,selector,html]);
			}
		
	})
	
	console.log(meal_selector);
	console.log(breakfast_selector);
	

		$(".unique-cart-value").on("click",function(){
			
		let id = $(this).data("productid");
		let html = $(this).html();
		let selector = $(this);
			
			add_to_plan(id,html,selector);
	
	});
	
	$(".chef-select-item").on("click",function(){
		
		
		let meal_limit;
		let breakfast_limit;
		
		
		let url = window.location.href;
		for(let i = 0; i < group_product.length; i++)
			{
				if(url.match(group_product[i]))
					{
				
						meal_limit = group_product_meal[i];
						breakfast_limit = group_product_breakfast[i];
						condition = true;
					}
			}
		
		if(meal_limit > 0)
			{
				for(let i = 0; i < meal_selector.length; i++)
					{
						if(meal_selector.length == i+1)
							{
								$(".woocommerce-grouped-product-list").find(`[data-qty='${meal_selector[i][0]}']`).attr("value",meal_limit);
								console.log("drama");
							}
						else
							{
								$(".woocommerce-grouped-product-list").find(`[data-qty='${meal_selector[i][0]}']`).attr("value",i);
								meal_limit -= i;
													console.log("dramas");
							}
						
						add_to_plan(meal_selector[i][0],meal_selector[i][2],meal_selector[i][1]);
						
					}
			}
		
		if(breakfast_limit > 0)
			{
				for(let i = 0; i < breakfast_selector.length; i++)
					{
						if(breakfast_selector.length == i+1)
							{
								$(".woocommerce-grouped-product-list").find(`[data-qty='${breakfast_selector[i][0]}']`).attr("value",breakfast_limit);
		
							}
						else
							{
								$(".woocommerce-grouped-product-list").find(`[data-qty='${breakfast_selector[i][0]}']`).attr("value",i);
								breakfast_limit -= i;
			
							}
						
						add_to_plan(breakfast_selector[i][0],breakfast_selector[i][2],breakfast_selector[i][1]);
						
					}
			}
		
		
		
		console.log(meal_limit,breakfast_limit);
		
	})
	
	
	function add_to_plan(id,html,selector) {

			
			$(".qty-main").each(function(){
				let id1 = $(this).data("qty");
				let cat = $(this).data("cat");
				if(id == id1) {
					let qty = $(this).val();
					
					if(qty < 1 && html == "Add to cart")
						{
							alert("you need to select at 1 product");
						}
					else if(cat == "Breakfast" && cart_item_array_breakfast.indexOf(id) == -1 || cat == "Meals" && cart_item_array_meal.indexOf(id) == -1 && qty > -1)
						{

							
							
							
							selector.html('Update Plan');
						
						
							
							if(cat == "Breakfast")
								{
									cart_item_array_breakfast.push(id);
								cart_item_array_breakfast_val.push(parseInt(qty));
									
									breakfast_count+=parseInt(qty);
								}
							else if(cat == "Meals")
								{
									cart_item_array_meal.push(id);
									cart_item_array_meal_val.push(parseInt(qty));
									meal_count+=parseInt(qty);
								}
							
						console.log(cart_item_array_breakfast_val,cart_item_array_meal_val);
							
							$(".quantity .qty").each(function(){
								if(id1 == $(this).attr("name"))
									{			
										$(this).attr('value',qty);
									}
							})
								let counter_text = "Meal:"+meal_count+" Breakfast:"+breakfast_count+" Item selected";
								$(".menu-counter p").html(counter_text);
						}
					else if(qty > -1)
						{
							let index1 = cart_item_array_breakfast.indexOf(id);
							let index2 = cart_item_array_meal.indexOf(id);
				
							if(cat == "Breakfast")
								{
									breakfast_count -= parseInt(cart_item_array_breakfast_val[index1]);						
									cart_item_array_breakfast_val[index1] = qty;
									
									breakfast_count+=parseInt(qty);
				
								}
							else if(cat == "Meals")
								{
									meal_count -= parseInt(cart_item_array_meal_val[index2]);
									cart_item_array_meal_val[index2] = qty;
									
									meal_count+=parseInt(qty);
								}
				
							
							
							let counter_text = "Meal:"+meal_count+" Breakfast:"+breakfast_count+" Item selected";
							$(".menu-counter p").html(counter_text);
							$(".quantity .qty").each(function(){
								if(id1 == $(this).attr("name"))
									{
										$(this).attr('value',qty);
										console.log($(this).attr("name"))
									}
							})
							
						}
					else
						{
							alert("you cannot select negative number");
						}
					
				}
			})
	}
	
	

// 	$(".single_add_to_cart_button").on("click",function(e){
		
// // 		let group_product = ["the-grind","swing-shift","9-to-5","focus-fuel-plan"];
// // 	let group_product_meal = [10,10,5,5];
// // 	let group_product_breakfast = [5,0,5,0];
//     let meal_limit;
// 		let breakfast_limit;
		
// 		let url = window.location.href;
// 		let condition = false;
// 		for(let i = 0; i < group_product.length; i++)
// 			{
// 				if(url.match(group_product[i]))
// 					{
				
// 						meal_limit = group_product_meal[i];
// 						breakfast_limit = group_product_breakfast[i];
// 						condition = true;
// 					}
// 			}
		
// // 		let breakfast_count = 0;
// // 	let meal_count = 0;


// // 		let sum = cart_item_array_val.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0);
//    if(condition) {
// 		 if(meal_limit != meal_count || breakfast_limit != breakfast_count )
// 			{
// 				e.preventDefault();
// 			alert("You need to select "+breakfast_limit+" [Breakfast](s) "+meal_limit+" [meal]s to purchase this meal plan.");
// 			}
// 	 }
	
		
// 	})

	setTimeout(function(){
// 		if( localStorage.getItem("newuser") != "false")
// 			{
				let url = window.location.href;

				if(url == "https://onseasonmeals.org/" || url == "https://onseasonmeals.org/the-food/" || url == "https://onseasonmeals.org/the-team/")
					{
								$('.Subscribe-form').removeClass("d-none");
						setTimeout(function(){
							$('.Subscribe-form').addClass("d-none");
							},25000)

						localStorage.setItem("newuser", "false");

					}
// 			}
		


	},6000);
	

	
let count = 0;
	$(".woocommerce-cart-form__cart-item").each(function(){
				let cart = $(this).children(".product-quantity");
			 let cart_value = cart.find(".qty").val();
				if(cart_value > 0){
					count++;
				}
			});
		$(".post-inner").attr("id",count);
	
	 $(document.body).on('updated_cart_totals', function () {
        // Get the formatted cart total
        location.reload();
    });
	
// 		$( document.body ).on( 'updated_cart_totals', function(){

// 			let count = 0;
// 			let data_count = $(".post-inner").attr("id");
// 			let data_product_group = "";
// 			let wrong_data = false;
			
// 			$(".woocommerce-cart-form__cart-item").each(function(){
// 				let cart = $(this).children(".product-quantity");
// 			 let child1 = $(this).children(".product-name");
	
				
// 				if(data_product_group == "")
// 					{
// 						data_product_group = child1.children("a:first").attr("href");
// // 							alert(data_product_group)
// 					}
// 				else {
// 					if(data_product_group != child1.children("a:first").attr("href"))
// 					{
// 						wrong_data = true;
// 					}
		
// 				}
				
						
			
// 			});
				
// 				// 	let group_product_meal = [10,10,5,5];
// // 	let group_product_breakfast = [5,0,5,0];
//     let meal_limit;
// 		let breakfast_limit;
				
// 				for(let i = 0; i < group_product.length; i++)
// 					{
// 						if(data_product_group.match(group_product[i]))
// 							{
// 								meal_limit = group_product_meal[i]
// 								breakfast_limit = group_product_breakfast[i]
// 							}
// 		      alert(data_product_group)
// 					}
				
			
// 				alert(meal_limit+" are "+breakfast_limit)
		

					
			
// // 			if(data_count && data_count > count)
// // 				{
// // 					$(".popup-box-1").addClass("active-box");
// // 					setTimeout(function(){
// // 					window.location.href = "https://onseasonmeals.org/?product=the-grind";
// // 				},2000)
// // 				}
// // 			console.log(data_count);
// // 			$(".post-inner").attr("id",count);
// //     			alert(count);
			
// 			if(wrong_data) {
// 				alert("somthing wrong")
// 			}
// });

	let Calories = [];
	let Fat = [];
	let Carbs = [];
	let Protein = [];
	let nutrition_array = ["Fat","Calories","Carbs","Protein"];
	let Az = [];
	let Za = [];
	
	
	$(".quantity .qty").on("change",function(){
		$(".popup-box").toggleClass("active-box");
		console.log("single-day")
		setTimeout(function(){
			$(".popup-box").removeClass("active-box");
		},2000)
	})
	
	$(".close-btn-pop").on("click",function(){
		$(".popup-box").removeClass("active-box");
	})
	
		$(".close-btn-pop").on("click",function(){
		$(".popup-box").removeClass("active-box");
	})
	
	$(".woocommerce-grouped-product-list-item").each(function(){
			let child = $(this).find(".nutrition-class");
			let nutrition = child.html().split(" | ");
			let product_id = $(this).attr("id");
		  let title = $(this).find(".product-variation-title h4").html();
		

		
			for(let i = 0; i < nutrition_array.length; i++)
				{
					for(let j = 0; j < nutrition.length; j++)
						{
							if(nutrition[j].match(nutrition_array[i]))
								{

									if(nutrition_array[i] == "Fat")
										{
											let obj = {};
											 let string = nutrition[j].split(":");
											
// 												obj[product_id] = parseInt(string[1]);
// 												let json = JSON.stringify( obj);
												Fat.push(`${product_id}:${parseInt(string[1])}`)
										}
									
												
									else if(nutrition_array[i] == "Calories")
										{
											let obj = {};
											 let string = nutrition[j].split(":");
											
// 												obj[product_id] = parseInt(string[1]);
// 												let json = JSON.stringify( obj);
												Calories.push(`${product_id}:${parseInt(string[1])}`)
										}
										
									else if(nutrition_array[i] == "Carbs")
										{
											let obj = {};
											 let string = nutrition[j].split(":");
											
// 												obj[product_id] = parseInt(string[1]);
// 												let json = JSON.stringify( obj);
												Carbs.push(`${product_id}:${parseInt(string[1])}`)
										}
									
									else if(nutrition_array[i] == "Protein")
										{
											let obj = {};
											 let string = nutrition[j].split(":");
											
// 												obj[product_id] = parseInt(string[1]);
// 												let json = JSON.stringify( obj);
												Protein.push(`${product_id}:${parseInt(string[1])}`)
										}
	
									
									
								}
						}
				}
		
		
Az.push(`${title}:${product_id}`);

		
		});
	
			
									
									// let nutrition_array = ["Fat","Calories","Carbs","Protein"];
									// 7
		Carbs = Carbs.sort(function(a, b){
			let a1 = a.split(":");
			let b1 = b.split(":");
			return b1[1] - a1[1]
		}
		);
	
	Fat = Fat.sort(function(a, b){
			let a1 = a.split(":");
			let b1 = b.split(":");
			return b1[1] - a1[1]
		}
		);
	
	Calories = Calories.sort(function(a, b){
			let a1 = a.split(":");
			let b1 = b.split(":");
			return b1[1] - a1[1]
		}
		);
	
	Protein = Protein.sort(function(a, b){
			let a1 = a.split(":");
			let b1 = b.split(":");
			return b1[1] - a1[1]
		}
		);
	Az = Az.sort();
	
	Za = [...Az];
	
	Za = Za.reverse();
	
console.log(Az);
/*
let url = $(location).attr('href');

  $(".list-product-tab").each(function(){
		let active = $(this).data("product-name");
		
		if(url == active )
			{
				$(this).addClass("list-product-tab-active");
				console.log(active)
			}
		
	})
	*/

    let Title = $(".product_title.entry-title").html();

console.log(Title);

$(".list-product-tab").each(function(){
		let title_value = $(this).find("h5").html();
  
			if(title_value == Title)
				{
						$(this).addClass("list-product-tab-active");
				 
				}	
			
			
	});
	
	$(".list-product-tab-option").each(function(){
		let title_value = $(this).html();
		let title_av = title_value.trim();
		let good = title_av.split(" -");
		
     			let value2 = $(this).attr("value");
					
			
			if(good[0] == Title)
				{
						let value2 = $(this).attr("value");
					
		
						$(".products-list-tab-mobile").val(value2);
				 
				}	
	})
	

//let Picked = $("p.woocommerce-shipping-destination").html();

//$("a.pickup-myself").on("click",(function(){
//		let picked_value = $("tr.woocommerce-shipping-totals.shipping").find("ul#shipping_method").html();
  //         	if(picked_value > Picked)
	//			{
	//						Picked.addClass("d-none");
	//			 
	//			}	
			
	//));

	
	
	
	$(".close-contact-form").on("click",function(){
		$(".contact-form").addClass("d-none");
	})
	
	$(".close-subscribe-form").on("click",function(){
		$(".Subscribe-form").addClass("d-none");
	})
	
	
	
		$(".contact-box-img").on("click",function(){
		$(".contact-form").toggleClass("d-none");
	})
	
		$(".accordion-button").on("click",function(){
		$(this).toggleClass("minus-now");
			let parent = $(this).parent();
			let parent1 = parent.parent();
			let parent2 = parent1.parent();
			
			parent2.toggleClass("grouped-product-active");
	})
	

		var isOnDiv = false;
	  var isbar = false;
	
	
	
	$(".filter-container").mouseenter(function(){isbar=true;});
$(".filter-container").mouseleave(function(){isbar=false;});
	
	
$(".accodian-container").mouseenter(function(){isOnDiv=true;});
$(".accodian-container").mouseleave(function(){isOnDiv=false;});
	
	$(".icon-link-img").on("click",function(){
		let sort_filter = $(this).data("class");
		$(".dropdown-product-details").each(function(){
			$(this).addClass("d-none");
		})
		
		$("."+sort_filter).toggleClass("d-none");
	});
	
	$(document).on("click", function(event){
     			if(!isOnDiv && !isbar) {
						$(".accodian-container").addClass("d-none");
			
						
			
					}
            
                   
    });
	
	
	$(".filter-apply-link").on("click",function(){
		$(".filter-apply-link").each(function(){
			$(this).removeClass("active-filter-tab");
		})
		$(this).addClass("active-filter-tab");
		let filter_name = $(this).data("filter");
		
		if(filter_name == "clear-all")
			{
				$(".woocommerce-grouped-product-list-item").each(function(){
					$(this).removeClass("d-none");
				});
					$(".dropdown-product-details").each(function(){
			$(this).addClass("d-none");
					});
				 return false;																								 
			}
		
		$(".woocommerce-grouped-product-list-item").each(function(){
			let child = $(this).find(".single-product-tags");
			let filter_status = false;	
			child.children("a").each(function(){
				if($(this).html() == filter_name)
					{
						filter_status = true;
						return false
					}
			})
			
			if(!filter_status)
				{
					$(this).addClass("d-none")
				}
			else
				{
					$(this).removeClass("d-none")
				}
		})
		
		
		$(".dropdown-product-details").each(function(){
			$(this).addClass("d-none");
		})

	});
	
	
	
	
	$(".sorting-apply-link").on("click",function(){
		$(".sorting-apply-link").each(function(){
			$(this).removeClass("active-sorting-tab");
		})
		$(this).addClass("active-sorting-tab");
		$(".dropdown-product-details").each(function(){
			$(this).addClass("d-none");
		})
		
		let data = $(this).data("sort");
		 nutrition_array = ["Fat","Calories","Carbs","Protein"];
		
		
		if(data == "Fat")
			{
				for(let i = 0; i < Fat.length; i++)
					{
						let split = Fat[i].split(":");
						$("#"+split[0]).css({
							order : i
						})
				
					}
			}
		else if(data == "Calories")
			{
				for(let i = 0; i < Calories.length; i++)
					{
				let split1 = Calories[i].split(":");
						$("#"+split1[0]).css({
							order : i
						})
				
					}
			}
		else if(data == "Carbs")
			{
				for(let i = 0; i < Carbs.length; i++)
					{
				let split2 = Carbs[i].split(":");
						$("#"+split2[0]).css({
							order : i
						})

					}
			}
		
		else if(data == "Protein")
			{
				for(let i = 0; i < Protein.length; i++)
					{
				let split2 = Protein[i].split(":");
						$("#"+split2[0]).css({
							order : i
						})

					}
			}
		
		else if(data == "a-z")
			{
				for(let i = 0; i < Az.length; i++)
					{
				let split3 = Az[i].split(":");
						$("#"+split3[1]).css({
							order : i
						})
					}
				
			}
		else if(data == "z-a")
			{
				for(let i = 0; i < Za.length; i++)
					{
				let split4 = Za[i].split(":");
						$("#"+split4[1]).css({
							order : i
						})
					}
			}
		
		
		
		
	});
	

	$(".icon-arrow-link").on("click",function(){
		if($(this).hasClass("expended-chev"))
			{
				$("form.cart.grouped_form").addClass("d-none")
				$(this).removeClass("expended-chev");
			}
		else
			{
				$(this).addClass("expended-chev");
				$("form.cart.grouped_form").removeClass("d-none")
			}
	})
	

	
});
</script>