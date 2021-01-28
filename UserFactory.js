const { User } = require("./User");
function create(data) {
  if (data.length < 3) throw "user: incomplete data";
  const userId = data[0];
  const email = data[1];
  const type = data[2];
  return new User(userId, email, type);
}

module.exports = {
  create,
};
