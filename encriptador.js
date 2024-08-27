

const btnEncriptar = document.querySelector(".boton__encriptar");
const btnDesencriptar = document.querySelector(".boton__desencriptar");
const txtEncriptar =document.querySelector(".area__texto");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta__contenedor");
const btnCopiar = document.querySelector(".boton__copiar");


btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto=txtEncriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if (texto==""){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "El campo de texto esta vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if(texto !== txt){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "No debe tener acentos o caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "El texto debe estar en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";


    }
})
 
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto=txtEncriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if (texto==""){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "El campo de texto esta vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if(texto !== txt){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "No debe tener acentos o caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "red";
        aviso.style.fontWeight ="800";
        aviso.textContent = "El texto debe estar en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";
    }
})


btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});