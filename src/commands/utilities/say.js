module.exports.run = (message, args) => {
        message.delete();
         let text = args.join(" ");
        message.channel.send(text); 
    };

module.exports.config = {
  "name": "say",
  "description": "says something you specify",
  "permissions": ["SEND_MESSAGES", "MANAGE_MESSAGES"]
};