console.log('Javascript is running!');
let inputan = []; //ini nanti buat menampung inputan dari user
const tabeloutput = document.getElementById("table-output");

function AddTask() {
    const todoinput = document.getElementById("todo");
    const tanggalinput = document.getElementById("tngl");
    console.log("Adding task:", todoinput.value, "Due Date:", tanggalinput.value);

    if (todoinput.value === "" || tanggalinput.value===""){
        alert("Please fill in both task and due date.") //misal ada yg gak keisi, nanti dikasih warning
    } else {

        inputan.push(todoinput.value); //masukkin inputan task ke list inputan
        inputan.push(tanggalinput.value); //masukkin inputan tanggalan ke list inputan

        todoinput.value = ''; //kosongin value todoinput
        tanggalinput.value=''; //kosongin value tanggalinput

        DisplayTask();

    }
}

function DisplayTask() {
 
    var tableContent = '<tr>'; // coding buat nambah baris baru di table output
    
    //isian dari inputan dimasukkin satu-satu ke dalam tabel berdasarkan urutan kolom
    for (let index = 0; index < inputan.length; index++) {
        tableContent += "<td>" + inputan[index] + "</td>";
    } 

    //nambahin checkbox juga utk kolom status sekalian selesain codingan untuk bikin 1 row baru di tabel output
    tableContent += '<td><input type="checkbox" id="cekboks"><td>' + '</tr><tr>';
    
    //habis itu masukkin codingannya ke tabel
    tabeloutput.innerHTML += tableContent
    
     //kosongin list buat input yg baru lagi
    inputan = [];
}

function DeleteAllTask() {

    //hapusnya pakai looping per column dihilangin
    for(let i = tabeloutput.rows.length - 1; i > 0; i--){
        tabeloutput.deleteRow(i);
    }
}

function FilterTask() {
    
}