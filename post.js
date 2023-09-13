const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');

try {
  const filename = core.getInput('filename');
  fs.rmSync(filename, { force: true });
  // TODO: remove directory if empty
  // eslint-disable-next-line no-console
  console.log(`${filename} deleted!`);
} catch (error) {
  core.setFailed(error.message);
}
