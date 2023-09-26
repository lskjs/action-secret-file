const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

try {
  const filename = core.getInput('filename');
  const content = core.getInput('content');
  const chmod = core.getInput('chmod');
  const dir = path.dirname(filename);

  if (filename) {
    if (dir) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filename, content);
    if (chmod) {
      fs.chmodSync(filename, chmod);
    }
    // eslint-disable-next-line no-console
    console.log(`${filename} created${chmod ? ` with chmod:${chmod}` : ''}!`);
  }

  const filename2 = core.getInput('filename2');
  const content2 = core.getInput('content2');
  const chmod2 = core.getInput('chmod2') || core.getInput('chmod');
  const dir2 = path.dirname(filename);
  if (filename2) {
    if (dir) {
      fs.mkdirSync(dir2, { recursive: true });
    }
    fs.writeFileSync(filename2, content2);
    if (chmod2) {
      fs.chmodSync(filename2, chmod2);
    }
    // eslint-disable-next-line no-console
    console.log(`${filename2} created${chmod2 ? ` with chmod:${chmod2}` : ''}!`);
  }
} catch (error) {
  core.setFailed(error.message);
}
