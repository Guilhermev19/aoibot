module.exports = (client) => {
  client.variables(
    {
      prefix: ".",
      corEmbed: "#FFFFFF",
      corErro: "#FF0000",
      corSucesso: "#00FF00",
      pronome: false,
      registro: false,
      registroIds: [],
      banido: false,
      banidoIds: [],
      blackList: 0,
      saldo: 0,
      banco: 0,
    },"main"
  );
};
