
  function atualizarMensagem() {
        const origemSelecionada = document.getElementById('origem').value;
        const destinoSelecionado = document.getElementById('destino').value;
        const mensagem = `Você escolheu viajar de ${origemSelecionada} para ${destinoSelecionado}.`;
        document.getElementById('mensagem').textContent = mensagem;
    }

    // Adicione um ouvinte de eventos para os elementos select
    document.getElementById('origem').addEventListener('change', atualizarMensagem);
    document.getElementById('destino').addEventListener('change', atualizarMensagem);

  $(document).ready(function () {
    // Inicialmente, oculte os seletores
    $("#seletoresDiv").hide();

    // Quando a div "viajantes" é clicada
    $("#viajantesDiv").click(function () {
      // Exiba os seletores
      $("#seletoresDiv").show();
    });

    // Atualize o texto quando os valores dos seletores forem alterados
    $("#numQuartos, #numViajantes").on("input", function () {
      var quartos = $("#numQuartos").val();
      var viajantes = $("#numViajantes").val();

      // Atualize o texto na div de viajantes
      $("#quartos").text(quartos);
      $("#viajantes").text(viajantes);
    });
  });