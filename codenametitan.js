const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();

// commands
client.on("ready", () => {
  console.log("Copyright 2021 by AnarchistZ#2872 on Discord, Codename Titan Build 1000");
});

client.on("message", (message) => {
	if (message.author.bot) return;
	// This is where we'll put our code.
	if (message.content.indexOf(config.prefix) !== 0) return;
  
	const args = message.content.slice(config.prefix.length).trim().split(/ + /g);
	const command = args.shift().toLowerCase();
  
	if(command === 'ping') {
	  message.channel.send('Pong!');
	} else
	if (command === 'foo') {
	  message.channel.send('bar!');
	}
});

client.login(config.token);
