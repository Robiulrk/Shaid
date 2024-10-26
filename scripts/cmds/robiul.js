 module.exports = {
 config: {
	 name: "robiul",
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
 if (event.body && event.body.toLowerCase() === "robiul") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎--ভালোবাসা বলতে কিছু নেই ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗥𝗢𝗕𝗜𝗨𝗟 𝗞𝗜𝗡𝗚」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/2sGpa4P.mp4")
 });
 }
 }
}
