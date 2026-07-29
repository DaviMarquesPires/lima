const paragrafo = document.querySelector("#paragrafo");
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    paragrafo.innerHTML = "Outra frase que eu queira colocar!"
});