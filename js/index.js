const app_nav=document.querySelector("#MainNav")
const app_header=document.querySelector("#siteheader")
const app_f=document.querySelector("#pagefooter")
const app =document.querySelector("#card_title")
const app_totalPrice =document.querySelector("#ShowTotalPrice")
const app_totalProduct =document.querySelector("#ShowTotalProduct")
const app_test =document.querySelector("#aaa")
const byid=document.getElementById
var totatlprice =0;

app_nav.innerHTML=`
<nav   class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mhd Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link active" aria-current="page" href="ProductsPage.html">Add Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              shop
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">My shopping</a></li>
              <li><a class="dropdown-item" href="#">Recently Viewed</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Witchlist</a></li>
            </ul>
          </li>

        </ul>

        <form class="d-flex ">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"> </i>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
`;

app_header.innerHTML=`
<header class="bg-black py-0 ">

    <div class="container px-4 px-lg-5 my-">
      <div class="text-center text-white">

        <h1 class="display-4 fw-bolder">
          Shop in Mhd Store
        </h1>
        <p class="lead fw-normal text-white-50 mb-0">
          Everything in one place
        </p>
      </div>
    </div>
  </header>
  `;
   

if (typeof  getstorage("products") !== 'undefined' && getstorage("products") !== null) {
let cardno=0 ;
    const prods=getstorage("products") ;
    prods.forEach(function (item) { 
      cardno+=1;
    app.innerHTML+=`
    <div class="col mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="images/image1.jpeg" alt="error">
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class=" fw-bolder" >
              ${item.productName}   ${item.description}
          </h5>
          ${item.price} $
        </div>
        <div class="card-footer p-4 pt-4 border-top-0 bg-transparent ">
          <div class="text-center" id="card1">
            <button type="button"  class="btn btn-outline-dark  mt-auto" onClick="price_click(${item.price}) "id="cart-no${cardno}" >
              Add To Cart
            </button>
            
          </div>

        </div>
      </div>

    </div>
  </div>
        `; 
    })

    app_totalProduct.innerHTML=`
    <div >  عدد المنتجات  هو ${cardno}
  </div>
    `       
  } else {
    
    app.innerHTML=`
    <div  > لا يوجد اي منتجات <\div>
    `
  }

  document.querySelector("#searchbtn").addEventListener('click',function()
 {     
 
  if (findProduct(document.getElementById("search").value)){  
     
         
         document.getElementById("msg_bar").innerHTML=`
         <div id="msg_bar" class="container text-center  p-1 w-50 bg-success-subtle  border-1 rounded-4 "> 
         <label class=" fw-bold   py-2 " for= "found1" id="found"> المننج موجود مسبقا </label>
     
       </div>
         `
        
          }else{

            document.getElementById("msg_bar1").innerHTML=`
            <div id="msg_bar" class="container text-center  p-2 w-50 bg-danger-subtle  border-1 rounded-4 "> 
            <label class=" fw-bold   py-2 " for= "found1" id="found"> المنتج غير موجود </label>
        
          </div>
            `
          };   
          setTimeout(() => {
            document.getElementById("msg_bar1").innerHTML=`
            <div class ="visually-hidden"> </div>
            `;
            
            }, 3000);
          
}
)

   
  app_f.innerHTML=`
    <span class="text-light bg-secondary  d-flex justify-content-center p-3"> Mohammed Yaseen</span>
    `;


  //  ------------------------------------------
  function price_click(clicked_object)
{

  totatlprice+=+clicked_object;

  app_totalPrice.innerHTML=`
  <div >  السعر الاجمالي للمنتجات هو ${totatlprice} $ </div>
  `
}
   
    
 





 