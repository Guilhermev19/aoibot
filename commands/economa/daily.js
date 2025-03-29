module.exports = {
    name: "daily",
    code: `
    $title[Bônus Diário]
    $description[Parabéns, você recebeu $random[100;500] cifras!]
    $addField[Saldo; $getGlobalUserVar[saldo;$authorID] cifras]
    $color[$getVar[corSucesso]]

    $setGlobalUserVar[saldo;$sum[$getGlobalUserVar[saldo;$authorID];$random[100;500]];$authorID]
    `
}