module.exports = async function ({ reply }) {
  const start = Date.now();
  const end = Date.now();
  const speed = end - start;

  const styledPing = `
╭───────────────⭓
│  ⚡ 𝗣𝗜𝗡𝗚 𝗖𝗛𝗘𝗖𝗞
        
        𝐋 𝐔 𝐂 𝐈 𝐅 𝐄 𝐑
       
       𝗠𝗘𝗚𝗔𝐓𝐑𝐎𝐍
│
│  📡 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲: *${speed}ms*
│  💠 𝗦𝘁𝗮𝘁𝘂𝘀: *Online*
│  🔋 𝗣𝗼𝘄𝗲𝗿: *Stable*
╰───────────────⭓

> 𝐋 𝐔 𝐂 𝐈 𝐅 𝐄 𝐑 ❦ ✓
`;

  reply(styledPing);
};