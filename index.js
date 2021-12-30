const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));

console.log('ready', () => {
	console.log('Online');
	client.user.setStatus("=/");
} )