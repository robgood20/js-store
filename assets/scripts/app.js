var products = [];
var productListElem = document.getElementById('product-list');

function Product(title, price, url, inStock){
 this.title = title;
 this.price = price;
 this.url = url;   
 this.inStock = inStock;
 
 products.push(this);
 
}

var fishingPotty = new Product('The Fishing Potty', 100, 'http://www.stupid.com/thumbnail.asp?file=assets/images/HKLINE_11.jpg&maxx=400&maxy=0', 50);

var baconFrosting = new Product('Bacon Frosting Yum!', 10, 'http://www.stupid.com/thumbnail.asp?file=assets/images/BACFROS_1.jpg&maxx=400&maxy=0', 200);

var poopPen = new Product('My Poopie Friend', 12, 'http://www.stupid.com/thumbnail.asp?file=assets/images/41yvaacarbl_sy355_.jpg&maxx=400&maxy=0', 1200);


for(var i = 0; i < products.length; i++){
    var currentProduct = products[i];
    drawProductOnScreen(currentProduct);    
}


function drawProductOnScreen(currentProduct){
    var productElem = document.createElement('div');
    productElem.style.display = 'inline-block'
    productElem.innerHTML = '<h3>'+ currentProduct.title +'</h3> <p>$'+ currentProduct.price +' plus shipping and handeling</p> <img src="'+currentProduct.url+'" alt=""><button>Buy Now</button>'
    productListElem.appendChild(productElem);    
}