
//start
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
});


const token = ("MTI2NTMzMTMwMjY0MzUzNTkxNA.GxUu35.8DOLweaSkZjwlhn1qFbpflAV5UX8VtkyHaaXX0") 
 
client.on('ready', async () => {
    console.log(`${client.user.username} is now running`)

});

//messages commands:  (start)

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "test") {
        message.reply("Test successful!");
    }
});


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "<@1265331302643535914>") {
        message.reply("yo, whats up?");
    }
});


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "cool") {
        message.reply("# very cool");
    }
}); 


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "invite") {
        message.reply("use this link to add me to your server:    https://discord.com/oauth2/authorize?client_id=1265741283142668348&permissions=8&integration_type=0&scope=bot");
    }
}); 



client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "!sleep") {
        message.reply("# im sleepy, night night")
    }
}); 

//message commands (end)
//this is v2.0.0

client.login(token);
//end
