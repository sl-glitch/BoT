exports.execute = async (client, message, args) => {
    let users = [
        "PewDiePie",
        "T-Series",
        "Sans",
        "_PikaChew_"
    ];
    let amount = Math.floor(Math.random() * 50) +10
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`NOPE! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** NOPE! Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "beg",
    aliases: [],
    usage: "beg"
}
