// var jcontent ={
//     "firstname":"Kalpana",
//     "nickname":"Kalpi"
// }

var output=document.getElementById('output');
//output.innerHTML = jcontent.response;

var ajaxHttp= new XMLHttpRequest();
var url="script.json";
ajaxHttp.open("GET", url,true);
ajaxHttp.setRequestHeader("content-type","UI-portal/json");
ajaxHttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var jcontent=ajaxHttp;
        console.log(jcontent);
        console.log(ajaxHttp);

    }
}
ajaxHttp.send(null);

//console.log(ajaxHttp);