const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "Njk0MTMxNDA0MzE2OTk5NzIx.XoHKpg.draqcQe9OExHs4gT8X0IIHXqj1c";

const Prefix = "-";

var servers = {};

bot.on("ready", () => {
    console.log("This bot is online!");
})

bot.on("message", message => {
    let args = message.content.substring(Prefix.length).split(" ");


    switch (args[0]) {
        case "ip":
            message.channel.send("the ip to the server will be released when the server is up")
            break;
        case "version":
            message.channel.send("Version 1.0.0");
            break;
        case "youtube":
            message.channel.send("My Youtube channel https://www.youtube.com/channel/UCpXrY41BjegqmYCW_aj7zbw")
            break;
        case "help":
            message.channel.send(`go to the tickets channel if you need help!`)
            break;
    }
});

bot.login(token);
