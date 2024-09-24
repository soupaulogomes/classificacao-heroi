function classificarHeroi(nome, xp) {
    let nivel = "";
    
    // Lógica de classificação
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else if (xp >= 10001) {
      nivel = "Radiante";
    }
    
    // Retornar a mensagem final
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
  }

  // Adicionar evento ao formulário para capturar os dados
  document.getElementById("formularioHeroi").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o recarregamento da página

    // Capturar os valores inseridos pelo usuário
    let nome = document.getElementById("nome").value;
    let xp = parseInt(document.getElementById("xp").value);

    // Classificar o herói e exibir o resultado
    let resultado = classificarHeroi(nome, xp);
    document.getElementById("resultado").textContent = resultado;
  });