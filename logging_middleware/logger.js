

const axios = require("axios");

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = Log;