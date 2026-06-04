import fs from 'fs';
import https from 'https';
import path from 'path';

const PUML_FILE = 'architecture.puml';
const SVG_OUTPUT = 'src/assets/architecture.svg';

const renderPuml = () => {
  const pumlContent = fs.readFileSync(PUML_FILE, 'utf8');

  const options = {
    hostname: 'kroki.io',
    path: '/plantuml/svg',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': Buffer.byteLength(pumlContent)
    }
  };

  const req = https.request(options, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Error: Kroki returned status code ${res.statusCode}`);
      process.exit(1);
    }

    const fileStream = fs.createWriteStream(SVG_OUTPUT);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Successfully rendered ${PUML_FILE} to ${SVG_OUTPUT}`);
    });
  });

  req.on('error', (err) => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });

  req.write(pumlContent);
  req.end();
};

renderPuml();
