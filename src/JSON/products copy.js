import productline from "../assest/product-line-1.svg";

export class Product {
    static getProduct =  () =>{
        return new Promise(async (resolve, reject)=>{
            await fetch("https://shredmetrix.com/airtable/api/list.php", {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
            }).then(response => response.json())
                .then(response => {

                    var data = response.records || '';
                    var products = [];
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            products.push({
                                "id": data[i].id || '',
                                "ref": data[i].id || '',
                                "Title": data[i].fields.SKU || '',
                                "type": data[i].fields.Width,
                                "stars": 4,
                                "Price": data[i].fields.Pricing || '$0',
                                "img": data[i].fields.Image[0] || "https://spotlexdigital.com/compare/product-1.jpg",
                                "outline" : data[i].fields.Outline[0]["url"],
                                "size" : data[i].fields['Size (cm)'] || 0,
                                "EffectiveEdge" : data[i].fields['Effective Edge (mm)'] || 0,
                                "TipWidth" : data[i].fields['Tip Width (mm)'] || 0,
                                "WaistWidth" : data[i].fields['Waist Width (mm)'] || 0,
                                "line" : productline,
                                "taper" : data[i].fields['Taper (mm)'] || 0,
                                "Sidecut radius" : data[i].fields['Sidecut Radius (m)'] || 0,
                                "Stance Setback" : data[i].fields['Stance Setback Clean (mm)'] || 0
                            });
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