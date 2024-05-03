const fs = require('fs');

// дані з файлу user.json
const userData = require('./user.json');

const languages = userData.languages.map(lang => `${lang.title} (${lang.level})`).join(', ');

console.log(`User: ${userData.firstname} ${userData.lastname}`);
console.log(`Languages: ${languages}`);