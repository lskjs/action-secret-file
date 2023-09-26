const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');

try {
  const filename = core.getInput('filename');
  if (filename) {
    fs.rmSync(filename, { force: true });
    // eslint-disable-next-line no-console
    console.log(`${filename} deleted!`);
    // TODO: remove directory if empty
  }
  const filename2 = core.getInput('filename2');
  if (filename2) {
    fs.rmSync(filename2, { force: true });
    // eslint-disable-next-line no-console
    console.log(`${filename2} deleted!`);
    // TODO: remove directory if empty
  }
} catch (error) {
  core.setFailed(error.message);
}
