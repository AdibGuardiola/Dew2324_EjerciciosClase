var arrayData= new Array();
var archivoTxt= new XMLHttpRequest();
var fileRuta= "datos_1.txt";
archivoTxt.open("get",fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
for (var i = 0 ; i< txt.length ;i++){
    arrayData.push(txt[i]);

}

arrayData.forEach(function(data){

console.log(data);


})