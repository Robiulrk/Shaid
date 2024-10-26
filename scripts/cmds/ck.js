 module.exports = {
 config: {
	 name: "ck",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "ck") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_রবিউল বসের পক্ষ থেকে সবাইকে I Love You❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗥𝗢𝗕𝗜𝗨𝗟 𝗞𝗜𝗡𝗚」",
 attachment: await global.utils.getStreamFromURL
	 var link=[
	"https://i.imgur.com/t15rB0W.mp4",
	 "https://i.imgur.com/qnXXBkE.mp4",
	 "https://i.imgur.com/qx6VpNR.mp4",
	 "https://i.imgur.com/wJWh62w.mp4"
 ]
	 });
 }
 }
}
