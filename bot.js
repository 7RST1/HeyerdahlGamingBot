const Discord = require('discord.js');
const client = new Discord.Client();

// JSON-fil med nøkkel fra Discord Developer Portal.
var auth = require('./auth.json');

var prefix = ".!";

// Når botten er koblet til serveren
client.on('ready', async () => {
    try {
        throw new Error('Omg');
    } catch (e) {
        console.log(`Logged in as ${client.user.tag}!`);
        setInterval(intervalFunc, 20000);
        client.user.setPresence({ activity: { name: `spill` }, status: 'available' })
            .catch(console.error);
    }
});

// Når noen sender melding
client.on('message', msg => {
    // Avbryt med mindre meldingen starter med prefix og ikke er fra botten selv
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    // Argumenter etter selve kommandoen
    const args = msg.content.slice(prefix.length).split(' ');
    // Selve kommandoen
    const command = args.shift().toLowerCase();
    
    /* Eksempel på en kommando
    if (command === `setchannel` && msg.member.roles.cache.some(role => role.name === 'admin')) {
        console.log(msg.channel.id)
        const setchannel = msg.channel;
        if (!args[0]) {
            msg.channel.send("Du må med et argument");
        } else {
            msg.reply(`Dette er argumentet: ${args[0]}!`);
        };

    } */
})

// Direkte melding fra botten til nye medlemmer
client.on('guildMemberAdd', member => {
    member.send("Hei! Jeg er botten for HeyerdahlGaming! INFO");
});

client.login(auth.token);
