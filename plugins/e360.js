const lasiapi = require('textmaker-lasi'); 
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const logo = fs.readFileSync('./Xlogos/epl.png')
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const crypto = require('crypto');




/* සබ්බං පහාය ගමනීයං.ශාන්තියක්ම වේවා දරුව  */

const os = require('os');
var clh = { cd: 'L3Jvb3QveHRyb2lkLw==', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

const elist = `
    🇱🇰─── ∙ Եհҽ E,թαck ∙ ─── 🇱🇰

🌸Cmd    *.ebpink*
✏️Ex:       *_.ebpink your text_*

🌸Cmd    *.elpink*
✏️Ex:       *_.elpink your text_*

🌸Cmd    *.erain*
✏️Ex:        *_.erain your text_*

🌸Cmd    *.ejar*
✏️Ex:       *_.ejar your text_*

🌸Cmd    *.estar*
✏️Ex:       *_.estar your text_*

🌸Cmd    *.ecack*
✏️Ex:        *_.ecack your text_*

🌸Cmd    *.esnac*
✏️Ex:       *_.esnac your text_*

🌸Cmd    *.emoon*
✏️Ex:       *_.emoon your text_*

🌸Cmd    *.ewood*
✏️Ex:        *_.ewood your text_*

🌸Cmd    *.ebtf*
✏️Ex:       *_.ebtf your text_*

🌸Cmd    *.ebday*
✏️Ex:       *_.ebday your text_*

🌸Cmd    *.egrass*
✏️Ex:        *_.egrass your text_*

🌸Cmd    *.edrag*
✏️Ex:       *_.edrag your text_*

🌸Cmd    *.eglx*
✏️Ex:       *_.eglx your text_*

🌸Cmd    *.ewing*
✏️Ex:        *_.ewing your text_*

🌸Cmd    *.e2glx*
✏️Ex:       *_.e2glx your text_*

🌸Cmd    *.ebuble*
✏️Ex:        *_.ebuble your text_*

🌸Cmd    *.eleaf*
✏️Ex:       *_.eleaf your text_*

🌸Cmd    *.ebulb*
✏️Ex:        *_.ebulb your text_*

🌸Cmd    *.ecrown*
✏️Ex:       *_.ecrown your text_*

🌸Cmd    *.elight*
✏️Ex:        *_.elight your text_*

🌸Cmd    *.ecloud*
✏️Ex:       *_.ecloud your text_*

🌸Cmd    *.efire*
✏️Ex:       *_.efire your text_*

🌸Cmd    *.efancy*
✏️Ex:        *_.efancy your text_*


`

XTroid.addCMD({ pattern: 'epack$', fromMe: wk,dontAddCMDList: true }, (async (message, match) => {

    await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: elist} )
  
  }));
  



XTroid.addCMD({pattern: 'ebpink ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

function _0x44f0e2(_0x3771a1,_0x57438a,_0x365a4a,_0x47662b){return _0x1974(_0x365a4a-0x318,_0x57438a);}function _0x1974(_0x1c55ae,_0x517efe){const _0x3b3d74=_0x3b3d();return _0x1974=function(_0x19746b,_0xf2d911){_0x19746b=_0x19746b-(0x17ce+0x2*0xe3a+-0xd6*0x3e);let _0x256fba=_0x3b3d74[_0x19746b];return _0x256fba;},_0x1974(_0x1c55ae,_0x517efe);}(function(_0x426fff,_0x2b0737){const _0x21071e=_0x426fff();function _0x1c5be1(_0x16534d,_0x937a6c,_0x27dfef,_0x2a6584){return _0x1974(_0x27dfef- -0x2fe,_0x16534d);}function _0x255ae8(_0x5f1c8c,_0x2b8a4d,_0x4cb427,_0x376ca9){return _0x1974(_0x4cb427-0x35b,_0x376ca9);}while(!![]){try{const _0x2a800a=-parseInt(_0x1c5be1(-0x25c,-0x232,-0x21e,-0x209))/(-0x157*0x1d+-0x13b0+0x3a8c)*(-parseInt(_0x255ae8(0x3f1,0x45a,0x413,0x436))/(-0x7*-0x3c5+-0x8c6+0x119b*-0x1))+-parseInt(_0x1c5be1(-0x267,-0x229,-0x223,-0x222))/(-0x907+-0x1*0x46a+0xd74)*(-parseInt(_0x1c5be1(-0x234,-0x22e,-0x23d,-0x223))/(0xf*-0x111+-0x2428+0xa6f*0x5))+-parseInt(_0x1c5be1(-0x1d0,-0x1c5,-0x206,-0x21c))/(-0x21*0xa3+0x14dc+-0x1*-0x2c)+parseInt(_0x1c5be1(-0x2ab,-0x258,-0x274,-0x285))/(-0x137d+0x2237+-0xeb4)+parseInt(_0x255ae8(0x409,0x437,0x421,0x44e))/(0x209*0x5+-0x427*0x3+0x24f)+parseInt(_0x1c5be1(-0x217,-0x274,-0x249,-0x230))/(-0xe*0xc6+-0x145b+0x1f37*0x1)*(parseInt(_0x1c5be1(-0x239,-0x1f0,-0x203,-0x221))/(0x18fa*-0x1+0xace+0xe35))+-parseInt(_0x1c5be1(-0x2ac,-0x261,-0x270,-0x27e))/(0x706+-0x1113+0xa17)*(parseInt(_0x255ae8(0x470,0x414,0x42d,0x46f))/(-0x1da5*0x1+0x2686+-0x8d6*0x1));if(_0x2a800a===_0x2b0737)break;else _0x21071e['push'](_0x21071e['shift']());}catch(_0x21162d){_0x21071e['push'](_0x21071e['shift']());}}}(_0x3b3d,-0x88d7e+0xd847+0xc16b0));function _0x445ecc(_0x5d9a4b,_0x2e5c39,_0x8bd088,_0x319252){return _0x1974(_0x5d9a4b-0x26c,_0x319252);}const _0x517efe=function(){function _0x5a7bb4(_0x184f2d,_0x570028,_0x57cd1e,_0x29f542){return _0x1974(_0x184f2d-0x3e,_0x57cd1e);}function _0x397e12(_0x42bd7d,_0x506e33,_0x56c359,_0x28f5c0){return _0x1974(_0x42bd7d- -0x24c,_0x28f5c0);}const _0x22d98e={};_0x22d98e[_0x5a7bb4(0xe7,0xd9,0xe7,0xd9)]=_0x397e12(-0x1d9,-0x1e5,-0x1bb,-0x221);const _0x4f2081=_0x22d98e;let _0x11c391=!![];return function(_0x4a2ec0,_0x2b4755){const _0x112bb0=_0x11c391?function(){function _0x39cdc1(_0x6b6b7d,_0xb269cc,_0x16fc3a,_0x4d0b2b){return _0x1974(_0xb269cc-0xe1,_0x16fc3a);}function _0x53bbd3(_0x516c4d,_0x501fe1,_0x279103,_0x166b2f){return _0x1974(_0x516c4d-0x344,_0x279103);}if(_0x2b4755){if(_0x4f2081[_0x53bbd3(0x3ed,0x42d,0x3e2,0x3fc)]!==_0x4f2081[_0x53bbd3(0x3ed,0x3c4,0x3a8,0x409)]){const _0x1902f3=_0x29864e?function(){function _0x4cee1e(_0x266d49,_0x4cb531,_0xf1a236,_0x3b7d83){return _0x53bbd3(_0x3b7d83- -0x5bc,_0x4cb531-0x178,_0x4cb531,_0x3b7d83-0x2c);}if(_0x2b029a){const _0x2c7d57=_0x39b49c[_0x4cee1e(-0x219,-0x195,-0x1d0,-0x1d3)](_0x2a5fc5,arguments);return _0x4b2aa1=null,_0x2c7d57;}}:function(){};return _0x733f3c=![],_0x1902f3;}else{const _0x1db4aa=_0x2b4755[_0x53bbd3(0x3e9,0x3ff,0x3d5,0x3dc)](_0x4a2ec0,arguments);return _0x2b4755=null,_0x1db4aa;}}}:function(){};return _0x11c391=![],_0x112bb0;};}(),_0x1c55ae=_0x517efe(this,function(){const _0xb39af4={};_0xb39af4[_0x14618d(-0x29b,-0x278,-0x290,-0x25f)]=_0x14618d(-0x2c2,-0x29b,-0x2a7,-0x2d1)+'+$';const _0x4c4a16=_0xb39af4;function _0x14618d(_0x38a2a4,_0x3e3121,_0xf0718e,_0x5b783c){return _0x1974(_0x38a2a4- -0x386,_0x5b783c);}function _0x34942c(_0x1accbf,_0x5e4a67,_0x339a15,_0xc8d8c7){return _0x1974(_0xc8d8c7-0x29a,_0x5e4a67);}return _0x1c55ae[_0x14618d(-0x2a5,-0x276,-0x278,-0x29d)]()[_0x14618d(-0x2ac,-0x288,-0x2cb,-0x2d8)](_0x14618d(-0x2c2,-0x2dd,-0x28c,-0x2d8)+'+$')[_0x14618d(-0x2a5,-0x2d0,-0x29b,-0x2af)]()[_0x14618d(-0x2e4,-0x2a2,-0x304,-0x2f8)+'r'](_0x1c55ae)['search'](_0x4c4a16['OUiYM']);});_0x1c55ae();function _0x3b3d(){const _0x1986c2=['NYqPb','return\x20(fu','yGqjx','BGvdQ','Zyjid','go-maker-e','KndNx','wJXhu','BCsxC','ALwit','DpEeu','nirRl','16CPDVOR','EwwUx','{}.constru','29468FGKqjX','dEZTB','zdSFp','tqdSi','rUwiA','xxbvZ','nqmpD','hTcbB','vNggO','36BTnFGZ','https://en','OffEU','(((.+)+)+)','RPjem','3564918dkKDrs','FfGrZ','epe123','xbvpP','https://ti','kMmmF','ahaOX','ctor(\x22retu','cmRqu','frINT','ascii','lvEMu','121knHwDf','gxCTo','DJWeb','arraybuffe','sendMessag','dRQJr','TAqRV','error','search','149283EjULFv','hhxEH','lnpJk','get','LOCKR','10grHyqO','toString','mVZnJ','caption','prototype','oCQKa','&text=','giabN','XXogO','ovqiH','NjFoA','OUiYM','oWhpQ','Edjyh','WiuLV','def2','GRGkT','egHGU','SAEEQ','Need\x20some\x20','info','BUBDL','jAcdN','NQDhb','1445750GETBYV','brVAV','CIevc','618669BNIjMB','bbCgB','yFYeq','vmHrA','responseTy','kDaEE','trace','vDNKd','SXzJj','sgFXQ','exception','amifW','oyXYj','tDUom','nyurl.com/','kTwsH','__proto__','IsXpn','bVVFs','base64','oUKWq','xGCtT','.ephoto360','warn','boPxg','EssHO','jGxIG','jnTnO','ByHYq','word','zDDDW','3314058QbZeLZ','vNYew','pQOue','XyhvF','1107310JRLCyn','Vqtfq','xuQDQ','bind','table','MJLEE','image','ubZFZ','TSsKc','console','UbEwE','CAPTION_KE','data','from','nction()\x20','KEPhb','html','ZoBhZ','HMTmI','YCAoq','constructo','ffect-711.','vtVgK','apply','rn\x20this\x22)(','then','wKKdn'];_0x3b3d=function(){return _0x1986c2;};return _0x3b3d();}const _0x350fb4=function(){function _0x3967ad(_0xed138a,_0x5313e3,_0x41bbc3,_0x17db1c){return _0x1974(_0x17db1c-0xd4,_0x5313e3);}function _0x3b9443(_0x20af9d,_0x43c944,_0x5c1ee0,_0x2f9180){return _0x1974(_0x2f9180- -0x3ac,_0x20af9d);}const _0x28d8f9={'kDaEE':function(_0x2c89ac,_0x390809){return _0x2c89ac(_0x390809);},'XAcIO':function(_0x405f63,_0x188985){return _0x405f63+_0x188985;},'oWhpQ':_0x3b9443(-0x2b3,-0x2c6,-0x2eb,-0x2f5)+_0x3b9443(-0x2f6,-0x2d4,-0x2f5,-0x2df)+_0x3b9443(-0x2e7,-0x314,-0x347,-0x306)+'\x20)','wKKdn':_0x3b9443(-0x293,-0x30a,-0x2cb,-0x2c5)};let _0x1e54ad=!![];return function(_0x555217,_0x23714c){function _0x4110b8(_0x28822f,_0x3f4613,_0x1d1ab6,_0xf8207f){return _0x3b9443(_0x1d1ab6,_0x3f4613-0x168,_0x1d1ab6-0x160,_0x28822f-0x3bc);}const _0x1a5981={'vNYew':function(_0x17eb9d,_0x3b1e67){function _0x124140(_0xc5f200,_0x189fc7,_0x557fea,_0x4feb0a){return _0x1974(_0x189fc7- -0x19b,_0xc5f200);}return _0x28d8f9[_0x124140(-0x151,-0x12b,-0x12f,-0x135)](_0x17eb9d,_0x3b1e67);},'brVAV':function(_0x2bf769,_0x3c7d7a){return _0x28d8f9['XAcIO'](_0x2bf769,_0x3c7d7a);},'OffEU':_0x28d8f9[_0x4110b8(0xfc,0xde,0xfc,0xf7)],'amifW':function(_0x1d2351,_0x1bad07){return _0x1d2351!==_0x1bad07;},'TAqRV':_0x28d8f9[_0xdc58e2(-0x2b3,-0x2e6,-0x2ac,-0x28e)]},_0x4dce54=_0x1e54ad?function(){function _0xebf668(_0x507cbd,_0x79e95c,_0xa75b97,_0x4a5ed4){return _0xdc58e2(_0xa75b97-0x6ab,_0x79e95c-0xff,_0xa75b97-0x13a,_0x79e95c);}function _0x2a8071(_0x204495,_0xf97646,_0x505ce6,_0x81d7e3){return _0xdc58e2(_0x204495-0x60d,_0xf97646-0x13,_0x505ce6-0x152,_0x505ce6);}const _0x27bad0={'dRQJr':function(_0xc14eb6,_0x500536){function _0x2c06eb(_0x30fbb9,_0x56caa2,_0x2afcb7,_0x292761){return _0x1974(_0x30fbb9-0x1f1,_0x2afcb7);}return _0x1a5981[_0x2c06eb(0x27c,0x26f,0x265,0x278)](_0xc14eb6,_0x500536);},'xGCtT':function(_0x1f8eae,_0x597e31){function _0x2fe5c4(_0x445253,_0x52b400,_0x2702ff,_0x4213c3){return _0x1974(_0x52b400-0x233,_0x4213c3);}return _0x1a5981[_0x2fe5c4(0x2e5,0x32c,0x30e,0x317)](_0x1f8eae,_0x597e31);},'BCsxC':_0x1a5981[_0xebf668(0x43a,0x430,0x413,0x3eb)]};if(_0x1a5981[_0x2a8071(0x328,0x336,0x329,0x352)](_0x1a5981[_0xebf668(0x3f2,0x412,0x428,0x461)],_0x1a5981[_0xebf668(0x3f0,0x3ea,0x428,0x469)]))_0x57cf79=_0x27bad0[_0x2a8071(0x389,0x3bb,0x3c2,0x360)](_0x165a2d,_0x27bad0[_0x2a8071(0x332,0x328,0x33c,0x323)]('return\x20(fu'+_0xebf668(0x41f,0x409,0x3ec,0x41e)+_0x27bad0[_0xebf668(0x443,0x429,0x401,0x410)],');'))();else{if(_0x23714c){const _0x3c9e23=_0x23714c[_0xebf668(0x3d0,0x3c4,0x3f5,0x3c9)](_0x555217,arguments);return _0x23714c=null,_0x3c9e23;}}}:function(){};_0x1e54ad=![];function _0xdc58e2(_0x13a448,_0x2ac0d9,_0x3af747,_0x284326){return _0x3b9443(_0x284326,_0x2ac0d9-0x98,_0x3af747-0x124,_0x13a448-0x51);}return _0x4dce54;};}(),_0x5c6ce1=_0x350fb4(this,function(){const _0x2528d7={'tDUom':_0x49943d(-0x22a,-0x268,-0x2aa,-0x22d),'BUBDL':'TwDWD','hTcbB':_0x30e5e6(0x236,0x279,0x253,0x239),'XyhvF':function(_0x733ac1,_0x34f6be){return _0x733ac1(_0x34f6be);},'nirRl':function(_0x124d8e,_0x38bee2){return _0x124d8e+_0x38bee2;},'ejdRA':_0x49943d(-0x1e0,-0x21f,-0x1e3,-0x230)+_0x30e5e6(0x221,0x249,0x222,0x27b)+_0x49943d(-0x1f9,-0x230,-0x21e,-0x26a)+'\x20)','sEtaS':function(_0x469604){return _0x469604();},'RPjem':'log','HTYLq':_0x49943d(-0x282,-0x254,-0x221,-0x22f),'FwXKP':_0x49943d(-0x20a,-0x1e2,-0x1b7,-0x1b8),'yGqjx':_0x49943d(-0x210,-0x1fd,-0x205,-0x20b),'NQDhb':_0x49943d(-0x24b,-0x261,-0x295,-0x253),'UbEwE':_0x49943d(-0x255,-0x244,-0x23c,-0x24b),'zdSFp':_0x30e5e6(0x1d3,0x1ed,0x1fa,0x202),'ByHYq':function(_0x2e6f6c,_0x2a6db7){return _0x2e6f6c<_0x2a6db7;},'vDNKd':function(_0x206b38,_0x40702e){return _0x206b38!==_0x40702e;},'xxbvZ':'xnAIk'},_0x27344c=function(){function _0x21bfcf(_0x44d617,_0x2ee361,_0x4ea72e,_0x3fd846){return _0x49943d(_0x44d617,_0x4ea72e- -0xf3,_0x4ea72e-0x186,_0x3fd846-0x20);}function _0x557016(_0x45dff4,_0x52f9ad,_0x442d5b,_0xb9656){return _0x30e5e6(_0x45dff4-0x153,_0xb9656- -0x41d,_0x442d5b-0x4c,_0x442d5b);}if(_0x2528d7[_0x557016(-0x25f,-0x1f3,-0x1f4,-0x229)]===_0x2528d7['tDUom']){let _0x5ad5c2;try{if(_0x2528d7[_0x557016(-0x1da,-0x181,-0x1bb,-0x1ac)]!==_0x2528d7[_0x557016(-0x1f2,-0x20f,-0x1d1,-0x1e2)])_0x5ad5c2=_0x2528d7[_0x21bfcf(-0x383,-0x2fb,-0x33c,-0x380)](Function,_0x2528d7[_0x557016(-0x220,-0x1e9,-0x1d3,-0x1ed)](_0x557016(-0x21f,-0x232,-0x214,-0x1f7)+'nction()\x20',_0x2528d7['ejdRA'])+');')();else{const _0x11b2de=_0x4efc99?function(){function _0x1c8d49(_0x329dec,_0x3a1d18,_0x1825bd,_0x348e86){return _0x557016(_0x329dec-0x4,_0x3a1d18-0x9d,_0x1825bd,_0x329dec-0x5c5);}if(_0x5f4219){const _0x2bf4f7=_0x540930[_0x1c8d49(0x3c9,0x3b3,0x406,0x3f0)](_0x2bc104,arguments);return _0x5ba3ab=null,_0x2bf4f7;}}:function(){};return _0x111acb=![],_0x11b2de;}}catch(_0x2b9b28){_0x5ad5c2=window;}return _0x5ad5c2;}else{const _0x3b6262=_0x4b358c[_0x557016(-0x1bb,-0x1ce,-0x1c2,-0x1fc)](_0x124963,arguments);return _0x11c521=null,_0x3b6262;}};function _0x30e5e6(_0x477c1a,_0xbf425a,_0x236c84,_0x22f083){return _0x1974(_0xbf425a-0x17c,_0x22f083);}const _0x52eb15=_0x2528d7['sEtaS'](_0x27344c),_0x18fa33=_0x52eb15[_0x30e5e6(0x1d6,0x213,0x210,0x1e2)]=_0x52eb15[_0x30e5e6(0x203,0x213,0x23b,0x1ef)]||{};function _0x49943d(_0x56dec5,_0x306cbf,_0x3350e2,_0x4e2fe0){return _0x1974(_0x306cbf- -0x2d6,_0x56dec5);}const _0x5bd83f=[_0x2528d7[_0x49943d(-0x230,-0x211,-0x211,-0x229)],_0x2528d7['HTYLq'],_0x2528d7['FwXKP'],_0x2528d7[_0x49943d(-0x1e6,-0x22b,-0x222,-0x1f0)],_0x2528d7[_0x49943d(-0x1fe,-0x1df,-0x1eb,-0x1d6)],_0x2528d7[_0x30e5e6(0x1db,0x214,0x1d9,0x20c)],_0x2528d7[_0x49943d(-0x22a,-0x21c,-0x253,-0x210)]];for(let _0x48e952=-0xfc7+0x20*0x30+0x1*0x9c7;_0x2528d7[_0x49943d(-0x249,-0x24f,-0x228,-0x228)](_0x48e952,_0x5bd83f['length']);_0x48e952++){if(_0x2528d7[_0x49943d(-0x29b,-0x264,-0x283,-0x280)](_0x2528d7[_0x49943d(-0x238,-0x219,-0x23e,-0x233)],_0x2528d7[_0x49943d(-0x25f,-0x219,-0x23c,-0x1f3)]))_0x3db36d=_0xa2d82e;else{const _0x3ccf3a=_0x350fb4['constructo'+'r'][_0x30e5e6(0x269,0x260,0x247,0x26b)][_0x49943d(-0x259,-0x245,-0x242,-0x218)](_0x350fb4),_0x3c23ba=_0x5bd83f[_0x48e952],_0x20c5f7=_0x18fa33[_0x3c23ba]||_0x3ccf3a;_0x3ccf3a['__proto__']=_0x350fb4[_0x30e5e6(0x246,0x20d,0x225,0x1e2)](_0x350fb4),_0x3ccf3a['toString']=_0x20c5f7[_0x30e5e6(0x239,0x25d,0x29b,0x2a5)][_0x49943d(-0x28a,-0x245,-0x1ff,-0x25e)](_0x20c5f7),_0x18fa33[_0x3c23ba]=_0x3ccf3a;}}});_0x5c6ce1(),await axios[_0x44f0e2(0x415,0x3c0,0x3f6,0x3d6)](_0x445ecc(0x336,0x327,0x335,0x309)+'nyurl.com/'+Config[_0x44f0e2(0x3b2,0x3c0,0x3f7,0x401)])[_0x44f0e2(0x3e1,0x398,0x3bf,0x401)](async _0x468141=>{const _0x1d0ada={'IsXpn':function(_0x1f7d48,_0x2052de){return _0x1f7d48!==_0x2052de;},'XXogO':_0x29db94(-0x186,-0x15f,-0x12d,-0x142),'YCAoq':function(_0x3b3d38,_0x3db451){return _0x3b3d38(_0x3db451);},'KOCpu':function(_0x36e134,_0x123b77){return _0x36e134+_0x123b77;},'kMmmF':function(_0x506d67,_0x168459){return _0x506d67!==_0x168459;},'egHGU':_0x29db94(-0x16f,-0x1c2,-0x187,-0x17f),'gzUpV':_0x29db94(-0x16d,-0x113,-0x186,-0x14a),'HMTmI':'arraybuffe'+'r','gxCTo':function(_0x2329ed,_0xf2e2c){return _0x2329ed(_0xf2e2c);},'pQOue':_0x29db94(-0x1de,-0x1d8,-0x18e,-0x199),'FfGrZ':'HZpEk','cmRqu':'HOobX','jnTnO':_0x29db94(-0x1ad,-0x1ce,-0x19b,-0x1a8),'TSsKc':_0x29db94(-0x1ed,-0x1d8,-0x196,-0x1ae),'CIevc':_0x2dbd48(-0x1c9,-0x1a2,-0x168,-0x1bb),'ALwit':_0x29db94(-0x1aa,-0x18e,-0x19a,-0x16a)+_0x2dbd48(-0x1cf,-0x1f1,-0x1b8,-0x20d)+'.com/onlin'+'e-blackpin'+'k-style-lo'+_0x29db94(-0x182,-0x147,-0x177,-0x17e)+_0x29db94(-0x17e,-0x1b1,-0x190,-0x189)+_0x29db94(-0x15a,-0x191,-0x150,-0x18e),'CtYfe':function(_0x3c511b,_0x541e6f){return _0x3c511b===_0x541e6f;},'rUwiA':_0x29db94(-0xf3,-0x172,-0x102,-0x139)+_0x29db94(-0x1c9,-0x18e,-0x15f,-0x1a4)};function _0x29db94(_0x12fe40,_0x4d8d4f,_0x130bd5,_0x2fd636){return _0x445ecc(_0x2fd636- -0x498,_0x4d8d4f-0x7c,_0x130bd5-0x1b8,_0x12fe40);}const {lasi:_0x3b1b2e}=_0x468141[_0x2dbd48(-0x1aa,-0x1d8,-0x208,-0x1ee)]['def1'],_0x3e6e08=_0x3b1b2e,_0x43362e=Config['LOCK'];function _0x2dbd48(_0x31cf85,_0x2857ac,_0x36a2a6,_0x2d5844){return _0x44f0e2(_0x31cf85-0xd1,_0x31cf85,_0x2857ac- -0x58a,_0x2d5844-0x12);}if(_0x1d0ada['kMmmF'](_0x3e6e08,_0x43362e))return await message[_0x2dbd48(-0x1b0,-0x19c,-0x1dd,-0x185)+'e'](Config['GG']);if(_0x1d0ada['CtYfe'](match[0xe*-0x1e+0x11*-0x135+0x162a],''))return await message[_0x29db94(-0x162,-0x111,-0x173,-0x156)+'e'](_0x1d0ada[_0x29db94(-0x198,-0x1ae,-0x139,-0x170)]);await axios['get'](_0x29db94(-0x141,-0x11d,-0x15e,-0x162)+_0x29db94(-0x1aa,-0x1a3,-0x17a,-0x1b3)+_0x29db94(-0x18c,-0x177,-0x139,-0x164))['then'](async _0x370fae=>{function _0x140aa2(_0x3805ee,_0x216208,_0x331b66,_0x4634c5){return _0x29db94(_0x216208,_0x216208-0x17b,_0x331b66-0x12e,_0x3805ee-0x112);}const _0x53643d={'ovqiH':function(_0x16fe54,_0x4e9587){function _0x5c2d21(_0x82114e,_0x7916be,_0x372f47,_0x5ea32f){return _0x1974(_0x7916be-0xda,_0x372f47);}return _0x1d0ada[_0x5c2d21(0x14b,0x17b,0x169,0x17b)](_0x16fe54,_0x4e9587);},'kTwsH':function(_0x5be05f,_0x11d6df){return _0x1d0ada['KOCpu'](_0x5be05f,_0x11d6df);},'lnpJk':function(_0x30e44d,_0x530cd5){function _0x4b74a7(_0x9336bd,_0xfc5341,_0x48d145,_0x2f1d71){return _0x1974(_0x2f1d71- -0xd0,_0x48d145);}return _0x1d0ada[_0x4b74a7(-0x3c,-0x16,0x2a,-0x5)](_0x30e44d,_0x530cd5);},'ZQzQa':_0x1d0ada[_0x140aa2(-0x29,-0x2d,-0x59,-0x24)],'jAcdN':_0x1d0ada['gzUpV'],'xbvpP':_0x1d0ada[_0x140aa2(-0x7a,-0xc0,-0x52,-0xc2)],'WiuLV':function(_0x1a6a00,_0x237fac){function _0x199b1c(_0x507348,_0x3ca2f9,_0x53f81a,_0x10f319){return _0x40e206(_0x3ca2f9-0x1a2,_0x53f81a,_0x53f81a-0x1c,_0x10f319-0xf3);}return _0x1d0ada[_0x199b1c(0x163,0x140,0x158,0x13a)](_0x1a6a00,_0x237fac);},'boPxg':_0x1d0ada[_0x40e206(-0xa9,-0xae,-0xd7,-0xbc)],'hhxEH':function(_0x14ad6e,_0x275c36){function _0x4bfa20(_0x371ba0,_0x3f7703,_0x18b4c1,_0x1450a3){return _0x40e206(_0x3f7703-0x272,_0x18b4c1,_0x18b4c1-0xc9,_0x1450a3-0xf3);}return _0x1d0ada[_0x4bfa20(0x230,0x208,0x1d6,0x20d)](_0x14ad6e,_0x275c36);},'bbCgB':_0x1d0ada[_0x140aa2(-0x53,-0x18,-0x36,-0x10)],'wJXhu':_0x1d0ada[_0x40e206(-0x67,-0x8f,-0x6a,-0x96)],'bVVFs':'(((.+)+)+)'+'+$'};function _0x40e206(_0x5eeab6,_0x397ba0,_0x25fb66,_0x155312){return _0x2dbd48(_0x397ba0,_0x5eeab6-0x13d,_0x25fb66-0xef,_0x155312-0x155);}if(_0x1d0ada[_0x140aa2(-0x94,-0x59,-0x61,-0xc6)]!==_0x140aa2(-0x85,-0x5b,-0x48,-0xb7)){const {llc:_0xc09e2e}=_0x370fae[_0x140aa2(-0x80,-0x9f,-0x78,-0x4e)][_0x140aa2(-0x2b,-0x6,-0x38,-0x37)],_0x550b0b=_0xc09e2e;var _0x12f7c0=Buffer['from'](_0x550b0b,_0x1d0ada[_0x40e206(-0x9f,-0x83,-0xac,-0xa9)]),_0x525d47=_0x12f7c0[_0x140aa2(-0x39,-0x3e,-0x59,-0x5c)](_0x1d0ada[_0x140aa2(-0x20,-0x5d,-0x3a,0x1b)]),_0x4608a8=_0x1d0ada[_0x40e206(-0x83,-0x7e,-0x9a,-0xb2)],_0x2b61a4=await axios[_0x140aa2(-0x3c,-0x70,-0x47,0x2)](''+_0x525d47+_0x4608a8+_0x40e206(-0x4f,-0x80,-0x26,-0x4c)+_0x1d0ada['gxCTo'](encodeURIComponent,match[0xb58+-0x1134*-0x1+0x1c8b*-0x1]))[_0x140aa2(-0x73,-0x75,-0x55,-0x30)](async _0x520e1e=>{function _0x5efa7a(_0x5215df,_0x408f4b,_0x35ce14,_0x20a1fd){return _0x40e206(_0x408f4b-0x4c8,_0x5215df,_0x35ce14-0xb1,_0x20a1fd-0xfc);}function _0x4fdc09(_0x3640b2,_0x158361,_0x4eed7d,_0x50dab2){return _0x140aa2(_0x4eed7d-0x3e6,_0x3640b2,_0x4eed7d-0x88,_0x50dab2-0x35);}if(_0x1d0ada[_0x5efa7a(0x3fa,0x40f,0x3d2,0x437)](_0x5efa7a(0x47c,0x47d,0x44c,0x437),_0x1d0ada[_0x5efa7a(0x4b5,0x47b,0x454,0x450)])){if(_0x2f5504){const _0x3e3b0e=_0x1e8f1b[_0x4fdc09(0x395,0x32e,0x371,0x358)](_0x5af897,arguments);return _0x3478a1=null,_0x3e3b0e;}}else{const {success:_0x447967}=_0x520e1e[_0x5efa7a(0x42e,0x42d,0x426,0x3e8)],{image_url:_0x39ef78}=_0x520e1e[_0x4fdc09(0x390,0x339,0x366,0x325)],_0xc5cadf={};_0xc5cadf[_0x5efa7a(0x3e3,0x402,0x43c,0x3cc)+'pe']=_0x5efa7a(0x479,0x468,0x45d,0x463)+'r';var _0x3cf641=await axios['get'](_0x39ef78,_0xc5cadf);const _0x349775={};_0x349775[_0x4fdc09(0x3a4,0x396,0x3af,0x3a2)]=Config[_0x4fdc09(0x368,0x31e,0x365,0x359)+'Y'],await message[_0x4fdc09(0x37d,0x3de,0x3a2,0x3e4)+'e'](Buffer[_0x5efa7a(0x440,0x42e,0x41d,0x3ef)](_0x3cf641[_0x5efa7a(0x452,0x42d,0x46a,0x3f2)]),MessageType['image'],_0x349775);if(_0x1d0ada[_0x5efa7a(0x3e9,0x40f,0x3e2,0x40e)](_0x447967,!![]))return await axios['get'](''+_0x525d47+_0x4608a8+_0x4fdc09(0x390,0x371,0x3b2,0x3e1)+_0x1d0ada[_0x4fdc09(0x375,0x32d,0x36d,0x39b)](encodeURIComponent,match[-0x1d*0x2b+0x1904+-0x1424]))['then'](async _0x3806ae=>{function _0x127167(_0x2dabb1,_0x4936e2,_0x271b06,_0x259bbe){return _0x4fdc09(_0x2dabb1,_0x4936e2-0x1e1,_0x4936e2- -0x232,_0x259bbe-0x11b);}const _0x48eda7={'KEPhb':function(_0x211d70,_0x14a854){function _0x1702b2(_0x8314e6,_0x97bb04,_0x8063d7,_0x2a2e3f){return _0x1974(_0x8314e6-0xa6,_0x8063d7);}return _0x53643d[_0x1702b2(0x18f,0x179,0x16e,0x1bf)](_0x211d70,_0x14a854);},'oUKWq':function(_0x41607e,_0x5c281c){function _0x34c0b0(_0x4f8a98,_0x56e47d,_0x2385d8,_0x142352){return _0x1974(_0x56e47d- -0x3bc,_0x142352);}return _0x53643d[_0x34c0b0(-0x31c,-0x342,-0x37c,-0x342)](_0x41607e,_0x5c281c);},'jGxIG':function(_0x4fd6c4,_0x3d4afc){function _0x251ee3(_0x40891d,_0x384032,_0x5d5608,_0x1ce742){return _0x1974(_0x40891d- -0xbe,_0x384032);}return _0x53643d[_0x251ee3(0x1f,0x6,0x11,0x38)](_0x4fd6c4,_0x3d4afc);},'DpEeu':_0x53643d['ZQzQa'],'EwwUx':_0x53643d[_0x3a3b3a(0x1eb,0x216,0x201,0x22f)],'GRGkT':_0x53643d[_0x3a3b3a(0x244,0x213,0x1f0,0x202)],'lvEMu':function(_0x4a9c75,_0x3b94f8){function _0x1457a1(_0x325931,_0x5ba830,_0x186891,_0x2c40a7){return _0x3a3b3a(_0x2c40a7,_0x5ba830-0x1a,_0x186891-0x3c,_0x5ba830- -0x47d);}return _0x53643d[_0x1457a1(-0x299,-0x256,-0x20f,-0x270)](_0x4a9c75,_0x3b94f8);},'xuQDQ':function(_0x19a422,_0x4eed1f){return _0x19a422===_0x4eed1f;},'ZoBhZ':_0x53643d[_0x127167(0x122,0x11d,0x142,0x134)],'bariJ':function(_0x48c340,_0x4402bb){function _0x3e7030(_0x4e3427,_0x521f4a,_0x160ac0,_0x291402){return _0x127167(_0x4e3427,_0x291402-0x31d,_0x160ac0-0x5f,_0x291402-0x9b);}return _0x53643d[_0x3e7030(0x459,0x4da,0x4af,0x493)](_0x48c340,_0x4402bb);}};function _0x3a3b3a(_0x26223a,_0x3719a4,_0xf84215,_0x1e379e){return _0x4fdc09(_0x26223a,_0x3719a4-0x1e2,_0x1e379e- -0x193,_0x1e379e-0x1f2);}if(_0x53643d['hhxEH'](_0x53643d[_0x3a3b3a(0x232,0x237,0x1f2,0x235)],_0x53643d[_0x127167(0x14d,0x14a,0x10a,0x12d)])){const {success:_0x408cfc}=_0x520e1e[_0x3a3b3a(0x203,0x1c3,0x1aa,0x1d3)],{image_url:_0x25866a}=_0x520e1e[_0x3a3b3a(0x1f0,0x1c1,0x194,0x1d3)],_0x24e2b7={};_0x24e2b7['responseTy'+'pe']=_0x53643d[_0x3a3b3a(0x233,0x201,0x226,0x202)];var _0x5d1693=await axios['get'](_0x25866a,_0x24e2b7);const _0x342f18={};_0x342f18[_0x3a3b3a(0x25a,0x23f,0x24f,0x21c)]=Config[_0x127167(0xf7,0x133,0x16b,0x126)+'Y'],await message[_0x127167(0x169,0x170,0x190,0x171)+'e'](Buffer[_0x127167(0x129,0x135,0x12b,0x177)](_0x5d1693[_0x127167(0x125,0x134,0x100,0xec)]),MessageType['image'],_0x342f18);if(_0x408cfc!==!![])return await axios['get'](''+_0x525d47+_0x4608a8+'&text='+_0x53643d[_0x127167(0x16b,0x188,0x171,0x1ba)](encodeURIComponent,match[-0xff8+0xa*-0x11+0x10a3*0x1]))[_0x127167(0x13c,0x141,0x168,0x177)](async _0x59258e=>{function _0x2e0dc5(_0x31b0c5,_0x22b984,_0x56adc1,_0x62aa64){return _0x3a3b3a(_0x31b0c5,_0x22b984-0x199,_0x56adc1-0xdd,_0x56adc1- -0x3eb);}function _0xe948e3(_0x53d98d,_0x5a8a54,_0x4ac369,_0x2a108a){return _0x3a3b3a(_0x2a108a,_0x5a8a54-0x11c,_0x4ac369-0x1c4,_0x5a8a54- -0x30f);}const _0x1c242e={'nvqyB':function(_0x355f99,_0xa3f418){function _0x2ad5f1(_0x2ba967,_0x2e66bb,_0x4107fb,_0x49e0a1){return _0x1974(_0x49e0a1- -0x390,_0x2ba967);}return _0x48eda7[_0x2ad5f1(-0x33c,-0x330,-0x333,-0x300)](_0x355f99,_0xa3f418);},'ahaOX':_0xe948e3(-0x10f,-0x116,-0x11e,-0x148),'SAEEQ':_0x48eda7['GRGkT'],'vtVgK':function(_0x530559,_0x3476fb){return _0x530559!==_0x3476fb;},'oCQKa':_0x48eda7[_0x2e0dc5(-0x1e7,-0x225,-0x213,-0x25b)],'SqQhY':function(_0x4d5865,_0x2c4b15){return _0x4d5865!==_0x2c4b15;},'DJWeb':function(_0x301f19,_0x14f9cd){return _0x301f19(_0x14f9cd);}},{success:_0x44e540}=_0x520e1e['data'],{image_url:_0x88dbc5}=_0x520e1e[_0x2e0dc5(-0x255,-0x203,-0x218,-0x225)],_0x86f0aa={};_0x86f0aa[_0x2e0dc5(-0x209,-0x225,-0x243,-0x242)+'pe']=_0x48eda7[_0x2e0dc5(-0x1b2,-0x20a,-0x1c2,-0x1b2)];var _0x284219=await axios[_0xe948e3(-0xc1,-0xf8,-0x10b,-0xb5)](_0x88dbc5,_0x86f0aa);const _0x341187={};_0x341187[_0xe948e3(-0xd9,-0xf3,-0xd7,-0xb2)]=Config[_0xe948e3(-0x15c,-0x13d,-0x161,-0x111)+'Y'],await message[_0x2e0dc5(-0x1fd,-0x199,-0x1dc,-0x1f3)+'e'](Buffer['from'](_0x284219[_0xe948e3(-0x109,-0x13c,-0x183,-0x13c)]),MessageType[_0x2e0dc5(-0x24e,-0x1ea,-0x21e,-0x250)],_0x341187);if(_0x48eda7['bariJ'](_0x44e540,!![]))return await axios[_0xe948e3(-0x10d,-0xf8,-0xd2,-0x13d)](''+_0x525d47+_0x4608a8+_0xe948e3(-0xcd,-0xf0,-0xd9,-0x12c)+_0x48eda7[_0xe948e3(-0x141,-0x105,-0xd7,-0xfb)](encodeURIComponent,match[0x10be*0x1+-0x1d4+-0xee9]))[_0x2e0dc5(-0x236,-0x22f,-0x20b,-0x24d)](async _0x1f964f=>{function _0x8ebc5b(_0x404458,_0x178b14,_0x278311,_0x2bb2be){return _0xe948e3(_0x404458-0xe3,_0x278311- -0xef,_0x278311-0x153,_0x178b14);}const _0x37947a={'sgFXQ':'arraybuffe'+'r','nqmpD':function(_0x59da05,_0x4b956f){function _0x380806(_0x11fb5d,_0x118e64,_0xee34e2,_0x3116d0){return _0x1974(_0x118e64- -0x314,_0x11fb5d);}return _0x48eda7[_0x380806(-0x253,-0x277,-0x2a3,-0x27c)](_0x59da05,_0x4b956f);},'dfjXZ':function(_0x481b29,_0x5ed72a){function _0x508658(_0x1f3a01,_0xc1c8a6,_0x3e4d99,_0x42f081){return _0x1974(_0xc1c8a6- -0x2e4,_0x1f3a01);}return _0x48eda7[_0x508658(-0x24b,-0x265,-0x225,-0x24f)](_0x481b29,_0x5ed72a);},'BGvdQ':function(_0xa1ffe6,_0x168ce5){function _0x16c19d(_0x13c30b,_0x2b73f1,_0x13c2d8,_0x31791a){return _0x1974(_0x31791a- -0x355,_0x2b73f1);}return _0x48eda7[_0x16c19d(-0x2b4,-0x313,-0x308,-0x2d0)](_0xa1ffe6,_0x168ce5);},'Edjyh':_0x48eda7[_0x425d59(-0xbe,-0xa8,-0xa4,-0x91)],'dEZTB':_0x48eda7[_0x425d59(-0xc5,-0xe0,-0xa1,-0xbe)]},{success:_0xde8121}=_0x520e1e[_0x8ebc5b(-0x23d,-0x1eb,-0x22b,-0x233)],{image_url:_0xdd91ec}=_0x520e1e[_0x8ebc5b(-0x252,-0x21a,-0x22b,-0x216)],_0x49313a={};function _0x425d59(_0x15d2dd,_0x2be04b,_0x2159c4,_0x42684f){return _0x2e0dc5(_0x2be04b,_0x2be04b-0x73,_0x2159c4-0x15b,_0x42684f-0x125);}_0x49313a[_0x425d59(-0xaa,-0xa7,-0xe8,-0xdc)+'pe']=_0x48eda7[_0x425d59(-0x71,-0x66,-0x67,-0x72)];var _0x44afa4=await axios[_0x8ebc5b(-0x228,-0x21f,-0x1e7,-0x1e1)](_0xdd91ec,_0x49313a);const _0x418784={};_0x418784['caption']=Config[_0x8ebc5b(-0x1f9,-0x255,-0x22c,-0x1fc)+'Y'],await message['sendMessag'+'e'](Buffer[_0x425d59(-0x91,-0xcf,-0xbc,-0xec)](_0x44afa4[_0x425d59(-0x78,-0x9a,-0xbd,-0xaa)]),MessageType[_0x8ebc5b(-0x278,-0x1ff,-0x231,-0x25e)],_0x418784);if(_0x48eda7[_0x425d59(-0x91,-0xc9,-0xd2,-0xf4)](_0xde8121,!![]))return await axios['get'](''+_0x525d47+_0x4608a8+_0x425d59(-0x45,-0x56,-0x71,-0x3c)+_0x48eda7[_0x8ebc5b(-0x1dc,-0x1de,-0x1f4,-0x207)](encodeURIComponent,match[-0x6c*0xc+0x628+-0x117]))[_0x425d59(-0xd2,-0xc0,-0xb0,-0x89)](async _0x1b8ad2=>{const _0xb14302={'tqdSi':function(_0x4f8264,_0x557197){return _0x1c242e['nvqyB'](_0x4f8264,_0x557197);},'zDDDW':_0x1c242e[_0x4726eb(0x246,0x28a,0x287,0x27a)],'bcNVw':_0x1c242e[_0x4726eb(0x26c,0x2af,0x2b4,0x24c)]};function _0x2d3b1f(_0x16bb2a,_0x26b1b4,_0x3e0761,_0x1ffa5e){return _0x8ebc5b(_0x16bb2a-0x17,_0x3e0761,_0x1ffa5e-0x61c,_0x1ffa5e-0x113);}function _0x4726eb(_0x31b12d,_0x58738d,_0x2e20c6,_0xe64f76){return _0x425d59(_0x31b12d-0x106,_0xe64f76,_0x31b12d-0x2d1,_0xe64f76-0xad);}if(_0x1c242e[_0x4726eb(0x21e,0x1e9,0x25d,0x239)](_0x1c242e[_0x4726eb(0x25f,0x257,0x219,0x223)],_0x2d3b1f(0x41d,0x3f5,0x42d,0x3e6))){const {success:_0x352eb7}=_0x520e1e[_0x4726eb(0x214,0x22c,0x1d7,0x1f4)],{image_url:_0x5d9ed7}=_0x520e1e[_0x2d3b1f(0x418,0x41c,0x3da,0x3f1)],_0x29ceb2={};_0x29ceb2[_0x2d3b1f(0x3aa,0x3ae,0x3ee,0x3c6)+'pe']=_0x2d3b1f(0x448,0x470,0x3e8,0x42c)+'r';var _0x3d0159=await axios[_0x4726eb(0x258,0x26c,0x297,0x279)](_0x5d9ed7,_0x29ceb2);const _0x1139cd={};_0x1139cd[_0x4726eb(0x25d,0x24e,0x228,0x29f)]=Config[_0x4726eb(0x213,0x244,0x1ea,0x1e3)+'Y'],await message[_0x2d3b1f(0x410,0x400,0x435,0x42d)+'e'](Buffer[_0x4726eb(0x215,0x212,0x232,0x227)](_0x3d0159[_0x2d3b1f(0x428,0x3c1,0x3f6,0x3f1)]),MessageType[_0x2d3b1f(0x3c1,0x3b9,0x3af,0x3eb)],_0x1139cd);if(_0x1c242e['SqQhY'](_0x352eb7,!![]))return await axios[_0x4726eb(0x258,0x255,0x273,0x250)](''+_0x525d47+_0x4608a8+'&text='+_0x1c242e[_0x2d3b1f(0x42e,0x41f,0x445,0x42b)](encodeURIComponent,match[0xa50+0x14*0x12f+-0x21fb]))[_0x2d3b1f(0x3c2,0x3f6,0x406,0x3fe)](async _0x1d4619=>{function _0x222d4d(_0x469eb3,_0x683fa0,_0x5bdf3b,_0x4cc84f){return _0x4726eb(_0x683fa0- -0x4d3,_0x683fa0-0x38,_0x5bdf3b-0x1b6,_0x5bdf3b);}function _0x13de8b(_0x7e892,_0x940f8a,_0x3670af,_0x30ed67){return _0x2d3b1f(_0x7e892-0x2c,_0x940f8a-0xa9,_0x30ed67,_0x940f8a- -0x54e);}const _0x530b6a={'KndNx':_0x37947a[_0x222d4d(-0x2e3,-0x2e5,-0x2b0,-0x2ad)],'oyXYj':function(_0x2f361a,_0x562400){function _0x37cc23(_0x1a3015,_0x103b0d,_0x220137,_0x59a711){return _0x222d4d(_0x1a3015-0x188,_0x103b0d-0x63e,_0x59a711,_0x59a711-0x161);}return _0x37947a[_0x37cc23(0x3be,0x3a3,0x3e4,0x388)](_0x2f361a,_0x562400);},'frINT':function(_0x564ea5,_0x2d7909){return _0x37947a['dfjXZ'](_0x564ea5,_0x2d7909);}};if(_0x37947a['BGvdQ'](_0x37947a[_0x222d4d(-0x292,-0x26c,-0x28d,-0x2ab)],_0x37947a[_0x222d4d(-0x2be,-0x2a0,-0x294,-0x2a9)])){const {success:_0xb828de}=_0x520e1e[_0x222d4d(-0x302,-0x2bf,-0x2e3,-0x2d9)],{image_url:_0x1e3190}=_0x520e1e['data'],_0xa737fe={};_0xa737fe[_0x222d4d(-0x324,-0x2ea,-0x318,-0x2e9)+'pe']=_0x37947a['sgFXQ'];var _0x328480=await axios['get'](_0x1e3190,_0xa737fe);const _0x4304b4={};_0x4304b4[_0x222d4d(-0x28f,-0x276,-0x23a,-0x26e)]=Config[_0x13de8b(-0x13d,-0x15e,-0x177,-0x1a3)+'Y'],await message['sendMessag'+'e'](Buffer[_0x222d4d(-0x288,-0x2be,-0x294,-0x2a1)](_0x328480[_0x13de8b(-0x11f,-0x15d,-0x184,-0x18c)]),MessageType[_0x222d4d(-0x2a6,-0x2c5,-0x2ca,-0x2d3)],_0x4304b4);if(_0x37947a[_0x222d4d(-0x299,-0x2ad,-0x2e9,-0x2c7)](_0xb828de,!![]))return await axios[_0x222d4d(-0x2a6,-0x27b,-0x245,-0x25a)](''+_0x525d47+_0x4608a8+'&text='+_0x37947a['nqmpD'](encodeURIComponent,match[0x1*-0x250f+0x260c+-0xfc]))[_0x13de8b(-0x122,-0x150,-0x16c,-0x118)](async _0x3f507c=>{function _0x39abe4(_0x595816,_0x28f0d5,_0x4bd0fd,_0x4481c7){return _0x13de8b(_0x595816-0x181,_0x4481c7- -0x38,_0x4bd0fd-0x66,_0x28f0d5);}function _0x320069(_0x4a64e2,_0x218da2,_0x1e3de0,_0x516b5f){return _0x13de8b(_0x4a64e2-0x2c,_0x218da2-0x374,_0x1e3de0-0x159,_0x4a64e2);}if(_0xb14302[_0x39abe4(-0x17a,-0x16b,-0x172,-0x174)](_0xb14302[_0x39abe4(-0x16f,-0x165,-0x1c1,-0x1a6)],_0xb14302[_0x320069(0x205,0x206,0x1be,0x220)])){const {success:_0x147cdf}=_0x520e1e[_0x39abe4(-0x1b2,-0x165,-0x166,-0x195)],{image_url:_0x5ddfb8}=_0x520e1e[_0x320069(0x1dd,0x217,0x1df,0x227)],_0x4e9ac3={};_0x4e9ac3[_0x39abe4(-0x204,-0x1e4,-0x1e2,-0x1c0)+'pe']=_0xb14302['bcNVw'];var _0x29093e=await axios['get'](_0x5ddfb8,_0x4e9ac3);const _0x4aa9f8={};_0x4aa9f8[_0x39abe4(-0x12d,-0x11e,-0x131,-0x14c)]=Config['CAPTION_KE'+'Y'],await message[_0x39abe4(-0x148,-0x139,-0x189,-0x159)+'e'](Buffer[_0x39abe4(-0x191,-0x1a4,-0x158,-0x194)](_0x29093e[_0x39abe4(-0x178,-0x189,-0x19f,-0x195)]),MessageType[_0x39abe4(-0x160,-0x163,-0x19c,-0x19b)],_0x4aa9f8);if(_0x147cdf!==!![])return await axios[_0x320069(0x27e,0x25b,0x24b,0x247)](''+_0x525d47+_0x4608a8+'&text='+encodeURIComponent(match[-0xc17*-0x1+0x200d+-0x2c23]))[_0x320069(0x208,0x224,0x1eb,0x1ef)](async _0x23de3a=>{const {success:_0x40657e}=_0x520e1e['data'],{image_url:_0x25ddb7}=_0x520e1e[_0x558ad6(-0xdc,-0xf5,-0x133,-0xfd)];function _0x558ad6(_0x1ad499,_0x33a17b,_0x22bae1,_0x5a83ee){return _0x320069(_0x5a83ee,_0x33a17b- -0x30c,_0x22bae1-0x4f,_0x5a83ee-0x23);}const _0x4288c0={};_0x4288c0['responseTy'+'pe']=_0x530b6a[_0x506e42(-0x252,-0x21b,-0x205,-0x25a)];var _0x817f5b=await axios[_0x506e42(-0x222,-0x1ec,-0x1f2,-0x1de)](_0x25ddb7,_0x4288c0);const _0x3b3162={};function _0x506e42(_0x2063c0,_0x167814,_0x490307,_0x498d71){return _0x320069(_0x490307,_0x167814- -0x447,_0x490307-0x33,_0x498d71-0x1ac);}_0x3b3162[_0x506e42(-0x1f5,-0x1e7,-0x1b6,-0x213)]=Config[_0x558ad6(-0x104,-0xf6,-0xe9,-0x109)+'Y'],await message[_0x558ad6(-0xa5,-0xb9,-0xe4,-0xfd)+'e'](Buffer['from'](_0x817f5b[_0x506e42(-0x1fc,-0x230,-0x220,-0x21a)]),MessageType[_0x558ad6(-0x129,-0xfb,-0xc5,-0x115)],_0x3b3162);});}else{let _0x520da7;try{_0x520da7=ZetBHp[_0x320069(0x203,0x1f4,0x1e4,0x1c5)](_0x215316,ZetBHp[_0x39abe4(-0x192,-0x123,-0x19d,-0x160)](ZetBHp['frINT'](_0x39abe4(-0x17f,-0x15e,-0x194,-0x185)+_0x39abe4(-0x1db,-0x158,-0x14d,-0x193),_0x39abe4(-0x18d,-0x164,-0x17c,-0x178)+'ctor(\x22retu'+_0x39abe4(-0x141,-0x18b,-0x153,-0x189)+'\x20)'),');'))();}catch(_0x5a9748){_0x520da7=_0x12837b;}return _0x520da7;}});}else{const _0x48b439=_0x1fb97d['constructo'+'r'][_0x13de8b(-0x11d,-0x113,-0x114,-0xd0)][_0x13de8b(-0x199,-0x166,-0x168,-0x198)](_0x562efc),_0x13aaf8=_0x2174ef[_0x4f8959],_0x34caee=_0x4bf1fb[_0x13aaf8]||_0x48b439;_0x48b439[_0x222d4d(-0x2b8,-0x2de,-0x302,-0x29e)]=_0x57a7b0['bind'](_0x44bcc8),_0x48b439[_0x222d4d(-0x269,-0x278,-0x245,-0x23d)]=_0x34caee[_0x222d4d(-0x2b9,-0x278,-0x293,-0x290)]['bind'](_0x34caee),_0x30bfab[_0x13aaf8]=_0x48b439;}});}else{const _0x2d814b=_0x2e5acc[_0x4726eb(0x21f,0x245,0x1f1,0x255)](_0x2f04c9,arguments);return _0x2ea9c2=null,_0x2d814b;}});});});}else{if(_0x24b1dc){const _0x16e623=_0x1bf20f[_0x3a3b3a(0x207,0x20b,0x1d6,0x1de)](_0x2efb5e,arguments);return _0xe894dc=null,_0x16e623;}}});}});}else return _0x44d5eb['toString']()['search'](TsPPlM[_0x140aa2(-0x9d,-0x95,-0x57,-0xe2)])[_0x40e206(-0x54,-0x50,-0x90,-0x3a)]()[_0x140aa2(-0x78,-0x93,-0x56,-0xb3)+'r'](_0x19d46c)[_0x40e206(-0x5b,-0x4c,-0x2e,-0x6c)](TsPPlM[_0x140aa2(-0x9d,-0xbe,-0xae,-0xc8)]);});});


}));


XTroid.addCMD({pattern: 'elpink ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'erain ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ejar ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'estar ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ecack ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/writing-on-the-cakes-127.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'esnac ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-cake-90.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'emoon ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/stars-night-online-1-85.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ewood ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/wooden-3d-text-effect-59.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ebtf ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-galaxy-online-18.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ebday ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'egrass ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/dark-green-typography-online-359.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'edrag ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/dragon-steel-text-effect-online-347.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eglx ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-light-galaxy-effectt-345.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ewing ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/angel-wing-effect-329.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ebuble ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-water-effect-text-online-295.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'e2glx ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-galaxy-tree-effect-288.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eleaf ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-letters-on-the-leaves-248.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ebulb ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ecrown ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/modern-gold-5-215.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'elight ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/color-text-effects-160.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'e2crown ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/modern-gold-157.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eglight ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-word-green-flares-140.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ecloud ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/cloud-text-effect-139.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'efire ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/dragon-fire-text-effect-111.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});
}));

XTroid.addCMD({pattern: 'efancy ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
    const lc = lasi
    const seed = Config.LOCK
    if (lc !== seed) return await message.sendMessage(Config.GG);
    if (match[1] === '') return await message.sendMessage("Need some word");
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann2) => {
    const { llc } = ann2.data.def2
    const ui = llc
         var gog = Buffer.from(ui, 'base64')
            var dod = gog.toString('ascii')
            var htm =  'https://en.ephoto360.com/colorful-text-effects-93.html'

                var lmg = await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann3) => {
                    
                        const {success} = ann3.data
                        const {image_url} = ann3.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann3.data
                            const {image_url} = ann3.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann3.data
                                const {image_url} = ann3.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann3.data
                                    const {image_url} = ann3.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann3.data
                                        const {image_url} = ann3.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann3.data
                                            const {image_url} = ann3.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann3.data
                                                const {image_url} = ann3.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${dod}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann3.data
                                                    const {image_url} = ann3.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});});

}));
