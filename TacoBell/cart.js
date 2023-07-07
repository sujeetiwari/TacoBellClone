const product=[
    {
        id:0,
        image:'image/Meals-n.jpg',
        title:'Meals',
        price:120,
    },
    {
        id:1,
        image:'image/Quessadilla-n.jpg',
        title:'Quessadilla',
        price:230,
    },
    {
        id:2,
        image:'image/Sides-n.jpg',
        title:'Sides',
        price:130,
    },
    {
        id:3,
        image:'image/Shareables-n.jpg',
        title:'Shareables',
        price:140,
    },
    {
        id:4,
        image:'image/Tacos-n.jpeg',
        title:'Tacos',
        price:210,
    },
    {
        id:5,
        image:'image/Specialties-n.jpg',
        title:'Specialists',
        price:190,
    },
    {
        id:6,
        image:'image/Best-of-Bell-n.jpg',
        title:'Best of Bell',
        price:340,
    },
    {
        id:7,
        image:'image/Burritos-n.jpg',
        title:'Burritos',
        price:240,
    },
    {
        id:8,
        image:'image/Desserts-n.jpg',
        title:'Desserts',
        price:190,
    },
];

const categories=[...new Set(product.map((item)=>
  {return item}))]
  let i=0;
  document.getElementById('rootTacoBell').innerHTML=categories.map((item)=>
  {
    var{image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class="bottom">
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
  }).join('')

  var cart=[];
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }
  function delElement(a){
   cart.splice(a,1);
    displaycart();
  }

  function displaycart(){
    let j=0 ,total=0;
    document.getElementById("count").innerHTML=cart.length
    if(cart.length==0){
        document.getElementById('cartItemTaco').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$"+0+".00";
    }
    else{
        document.getElementById("cartItemTaco").innerHTML=cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-itemTaco'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p >${title}</p>
                <h2 style='font-size:15px;'> $ ${price}.00</h2>`+
                "<i class='fa fa-trash-o' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
  }
 
