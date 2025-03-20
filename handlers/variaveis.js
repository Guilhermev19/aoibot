module.exports = (client) => {
    client.variables({
        prefix: "!",
        corEmbed: "#FF0000",
        corErro: "#FF0000",
        corSucesso: "#00FF00",
        pronome: false,
        registro: {},
}, "main");

client.variables({
    saldo: 0,
    banco: 0,
    enviados: 0,
    recebidos: 0,
    roubados: 0,
    crimeSuccess: 0,
    crimeFail: 0,
}, "economia");
}