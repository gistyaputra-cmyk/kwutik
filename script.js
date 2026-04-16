let selectedProduct="";
let selectedPrice=0;

function showSection(id){
document.getElementById("about").style.display="none";
document.getElementById("market").style.display="none";
document.getElementById(id).style.display="block";
}

function logout(){
window.location.href="index.html";
}

function goJual(){
window.location.href="jual.html";
}

let products=[
["Ebook Premium",50000],
["Template Website",100000],
["Aplikasi Kasir",150000],
["Desain Logo",80000],
["Preset Foto",60000],
["Script Bot",90000],
["UI Kit",120000],
["Game Assets",110000],
["Font Premium",40000],
["Ebook Bisnis",75000],
["Video Editing Pack",95000],
["Music Pack",70000],
["Icon Set",30000],
["Template Capcut premium",85000],
["AI Tools Bundle",200000]
];

let list=document.getElementById("productList");

if(list){
products.forEach(p=>{
let div=document.createElement("div");
div.className="product";
div.innerHTML=`<p>${p[0]}</p><small>Rp${p[1]}</small>`;
div.onclick=function(){showProduct(p[0],p[1]);};
list.appendChild(div);
});
}

function showProduct(n,p){
selectedProduct=n;
selectedPrice=p;

document.getElementById("popup").style.display="flex";
document.getElementById("productName").innerText=n;
document.getElementById("price").innerText="Rp"+p;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function beli(){
window.open("https://wa.me/6285708829924?text=Saya ingin membeli "+selectedProduct);
}

