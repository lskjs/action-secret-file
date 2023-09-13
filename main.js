const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

try {
  const content = core.getInput('content');
  const filename = core.getInput('filename');
  const chmod = core.getInput('chmod');
  const dir = path.dirname(filename);
  if (!dir) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, content);
  if (chmod) {
    fs.chmodSync(filename, chmod);
  }
  // eslint-disable-next-line no-console
  console.log(`${filename} created${chmod ? ` with chmod:${chmod}` : ''}!`);
} catch (error) {
  core.setFailed(error.message);
}
