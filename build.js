const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const appPath = path.join(rootDir, "app.js");
const dataPath = path.join(rootDir, "data", "essences.js");
const bundlePath = path.join(rootDir, "app.bundle.js");

function stripImports(source) {
  return source.replace(/\s*import\s+LOCAL_ESSENCES[^;]+;\s*/, "\n");
}

function transformDataset(source) {
  const withoutExportConst = source.replace(
    /export\s+const\s+LOCAL_ESSENCES/,
    "const LOCAL_ESSENCES"
  );
  return withoutExportConst.replace(/export\s+default\s+LOCAL_ESSENCES;?\s*$/, "");
}

function normalizeLineContinuations(source) {
  return source.replace(/\\\s*\n/g, "\n");
}

function escapeEmbeddedScriptBackticks(source) {
  return source.replace(/(<script>[\s\S]*?<\/script>)/g, (match) =>
    match.replace(/`/g, "\\`")
  );
}

function buildBundle() {
  const appSource = fs.readFileSync(appPath, "utf8");
  const dataSource = fs.readFileSync(dataPath, "utf8");

  const appWithoutImport = escapeEmbeddedScriptBackticks(
    normalizeLineContinuations(stripImports(appSource))
  ).trim();
  const inlinedDataset = transformDataset(dataSource).trim();

  const banner = "// Bundled with custom script to inline LOCAL_ESSENCES";
  const bundle = `${banner}\n(() => {\n${inlinedDataset}\n\n${appWithoutImport}\n})();\n`;

  fs.writeFileSync(bundlePath, bundle, "utf8");
  console.log(`Bundle generated at ${bundlePath}`);
}

buildBundle();
