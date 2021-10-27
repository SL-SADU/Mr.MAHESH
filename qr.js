/* Copyright (C) 2020 KgAmda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Amdibell - KgAmda
*/


const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const {StringSession} = require('./amdibell/');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2126, 14]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Amdi')}${chalk.blue.bold('bell')}
${chalk.white.italic('Amdibell Strings')}
${chalk.blue.italic('ℹ️ Amdibell Code Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('🔄 connecting', async () => {
		console.log(
			chalk.green.bold('Amdibell Code: '),
			'AMDI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'AMDI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Meka yavanna epa katawath yavala illan kanna epa ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"Meka copy karanna bari nam whatsapp eke athi bn code eka awith gihin ganin eken!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
