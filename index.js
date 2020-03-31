const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjkyNjU3NDI3MDIzMzk2OTI0.Xnxtmg.I7kyKLNxt65F0EayYyc-FdSJb_M";

const Prefix = "-";

var servers = {};

bot.on("ready", () => {
    console.log("This bot is online!");
})

bot.on("message", message => {
    let args = message.content.substring(Prefix.length).split(" ");


    switch (args[0]) {
        case "clear":
            if (!message.member.roles.find(r => r.name === "Mod")) return message.channel.send("You do not have enough permissions for this command!")
            if (!args[1]) return message.reply("Error please define a second argument")
            message.channel.bulkDelete(args[1]);
            break;
        case "kick":
            if (!message.member.roles.find(r => r.name === "Mod")) return message.channel.send("You do not have enough permissions for this command!")
            if (!args[1]) return message.channel.send("You need to mention the user u wanna kick!")

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick("You breaked the rule so you got kicked and can rejoin at any time!").then(() => {
                        message.reply(`Succesfully kicked ${user.tag}`)
                    }).catch(err => {
                        message.reply("I was unable to kick that member")
                        console.log(err);
                    });
                } else {
                    message.reply("That user isnt in this server!")
                }
            } else {
                message.reply("that user isnt in the server");
            }
            break;
        case "ban":
            if (!message.member.roles.find(r => r.name === "Mod")) return message.channel.send("You do not have enough permissions for this command!")
            if (!args[1]) return message.channel.send("You need to mention the user u wanna ban!")


            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban("You breaked the rule so you got banned!").then(() => {
                        message.reply(`Succesfully banned ${user.tag}`)
                    }).catch(err => {
                        message.reply("I was unable to kick that member")
                        console.log(err);
                    });
                } else {
                    message.reply("That user isnt in this server!")
                }
            } else {
                message.reply("that user isnt in the server");
            }
            break;
        case "announce":
            if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You do not have eough permission")

            let argsresult;
            let mChannel = message.mentions.channels.first()

            message.delete()
            if (mChannel) {
                argsresult = args.slice(2).join(" ")
                mChannel.send(argsresult)
            } else {
                argsresult = args.join(" ")
                message.channel.send(argsresult)
                break;
            }
    }
});

bot.login(token);