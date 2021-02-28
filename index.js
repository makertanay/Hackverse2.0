var txt=document.getElementById("text");
var cnt=document.getElementById("cont")
txt.addEventListener('animationend',fntxt);

function fntxt()
{
  txt.style.opacity=100;
  txt.style.top=0;
  cnt.style.display="block";
}

