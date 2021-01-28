function getUserById(userId) {
  const users = new Map();
  users.set(1, [1, "andrew@codelapps.com", 2]);
  users.set(2, [2, "berto@japanistic.com", 1]);
  users.set(3, [3, "carlos@rapidito.com", 1]);
  return users.get(userId);
}
function getCompany() {
  return ["codelapps.com", 1];
}

function saveCompany(company) {
  console.log("✅ Se ha guardado el nuevo numero de empleados: " , company);
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
