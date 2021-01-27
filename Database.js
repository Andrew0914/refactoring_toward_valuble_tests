function getUserById(userId) {
  const users = new Map();
  users.set(1, ["Andrew", "andrew@codelapps.com", 2]);
  users.set(2, ["Berto", "berto@japanistic.com", 1]);
  users.set(3, ["Carlos", "carlos@rapidito.com", 1]);
  return users.get(userId);
}
function getCompany() {
  return ["codelapps.com", 1];
}

function saveCompany(number) {
  console.log("✅ Se ha guardado el nuevo numero de empleados: " + number);
  console.log("");
}

function saveUser(user) {
  console.log("✅ Se ha almacenado el usuario:", user);
  console.log("");
}

module.exports = {
  getUserById,
  getCompany,
  saveCompany,
  saveUser,
};
