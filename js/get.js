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
  var info=store.getAll();
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
var parent=document.querySelector(".prt");
function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var img=document.createElement("img");
    img.src="images/user1.svg";
    img.alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name;
    var birthdate=document.createElement("h2");
    birthdate.textContent=d[i].birthdate;
    var mobile=document.createElement("h3");
    mobile.textContent=d[i].mobile;
    var email=document.createElement("h4");
    email.textContent=d[i].email;
    var address=document.createElement("h5");
    address.textContent=d[i].address;
  //  child.append(img);
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="view profile";
    child.append(img);
  //  var head=document.createElement("h3");
  //  head.innerHTML=d[i].name;
    child.append(name);
    child.append(birthdate);
    child.append(mobile);
    child.append(email);
    child.append(address);
    child.append(link);
    parent.append(child);

  }
}
