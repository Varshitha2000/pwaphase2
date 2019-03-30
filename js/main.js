function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var birthdate=document.querySelector("#birthdate").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var insti=document.querySelector("#insti").value;
  var branch=document.querySelector("#branch").value;
  var gyop=document.querySelector("#gyop").value;
  var gpercent=document.querySelector("#gpercent").value;
var iinsti=document.querySelector("#iinsti").value;
var ibranch=document.querySelector("#ibranch").value;
var iyop=document.querySelector("#iyop").value;
var ipercent=document.querySelector("#ipercent").value;
var sinsti=document.querySelector("#sinsti").value;
var sbranch=document.querySelector("#sbranch").value;
var syop=document.querySelector("#syop").value;
var spercent=document.querySelector("#spercent").value;
var skills=document.querySelector("#skills").value;
//indexDB implementation
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
  store.put({
    career:career,
    name:name,
    birthdate:birthdate,
    mobile:mobile,
    email:email,
    address:address,
    education:[
      {
      institute:insti,
      branch:branch,
      yop:gyop,
      percent:gpercent
    },
    {
    institute:iinsti,
    branch:ibranch,
    yop:iyop,
    percent:ipercent
  },
  {
  institute:sinsti,
  branch:sbranch,
  yop:syop,
  percent:spercent
}
],

    skills:skills,

  });
}


window.open("index.html");
}
