module.exports = {
    name: "saldo",
    aliases: ["atm", "bal"],
    code: `
$description[
<@$authorID>, $if[$get[user]==$authorID;Você;O usuário <@$get[user]>] possui **$getGlobalUserVar[saldo;$get[user]]** bugs.
]
$color[$getGlobalUserVar[corEmbed;$authorID]]

$onlyIf[$isBot[$get[user]]==false;{newEmbed:{description:<@$authorID>, bots não possuem saldo, pois não fazem parte do meu **sistema de economia**! por favor, mencione um usuário.}{color:$getVar[corErro]}} {extraOptions:{reply:$messageID:true}}]

$let[user;$mentioned[1;true]]
$reply
    `
}