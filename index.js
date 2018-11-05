const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTA4ODkwNTAxNzI2ODYzMzYw.DsF4MA.WZKZjQNGbLDkhjl4u-MBLp7jou0'

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('message', function (message){
    if(message.content == '%Hello')


        message.channel.sendMessage('Greetings Human.');      
});

bot.on('message', function (message){
    if(message.content == '%Videogames')


        message.channel.sendMessage('https://www.mcleodgaming.com/games/ssf2');      
});

bot.login(process.env.token);
