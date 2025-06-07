module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.0",
    author: "efat",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "hello goatbot inbox no prefix file enjoy the cmmand @ArYan"
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("𝐄𝐡𝐨𝐧 𝐤𝐢 𝐈𝐧𝐛𝐨𝐱 𝐂𝐡𝐞𝐤 𝐃𝐞𝐰𝐚𝐫 𝐤𝐨𝐭𝐡𝐚𝐨 𝐁𝐨𝐥𝐚 𝐋𝐚𝐠𝐛𝐞? 🙄", event.threadID);
      api.sendMessage("𝐊𝐢𝐫𝐞 🙂🫵🏼🫂", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
}
