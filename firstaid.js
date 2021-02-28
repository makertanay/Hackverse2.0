var cnt1=document.getElementById("cont1");
var cnt2=document.getElementById("cont2");
var cnt3=document.getElementById("cont3");
var cnt4=document.getElementById("cont4");
var cnt5=document.getElementById("cont5");
var btt1=document.getElementById("bt1");
var btt2=document.getElementById("bt2");
var btt3=document.getElementById("bt3");
var btt4=document.getElementById("bt4");
var btt5=document.getElementById("bt5");
var bkbt=document.getElementById("bt6");

btt1.onclick= function fn1()
{
  btt2.style.display="none";
  btt3.style.display="none";
  btt4.style.display="none";
  btt5.style.display="none";
  cnt1.style.display="block";
}

btt2.onclick = function fn2()
{
  btt1.style.display="none";
  btt3.style.display="none";
  btt4.style.display="none";
  btt5.style.display="none";
  cnt2.style.display="block";
}

btt3.onclick = function fn3()
{
  btt2.style.display="none";
  btt1.style.display="none";
  btt4.style.display="none";
  btt5.style.display="none";
  cnt3.style.display="block";
}

btt4.onclick = function fn4()
{
  btt2.style.display="none";
  btt3.style.display="none";
  btt1.style.display="none";
  btt5.style.display="none";
  cnt4.style.display="block";
}

btt5.onclick = function fn5()
{
  btt2.style.display="none";
  btt3.style.display="none";
  btt4.style.display="none";
  btt1.style.display="none";
  cnt5.style.display="block";
}

bkbt.onclick = function fn6()
{
  cnt1.style.display="none";
  cnt2.style.display="none";
  cnt3.style.display="none";
  cnt4.style.display="none";
  cnt5.style.display="none";
  btt1.style.display="block";
  btt2.style.display="block";
  btt3.style.display="block";
  btt4.style.display="block";
  btt5.style.display="block";
}