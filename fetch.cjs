const https = require('https');

https.get('https://bible-word-puzzle.vercel.app/assets/index-63LFYNTm.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/[가-힣\s!?,.]{5,}/g);
    if (matches) {
      const unique = [...new Set(matches.map(m => m.trim()))].filter(m => m.length > 5);
      console.log(unique.join('\n'));
    }
  });
});
