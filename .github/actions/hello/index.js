const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug('Debug Message');


  const name = core.getInput('who_to_greet');

  console.log(`Hello ${name}`)

  const time = new Date();

  core.setOutput("time", time.toTimeString())
  core.exportVariable("HELLO_TIME",time)
} catch (error) {
    core.setFailed(errot.message);
}
