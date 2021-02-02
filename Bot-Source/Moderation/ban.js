const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ban",
    description: "bans a member",
    permissions: "BAN_MEMBERS",
    execute(message, args, member, reason) {
        if (!member) return message.channel.send("Member not specified").then(m => m.delete({ timeout: 10000 }))
        if(!reason) return message.channel.send("No reason specified").then(m => m.delete({ timeout: 10000 }))
     member.ban(reason).then(() => {   
              let banEmbed = new MessageEmbed()
              .setTitle("🔒 User Banned")
              .setColor("RANDOM")
              .setDescription(`${member} was banned by ${message.author} with the reason of ${reason}.`)
              message.channel.send(banEmbed)
           })
    }
    
}
