const {
  jidNormalizedUser,
  delay
} = require('@whiskeysockets/baileys')
const owner = "94788231166@s.whatsapp.net"



async function command(msg,text,xeo) {
  let argArray = text.split(" ");
  let cmd = argArray[0];
  const botlid = xeo.user.lid;
  const botJid = jidNormalizedUser(xeo.user.id);
  const sender = msg.key.fromMe
    ? jidNormalizedUser(xeo.user.id) 
    : (msg.key.participant || msg.key.remoteJid);

  console.log(sender)
  const senderNumber = sender.split('@')[0]
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "user";
  const humen = async()=>{
    await xeo.sendPresenceUpdate("composing",from)
    //human like delay //typeing delay
    let time =Math.random()* 3000 + 1000;
    console.log(time)
    await delay(time);
    await xeo.sendPresenceUpdate("composing",from)
    await xeo.sendPresenceUpdate("available",from)
    
  }
  const reply = async(messageText)=>{
    await xeo.sendMessage(from,{
      text:messageText
    },{quoted: msg})
  }
  
  
  try {
    switch (cmd) {
      case 'alive':{
        await humen()
        await reply('*☯️𝙓𝙀𝙊 𝙂𝙄𝙏𝙃𝙐𝘽 𝙋𝙐𝘽𝙇𝙄𝘾𝙆 𝙇𝙀𝙍𝙄𝙉𝙂 𝘽𝙀𝙎𝙄𝘾 𝙎𝘾*');
        break;
      }
      case 'ping':{
        const startTime = Date.now()
        await reply('*🔰PING TEST🔰*')
        const endTime = Date.now();
        await humen();
        await reply(`💢 ${endTime - startTime}ms`)
        break;
      }
      default:{
        console.log("Is Not Avibale Command")
        break;
      }
    }
  } catch (err) {
    console.error('Error:', err);
    
  }
}

module.exports ={
  command
}