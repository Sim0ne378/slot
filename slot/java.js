var a = window.prompt("Introdu suma");
a = Number(a);
var s=0;
function generareMatrice() {
  s=0;
  document.getElementById("credit").innerHTML = "Credit: " + a;
  var matrice = [];
  var linii = 4;
  var coloane = 5;
  var simboluri = ["romania.jpg", "uk.jpg", "us.jpg", "italia.jpg", "spania.jpg", "franta.jpg", "suedia.jpg", "germania.jpg", "rusia.jpg", "japonia.jpg"];
  var index = 0;
  var jackpot = simboluri.indexOf("rusia.jpg");
  jackpot = Number(jackpot) + 1;
  jackpot = jackpot * 50;
  var slab1 = simboluri.indexOf("uk.jpg");
  slab1 = Number(slab1) - 3;
  slab1 = slab1 * 6;
  var slab2 = simboluri.indexOf("japonia.jpg");
  slab2 = Number(slab2) - 8;
  slab2 = slab2 / 2;
  var normal1 = simboluri.indexOf("spania.jpg");
  normal1 = Number(normal1);
  normal1 = normal1 * 2;
  var normal2 = simboluri.indexOf("uk.jpg");
  normal2 = Number(normal2) - 1;
  normal2 = normal2 * 1;
  var normal3 = simboluri.indexOf("us.jpg");
  normal3 = Number(normal3) - 5;
  normal3 = normal3 * 3;
  var bun3 = simboluri.indexOf("italia.jpg");
  bun3 = Number(bun3) - 4;
  bun3 = bun3 * 5;
  var bun1 = simboluri.indexOf("germania.jpg");
  bun1 = Number(bun1) - 6;
  bun1 = bun1 * 10;
  var normal5 = simboluri.indexOf("franta.jpg");
  normal5 = Number(normal5) - 7;
  normal5 = normal5 * 4;
  var bun2 = simboluri.indexOf("romania.jpg");
  bun2 = Number(bun2) - 2;
  bun2 = bun2 * 20;
  var castiguri = [2500, 4, 2, 100, 10, 25, 15, 50, 20, 5];
  var miza = document.getElementById("miza1").value;
  miza = Number(miza);
  a = (a - miza + s).toFixed(1);
  a = Number(a);
  if (a > 0) {
  
  
    var z = Math.floor(Math.random() * 100) + 1;
    console.log(z);
    if (z >60) 
    {  var rezultatElement = document.getElementById("rezultat");
    rezultatElement.innerHTML = "";
    var table = document.createElement("table");
      for (var i = 0; i < linii; i++) {
      matrice[i] = [];
      var row = document.createElement("tr");
      var numereEgale = {};
      var suma = 0;
      for (var j = 0; j < coloane; j++) {
        index = Math.floor(Math.random() * simboluri.length);
        matrice[i][j] = simboluri[index];
        var cell = document.createElement("td");
        var img = document.createElement("img");
        img.src = simboluri[index];
        var numar =castiguri[index];
        matrice[i][j]=numar;
        cell.appendChild(img);
        row.appendChild(cell);
        
        if (index >= simboluri.length) {
          index = 0;
      }}
      table.appendChild(row);
    }
      console.log(matrice);
    } else {
      var rezultatElement = document.getElementById("rezultat");
      rezultatElement.innerHTML = "";
      var table = document.createElement("table");
      for (var i = 0; i < linii; i++) {
        matrice[i] = [];
        var row = document.createElement("tr");
        var numereEgale = {};
        var suma = 0;
        for (var j = 0; j < coloane; j++) {
        
          var cell = document.createElement("td");
          var img = document.createElement("img");
          var numar;
          do {
            index = Math.floor(Math.random() * simboluri.length);
          } while (j > 0 && index === matrice[i][j - 1]);
          matrice[i][j] = simboluri[index];
          img.src = simboluri[index];
          matrice[i][j] = castiguri[index];
           numar =index;
          matrice[i][j]=numar;
          cell.appendChild(img);
          row.appendChild(cell);
          if (index >= simboluri.length) {
            index = 0;
          }
        } table.appendChild(row);
      }
    }
  
    console.log(matrice);
  
    for (var i = 0; i < linii; i++) {
      for (var j = 0; j < coloane; j++) {
        if (numereEgale[numar]) {
          numereEgale[numar]++;
        } else {
          numereEgale[numar] = 1;
        }
        if (j >= 0 && matrice[i][j] === matrice[i][j + 1] && matrice[i][j] === matrice[i][j + 2] && matrice[i][j] === matrice[i][j + 3] && matrice[i][j] === matrice[i][j + 4]) {
          suma += matrice[i][j] * 5;
          break;
        } else if (j >= 0 && matrice[i][j] === matrice[i][j + 1] && matrice[i][j] === matrice[i][j + 2] && matrice[i][j] === matrice[i][j + 3]) {
          suma += matrice[i][j] * 4;
          break;
        } else if (j >= 0 && matrice[i][j] === matrice[i][j + 1] && matrice[i][j] === matrice[i][j + 2]) {
          suma += matrice[i][j] * 3;
          break;
        }
        console.log(suma);
      }
    }
    
    suma = suma.toFixed(1);
   s = suma * miza;
    s = s.toFixed(1);
    s = Number(s);
    a = a + s;
    rezultatElement.appendChild(table);
    document.getElementById("castig").innerHTML = "Ultimul castig " + s;
    document.getElementById("credit").innerHTML = "Credit: " + a;
    document.getElementById("castig").value = s;
    document.getElementById("credit").value = a;
    rezultatElement.appendChild(table);
    document.getElementById("high").innerHTML="Creditul tau este "+a;
    document.getElementById("numarHidden").value = a;
  } else {
    alert("Mai baga o fisa");
  }
}
function rosie()
{ document.getElementById("rand").innerHTML = " ";
  a=a-s;
  document.getElementById("credit").innerHTML = "Credit: " + a;
  if (s > 0) {
    let b = Math.floor(Math.random() * 70) + 1;
    let c = Math.floor(Math.random() * 100) + 1;
    if (c > b) {
      s = s * 2;
      document.getElementById("castig").value = s;
      document.getElementById("rand").innerHTML += s +" ";
      document.getElementById("castig").innerHTML ="Ultimul castig " + s;
      a = a + s;
      document.getElementById("credit").innerHTML = "Credit: " + a;
      document.getElementById("high").innerHTML="Creditul tau este "+a;
      document.getElementById("numarHidden").value = a;
   
      
    } else {
      document.getElementById("rand").innerHTML = "Era neagra!";
      document.getElementById("castig").value = 0;
      document.getElementById("castig").innerHTML = "Ultimul castig 0";
      s=0;
      document.getElementById("high").innerHTML="Creditul tau este "+a;
      document.getElementById("numarHidden").value = a;
   
    }
  } else if (castig = 0) {
    document.getElementById("credit").innerHTML = "Credit: " + a;
    document.getElementById("high").innerHTML="Creditul tau este "+a;
    document.getElementById("numarHidden").value = a;
   
  }
}
function neagra()
{
  a = a -s;
  document.getElementById("rand").innerHTML = " ";
  document.getElementById("credit").innerHTML = "Credit: " + a;
  if (s > 0) {
    let b = Math.floor(Math.random() * 70) + 1;
    let c = Math.floor(Math.random() * 100) + 1;
    if (c > b) {
      s= s * 2;
      document.getElementById("castig").value = s;
      document.getElementById("rand").innerHTML += s+" ";
      document.getElementById("castig").innerHTML ="Ultimul castig " + s;
      a = a + s;
      document.getElementById("credit").innerHTML = "Credit: " + a;
      document.getElementById("high").innerHTML="Creditul tau este "+a;
      document.getElementById("numarHidden").value = a;
   
     
    } else {
      document.getElementById("rand").innerHTML = "Era rosie!";
      document.getElementById("castig").value = 0;
      document.getElementById("castig").innerHTML ="Ultimul castig 0";
      s=0;
      document.getElementById("high").innerHTML="Creditul tau este "+a;
      document.getElementById("numarHidden").value = a;
   
    }
  } else if (castig = 0) {
    document.getElementById("credit").innerHTML = "Credit: " + a;
    document.getElementById("high").innerHTML="Creditul tau este "+a;
    document.getElementById("numarHidden").value = a;
   
  }

}
function closeCall() {
  call.classList.remove("popup-open");
  

}
function haide(){
  let nume=document.getElementById("nume").value;
  if(!(nume==""||nume==null))
  {
    a=0;
    document.getElementById("credit").innerHTML = "Credit: " + a;


  }
  else{alert("Nu ai scris nume");

  }
}