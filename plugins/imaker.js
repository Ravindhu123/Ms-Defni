const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IMAKER = "\n*~* ```IMAGE š MAKER``` *~*\n\n\nāš ```.barcode```\nā\nāš ```.qr```\nā\nāš ```.naruto```\nā\nāš ```.bneon```\nā\nāš ```.matrix```\nā\nāš ```.breakwall```\nā\nāš ```.blood```\nā\nāš ```.metal```\nā\nāš ```.uwo```\nā\nāš ```.gneon```\nā\nāš ```.harrypotter```\nā\nāš ```.retrolol```\nā\nāš ```.shadow```\nā\nāš ```.romantic```\nā\nāš ```.butterfly```\nā\nāš ```.coffecup```\nā\nāš ```.nlight```\nā\nāš ```.rainbow```\nā\nāš ```.camo```\nā\nāš ```.vintage```\nā\nāš ```.candy```\nā\nāš ```.gradient```\nā\nāš ```.stars```\nā\nāš ```.fur```\nā\nāš ```.dropwater```\nā\nāš ```.crossfire```\nā\nāš ```.silk```\nā\nāš ```.flame```\nā\nāš ```.glow```\nā\nāš ```.smoke```\nā\nāš ```.sky```\nā\nāš ```.cs```\nā\nāš ```.lightwriting```\nā\nāš ```.crismes```\nā\nāš ```.firework```\nā\nāš ```.sandw```\nā\nāš ```.freefire```\nā\nāš ```.gplay```\nā\nāš ```.splay```\nā\nāš ```.box3d```\nā\nāš ```.3d```\nā\nāš ```.blackpink```\nā\nāš ```.thunder```\nā\nāš ```.leave```\nā\nāš ```.tlight```\nā\nāš ```.book```\nā\nāš ```.gaming```\nā\nāš ```.wolf```\nā\nāš ```.pubg```\nā\nāš ```.snow```\nā\nāš ```.wc```\nā\nāš ```.avengers```\nā\nāš ```.ph```\nā\nāš ```.marvel```\nā\nāš ```.glitch```\n\n"
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//XT

Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'uwo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/underwaterocean?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'nlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/neonlight?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'camo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/camuflage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/vintage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/candy?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'gradient ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'stars ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/stars?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'fur ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/fur?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//QR & BARCODE

Asena.addCommand({pattern: 'qr ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/qrencode?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'barcode ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/barcode?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//One Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/naruto?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/bneon?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/matrix?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/breakwall?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gneon?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/dropwater?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/crosslogo?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/silktext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/flametext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/glowtext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/smoketext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/skytext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'cs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/cslogo?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'lightwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/lithgtext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crismes ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/crismes?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'firework ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/tfire?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/sandw?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/epep?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gplay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gplaybutton?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'splay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/splaybutton?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'box3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/text3dbox?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: '3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/text3d?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/logobp?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/thundertext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'leave ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/leavest?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'tlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/tlight?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'book ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/nulis?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//Two Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/wolflogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/pubglogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/snowwrite?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'wc ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/watercolour?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avengers ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/logoaveng?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ph ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/phlogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/marvellogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gtext?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'imaker ?(.*)', fromMe: false, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,IMAKER, MessageType.text);

    }));

}

else if (Config.WORKTYPE == 'private') {

//XT

Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'uwo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/underwaterocean?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'nlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/neonlight?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'camo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/camuflage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/vintage?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/candy?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'gradient ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'stars ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/stars?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
Asena.addCommand({pattern: 'fur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.XRUN}.xyz/photooxy/fur?text=${match[1]}&APIKEY=${Config.XT}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//QR & BARCODE

Asena.addCommand({pattern: 'qr ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/qrencode?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'barcode ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/barcode?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//One Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/naruto?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/bneon?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/matrix?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/breakwall?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gneon?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/dropwater?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/crosslogo?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/silktext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/flametext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/glowtext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/smoketext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/skytext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'cs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/cslogo?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'lightwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/lithgtext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crismes ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/crismes?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'firework ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/tfire?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/sandw?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/epep?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gplay ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gplaybutton?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'splay ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/splaybutton?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'box3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/text3dbox?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: '3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/text3d?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/logobp?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/thundertext?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'leave ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/leavest?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'tlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/tlight?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/nulis?apikey=${Config.TH}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

//Two Text Logos By Thevindu Hansara (TEXTPRO)

Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/wolflogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/pubglogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'snow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/snowwrite?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'wc ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/watercolour?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'avengers ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/logoaveng?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'ph ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/phlogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/marvellogo?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
  
  var topText, bottomText;
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        bottomText = split[1];
        topText = split[0];
}

    var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/gtext?apikey=${Config.TH}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'imaker ?(.*)', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,IMAKER, MessageType.text);

    }));

}
