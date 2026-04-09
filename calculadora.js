//entrada
function calcular(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
//processamento   
    let IMC = peso / (altura * altura);

    if (IMC < 18.5){
        classi = ": abaixo do peso";
    }
    else if(IMC <= 24.9){
        classi= ": peso normal";
    }
    else if(IMC <= 29.9){
        classi = ": sobrepeso";
    }
    else if(IMC <= 34.9){
        classi = ": obesidade nivel 1";
    }
    else if(IMC <= 39.9){
        classi = ": obesidade nivel 2";
    }
    else if(IMC >= 40.0){
        classi = ": obesidade nivel 3";
    }

//saida
    document.getElementById("IMC").innerHTML = "seu IMC é: " + IMC.toFixed(1) + "<br> classificação " + classi;
} 
