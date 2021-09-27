const XTroid = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const STA = 'Status Downloading....'
const Language = require('../language');
const Lang = Language.getString('sticker');

const os = require('os');
var clh = { cd: 'L3Jvb3QveHRyb2lkLw==', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;

if (Config.WORKTYPE == 'private') {
    XTroid.addCMD({pattern: 'down$', fromMe: true, desc: 'Download status to your log'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,STA,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('st.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('st.png'), MessageType.image);
            });
        return 
        }

        ffmpeg(location)
            .save('sta.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('sta.mp4'), MessageType.video);
            });
        return 
    }));
}
else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'down$', fromMe: false, desc: 'Download status to your log'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,STA,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('st.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('st.png'), MessageType.image);
            });
        return 
        }

        ffmpeg(location)
            .save('sta.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('sta.mp4'), MessageType.video);
            });
        return 
    }));

    XTroid.addCMD({pattern: 'down$', fromMe: true, desc: 'Download status to your log', dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,STA,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('st.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('st.png'), MessageType.image);
            });
        return 
        }

        ffmpeg(location)
            .save('sta.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('sta.mp4'), MessageType.video);
            });
        return 
    }));

}
