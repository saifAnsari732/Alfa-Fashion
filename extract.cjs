const fs = require('fs');
const text = fs.readFileSync('temp_js.js', 'utf8');
const urls = text.match(/https?:\/\/[^\s"'`)]+/g);
if (urls) {
  const uniqueUrls = [...new Set(urls)].filter(u => u.includes('unsplash') || u.includes('pexels') || u.includes('image'));
  console.log(uniqueUrls.join('\n'));
} else {
  console.log("No URLs found");
}
