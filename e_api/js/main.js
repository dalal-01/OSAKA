var products=document.getElementById("products");
var data;
async function getproducts(){
  var response=await fetch('https://fakestoreapi.com/products');
   data=await response.json();
  console.log(data);
  displaydata();
}
function displaydata(){
    
    var result='';
    for(var i=0;i<data.length;i++){
  result+=`
  <div class="col-md-4">
  <div class="card" style="width: 18rem;">
  <img src="${data[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].title}</h5>
    <p class="card-text">${data[i].price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>    
  </div>
   
    `;
    }
    document.getElementById("products").innerHTML=result;
}
getproducts();
