/* Copyright (C) 2021 AmdA.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

AmdiBell - AmdA
*/



const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    Amdi.addCommand({pattern: 'tagadmin$', fromMe: true, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '║ 👑 @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid, '╔════════════════\n' + '║ *👑 Group Admin List 👑*\n' + '║ \n' + mesaj + '║ \n' + '╚════════════════', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Amdi.addCommand({pattern: 'tagadmin$', fromMe: false, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '║ 👑 @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid, '╔════════════════\n' + '║ *👑 Group Admin List 👑*\n' + '║ \n' + mesaj + '║ \n' + '╚════════════════', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}