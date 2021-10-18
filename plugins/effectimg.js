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

    await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Amdi/bell)_\n\n⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n⚙️විධානය: *.blackpink*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.ninjalogo*\nℹ️විස්තර: නින්ජා තේමාත්මක logo යවයි.\n\n⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්‍රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්‍රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\nCheck github for bot:  https://github.com/kgamdaofficial/Amdibell');
        
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://docs-jojo.herokuapp.com/api/emoji2png?type=apple&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})
    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'v3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

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

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'fpslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'effectimg', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Amdi/bell)_\n\n⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n⚙️විධානය: *.blackpink*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.ninjalogo*\nℹ️විස්තර: නින්ජා තේමාත්මක logo යවයි.\n\n⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්‍රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්‍රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\nCheck github for bot:  https://github.com/kgamdaofficial/Amdibell');
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])

    var ttinullimage = await axios.get('https://docs-jojo.herokuapp.com/api/emoji2png?type=apple&emoji=' + uri, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'v3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

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

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'fpslogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Amdibell'})

    }));
}