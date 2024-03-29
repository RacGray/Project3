const apiBaseURL = "http://localhost:9001/"
export function getAllProductAPI(){
    return fetch(apiBaseURL+"products",{
        method:"GET",
        mode:"cors"
    });
}
export function postSomeProduct(){
    return fetch(apiBaseURL+"products",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({productID:"", productName:"", price:"", sellerName:""})
    })
}