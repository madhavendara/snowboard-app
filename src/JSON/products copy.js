export default class Product {
    static getProduct =  () =>{
        return new Promise(async (resolve, reject)=>{
            await fetch("http://extropysystems.com/public/airtable/api/list.php", {
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
                                "Title": data[i].fields.SKU,
                                "type": "small",
                                "stars": 4,
                                "Price": "$0",
                                "img": data[i].fields.Image[0] || "https://spotlexdigital.com/compare/product-1.jpg"
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