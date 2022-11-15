let lista = ["Uova", "Latte", "Cereali", "Carne", "Pizza", "Pane", "Sdrogo"];

/*let i = 0;

while(i < lista.length){
    console.log(lista[i]);
    i++
}*/

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
    document.getElementById("listaStamp").innerHTML += '<li id = "elementoL">'+ lista[i] +'</li>';

}
