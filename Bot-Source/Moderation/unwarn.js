module.exports = {
    name: "unwarn",
    description: "unwarns a warned member",
    permissions: "MANAGE_MESSAGES",
    execute(message, args, member, MessageEmbed, blogchannel, logchannel, reason, db) {
        message.delete()
   if(!message.member.hasPermission("MANAGE_MESSAGES")) 
   return message.channel.send("You dont have the permission to unwarn anyone").then(msg => {
              					                     msg.delete({ timeout: 10000 })	
              									             })
           const db = require('quick.db')
          if (!member) return;
          if(member.id === message.author.id) return message.channel.send("You cant unwarn yourself").then(msg => {
              					                     msg.delete({ timeout: 10000 })	
              									             })
          if(member.id === client.user.id) return message.channel.send("You cant unwarn me").then(msg => {
              					                     msg.delete({ timeout: 10000 })	
              									             })
          db.delete(`warn.${member.id}`)
          const data = db.get(`warn.${member.id}`)
          message.channel.send(`${member} is unwarned. 👍`)
          logchannel.send(`${member} is unwarned by ${message.author}.`)
          blogchannel.send(`${member} is unwarned by ${message.author}.`)
    }
}