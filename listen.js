const app = require("./app");
const PORT = process.env.PORT || 9090

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
