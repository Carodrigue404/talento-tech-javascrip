const v1= "tio ben"
const v2= "recuerda la sigiente"
const v3= "un gran poder requiere una gran responsabilidad"
const v4= "ten ciudado con el duende verde"

const spiderman=()=>{
    if(peligro == true){
        return `como decia el ${v1} ${v2} ${v3}`;
    }else{
        return `como decia el ${v1} ${v4}`;
    }
};
//etiqueta de titulo
const titulo = document.createElement("h1");
titulo.textContent ="hola me llamo spiderman";
document.body.appendChild(titulo);
//crear boton desde javascrip
const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText="peligro";
boton2.innerText="no peligro";

document.body.appendChild(boton);
document.body.appendChild(boton2);

//eventos en javascript con botones
//window.location.href="index.html"; se utilisa para crear un html dentro de un html
boton.addEventListener("click",()=>{
    peligro= false;
    recordando= spiderman(peligro);
    window.location.href="index.html";
    document.body.innerHTML=`
    <h1>${recordando}</h1>
    <button id = 'boton'><a href='idex.html'>volver</a></button>
    `;
});
boton2.addEventListener("click",()=>{
    no-peligro = false;
    recordando= spiderman(no-peligro);
    window.location.href="index.html";
    document.body.innerHTML=`
    <h1>${recordando}</h1>
    <button id = 'boton2'><a href='idex.html'>volver</a></button>
    `;
});
