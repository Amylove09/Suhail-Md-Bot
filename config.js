const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137831198";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_56_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWRXc0llTG5KaFpKb3YrYlRWZVQxOENLSjVOTEZjZ0ZhV2k1RU9SRkpKVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3JQOTZhV3RSUGVXcnRMa1MyVWg3QVwiLFxuICBcInBob25lSWRcIjogXCIwYTdkYzYxYy02MjNkLTRkOTMtYTFlMy05YzViMzc0OWNmNGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxMjcsXG4gICAgICAxNzIsXG4gICAgICA2NyxcbiAgICAgIDE1MixcbiAgICAgIDY2LFxuICAgICAgMjI3LFxuICAgICAgMTksXG4gICAgICAxNTQsXG4gICAgICAxNTUsXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDkyLFxuICAgICAgMTQ2LFxuICAgICAgMTY0LFxuICAgICAgOCxcbiAgICAgIDcsXG4gICAgICAxNjIsXG4gICAgICA4MCxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIzOCxcbiAgICAgIDEzLFxuICAgICAgMjE0LFxuICAgICAgODksXG4gICAgICA5MyxcbiAgICAgIDE0MSxcbiAgICAgIDE0NyxcbiAgICAgIDU5LFxuICAgICAgMTQ2LFxuICAgICAgMjAyLFxuICAgICAgMjI4LFxuICAgICAgMTE5LFxuICAgICAgMjA5LFxuICAgICAgNjgsXG4gICAgICAyMzAsXG4gICAgICAyMzcsXG4gICAgICAxMTUsXG4gICAgICAyMTMsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRThTUk1GVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzgzMTE5ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk3MDU4NDk4NDM4NTg6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdWo3VUlReG8zbHVBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImE0eitERnNmM0pIL0tKUTF2ejBDVGh3ZXd4YkxKTXJneFhzY0gzU1hUbms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQTNXaTdBSU5LQ2FRellXbGo2STN2UWtZMkxrRXJjamhKdDVPQUtVTWNiYlBvMVdkNTE1TUt3c1NJMzJzWGQ3WTdobFBSU3lxZ2U5enZHUWx6SEtsQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamo2SWp4U21ZTmVMeGdZajAwTlB1Y0k4MnZleUVySW1ZQThobngyUEl5d0RWWVgvZXBJODR4M3JGeGFrWFRTckoyMkJ3aTJ2ek1TcCtNN1o5ajdZREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNzgzMTE5ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk3MDk3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDS3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNLcS5qc29uIjogIntcImtleURhdGFcIjpcIkFLV1lmSmdLNmdYbkNrWFhWdjFmSG91SGpZMFRsN2lvVTdtdy83ejhwVTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwMjAyMzkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
