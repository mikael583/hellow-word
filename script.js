function copiarTexto(id) {
 
    const elemento = document.getElementById(id);
    
    const texto = elemento.innerText;
    
    navigator.clipboard.writeText(texto).then(function() {

        alert('Copiado: ' + texto);
    }).catch(function(err) {

        console.error('Erro ao copiar: ', err);

        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copiado: ' + texto);
    });
}