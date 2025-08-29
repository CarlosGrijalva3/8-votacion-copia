// referencias al botón y al contador
const btn1 = document.getElementById ('miBtn1');
const const1 = document.getElementById ('conta1');

const btn2 = document.getElementById ('miBtn2');
const const2 = document.getElementById ('conta2');

const btn3 = document.getElementById ('miBtn3');
const const3 = document.getElementById ('conta3');

const btn4 = document.getElementById ('miBtn4');
const const4 = document.getElementById ('conta4');

const btn5 = document.getElementById ('miBtn5');
const const5 = document.getElementById ('conta5');

let itcj=0, tec=0, urn=0, uacj=0, uach=0; //contador

btn1.addEventListener('click', function(){
    itcj++;                     // aumenta el contador
    conta1.textContent = itcj;   // actualiza el número en la página
    btn1.disabled = true;       // desactiva el botón para que no se pueda volver a votar
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn1.textContent = 'votado';// cambia el texto del botón
});

btn2.addEventListener('click', function(){
    tec++;
    conta2.textContent = tec;
    btn2.disabled = true;
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn2.textContent = 'votado';
});

btn3.addEventListener('click', function(){
    urn++;
    conta3.textContent = urn;
    btn3.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn3.textContent = 'votado';
});

btn4.addEventListener('click', function(){
    uacj++;
    conta4.textContent = uacj;
    btn4.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
    btn4.textContent = 'votado';
});

btn5.addEventListener('click', function(){
    uach++;
    conta5.textContent = uach;
    btn5.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.textContent = 'votado';
});

//contador