const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const appPath = path.join(rootDir, 'app.js');
const essencesPath = path.join(rootDir, 'data', 'essences.js');
const outputPath = path.join(rootDir, 'app.bundle.js');

const importRegex = /import LOCAL_ESSENCES from ["']\.\/data\/essences\.js["'];?/;

let appSource = fs.readFileSync(appPath, 'utf8');
if (!importRegex.test(appSource)) {
  throw new Error('Cannot find the LOCAL_ESSENCES import in app.js');
}

const essencesModule = fs.readFileSync(essencesPath, 'utf8');
const inlineEssences = essencesModule
  .replace(/export const LOCAL_ESSENCES =/, 'const LOCAL_ESSENCES =')
  .replace(/export default LOCAL_ESSENCES;?\s*$/, '')
  .trim();

const bundleBanner = '// Auto-generated bundle. Run "node build.js" to regenerate.\n';
const modulePrelude = 'export {};\n';

const bundledSource = appSource.replace(
  importRegex,
  `${inlineEssences}\n\n`,
);

const normalizedSource = bundledSource.replace(/\\\n/g, '\n');

const escapedBackticks = normalizedSource.replace(
  /(<script>)([\s\S]*?)(<\/script>)/g,
  (match, open, body, close) => {
    const sanitizedBody = body.replace(/(?<!\\)`/g, '\\`');
    return `${open}${sanitizedBody}${close}`;
  },
);

fs.writeFileSync(outputPath, `${bundleBanner}${modulePrelude}${escapedBackticks}`);

console.log('app.bundle.js generated successfully.');
