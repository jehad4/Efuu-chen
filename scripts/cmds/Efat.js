const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "efat",
        version: "1.0",
        author: "efat",
        countDown: 5,
        role: 1, // Only admins can use this
        shortDescription: "Show admin info",
        longDescription: "Displays detailed information about the admin",
        category: "admin",
        guide: "adminintro"
    },

    onStart: async function ({ message }) {
        const adminInfo = {
            name: "Joy",
            username: "NY XV EIL",
            address: "𝐃𝐡𝐚𝐤𝐚",
            age: "𝟏𝟔+",
            height: "5.8 ft",
            weight: "52 kg",
            badHabits: "over thinking ",
            status: "SINGLE",
            work: "Sᴛᴜᴅʏ",
            religion: "Isʟᴀᴍ",
            fbLink: "https://www.facebook.com/profile.php?id=100087098984822"
        };

        const now = moment().tz('Asia/Dhaka').format('MMMM Do YYYY, h:mm:ss A');

        const response = `
━━━━━━━━━━━━━━━━━━━
✨🙆‍♂️ 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 🙅‍♂️✨
━━━━━━━━━━━━━━━━━━━
👤 𝗡𝗮𝗺𝗲: ${adminInfo.name}
🆔 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${adminInfo.username}
📍 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: ${adminInfo.address}
━━━━━━━━━━━━━━━━━━━
🎂 𝗔𝗴𝗲: ${adminInfo.age}
📏 𝗛𝗲𝗶𝗴𝗵𝘁: ${adminInfo.height}
⚖️ 𝗪𝗲𝗶𝗴𝗵𝘁: ${adminInfo.weight}
━━━━━━━━━━━━━━━━━━━
🚬 𝗕𝗮𝗱 𝗛𝗮𝗯𝗶𝘁𝘀: ${adminInfo.badHabits}
💔 𝗦𝘁𝗮𝘁𝘂𝘀: ${adminInfo.status}
📚 𝗪𝗼𝗿𝗸: ${adminInfo.work}
🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻: ${adminInfo.religion}
━━━━━━━━━━━━━━━━━━━
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${adminInfo.fbLink}
📅 𝗧𝗶𝗺𝗲: ${now}
━━━━━━━━━━━━━━━━━━━
✨ 🔥 "𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐜𝐨𝐦𝐞𝐬 𝐭𝐨 𝐭𝐡𝐨𝐬𝐞 𝐰𝐡𝐨 𝐧𝐞𝐯𝐞𝐫 𝐠𝐢𝐯𝐞 𝐮𝐩!" 🔥 ✨
━━━━━━━━━━━━━━━━━━━
        `;

        message.reply(response);
    }
};
