const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  Browsers,
  jidNormalizedUser,
  generateWAMessageFromContent
}= require('@whiskeysockets/baileys');
const pino = require('pino');
const config = require('./config.js')
const {command} = require('./command.js')
const { Long } = require('long');
const logger = pino({ level: "silent" });

console.log("root user: ",config.root)

async function welcome(xeo) {
  try{
    let xenoWelcome=`
╭───☾ *XEO BOT* ☽───╮
 *🐛Name :* XEO
 *🐛Versions :* 1.0V
 *🐛Release :* 2026/06
 *🐛Github :* lering sc
╰─────────────────╯
`
    await xeo.sendMessage(jidNormalizedUser(xeo.user.id),{
      image: { url: "./data/compressed_1781936918731.jpg" },
      caption: xenoWelcome,
    })
  }catch(e){
    console.log("welcome message sending error")
    console.error(e)
  }
}
/*
*https://www.npmjs.com/package/baileys
* read doc
*/
async function Ruwantha() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  // Create WebSocket instance
  //baileys us protobuf protocol(made by google) + websocket
  
  /*
  * WebSocket lifecycle:
  * 🧒 = You (Client), 👦 = Server
  * 1) 🧒 -> 👦 (Handshake)
  * 2) 🧒 <- 👦 (Accept)
  * 3) 🤝 (Connection Established)
  * 4) 🧒 <-> 👦 (Data Flow)
  * 5) messages.upsert (Server pushes events to you)
  */

  /*
  * Message Sending Flow (E2E Encryption):
  * 👦 = You, 🧒 = Recipient, ☯️ = WhatsApp Server
  * 1) 👦 -> ☯️ -> 🧒 (If user is online)
  * 2) 👦 -> ☯️ (If user is offline, server queues the message)
  * 3) ☯️ -> 🧒 (Delivered once user connects to server)
  */
  const xeo = makeWASocket({
    auth:state,
    logger,
    printQRInTerminal:false,
    browser: Browsers.macOS("Safari"),
    syncFullHistory: false
  })
  //session data save
  xeo.ev.on("creds.update", saveCreds);
  //connection update whatsapp web
  xeo.ev.on("connection.update", async({ connection, lastDisconnect, qr })=>{
    
    //connection hadeler
    if(connection === "close"){
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log(`Connection closed: ${lastDisconnect?.error}`);
      if (shouldReconnect) {
        setTimeout(Ruwantha, 4000);
      }
    }else if(connection === "open"){
      console.log("xeo starting")
      welcome(xeo);
    }
    // Pair new session (pairing code)
    if(!xeo.authState.creds.registered && qr){
      let num = config.nomber;
      if(!num || !/^\d{10,15}$/.test(num)){
        console.error("[!] Invalid nomber")
      }
      try{
        let code = await xeo.requestPairingCode(num);
      console.log("code ::",code)
      }catch(e){
        console.error(e.message)
        process.exit(1);
      }
    }
  });
  // Message handler
  //new massage is come to user /new massage update
  xeo.ev.on("messages.upsert", async({messages})=>{
    
    const msg = messages[0];
    //only get text message text content only
    let text = msg.message ? (msg.message.conversation || msg.message.extendedTextMessage?.text || '') : '';
    //jid,lid is whatsapp identify technology user/group
    //example :-94788231166@s.whatsapp.net
    /*{from} is message
    * 🧒-> 👦
    * 🧒 = messages sender
    * 👦 = you
    * from get a messages sender jid
    */
    const from = msg.key.remoteJid;
    const iscmd = text.startsWith(config.prefix);
    console.log(msg)
    if(iscmd){
      text = text.substring(1).trim();
      command(msg,text,xeo)
      console.log(text)
    }
    
  })
}


Ruwantha()