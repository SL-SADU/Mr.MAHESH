/* Copyright (C) 2020 KgAmda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Amdibell - KgAmda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Amdi.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 👸💖QUEEN AMDIBELL💖👸'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 👸💖QUEEN AMDIBELL💖👸'})

    }));
}

