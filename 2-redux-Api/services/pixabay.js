
//* first step build URL
const getData = (searchWord , perPage , pageNum , color)=>{  //!1
    const url = 'https://pixabay.com/api/?' +
     'key=' + '12000491-41fc68d8c365df909e022ceb6' +
     '&q=' + searchWord +
     '&per_page=' + perPage + 
     '&page=' + pageNum +
      '&colors=' + color 

     // fetch  by defaut is GET
     return new Promise((resolve , reject)=>{
         fetch(url).then(response=>{
             if (response.status === 200) {
                 //convert data to obj
                 response.json().then(data=>{
                     resolve(data)
                 }).catch(err =>{
                     reject(err)
                 })
             }else{
                 reject(new Error ('can not get data. Response status is :' + response.status))
             }
         }).catch(err=>{
             reject(err)
         })
     })
}

export default getData