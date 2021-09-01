const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (dzz, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await dzz.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await dzz.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(dzz.user.jid)) {
            dzz.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(dzz.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await dzz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = dzz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `Hai Kak @${num.split('@')[0]} Selamat Datang\nSemoga Betah Ya..`
	            buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/9c41931cada0cfe68b8b7.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
		        dzz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove' && !mem.includes(dzz.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await dzz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = dzz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Dia Ngapain Keluar? @${num.split('@')[0]} Siapa Yang Bully Dia?`
                buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/9c41931cada0cfe68b8b7.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                dzz.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
