const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬QUEEN AMDIBELL EFFECT LIST▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nUsage: *.pemoji*\nℹ️Desc: ඉමොජි රූපයට පරිවර්තනය කරන්න.\n\n💻Usage: *.pornhub*\nℹ️Desc: එය සැපය ඇති text කළු පැහැති පෙනුම රූපයක් යවයි.\nඔබ විසින් */* මගින් වෙන් කර ඇති ශීර්ෂය සහ උපසිරැසි අනුපිළිවෙලට ඇතුළත් කළ යුතුය!.\n\n💻Usage: *.sandwriting*\nℹ️Desc: එය සපයා ඇති පෙළෙහි වැලි රූපයක් යවයි.\n\n💻Usage: *.blackpink*\nℹ️Desc: එය සපයා ඇති පෙළෙහි කළු රෝස රූපයක් යවයි.\n\n💻Usage: *.blood*\nℹ️Desc: එය සපයා ඇති පෙළෙහි ලේ රූපයක් යවයි.\n\n💻Usage: *.snow*\nℹ️Desc: එය සපයා ඇති පෙළෙහි හිම රූපයක් යවයි.\n\n💻Usage: *.cloud*\nℹ️Desc: එය සපයා ඇති පෙළෙහි අහස රූපයක් යවයි.\n\n💻Usage: *.sparkling*\nℹ️Desc: පාඨය දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ විසින් */* මගින් වෙන් කර ඇති ශීර්ෂය සහ උපමාතෘකාව අනුපිළිවෙලට ඇතුළත් කළ යුතුය!\n\n💻Usage: *.watercolour*\nℹ️Desc: පාඨය ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.gaming*\nℹ️Desc: නින්ජා තේමා ලාංඡනය සඳහා ශීර්ෂ පාඨය ලෙස පෙළ ඇතුළු කරයි.\n\n💻Usage: *.neonlight*\nℹ️Desc: පෙළ neonlight තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.3dtext*\nℹ️Desc: සපයා ඇති පෙළ ත්‍රිමාණ මෝස්තර රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.glitch*\nℹ️Desc:එය ඔබට glitch සකසයි.\n\n💻Usage: *.wood*\nℹ️Desc:එය ඔබට දැව ආකාරයේ logo සකසයි.\n\n💻Usage: *.8bit*\nℹ️Desc:එය ඔබට bit ආකාරයේ logo සකසයි.\n\n💻Usage: *.shadow*\nℹ️Desc:එය ඔබට සෙවනැල්ල ආකාරයේ logo සකසයි.\n\n💻Usage: *.underwater*\nℹ️Desc:එය ඔබට දිය යට ආකාරයේ logo සකසයි.\n\n💻Usage: *.flower*\nℹ️Desc:එය ඔබට දිය යට logo සකසයි.\n\n💻Usage: *.burn*\nℹ️Desc:එය ඔබට පුළුස්සා දමන logo සකසයි.\n\n💻Usage: *.candy*\nℹ️Desc:එය ඔබට රසකැවිලි logo සකසයි.\n\n💻Usage: *.harrypotter*\nℹ️Desc:එය ඔබට හැරී පොටර් logo සකසයි.\n\n💻Usage: *.grass*\nℹ️Desc:එය ඔබට තණකොළ logo සකසයි.\n\n💻Usage: *.candlemug*\nℹ️Desc:එය ඔබට candlemug logo සකසයි.\n\n💻Usage: *.romance*\nℹ️Desc:එය ඔබට ආදර logo සකසයි.\n\n💻Usage: *.lovemsg*\nℹ️Desc:එය ඔබට ආදරයකතා logo සකසයි.\n\n*Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅*');
        
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${match[1]}=apple`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));


    Asena.addCommand({pattern: 'wood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'underwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'burn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'grass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'candlemug ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'romance ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/blackpink?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'effectimg', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬QUEEN AMDIBELL EFFECT LIST▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nUsage: *.pemoji*\nℹ️Desc: ඉමොජි රූපයට පරිවර්තනය කරන්න.\n\n💻Usage: *.pornhub*\nℹ️Desc: එය සැපය ඇති text කළු පැහැති පෙනුම රූපයක් යවයි.\nඔබ විසින් */* මගින් වෙන් කර ඇති ශීර්ෂය සහ උපසිරැසි අනුපිළිවෙලට ඇතුළත් කළ යුතුය!.\n\n💻Usage: *.sandwriting*\nℹ️Desc: එය සපයා ඇති පෙළෙහි වැලි රූපයක් යවයි.\n\n💻Usage: *.blackpink*\nℹ️Desc: එය සපයා ඇති පෙළෙහි කළු රෝස රූපයක් යවයි.\n\n💻Usage: *.blood*\nℹ️Desc: එය සපයා ඇති පෙළෙහි ලේ රූපයක් යවයි.\n\n💻Usage: *.snow*\nℹ️Desc: එය සපයා ඇති පෙළෙහි හිම රූපයක් යවයි.\n\n💻Usage: *.cloud*\nℹ️Desc: එය සපයා ඇති පෙළෙහි අහස රූපයක් යවයි.\n\n💻Usage: *.sparkling*\nℹ️Desc: පාඨය දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ විසින් */* මගින් වෙන් කර ඇති ශීර්ෂය සහ උපමාතෘකාව අනුපිළිවෙලට ඇතුළත් කළ යුතුය!\n\n💻Usage: *.watercolour*\nℹ️Desc: පාඨය ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.gaming*\nℹ️Desc: නින්ජා තේමා ලාංඡනය සඳහා ශීර්ෂ පාඨය ලෙස පෙළ ඇතුළු කරයි.\n\n💻Usage: *.neonlight*\nℹ️Desc: පෙළ neonlight තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.3dtext*\nℹ️Desc: සපයා ඇති පෙළ ත්‍රිමාණ මෝස්තර රූපයක් බවට පරිවර්තනය කරයි.\n\n💻Usage: *.glitch*\nℹ️Desc:එය ඔබට glitch සකසයි.\n\n💻Usage: *.wood*\nℹ️Desc:එය ඔබට දැව ආකාරයේ logo සකසයි.\n\n💻Usage: *.8bit*\nℹ️Desc:එය ඔබට bit ආකාරයේ logo සකසයි.\n\n💻Usage: *.shadow*\nℹ️Desc:එය ඔබට සෙවනැල්ල ආකාරයේ logo සකසයි.\n\n💻Usage: *.underwater*\nℹ️Desc:එය ඔබට දිය යට ආකාරයේ logo සකසයි.\n\n💻Usage: *.flower*\nℹ️Desc:එය ඔබට දිය යට logo සකසයි.\n\n💻Usage: *.burn*\nℹ️Desc:එය ඔබට පුළුස්සා දමන logo සකසයි.\n\n💻Usage: *.candy*\nℹ️Desc:එය ඔබට රසකැවිලි logo සකසයි.\n\n💻Usage: *.harrypotter*\nℹ️Desc:එය ඔබට හැරී පොටර් logo සකසයි.\n\n💻Usage: *.grass*\nℹ️Desc:එය ඔබට තණකොළ logo සකසයි.\n\n💻Usage: *.candlemug*\nℹ️Desc:එය ඔබට candlemug logo සකසයි.\n\n💻Usage: *.romance*\nℹ️Desc:එය ඔබට ආදර logo සකසයි.\n\n💻Usage: *.lovemsg*\nℹ️Desc:එය ඔබට ආදරයකතා logo සකසයි.\n\n*Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅*');

    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${match[1]}=apple`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));


    Asena.addCommand({pattern: 'wood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'underwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'burn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'grass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'candlemug ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'romance ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/blackpink?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅'})

    }));
    
    Asena.addCommand({pattern: 'team', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('🎩💀welcome to K.G LEGION CREW team💀🎩\n\n');
        
    }));   
    
    Asena.operate({on: 'text', fromMe: LOL,  deleteCommand: false}, (async (message, match) => { 
    function _0x34b6(_0x56b702,_0x1d7f15){var _0x1edc70=_0x1edc();return _0x34b6=function(_0x34b6aa,_0x2e112f){_0x34b6aa=_0x34b6aa-0x144;var _0x386433=_0x1edc70[_0x34b6aa];if(_0x34b6['\x48\x61\x6c\x67\x4a\x65']===undefined){var _0x4ecde9=function(_0x21fe93){var _0x381e20='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x5c8d48='',_0x3d67c9='';for(var _0x5a4b56=0x0,_0x3edf10,_0x2f655b,_0x5f2259=0x0;_0x2f655b=_0x21fe93['\x63\x68\x61\x72\x41\x74'](_0x5f2259++);~_0x2f655b&&(_0x3edf10=_0x5a4b56%0x4?_0x3edf10*0x40+_0x2f655b:_0x2f655b,_0x5a4b56++%0x4)?_0x5c8d48+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x3edf10>>(-0x2*_0x5a4b56&0x6)):0x0){_0x2f655b=_0x381e20['\x69\x6e\x64\x65\x78\x4f\x66'](_0x2f655b);}for(var _0x4793d8=0x0,_0x3a5c44=_0x5c8d48['\x6c\x65\x6e\x67\x74\x68'];_0x4793d8<_0x3a5c44;_0x4793d8++){_0x3d67c9+='\x25'+('\x30\x30'+_0x5c8d48['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4793d8)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x3d67c9);};_0x34b6['\x56\x45\x62\x62\x62\x45']=_0x4ecde9,_0x56b702=arguments,_0x34b6['\x48\x61\x6c\x67\x4a\x65']=!![];}var _0x533bd4=_0x1edc70[0x0],_0x103ce9=_0x34b6aa+_0x533bd4,_0x47d8a2=_0x56b702[_0x103ce9];return!_0x47d8a2?(_0x386433=_0x34b6['\x56\x45\x62\x62\x62\x45'](_0x386433),_0x56b702[_0x103ce9]=_0x386433):_0x386433=_0x47d8a2,_0x386433;},_0x34b6(_0x56b702,_0x1d7f15);}function _0x1edc(){var _0x5aaeb5=['\x74\x32\x4c\x76\x41\x66\x7a\x34\x44\x76\x66\x77\x6a\x47','\x6e\x5a\x79\x34\x6e\x64\x43\x34\x6d\x4b\x4c\x76\x44\x77\x31\x69\x72\x71','\x6f\x64\x62\x71\x45\x78\x50\x4e\x77\x68\x69','\x6d\x74\x75\x58\x6e\x64\x72\x5a\x44\x4b\x54\x63\x43\x32\x79','\x44\x67\x48\x4c\x42\x47','\x71\x77\x31\x4b\x41\x71','\x79\x78\x76\x30\x42\x57','\x7a\x78\x4b\x39\x74\x74\x7a\x36\x6e\x77\x69\x35\x71\x47','\x44\x67\x76\x34\x44\x61','\x43\x33\x62\x53\x41\x78\x71','\x7a\x4e\x6a\x56\x42\x71','\x6d\x4e\x6a\x71\x75\x68\x7a\x72\x45\x71','\x79\x32\x58\x50\x7a\x77\x35\x30','\x6f\x64\x75\x57\x6f\x66\x76\x68\x77\x75\x7a\x68\x73\x57','\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71','\x7a\x67\x66\x30\x79\x71','\x7a\x32\x76\x30','\x41\x4d\x4c\x4b','\x79\x32\x35\x30','\x6d\x74\x69\x30\x6d\x64\x75\x58\x6e\x74\x4c\x49\x43\x32\x66\x7a\x44\x4e\x4b','\x6e\x64\x65\x5a\x6f\x74\x71\x5a\x6f\x78\x44\x67\x73\x68\x6a\x6b\x75\x47','\x6d\x74\x43\x5a\x6e\x4a\x47\x31\x76\x75\x72\x53\x79\x4d\x7a\x71','\x6d\x74\x79\x34\x71\x33\x76\x74\x41\x67\x50\x58','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6d\x74\x75\x32\x6e\x5a\x6d\x31\x6e\x74\x4c\x48\x41\x31\x4c\x65\x7a\x4d\x65','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x6d\x74\x62\x4f\x41\x4e\x76\x4c\x72\x68\x47','\x44\x78\x6e\x4c\x43\x47','\x43\x33\x72\x48\x43\x4e\x72\x5a\x76\x32\x4c\x30\x41\x61'];_0x1edc=function(){return _0x5aaeb5;};return _0x1edc();}(function(_0x4b37ef,_0x381d58){function _0x507b74(_0x3fa434,_0x267c6e){return _0x34b6(_0x3fa434-0x66,_0x267c6e);}function _0x528c73(_0x2cc230,_0x3bf0ed){return _0x34b6(_0x2cc230- -0x2c5,_0x3bf0ed);}var _0x368acc=_0x4b37ef();while(!![]){try{var _0x3fd667=parseInt(_0x528c73(-0x17a,-0x175))/0x1*(-parseInt(_0x528c73(-0x17c,-0x172))/0x2)+parseInt(_0x507b74(0x1b8,0x1b8))/0x3+-parseInt(_0x528c73(-0x168,-0x16b))/0x4*(-parseInt(_0x507b74(0x1b9,0x1b4))/0x5)+-parseInt(_0x528c73(-0x169,-0x15b))/0x6+-parseInt(_0x507b74(0x1ba,0x1b9))/0x7*(parseInt(_0x507b74(0x1c4,0x1c9))/0x8)+parseInt(_0x507b74(0x1b7,0x1ad))/0x9*(parseInt(_0x528c73(-0x16d,-0x16f))/0xa)+-parseInt(_0x507b74(0x1bc,0x1b9))/0xb;if(_0x3fd667===_0x381d58)break;else _0x368acc['push'](_0x368acc['shift']());}catch(_0x121e7d){_0x368acc['push'](_0x368acc['shift']());}}}(_0x1edc,0xa9432));function _0x1ec046(_0x3bd544,_0x6c6cf2){return _0x34b6(_0x6c6cf2-0x14,_0x3bd544);}function _0x54ab02(_0x4c1969,_0x258715){return _0x34b6(_0x258715-0x354,_0x4c1969);}if(message[_0x1ec046(0x174,0x16b)][_0x1ec046(0x16a,0x16e)](_0x54ab02(0x4a6,0x4b4))){var unique_ident=message[_0x54ab02(0x49d,0x49e)][_0x54ab02(0x4ac,0x4ad)][_0x1ec046(0x169,0x163)][_0x1ec046(0x16a,0x15b)]('\x40')[0x0],finm=message[_0x54ab02(0x49c,0x4ab)][_0x54ab02(0x492,0x4a0)](_0x1ec046(0x165,0x174),'')[_0x1ec046(0x167,0x160)]('\x20',''),trmsg='',_0x21fe93={};_0x21fe93['\x66\x72\x6f\x6d']='\x61\x75\x74\x6f',_0x21fe93['\x74\x6f']='\x45\x4e',ceviri=await translatte(finm,_0x21fe93);_0x54ab02(0x494,0x49a)in ceviri&&(trmsg=ceviri[_0x1ec046(0x14e,0x15a)]);var uren=encodeURI(trmsg);await axios[_0x54ab02(0x4a2,0x4a2)]('\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69'+'\x2e\x62\x72\x61\x69\x6e\x73\x68\x6f\x70'+'\x2e\x61\x69\x2f\x67\x65\x74\x3f\x62\x69'+'\x64\x3d\x31\x36\x31\x35\x33\x30\x26\x6b'+_0x1ec046(0x158,0x159)+_0x54ab02(0x4b5,0x4af)+'\x75\x69\x64\x3d'+unique_ident+'\x26\x6d\x73\x67\x3d'+uren)[_0x1ec046(0x16b,0x173)](async _0x5c8d48=>{function _0x31c9d0(_0x19c534,_0x5cd1d5){return _0x1ec046(_0x5cd1d5,_0x19c534-0x2af);}var _0x3d67c9='',_0x5a4b56={};function _0x39ea7b(_0x52f904,_0x4e0de1){return _0x54ab02(_0x4e0de1,_0x52f904- -0x6fe);}_0x5a4b56[_0x31c9d0(0x40b,0x40b)]=_0x31c9d0(0x407,0x408),_0x5a4b56['\x74\x6f']=Build['\x4c\x41\x4e\x47'],ceviri=await translatte(_0x5c8d48['\x64\x61\x74\x61'][_0x31c9d0(0x413,0x414)],_0x5a4b56),_0x39ea7b(-0x264,-0x262)in ceviri&&(_0x3d67c9=ceviri[_0x39ea7b(-0x264,-0x268)]),await message[_0x39ea7b(-0x260,-0x26b)][_0x31c9d0(0x418,0x41d)+'\x65'](message[_0x31c9d0(0x412,0x419)],_0x3d67c9,MessageType[_0x39ea7b(-0x264,-0x261)],{'\x71\x75\x6f\x74\x65\x64':message[_0x31c9d0(0x410,0x414)]});});}
   
    }));

    Asena.operate({on: 'text', fromMe: false, deleteCommand: false}, (async (message, input) => {
    function _0x48c0(_0x26c2c3,_0x2c91c6){var _0x368341=_0x3683();return _0x48c0=function(_0x48c0e7,_0x14e3ef){_0x48c0e7=_0x48c0e7-0x8c;var _0x3e4cd7=_0x368341[_0x48c0e7];if(_0x48c0['\x79\x42\x79\x51\x71\x6c']===undefined){var _0x3b0ea1=function(_0x586958){var _0x3d5f9d='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x222fd4='',_0x5d63e1='';for(var _0x1183f9=0x0,_0x42197f,_0x224076,_0x13a1ef=0x0;_0x224076=_0x586958['\x63\x68\x61\x72\x41\x74'](_0x13a1ef++);~_0x224076&&(_0x42197f=_0x1183f9%0x4?_0x42197f*0x40+_0x224076:_0x224076,_0x1183f9++%0x4)?_0x222fd4+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x42197f>>(-0x2*_0x1183f9&0x6)):0x0){_0x224076=_0x3d5f9d['\x69\x6e\x64\x65\x78\x4f\x66'](_0x224076);}for(var _0x5f0a03=0x0,_0x1b6e00=_0x222fd4['\x6c\x65\x6e\x67\x74\x68'];_0x5f0a03<_0x1b6e00;_0x5f0a03++){_0x5d63e1+='\x25'+('\x30\x30'+_0x222fd4['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5f0a03)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x5d63e1);};_0x48c0['\x45\x74\x66\x50\x68\x58']=_0x3b0ea1,_0x26c2c3=arguments,_0x48c0['\x79\x42\x79\x51\x71\x6c']=!![];}var _0x328141=_0x368341[0x0],_0x19b6ae=_0x48c0e7+_0x328141,_0x1c237f=_0x26c2c3[_0x19b6ae];return!_0x1c237f?(_0x3e4cd7=_0x48c0['\x45\x74\x66\x50\x68\x58'](_0x3e4cd7),_0x26c2c3[_0x19b6ae]=_0x3e4cd7):_0x3e4cd7=_0x1c237f,_0x3e4cd7;},_0x48c0(_0x26c2c3,_0x2c91c6);}function _0x3683(){var _0x4e4455=['\x7a\x32\x76\x30','\x7a\x78\x4b\x39\x74\x74\x7a\x36\x6e\x77\x69\x35\x71\x47','\x71\x75\x31\x65\x73\x76\x39\x64\x73\x65\x66\x75','\x79\x32\x58\x50\x7a\x77\x35\x30','\x79\x32\x35\x30','\x6f\x64\x4b\x32\x6d\x4a\x4b\x57\x6d\x4c\x50\x35\x71\x75\x6a\x33\x72\x57','\x6e\x74\x4b\x33\x6d\x4a\x61\x59\x6e\x66\x6a\x49\x74\x68\x66\x6a\x75\x61','\x6e\x64\x71\x32\x6e\x74\x61\x34\x6e\x76\x6a\x32\x45\x78\x6a\x68\x77\x71','\x6e\x64\x43\x35\x6e\x64\x71\x32\x6d\x4c\x48\x58\x76\x67\x66\x33\x72\x57','\x79\x78\x76\x30\x42\x57','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x44\x67\x76\x34\x44\x61','\x42\x67\x76\x55\x7a\x33\x72\x4f','\x79\x77\x44\x4c','\x41\x4d\x4c\x4b','\x44\x67\x48\x4c\x42\x47','\x7a\x4e\x6a\x56\x42\x71','\x74\x65\x66\x6f\x72\x57','\x6e\x66\x6a\x56\x72\x76\x72\x4b\x7a\x47','\x6d\x4a\x61\x5a\x6d\x64\x65\x58\x6d\x4c\x50\x50\x44\x65\x6a\x6a\x73\x71','\x6f\x64\x61\x35\x6e\x4d\x35\x49\x77\x65\x31\x5a\x43\x71','\x44\x68\x6a\x31\x7a\x71','\x43\x4d\x76\x57\x42\x68\x4c\x46\x42\x77\x76\x5a\x43\x57','\x7a\x67\x66\x30\x79\x71','\x43\x33\x62\x53\x41\x78\x71','\x7a\x64\x30\x58\x6e\x4a\x65\x31\x6d\x5a\x61\x4d\x41\x57','\x41\x68\x72\x30\x43\x64\x4f\x56\x6c\x32\x66\x57\x41\x71','\x44\x78\x6e\x4c\x43\x47','\x44\x77\x4c\x4b\x70\x71','\x6c\x4d\x6a\x59\x79\x77\x4c\x55\x43\x32\x48\x56\x43\x61','\x42\x77\x66\x57','\x7a\x59\x35\x31\x43\x57','\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x47','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71','\x6c\x4d\x66\x50\x6c\x32\x44\x4c\x44\x64\x39\x49\x41\x71','\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x57','\x6e\x31\x6e\x4d\x41\x77\x31\x6e\x72\x61','\x6f\x74\x71\x30\x6e\x5a\x47\x35\x42\x4e\x4c\x76\x73\x30\x54\x41','\x74\x32\x4c\x76\x41\x66\x7a\x34\x44\x76\x66\x77\x6a\x47','\x6d\x4d\x4c\x33\x43\x78\x76\x52\x75\x71','\x6e\x74\x79\x59\x6d\x67\x39\x6e\x41\x31\x44\x4d\x75\x71','\x6a\x4d\x31\x5a\x7a\x5a\x30'];_0x3683=function(){return _0x4e4455;};return _0x3683();}function _0x4bbada(_0x3f817b,_0x1c35f8){return _0x48c0(_0x1c35f8- -0x307,_0x3f817b);}function _0x9928b8(_0x4d3592,_0x6b2ad5){return _0x48c0(_0x6b2ad5-0x329,_0x4d3592);}(function(_0x3fbddc,_0x41c756){function _0x1462bc(_0x169efc,_0x3bc49f){return _0x48c0(_0x169efc-0x174,_0x3bc49f);}var _0xfba12e=_0x3fbddc();function _0x45b83d(_0x373bfb,_0x5867bb){return _0x48c0(_0x5867bb-0x2a0,_0x373bfb);}while(!![]){try{var _0x16cf67=-parseInt(_0x1462bc(0x21d,0x222))/0x1*(parseInt(_0x45b83d(0x33c,0x34b))/0x2)+-parseInt(_0x45b83d(0x33a,0x337))/0x3+parseInt(_0x1462bc(0x20a,0x213))/0x4*(parseInt(_0x45b83d(0x351,0x355))/0x5)+-parseInt(_0x1462bc(0x200,0x1f7))/0x6*(parseInt(_0x1462bc(0x21c,0x22d))/0x7)+parseInt(_0x45b83d(0x345,0x354))/0x8+parseInt(_0x1462bc(0x227,0x214))/0x9+parseInt(_0x45b83d(0x357,0x34c))/0xa*(parseInt(_0x45b83d(0x32e,0x338))/0xb);if(_0x16cf67===_0x41c756)break;else _0xfba12e['push'](_0xfba12e['shift']());}catch(_0x67e02c){_0xfba12e['push'](_0xfba12e['shift']());}}}(_0x3683,0x996ec));if(Build[_0x4bbada(-0x268,-0x257)]==_0x4bbada(-0x264,-0x26e)&&(!message[_0x4bbada(-0x269,-0x275)][_0x4bbada(-0x264,-0x279)](_0x4bbada(-0x275,-0x264))||message[_0x9928b8(0x3b4,0x3bb)]['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x67\x2e\x75\x73')&&(message[_0x9928b8(0x3be,0x3cd)]!==![]&&message['\x6d\x65\x6e\x74\x69\x6f\x6e'][_0x9928b8(0x3c0,0x3b9)]!==0x0||message[_0x4bbada(-0x25d,-0x26d)+_0x4bbada(-0x268,-0x276)]!==![]))){if(message[_0x4bbada(-0x286,-0x275)][_0x9928b8(0x3a2,0x3b7)](_0x9928b8(0x3d7,0x3cc))&&(message['\x6d\x65\x6e\x74\x69\x6f\x6e']!==![]&&message[_0x9928b8(0x3bc,0x3cd)][_0x4bbada(-0x268,-0x277)]!==0x0))message[_0x9928b8(0x3c5,0x3cd)][_0x4bbada(-0x263,-0x265)](async _0x224076=>{function _0x355a57(_0x33152c,_0x1ffd15){return _0x4bbada(_0x1ffd15,_0x33152c-0x164);}function _0x59c87e(_0x59c96b,_0x246a71){return _0x9928b8(_0x59c96b,_0x246a71- -0x277);}if(message[_0x355a57(-0xf2,-0xf7)][_0x355a57(-0x104,-0xf5)][_0x355a57(-0x111,-0x102)][_0x355a57(-0x107,-0x10e)]('\x40')[0x0]===_0x224076[_0x59c87e(0x141,0x14e)]('\x40')[0x0]){var _0x13a1ef=message[_0x355a57(-0xf2,-0x104)]['\x75\x73\x65\x72'][_0x355a57(-0x111,-0x11b)]['\x73\x70\x6c\x69\x74']('\x40')[0x0],_0x5f0a03=message['\x6d\x65\x73\x73\x61\x67\x65'],_0x1b6e00='',_0x58e048={};_0x58e048[_0x355a57(-0x10f,-0x104)]=_0x355a57(-0x116,-0x101),_0x58e048['\x74\x6f']='\x45\x4e',ceviri=await translatte(_0x5f0a03,_0x58e048);'\x74\x65\x78\x74'in ceviri&&(_0x1b6e00=ceviri[_0x355a57(-0x114,-0x113)]);var _0x4a8d14=encodeURI(_0x1b6e00);await axios[_0x355a57(-0xf5,-0xe2)]('\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69'+_0x59c87e(0x14e,0x153)+_0x355a57(-0xfd,-0x105)+_0x59c87e(0x14e,0x14f)+'\x65\x79\x3d\x4d\x36\x7a\x35\x62\x39\x42'+_0x59c87e(0x152,0x15c)+_0x355a57(-0x103,-0x112)+_0x13a1ef+_0x355a57(-0xf6,-0x103)+_0x4a8d14)[_0x59c87e(0x137,0x145)](async _0x3900bc=>{function _0x250f64(_0x5df7c5,_0x38d02b){return _0x59c87e(_0x38d02b,_0x5df7c5- -0x80);}var _0x247f28='';if(Build[_0x250f64(0xc7,0xd6)]!=='\x45\x4e'){var _0x35c244={};_0x35c244[_0x51bbc5(0x43c,0x43d)]=_0x51bbc5(0x436,0x436),_0x35c244['\x74\x6f']=Build[_0x250f64(0xc7,0xb7)],ceviri=await translatte(_0x3900bc[_0x250f64(0xcd,0xbd)][_0x250f64(0xe4,0xe7)],_0x35c244),_0x250f64(0xc1,0xc5)in ceviri&&(_0x247f28=ceviri[_0x51bbc5(0x444,0x438)]);}else _0x247f28=_0x3900bc['\x64\x61\x74\x61'][_0x250f64(0xe4,0xd3)];function _0x51bbc5(_0x53706e,_0xfd08cf){return _0x59c87e(_0x53706e,_0xfd08cf-0x2f7);}await message['\x63\x6c\x69\x65\x6e\x74'][_0x250f64(0xd9,0xc4)+'\x65'](message['\x6a\x69\x64'],_0x247f28,MessageType[_0x51bbc5(0x428,0x438)],{'\x71\x75\x6f\x74\x65\x64':message[_0x51bbc5(0x44c,0x444)]});});}});else{if(message[_0x9928b8(0x3b3,0x3bb)][_0x9928b8(0x3b0,0x3b7)]('\x67\x2e\x75\x73')&&message[_0x4bbada(-0x27a,-0x26d)+_0x4bbada(-0x267,-0x276)]!==![]){if(message[_0x9928b8(0x3bb,0x3c3)+_0x9928b8(0x3b3,0x3ba)][_0x4bbada(-0x26f,-0x275)][_0x4bbada(-0x257,-0x26b)]('\x40')[0x0]===message[_0x4bbada(-0x267,-0x256)][_0x4bbada(-0x25d,-0x268)][_0x9928b8(0x3ce,0x3bb)][_0x9928b8(0x3d4,0x3c5)]('\x40')[0x0]){var unique_ident=message[_0x9928b8(0x3cb,0x3da)][_0x4bbada(-0x27d,-0x268)]['\x6a\x69\x64']['\x73\x70\x6c\x69\x74']('\x40')[0x0],finm=message[_0x4bbada(-0x256,-0x262)],trmsg='',_0x222fd4={};_0x222fd4[_0x4bbada(-0x283,-0x273)]=_0x9928b8(0x3a3,0x3b6),_0x222fd4['\x74\x6f']='\x45\x4e',ceviri=await translatte(finm,_0x222fd4);_0x9928b8(0x3bd,0x3b8)in ceviri&&(trmsg=ceviri['\x74\x65\x78\x74']);var uren=encodeURI(trmsg);await axios['\x67\x65\x74'](_0x4bbada(-0x275,-0x269)+'\x2e\x62\x72\x61\x69\x6e\x73\x68\x6f\x70'+_0x9928b8(0x3de,0x3cf)+_0x9928b8(0x3b7,0x3c6)+_0x9928b8(0x3d0,0x3d8)+_0x9928b8(0x3e0,0x3d3)+_0x9928b8(0x3cf,0x3c9)+unique_ident+_0x4bbada(-0x261,-0x25a)+uren)['\x74\x68\x65\x6e'](async _0x55b34f=>{function _0x4a792b(_0xc832fe,_0x209e9b){return _0x4bbada(_0xc832fe,_0x209e9b-0x62);}function _0x4627e0(_0x1bdbc0,_0x5277a9){return _0x9928b8(_0x1bdbc0,_0x5277a9- -0x129);}var _0xce5c76='';if(Build[_0x4627e0(0x295,0x295)]!=='\x45\x4e'){var _0x1aed3c={};_0x1aed3c[_0x4627e0(0x299,0x294)]=_0x4a792b(-0x209,-0x218),_0x1aed3c['\x74\x6f']=Build[_0x4627e0(0x29a,0x295)],ceviri=await translatte(_0x55b34f[_0x4a792b(-0x213,-0x20a)][_0x4a792b(-0x1f2,-0x1f3)],_0x1aed3c),'\x74\x65\x78\x74'in ceviri&&(_0xce5c76=ceviri['\x74\x65\x78\x74']);}else _0xce5c76=_0x55b34f[_0x4627e0(0x2a5,0x29b)][_0x4627e0(0x2aa,0x2b2)];await message['\x63\x6c\x69\x65\x6e\x74'][_0x4a792b(-0x206,-0x1fe)+'\x65'](message['\x6a\x69\x64'],_0xce5c76,MessageType[_0x4a792b(-0x221,-0x216)],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});});}}else{var unique_ident=message[_0x9928b8(0x3de,0x3da)][_0x9928b8(0x3cc,0x3c8)][_0x9928b8(0x3b7,0x3bb)][_0x4bbada(-0x278,-0x26b)]('\x40')[0x0],finm=message['\x6d\x65\x73\x73\x61\x67\x65'],trmsg='',_0x1183f9={};_0x1183f9[_0x4bbada(-0x276,-0x273)]=_0x9928b8(0x3aa,0x3b6),_0x1183f9['\x74\x6f']='\x45\x4e',ceviri=await translatte(finm,_0x1183f9);_0x9928b8(0x3a9,0x3b8)in ceviri&&(trmsg=ceviri['\x74\x65\x78\x74']);var uren=encodeURI(trmsg);await axios[_0x4bbada(-0x26b,-0x259)](_0x4bbada(-0x267,-0x269)+_0x4bbada(-0x277,-0x266)+_0x4bbada(-0x276,-0x261)+_0x9928b8(0x3db,0x3c6)+_0x4bbada(-0x264,-0x258)+'\x4f\x69\x55\x68\x56\x78\x75\x51\x56\x26'+'\x75\x69\x64\x3d'+unique_ident+_0x9928b8(0x3e1,0x3d6)+uren)['\x74\x68\x65\x6e'](async _0x4904ee=>{function _0x15ac26(_0x2e5169,_0x2bd210){return _0x9928b8(_0x2e5169,_0x2bd210- -0x213);}var _0x4bfb15='';if(Build['\x4c\x41\x4e\x47']!=='\x45\x4e'){var _0x44e842={};_0x44e842[_0x1b6b99(0x38f,0x39c)]=_0x15ac26(0x192,0x1a3),_0x44e842['\x74\x6f']=Build[_0x15ac26(0x1aa,0x1ab)],ceviri=await translatte(_0x4904ee[_0x1b6b99(0x3b3,0x3a3)]['\x63\x6e\x74'],_0x44e842),_0x15ac26(0x194,0x1a5)in ceviri&&(_0x4bfb15=ceviri[_0x1b6b99(0x388,0x397)]);}else _0x4bfb15=_0x4904ee[_0x15ac26(0x1b9,0x1b1)]['\x63\x6e\x74'];function _0x1b6b99(_0x56df1b,_0x102cb4){return _0x9928b8(_0x56df1b,_0x102cb4- -0x21);}await message[_0x1b6b99(0x3c5,0x3b9)][_0x15ac26(0x1aa,0x1bd)+'\x65'](message[_0x1b6b99(0x38c,0x39a)],_0x4bfb15,MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message['\x64\x61\x74\x61']});});}}}
    
    }));
        
}
