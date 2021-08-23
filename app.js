const express = require("express");
const exec = require("child_process").exec;
const app = express();

app.get("/healthz", function (req, res) {
  res.status(200).end();
});

app.get("/", function (req, res) {
  var poweredBy = process.env.POWERED_BY;
  var release = process.env.WORKFLOW_RELEASE;

  if (typeof message == "undefined") {
    poweredBy = "Kritsada";
  }

  exec("hostname", function (error, stdout, stderr) {
    container = "unknown";
    // If exec was successful
    if (error == null) {
      container = stdout.trim();
    }

    res.send(
      "Powered by " + poweredBy + "\nRelease " + release + " on " + container
    );
  });
});

const port = process.env.PORT || 5000;
server = app.listen(port, function () {
  console.log(
    "Server listening on port %d in %s mode",
    server.address().port,
    app.settings.env
  );
});
