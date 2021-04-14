exports.execute = async (client, message, args) => {
    let users = [
        
        "Doreamon's Pocket",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 20) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}**  You found **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}
