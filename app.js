
function mostrarBotonCopiar(mostrar) {
    const botonCopiar = document.querySelector('.bt-copiar');
    if (mostrar) {
        botonCopiar.style.display = 'flex';
    } else {
        botonCopiar.style.display = 'none';
    }
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar() {

    let texto = document.getElementById('texto').value;
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    



    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;

    } 

        mostrarTextoEncriptado(textoEncriptado);
        mostrarBotonCopiar(true);
}

function desencriptar() {
    let texto = document.getElementById('texto').value;
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    
     if (!validarTexto(texto)) {
         alert("Solo se permiten letras minúsculas y sin acentos.");
         return;
      }
                                  
    
    mostrarTextoEncriptado(textoDesencriptado);
    mostrarBotonCopiar(true);
}

function mostrarTextoEncriptado(texto) {
    const textoEncriptadoDiv = document.getElementById('textoencriptado');
    textoEncriptadoDiv.innerHTML = `<p>${texto}</p>`;
}


function copiar() {
    const texto = document.getElementById('textoencriptado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    mostrarBotonCopiar(false);
});


    