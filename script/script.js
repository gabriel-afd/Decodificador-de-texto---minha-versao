const entradaTexto = document.getElementById('entradaTexto');
const criptografarBtn = document.getElementById('criptografarBtn');
const descriptografarBtn = document.getElementById('descriptografarBtn');
const copiarBtn = document.getElementById('copiarBtn');
const msg__Final = document.getElementById('msg__Final');
const imagem = document.getElementById('imagem');
const info_direita = document.getElementById('info_direita');
const direita = document.getElementById('direita');

//e - enter
//o - ober 
//i - imes
//a - ai
//u - ufat

let arraySubstituir = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"]
    ]


const mudaValor = (novoValor) => {
    imagem.classList.add('oculto');
    msg__Final.innerHTML = novoValor;
    info_direita.style.display = 'none';
    copiarBtn.style.display = 'block';
} 


const reset = () => {
    msg__Final.innerHTML = '';
    imagem.classList.remove('oculto');
    info_direita.style.display = 'block';
    copiarBtn.style.display = 'none';
    entradaTexto.focus()
}

criptografarBtn.addEventListener('click', ()=>{
    const texto = entradaTexto.value.toLowerCase();

    if (texto != ""){
        function codificar(textoRecebido){
            for(i=0; i < arraySubstituir.length; i++){
                if(textoRecebido.includes(arraySubstituir[i][0])){
                    textoRecebido = textoRecebido.replaceAll(arraySubstituir[i][0],arraySubstituir[i][1]);
                }
            };

            return textoRecebido
        }
    } else {
        return
    }

    mudaValor(codificar(texto));

    
})


descriptografarBtn.addEventListener('click', ()=>{
    const texto = entradaTexto.value.toLowerCase();

    if (texto != ""){
        function descodificar(textoRecebido){
            for(i=0; i < arraySubstituir.length; i++){
                if(textoRecebido.includes(arraySubstituir[i][1])){
                    textoRecebido = textoRecebido.replaceAll(arraySubstituir[i][1],arraySubstituir[i][0]);
                }
            };

            return textoRecebido
        }
    } else {
        return
    }

    mudaValor(descodificar(texto));

    
})

copiarBtn.addEventListener('click', ()=>{
    let texto = msg__Final; 
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado!")

    reset();
})





