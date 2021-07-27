const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Util } = require('discord.js');



const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === config.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login("TOKEN");
client.on('message', msg => {
   if(msg.content.includes("start"))
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   message.channel.bulkDelete(99);
   return message.channel.send("mesaj falan kalmadi birader")
});