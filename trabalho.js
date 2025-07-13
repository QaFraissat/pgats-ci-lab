
  function geradorDeTagsDeIdentificacao (nome) {
    return nome.toUpperCase();
  }


  function verificarSePodeSerAdotado (idade, porte) {
    if (idade === 1 && porte === 'M') {
        return true;
    }
    return false;
  }


  function calcularConsumoDeRacao (nome, idade, peso) {
    return peso * 300;
  }


  function decidirTipoDeAtividadePorPorte (porte) {
    let atividade;

     switch (porte.toLowerCase()) {
    case "pequeno":
        atividade = "brincar dentro de casa";
    break
    case "médio":
        atividade = "caminhada no quarteirão";
    break
    case "grande":
        atividade = "correr no parque";
    break
    default:
       atividade = "porte inválido!";
}
     return atividade;
  }


  async function buscarDadoAsync () {
    return 'Pipoca';
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}

