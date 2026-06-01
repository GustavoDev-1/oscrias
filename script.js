document.getElementById('formAmistoso').addEventListener('submit', function(e) {
    e.preventDefault();

    const timeInimigo = document.getElementById('nomeTime').value;
    const data = document.getElementById('dataJogo').value;
    const hora = document.getElementById('horaJogo').value;
    const modalidade = document.getElementById('tipoJogo').value;
    const arena = document.getElementById('localJogo').value;

    const meuZap = "558481938169";

   
    const mensagemTexto = `🔥 NOVO AMISTOSO SOLICITADO 🔥\n\n` +
                          `⚽ Adversário: ${timeInimigo}\n` +
                          `📅 Data: ${data}\n` +
                          `⏰ Hora: ${hora}\n` +
                          `🏟️ Tipo: ${modalidade}\n` +
                          `📍 Local: ${arena}\n\n` +
                          `_Aguardo confirmação dos Crias!_`;

    
    const mensagemFinal = encodeURIComponent(mensagemTexto);

    window.open(`https://wa.me/${meuZap}?text=${mensagemFinal}`, '_blank');
});