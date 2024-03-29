import productline from "../assest/product-line-1.svg";



export class Product2 {
    static getProduct =  (offset,priceRange,RockerType,widthType,setbackRange,lengthRange,setbackActive,brandsActive,switchoption,Radius) =>{
        let offset_ari = "&offset="+offset

        const url = () => {

            let main_url = "https://shredmetrix.com/airtable/api/list.php?s="+offset_ari;

            main_url += "&min_price="+priceRange.start+"&max_price="+priceRange.end+"&min_length="+lengthRange.start+"&max_length="+lengthRange.end+"&type_of_data="+switchoption;

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

            if(Radius.length)
            {
               for(let i = 0; i < Radius.length; i++)
               {
                 main_url += '&side_cut_radious[]='+''+Radius[i]+''
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

                              let sidecut_radius = data[i].fields['Sidecut Radius (m)'];
                              let sidecut_value;

                                if(sidecut_radius.match("/"))
                                {
                                    sidecut_value = sidecut_radius.split("/")
                                    sidecut_value = sidecut_value[0]
                                }

                                else
                                {
                                    sidecut_value = data[i].fields['Sidecut Radius (m)']
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
                                "Price": data[i].fields.Pricing || '$0',
                                "img": data[i].fields.Image[0].url || "https://spotlexdigital.com/compare/product-1.jpg",
                                "outline" : data[i].fields.Outline_copy[0]["url"],
                                "outline-img" : data[i].fields.Outline[0]["url"],
                                "size" : size || 0,
                                "EffectiveEdge" : data[i].fields['Effective Edge (mm)'] || 0,
                                "TipWidth" : data[i].fields['Tip Width (mm)'] || 0,
                                "WaistWidth" : data[i].fields['Waist Width (mm)'] || 0,
                                "line" : productline,
                                "taper" : parseInt(data[i].fields['Tip Width (mm)']) - parseInt(data[i].fields['Tail Width (mm)']) || 0,
                                "Sidecut radius" : sidecut_value || 0,
                                "Sidecut radius name" : sidecut_radius,
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