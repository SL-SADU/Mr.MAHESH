/* Copyright (C) 2021 KgAmda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Amdibell - KgAmda
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./whatsasena/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;


// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');
const Amdibell = require("./Amdibell");

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2, 2119, 6]

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ KgAmda පිවිසුම් තොරතුරු update කරන ලදි!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('ℹ️ WhatsApp වෙත සම්බන්ධ වෙමින් පවතී..... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Amdibell පුරනය වීම සාර්ථකයි!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ KgAmda බාහිර plugins ස්ථාපනය කිරීම...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️ KgAmda Plugins ස්ථාපනය කිරීම...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('✅ KgAmda Plugins ස්ථාපනය කර ඇත! Amdabell Bot දැන් ඔබට භාවිතා කළ හැකිය.')
        );
        await new Promise(r => setTimeout(r, 1100));

        if (config.WORKTYPE == 'public') {
            if (config.LANG == 'SI' ) {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist අනාවරණය විය!``` \n```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1700));

                    console.log('🛡️ Blacklist Detected 🛡️')

                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {
                    await conn.sendMessage(conn.user.jid, '*Amdibell public ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ command list එක ලබාගැනීමට .panel command එක භාවිතා කරන්න.*\n\n*ඔබේ bot public ක්‍රියාත්මක වේ. වෙනස් කිරීමට* _.setvar WORK_TYPE:private_ *විධානය භාවිතා කරන්න.*\n\n*Updates:* https://gist.github.com/kgamdaofficial/890b6b31fcb8d376d6a68afcb7359324\n\n*Amdibell භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
            else {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {
                    await conn.sendMessage(conn.user.jid, '*Amdibell public ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ command list එක ලබාගැනීමට .panel command එක භාවිතා කරන්න.*\n\n*ඔබේ bot public ක්‍රියාත්මක වේ. වෙනස් කිරීමට* _.setvar WORK_TYPE:private_ *විධානය භාවිතා කරන්න.*\n\n*Updates:* https://gist.github.com/kgamdaofficial/890b6b31fcb8d376d6a68afcb7359324\n\nAmdibell භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }

            }
        }
        else if (config.WORKTYPE == 'private') {
            if (config.LANG == 'SI' ) {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n ```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {

                    await conn.sendMessage(conn.user.jid, '*Amdibell private ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ command list එක ලබාගැනීමට .panel command එක භාවිතා කරන්න.*\n\n*ඔබේ bot private ක්‍රියාත්මක වේ. වෙනස් කිරීමට* _.setvar WORK_TYPE:public_ *විධානය භාවිතා කරන්න.Updates:* https://gist.github.com/kgamdofficial/890b6b31fcb8d376d6a68afcb7359324\n\n*\n\n*Amdibell භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
            else {

                if (conn.user.jid === '@s.whatsapp.net') {

                    await conn.sendMessage(conn.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)
   
                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {

                    await conn.sendMessage(conn.user.jid, '*Amdibell private ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.👸*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n*ඔබේ command list එක ලබාගැනීමට .panel command එක භාවිතා කරන්න.*\n\n*ඔබේ bot private ක්‍රියාත්මක වේ. වෙනස් කිරීමට* _.setvar WORK_TYPE:public_ *විධානය භාවිතා කරන්න.*\n\nUpdates:* https://gist.github.com/kgamdaofficial/890b6b31fcb8d376d6a68afcb7359324\n\n*Amdibell භාවිතා කිරීම ගැන ස්තූතියි 💌*', MessageType.text);
                }
            }
        }
        else {
            return console.log('Wrong WORK_TYPE key! Please use “private” or “public”')
        }
    });

    
    conn.on('message-new', async msg => {
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // see you message
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("/root/Amdibell/media/gif/VID-20210518-WA0060.mp4"), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Welcome message
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("/root/Amdibell/media/gif/VID-20210518-WA0059.mp4"), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        }

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe) {
                            var vers = conn.user.phone.wa_version.split('.')[2]
                            try {
                                if (command.deleteCommand && vers < 12) { 
                                    await whats.delete() 
                                 }
                                 else { 
                                     await command.function(whats, match);
                                 }
                             } catch (err) { await command.function(whats, match) } }

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'SI') {
                                await conn.sendMessage(conn.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*\n\n' + 
                                    '\n*Bot දෝෂයක් සිදුවී ඇත!\n*'+
                                    '\n_මෙම දෝෂ logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n' +
                                    '\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය._\n' +
                                    '\n_මෙම පණිවිඩය ඔබගේ අංකයට ගොස් තිබිය යුතුය (සුරකින ලද පණිවිඩ)_\n\n' +
                                    '\n_https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq ඔබට එය මෙම group යොමු කළ හැකිය._\n\n' +
                                    '*සිදු වූ දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});
                                } else {
                                await conn.sendMessage(conn.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*\n' + 
                                    '\n*බොට් නිසි ලෙස ක්රියා කරයි.*\n'+
                                    '\n_Message logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n' +
                                    '\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය._\n' +
                                    '\n_(සුරකින ලද පණිවිඩ)_\n\n' +
                                    '\n_ඔබේ bot සඳහා යම් උදව්වක් අවශ්‍ය නම්, https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq_\n\n' +
                                    '*Report:* ```' + error + '```\n\n'
                                    , MessageType.text,
                                    );
                                }
                                if (config.LANG == 'effectimg') {
                                await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL]⚜️*' + 
                                    '\n\n*Amdibell Bot දෝෂයක් සිදුවී ඇත!*'+
                                    '\n\n_මෙම දෝෂ logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_' +
                                    '\n\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය_' +
                                    '\n_Support Group Entrance:_ https://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq' +
                                    '\n\n_මෙම පණිවිඩය ඔබගේ අංකයට ගොස් තිබිය යුතුය (සුරකින ලද පණිවිඩ)._\n\n' +
                                    '*සිදු වූ දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}

                                    );
                                }    
                                if (error.message.includes('URL')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _මාධ්‍යන් සකසා ගත නොහැකි වීම._' +
                                        '\n\n\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, sticker..) භාවිතය._' +
                                        '\n\n\n*විසඳුම:* _LOG අංකය හැර ඕනෑම චැට් එකකදී ඔබට විධානයන් භාවිතා කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Split සොයා ගත නොහැක_' +
                                        '\n\n*හේතුව:* _කණ්ඩායම් admin භාවිතා කළ හැකි විධානයන් සමහර විට split ක්‍රියාවලිය නොදකි._ ' +
                                        '\n\n*විසඳුම:* _Restart කිරීම ප්‍රමාණවත් වේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Ookla Server QueenAmdiConection_' +
                                        '\n\n*හේතුව:* _සේවාදායකයට වේගවත්ම දත්ත සම්ප්‍රේෂණය කළ නොහැක._' +
                                        '\n\n*විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Audio Params වැරදි වීම._' +
                                        '\n\n*හේතුව:* _හෝඩියේ පිටත TTS විධානය භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _ඔබ අකුරු රාමුව තුළ ඇති විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත``` ==========' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _එවැනි folders නැත_' +
                                        '\n\n*හේතුව:* _Pluginයේ වැරදි කේතීකරණය._' +
                                        '\n\n*විසඳුම:* _කරුණාකර ඔබේ plugin කේත පරීක්‍ෂා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Error 404 HTTPS_' +
                                        '\n\n*හේතුව:* _Heroku plugins යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n\n*විසඳුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ ගනුදෙනුව සිදු කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Reply.delete function නොමැති වීම සහ දෙවරක් පිළිතුරු දීම_' +
                                        '\n\n*හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n\n*විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n\n*හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n\n*විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Bailyes Action Error_ ' +
                                        '\n\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප එකකට වඩා මෙම දෝෂය ඇති වීමට හේතු විය හැක._' +
                                        '\n\n*විසඳුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පැවතුනහොත්, ඔබට restart කිරීමට උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Text හෝ මාධ්‍ය විකේතනය කළ නොහැක_' +
                                        '\n\n*හේතුව:* _වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _Panel විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('500')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Media downloading error_' +
                                        '\n\n*හේතුව:* _වෙබ් අඩවිය අතර සම්බන්ධතාවය විසන්ධි විය._' +
                                        '\n\n*විසඳුම:* _මිනිත්තු කිහිපයක් රැඳී සිටින්න. KgAmda විසින් මෙම දෝෂය නිවැරදි කරනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('503')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Media downloading error_' +
                                        '\n\n*හේතුව:* _වෙබ් අඩවිය අතර සම්බන්ධතාවය විසන්ධි විය._' +
                                        '\n\n*විසඳුම:* _මිනිත්තු කිහිපයක් රැඳී සිටින්න. KgAmda විසින් මෙම දෝෂය නිවැරදි කරනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [AMDI_BELL] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _වචන භාවිතය_' +
                                        '\n\n*හේතුව:* _English හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _ඔබ English හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await AmdibellCon.sendMessage(AmdibellCon.user.jid, '*🙇🏻 කණගාටුයි, මට මෙම දෝෂය කියවිය නොහැක! 🙇🏻*' +
                                        '\n_වැඩිදුර උදව් සඳහා ඔබට අපගේ support කණ්ඩායම් වෙත ලිවිය හැකිය.\n\nhttps://chat.whatsapp.com/Hkm79J2sapyLGD0rvRTfkq_'
                                        , MessageType.text
                               
                                    );

                            
                                    
                                
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await AmdibellCon.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            AmdibellCon.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await AmdibellCon.connect();
            } catch {
                return;
            }
        }
    }
}

Amdibell();