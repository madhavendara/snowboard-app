import productline from "../assest/product-line-1.svg";



export class Product {
    static getProduct =  (search,priceRange,RockerType,widthType,setbackRange,lengthRange,setbackActive,brandsActive,switchoption,Radius,terrain,snowCondition) =>{
        var searchData = (search !== undefined)?search:'';

        let terrain_filter_option = []
        const terrain_all_conditions_2 = []

        console.log(terrain)
        console.log(snowCondition)

        fetch("https://shredmetrix.com/airtable/api/terrain_conditions.php")
          .then(response => response.json())
          .then((jsonData) => {
          // jsonData is parsed json object received from url
            for(let i = 0; i < jsonData.records.length; i++)
            {
              let r = jsonData.records[i]["fields"]
              terrain_all_conditions_2.push(r)
            }

            console.log(terrain_all_conditions_2)
            
            
              

          })
          .catch((error) => {
            // handle your errors here
            console.error(error)
          })
          


        const terrain_all_conditions = [
              {
                "Snow Conditions": "Groomers",
                "selection": "All-Mountain@Carving"
              },
              {
                "Snow Conditions": "Moguls",
                "selection": "All-Mountain"
              },
              {
                "Snow Conditions": "Powder",
                "selection": "Powder"
              },
              {
                "Snow Conditions": "Jumps",
                "selection": "Park &amp; Pipe@Freestyle"
              },
              {
                "Snow Conditions": "Rails",
                "selection": "Park &amp; Pipe@Freestyle"
              },
              {
                "Snow Conditions": "Trees",
                "selection": "Freeride"
              },
              {
                "Snow Conditions": "Steeps",
                "selection": "Freeride@Big Mountain"
              },
              {
                "Snow Conditions": "Banks",
                "selection": "Freeride"
              },
              {
                "Snow Conditions": "Uphill",
                "selection": "Alpine Touring@Splitboarding"
              },
              {
                "Snow Conditions": "Deep Powder",
                "selection": "Powder@Freeride@Big Mountain"
              },
              {
                "Snow Conditions": "Frozen Granular",
                "selection": "All-Mountain@Carving"
              },
              {
                "Snow Conditions": "Hard Pack",
                "selection": "All-Mountain"
              },
              {
                "Snow Conditions": "Loose Granular (LSGR) or Sugar Snow",
                "selection": "All-Mountain@Park &amp@Freestyle@Freeride@Pipe"
              },
              {
                "Snow Conditions": "Machine Groomed Granular",
                "selection": "All-Mountain@Freestyle@Park &amp@Pipe"
              },
              {
                "Snow Conditions": "Man-Made Granular",
                "selection": "All-Mountain@Freestyle@Park &amp@Pipe"
              },
              {
                "Snow Conditions": "Packed Powder",
                "selection": "All-Mountain@Freeride@Carving@Big Mountain"
              },
              {
                "Snow Conditions": "Powder",
                "selection": "Powder@Freeride@Big Mountain"
              },
              {
                "Snow Conditions": "Sastrugi",
                "selection": "All-Mountain@Freeride"
              },
              {
                "Snow Conditions": "Serious Powder",
                "selection": "Powder@Freeride@Big Mountain"
              },
              {
                "Snow Conditions": "Variable Conditions",
                "selection": "All-Mountain@Park &amp@Freestyle@Freeride@Pipe"
              },
              {
                "Snow Conditions": "Wet Granular Snow",
                "selection": "All-Mountain@Park &amp@Freestyle@Freeride@Pipe"
              },
              {
                "Snow Conditions": "Wet Packed Snow",
                "selection": "All-Mountain@Park &amp@Freestyle@Pipe"
              },
              {
                "Snow Conditions": "Wet Snow",
                "selection": "All-Mountain@Park &amp@Freestyle@Freeride@Pipe"
              },
              {
                "Snow Conditions": "Windblown Snow",
                "selection": "All-Mountain"
              },
              {
                "Snow Conditions": "Wind-scoured",
                "selection": "All-Mountain"
              }
        ]

        for(let i = 0; i < terrain.length; i++) {
          for(let j = 0; j < terrain_all_conditions.length; j++)
          {

            
              if(terrain_all_conditions[j]["Snow Conditions"] == terrain[i])
              {
               
                  let array = terrain_all_conditions[j]["selection"].split("@")
                  if(!terrain_filter_option.includes(array[0]))
                  {
                    
                          terrain_filter_option.push(array[0])
                  
                      
                      
                  }

                  if(!terrain_filter_option.includes(array[1]))
                  {
                    
                      terrain_filter_option.push(array[1])
                  
                    
                  }
                  
              }

              
          }
      }

      for(let i = 0; i < snowCondition.length; i++) {
          for(let j = 0; j < terrain_all_conditions.length; j++)
          {
              if(terrain_all_conditions[j]["Snow Conditions"] == snowCondition[i])
              {
                  let array = terrain_all_conditions[j]["selection"].split("@")
                  if(!terrain_filter_option.includes(array[0]))
                  {
                    
                          terrain_filter_option.push(array[0])
                      
                
                      
                  }

                  if(!terrain_filter_option.includes(array[1]))
                  {
                    
                      terrain_filter_option.push(array[1])
                  
                    
                  }
                  
              }

              
          }
      }


    
        const url = () => {

    
            let main_url = "https://shredmetrix.com/airtable/api/list.php?s="+searchData;

        


            main_url += "&min_price="+priceRange.start+"&max_price="+priceRange.end+"&min_length="+lengthRange.start+"&max_length="+lengthRange.end+"&type_of_data="+switchoption;

            if(switchoption == "Snowboard")
            {
                if(setbackActive != null)
                {
                    if(setbackActive)
                    {
                        main_url += "&min_setback="+setbackRange.start+"&max_setback="+setbackRange.end
                    }

                    else
                    {
                        main_url += "&min_setback="+0+"&max_setback="+0
                    }

                    console.log("kara")
                }
            }
            

            // if(setbackRange.start != 15 && setbackRange.end != 80)
            // {
            //     main_url += "&min_setback="+setbackRange.start+"&max_setback="+setbackRange.end
            // }
 
           
            if(RockerType.length)
            {
               for(let i = 0; i < RockerType.length; i++)
               {
                 main_url += '&avility[]='+'"'+RockerType[i]+'"'
               }
            }

            if(terrain_filter_option.length)
            {

              terrain_filter_option = terrain_filter_option.filter(option => option !== undefined);

              console.log(terrain_filter_option);
              
               for(let i = 0; i < terrain_filter_option.length; i++)
               {
                if(terrain_filter_option[i])
                {
                    main_url += '&terrain[]='+''+terrain_filter_option[i]+''
                }
                 
               }
            }

            

            if(switchoption == "Skies")
            {
            if(Radius.length)
            {
               for(let i = 0; i < Radius.length; i++)
               {
                 main_url += '&side_cut_radious[]='+''+Radius[i]+''
               }
            }
            }
   

            if(widthType.length)
            {
                for(let i = 0; i < widthType.length; i++)
                {
                  main_url += '&width[]='+'"'+widthType[i]+'"'
                }
            }

            if(brandsActive.length)
            {
                for(let i = 0; i < brandsActive.length; i++)
                {
                  main_url += '&brand[]='+'"'+brandsActive[i]+'"'
                }
            }

            
            console.log(main_url)
           

            return main_url
        }
        return new Promise(async (resolve, reject)=>{
            await fetch(url(), 
            
            {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
            }).then(response => response.json())
                .then(response => {

                    var data = response.records || '';
                    var offset = response.offset
                    
                    var products = [];
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var regExp = /[a-zA-Z]/g;
                            let size = data[i].fields['Size (cm)'];
                            if(regExp.test(size)){
                                size = size.replace(/[A-Za-z]/g, "")
                                size = parseInt(size)
                              } else {
                                size = parseInt(size)
                                /* do something if letters are not found in your string */
                              }
                            let model;
                            if(data[i].fields["Model"].endsWith("  - "))  
                            {
                                model = data[i].fields["Model"].replace('  - ','');
                            } 
                            else
                            {
                                model = data[i].fields["Model"]
                            } 
							
							if((typeof data[i].fields.Image !=='undefined') || (typeof data[i].fields.Outline !=='undefined')){
                            products.push({
                                "id": data[i].id || '',
                                "ref": data[i].id || '',
                                "Title": data[i].fields["Product title"] ?  data[i].fields["Product title"] :  data[i].fields.SKU,
                                "Model" : model,
                                "Brand" : data[i].fields["Brand"],
                                "url" : data[i].fields["Product href"] ?  data[i].fields["Product href"] :  "https://www.evo.com/shop/snowboard",
                                "type": data[i].fields.Width,
                                "stars": 4,
                                "Price": data[i].fields.Pricing == 0 ? '0' : data[i].fields.Pricing ,
                                "img": data[i].fields.Image[0].url,
                                "outline" : data[i].fields.Outline_copy[0]["url"],
                                "outline-img" : data[i].fields.Outline[0]["url"],
                                "size" : size || 0,
                                "EffectiveEdge" : data[i].fields['Effective Edge (mm)'] || 0,
                                "TipWidth" : data[i].fields['Tip Width (mm)'] || 0,
                                "WaistWidth" : data[i].fields['Waist Width (mm)'] || 0,
                                "line" : data[i].fields.Profile[0]["url"],
                                "taper" : parseInt(data[i].fields['Tip Width (mm)']) - parseInt(data[i].fields['Tail Width (mm)']) || 0,
                                "Sidecut radius" : data[i].fields['Sidecut Radius (m)'] || 0,
                                "Stance Setback" : data[i].fields['Stance Setback Clean (mm)'] || "N/A",
                                "Ability Level" : data[i].fields['Ability Level (from SB Categorical Specs)'][0] || 0,
                                "Rocker Type" : data[i].fields['Rocker Type (from SB Categorical Specs)'] || 0,
                                "tip" : data[i].fields['Tip Width (mm)'],
                                "tail" : data[i].fields['Tail Width (mm)'],
                                "offset" : offset,
                                "Avantlink" : data[i].fields['Avantlink']
                                
                            });
                        }
						}
                        resolve(products)
                    }
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })

    }


    ///   add bookmark
    static addProduct =  (data) =>{
        let formData = new FormData();
        formData.append('user_id', localStorage.getItem('token'));
        formData.append('products_id', data);

        return new Promise(async (resolve, reject)=>{
            await fetch("https://shredmetrix.com/airtable/api/wishlist.php", {
                "method": "POST",
                "body":formData,
            }).then(response => response.json())
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })

    }

    // get save product data
    static getBookmarkProduct =  () =>{

        return new Promise(async (resolve, reject)=>{
            await fetch("https://shredmetrix.com/airtable/api/get_wishlist.php?user_id="+localStorage.getItem('token'), {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = response.data || '';
                    var offset = response.offset
                    var products = [];
                    if (data) {
                        for (var i = 0; i < data.length; i++) {

                            if((typeof data[i].product_info.fields.Image !=='undefined') || (typeof data[i].product_info.fields.Outline !=='undefined')){
                                products.push({
                                    "id": data[i].product_info.id || '',
                                    "wishlist_id": data[i].wishlist_id || '',
                                    "Title": data[i].product_info.fields["Product title"] ?  data[i].product_info.fields["Product title"] :  data[i].product_info.fields.SKU,
                                    "type": data[i].product_info.fields.Width,
                                    "stars": 4,
                                    "Price": data[i].product_info.fields.Pricing || '$0',
                                    "img": data[i].product_info.fields.Image[0] || "https://spotlexdigital.com/compare/product-1.jpg",

                                });
                            }
                        }
                        resolve(products)
                    }else {
                        resolve(products)
                    }
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });

                console.log("https://shredmetrix.com/airtable/api/get_wishlist.php?user_id="+localStorage.getItem('token'))
        })


        
    }

    ///   add bookmark
    static deleteProduct =  (data) =>{
        let formData = new FormData();
        formData.append('user_id', localStorage.getItem('token'));
        formData.append('id', data);

        return new Promise(async (resolve, reject)=>{
            await fetch("https://shredmetrix.com/airtable/api/delete_wishlist.php", {
                "method": "POST",
                "body":formData,
            }).then(response => response.json())
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })

    }

}


//console.log(products);
/*const products = [
    {
        "id" : "p1",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

{
        "id" : "p2",
        "Title" : "Snowboard 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p3",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p4",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p5",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p6",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p7",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    },

    {
        "id" : "p8",
        "Title" : "AitMax 720 React",
        "type" : "small",
        "stars" : 4,
        "Price" : "$749.95",
        "img" : "https://spotlexdigital.com/compare/product-1.jpg"
    }

]
*/

//export default products;
