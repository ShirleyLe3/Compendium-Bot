const Discord = require('discord.js');
const bot = new Discord.bot();

const PREFIX = "!"
var version = "1.0.1"


bot.on('ready', () => {
    console.log("Connected as " + client.user.tag)


    // client.user.setActivity("with Javascript")   // playing with javascript
    bot.user.setActivity("to the sound of silence", {type: 'LISTENING'})

    // bot.guilds.forEach((guild) => {
    //     console.log(guild.name)
    //     guild.channels.forEach((channel) => {
    //         console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
    // }) 
    // //General channel id: 
    // })
})

// /*

function processCommand(recievedMessage) {
    let fullCommand = recievedMessage.content.substr(1)
    let splitCommand = fullCommand.split(' ')
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

if (primaryCommand == 'help') {
    helpCommand(arguments, recievedMessage)  
} else if (primaryCommand == 'multiply') {
    multiplyCommand(arguments, recievedMessage)
} else {
    recievedMessage.channel.send('Unknown command. Try `!help` or `!multiply`')
}
}

function multiplyCommand(arguments, recievedMessage) {
    if (arguments.length < 2) {
        recievedMessage.channel.send('Not enough arguments. Try `!multiply 2 10`')
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })   
    recievedMessage.channel.send('The product of ' + arguments + ' is ' + product.toString() `!multiply`)
    }

function helpCommand(arguments, recievedMessage) {
    if (arguments.length == 0) {
        recievedMessage.channel.send('Im not sure what you need help with. Try `!help [top]')
    } else {
        recievedMessage.channel.send('It looks like  `!help [top]')
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })   
    recievedMessage.channel.send('The product of ' + arguments + ' is ' + product.toString() `!multiply`)
    }
    
}




// */



bot.on("message", message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'ping':
            message.reply('pong!')
            break;
        case 'website':
            message.reply('google.com!')
            break;   
        case 'info':
            if(args[1] === 'version') {
            message.reply('Version' + version)
            }else{
            message.reply('Invalid argument')
            break; 
            }               
        case 'clear':
            if(!args[1]) return message.reply("Error: Please define again with a second arg")
            message.channel.bulkDelete(args[1])
            break;            
        case 'asmr':
            message.reply('http://www.youtube.com/')
                        break; 
        case 'embed':
            var embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Tien')
            .setThumbnail(message.author.avatarURL())
            .setTimeStamp()
            .addField('Current Server', message.guild.name, true)
            .addField('User', message.author.username);
            message.reply(embed);
            break;             
                
    }
})
