import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/287537ceda0321834eb3a353013dd285/api';
let myFetch = {
    get(url,queryParams){
        url = rootUrl + url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams)
        }
       
        return fetch(url)
        .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json())
        
    }
}
export {myFetch};//命名导出