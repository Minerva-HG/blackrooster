// scripts/generate-env.js
// Lee variables de entorno en build-time y escribe src/assets/env.js
const fs = require('fs');
const path = require('path');

const env = {
  API_URL: process.env.API_URL || '',
  // Añade aquí otras variables que quieras exponer al cliente
  // Ejemplo: FEATURE_FLAG: process.env.FEATURE_FLAG || 'false'
};

const targetDir = path.join(__dirname, '..', 'src', 'assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetPath = path.join(targetDir, 'env.js');
const fileContents = `window.__env = ${JSON.stringify(env, null, 2)};`;

fs.writeFileSync(targetPath, fileContents, { encoding: 'utf8' });
console.log('Wrote runtime env to', targetPath);
