import { formatAbi } from "abitype";
import fs from "fs";
import path from "path";

if (process.argv.length < 3) {
  console.log("Usage: node index.js /path/to/input/dir");
  process.exit(0);
}

const inputDir = path.resolve(process.argv[2]);
const forgeOutDir = path.join(inputDir, "out");

if (!fs.existsSync(forgeOutDir)) {
  console.error("out directory not found.");
  process.exit(0)
}

if (!fs.existsSync("./output")) {
  fs.mkdirSync("./output");
}

function processDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.json')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(content);
      if (json.abi) {
        const formattedAbi = formatAbi(json.abi);
        const outputFileName = path.join("./output", path.basename(file, '.json') + '.txt');
        if(formattedAbi[0]) fs.writeFileSync(outputFileName, formattedAbi.join("\n"));
      }
    }
  });
}

processDirectory(forgeOutDir)

console.log("Processing complete.");
