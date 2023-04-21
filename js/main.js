// slideShow
var myIndex = 0;
carousel();
function carousel() {
var i;
var x = document.getElementsByClassName("my-slide");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 5000); 
} 
// context
let h= Math.floor(Math.random() * 3);
let m= Math.floor(Math.random() * 60);
let s =Math.floor(Math.random() * 60);

let run = setInterval(()=>{
s--
if (s === -1){
    m--;
    s=59;
} 
if (m === -1){
    h -= 1;
    m = 59;
}
if (h === -1){
    h=0;
    m=0;
    s=0
}

document.getElementById('h').innerText = "0" + h.toString();
document.getElementById('m').innerText = m.toString();
document.getElementById('s').innerText = s.toString();
if(m<10){
    document.getElementById('m').innerText = "0" + m.toString();
}
if(s<10){
    document.getElementById('s').innerText = "0" + s.toString();
}


}, 1000 )

// product
let product=[
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
       
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
    {
        name:'Apple iPhone 14 Pro Max',
        price:'27.490.000 ₫',
        img:'https://salt.tikicdn.com/cache/750x750/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp'
        
    },
]

let productHtml = '';   
product.forEach(product => {
    productHtml += '<a hf="" class="product">';
    productHtml += '<img class="img-product" src="' + product.img + '">';
    productHtml += '<div class="content-product">'
    productHtml += '<div class="tittle">' + product.name + '</div>';
    productHtml += '<div class="price-product">' + product.price + '</div>';
    productHtml += '</div>'
    productHtml += '</a>';
});

document.getElementById('product-container').innerHTML = productHtml;
// modal-login
var modal =document.getElementById('login-modal')
var btn = document.getElementById('close')
function MyLogin(){
    modal.style.display="block";
}
btn.onclick= () =>{
  modal.style.display = "none";
}
window.onclick = (event) =>{
    if (event.target == modal){
        modal.style.display="none";
    }
}
