const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Alo bos, ${pushname}! 👋️
Ini adalah fitur yang tersedia dalam bot ini.
Selamat Mencoba^_^

Generator:
⌬ *${prefix}sticker*
⌬ *${prefix}stickergif*
⌬ *${prefix}stickergiphy*
⌬ *${prefix}meme*
⌬ *${prefix}quotemaker*
⌬ *${prefix}nulis*

Fun Menu (Group):
⌬ *${prefix}simisimi*
⌬ *${prefix}katakasar*
    ┷⌬ *${prefix}klasmen*
    
Download:
⌬ *${prefix}ytmp3*
⌬ *${prefix}ytmp4*
⌬ *${prefix}facebook*

Primbon:
⌬ *${prefix}artinama*
⌬ *${prefix}cekjodoh*

Search Any:
⌬ *${prefix}images*
⌬ *${prefix}sreddit*
⌬ *${prefix}resep*
⌬ *${prefix}stalkig*
⌬ *${prefix}wiki*
⌬ *${prefix}cuaca*
⌬ *${prefix}chord*
⌬ *${prefix}lirik*
⌬ *${prefix}ss*
⌬ *${prefix}play*
⌬ *${prefix}movie*
⌬ *${prefix}whatanime*

Random Teks:
⌬ *${prefix}fakta*
⌬ *${prefix}pantun*
⌬ *${prefix}katabijak*
⌬ *${prefix}quote*
⌬ *${prefix}cerpen*
⌬ *${prefix}puisi*

Random Images:
⌬ *${prefix}anime*
⌬ *${prefix}kpop*
⌬ *${prefix}memes*

Lain-lain:
⌬ *${prefix}tts*
⌬ *${prefix}translate*
⌬ *${prefix}resi*
⌬ *${prefix}covidindo*
⌬ *${prefix}ceklokasi*
⌬ *${prefix}shortlink*
⌬ *${prefix}bapakfont*

Tentang Bot:
⌬ *${prefix}tnc*
⌬ *${prefix}donasi*
⌬ *${prefix}botstat*
⌬ *${prefix}ownerbot*
⌬ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:

⌬ *${prefix}ban* - banned
⌬ *${prefix}bc* - promosi
⌬ *${prefix}leaveall* - keluar semua grup
⌬ *${prefix}clearall* - hapus semua chat

Ingat, Gunakan Bot ini dengan bijak ya ;)

Original Script By _*ArugaZ*_
Edited and Fixed by _*Zeon*_
Launched as _*Zeon-BOT*_`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ *Admin Command* ⚠
Ini adalah fitur khusus admin grup!

⌬ *${prefix}add*
⌬ *${prefix}kick* @tag
⌬ *${prefix}promote* @tag
⌬ *${prefix}demote* @tag
⌬ *${prefix}mutegrup*
⌬ *${prefix}tagall*
⌬ *${prefix}setpictgrup*
⌬ *${prefix}del*

===========================

⚠ [ *Khusus Admin Grup* ] ⚠
Ini adalah fitur khusus owner grup!
⌬ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

exports.textZeonBOT = () => {
    return `
*Zeon-BOT Details*

Thanks to *ArugaZ* for the original script.
This bot edited by *Zeon*.
Powered by *Zeon-BOT*.

Support us by follow our instagram account.

- *ArugaZ* : https://instagram.com/ini.arga/
- *Zeon* : https://instagram.com/itszeon__/

Contact Zeon or Zeon-BOT if you want to get more features of this Zeon-BOT^_^.
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
