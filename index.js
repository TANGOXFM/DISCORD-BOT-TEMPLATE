
//start
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
});


const token = ("enter you bot token here") 
 
client.on('ready', async () => {
    console.log(`${client.user.username} is now running`)

});

//messages commands:  (start)

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "enter command trigger here") {
        message.reply("enter what the bot will reply with here");
    }
});


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "cool") {
        message.reply("# very cool");
    }
}); 


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "invite") {
        message.reply("use this link to add me to your server:  past your bots invite link here");
    }
}); 




//you can copy and paste the code and keep creating and customising you own commands

//message commands (end)
//this is v2.0.0

client.login(token);
//end
