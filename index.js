
    var v=Math.floor(Math.random()*6)+1;
    var randdice="dice"+v+".png";
    var randsource="images/"+randdice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randsource);
    var v1=Math.floor(Math.random()*6)+1;
    //var randdice="dice"+v1+".png";
    var randsource2="images/dice"+v1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randsource2);
if(v>v1){
    document.querySelector("h1").innerHTML="Shikha wins!"+" 🚩";
}
else if(v1>v){
    document.querySelector("h1").innerHTML="Paki wins! "+" 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw"+" 🥵";
}