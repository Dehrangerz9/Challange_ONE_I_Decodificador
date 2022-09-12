const inputTexto = document.getElementById("entrada")
const saidaTexto = document.querySelector("#saida")


function btnEncriptar(){
    document.getElementsByClassName('sem-mensagem')[0].style.display = "none"
    document.getElementsByClassName("copiar")[0].style.display = "inline-block"
   document.getElementsByClassName("com-mensagem")[0].style.display = "inline-block"
    const textoEncriptado = encriptar(inputTexto.value)
    saidaTexto.value = textoEncriptado

}

function btnDescriptar(){
    document.getElementsByClassName('sem-mensagem')[0].style.display = "none"
    document.getElementsByClassName("copiar")[0].style.display = "inline-block"
    document.getElementsByClassName("com-mensagem")[0].style.display = "inline-block"
    const textoDescriptado = descriptar(inputTexto.value)
    saidaTexto.value = textoDescriptado


}

function btnCopiar(){
    saidaTexto.select();
    saidaTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(saidaTexto.value)
    saidaTexto.value = ''
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


function descriptar(stringDescriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDescriptada = stringDescriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDescriptada;
}
