const catFact = require('cat-facts');
const catImage = require('random-cat');
const Discord = require('discord.js');

exports.run = (client, msg) => {
    var num = Math.floor(Math.random() * 10) + 1;
    var image = catImage.get({
        category: 'cats',
        imageIndex: num
    });
    var fact = catFact.random();


    var embed = new Discord.RichEmbed({
        color: 3447003,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: 'Cat Fact',
        fields: [{
            name: 'Random Fact',
            value: fact
        }
        ],
        image: {
            url: image
        },
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: '© MooseHub 2017 - Sources: Image: http://lorempixel.com/ via random-cat (npm) & Fact: cat-facts (npm)'
        }
    });

    msg.reply({ embed });
};

exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: ['cat', 'cat fact', 'catfact', 'cf'],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: 'cat',
    desciption: 'Displays a random cat fact',
    usage: '',
    usageDelim: '',
};
