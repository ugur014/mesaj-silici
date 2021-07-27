const Discord = require('discord.js');
const config = require("../config.json");
exports.run = async (client, message, args) => {

message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
message.channel.bulkDelete(99);
return message.channel.send("mesaj falan kalmadi birader")
};
exports.conf = {
    name: "start",
    description: "",
    aliases: ["clear", "temizle"]
  }