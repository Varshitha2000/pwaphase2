var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexedDB not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storedata",1);
console.log("indexedDB is created");
open.onupgradeneeded=function(e){
   request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(ee){
  console.log("error is created");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    perinfo(data.target.result);
    career(data.target.result);

  }
}
var left=document.querySelector(".left");
function perinfo(pi) {
  var img=document.createElement("img");
  img.src="images/user1.svg";
  img.alt=pi.name;
  left.append(img);
  var name=document.createElement("h3");
  name.textContent=pi.name;
  left.append(name);
  var mobile=document.createElement("h3");
  mobile.textContent=pi.mobile;
  left.append(mobile);
  var email=document.createElement("h3");
  email.textContent=pi.email;
  left.append(email);
  var birthdate=document.createElement("h3");
  birthdate.textContent=pi.birthdate;
  left.append(birthdate);
}
var right=document.querySelector(".right");
function career(c){
  var ca=document.createElement("h1");
  ca.textContent="career_objective";
  right.append(ca);
  var hr=document.createElement("hr");
  right.append(hr);
  var career=document.createElement("h2");
  career.textContent=c.career;
  right.append(career);
  var hh=document.createElement("h1");
  hh.textContent="education details";
  right.append(hh);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>yop</th><th>percent</th></tr>";
  var tr2="";
  for(var i in c.education)
  {
    tr2=tr2+"<tr><td>"+c.education[i].institute+"</td><td>"+c.education[i].branch+"</td><td>"+c.education[i].yop+"</td><td>"+c.education[i].percent+"</td>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
var ski=document.createElement("h1");
ski.textContent="skills";
right.append(ski);
}
