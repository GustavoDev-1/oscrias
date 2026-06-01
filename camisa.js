function pedir(botao, tipoCamisa) {

  const produto = botao.parentElement;

  const tamanho = produto.querySelector(".tamanho").value;
  const nome = produto.querySelector(".nome").value;
  const numero = produto.querySelector(".numero").value;

  const mensagem = `Quero comprar a ${tipoCamisa} 👕%0A
Tamanho: ${tamanho}%0A
Nome: ${nome}%0A
Número: ${numero}`;

  const telefone = "5584999999999"; // COLOCA TEU NÚMERO

  const url = `https://wa.me/${telefone}?text=${mensagem}`;

  window.open(url, "_blank");
}