const lista = document.getElementById("lista");
let input1 = document.getElementById("input1");


document.getElementById('btn1').onclick = function(){
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(input1.value.toLowerCase()));
    lista.appendChild(item);
    document.getElementById("input1").value = "";
}

document.getElementById('btn2').onclick = function(){
    var item = lista.lastElementChild;
    lista.removeChild(item);
}