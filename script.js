const textArea1 = document.getElementById("text_encriptar");
const mensaje = document.getElementById("text_encriptado");
const button = document.querySelector("button");

function onlyContainsLowerCase(str) {
    return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(str);
}
function encriptar() {
    const chars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    if (onlyContainsLowerCase(textArea1.value)) {
        let encriptedText = textArea1.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block",
        mensaje.textContent = encriptedText;
    } else {
        alert("Recuerde, sólo letras minúsculas y sin acentos");
    }
}

function desencriptar() {
    const chars = {
        "ai": "i",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }
    if (onlyContainsLowerCase(textArea1.value)) {
        let desencriptedText = textArea1.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        mensaje.textContent = desencriptedText;
    } else {
        alert("Recuerde, sólo letras minúsculas y sin acentos");
    }
}
function copy() {
    let copyText = mensaje.innerText;
    navigator.clipboard.writeText(copyText);
}
