function sendEmailChangedMessage(userId, newEmail) {
  console.log(
    "🔔 Se notifica  que se manda correo al user con id:" +
      userId +
      " con email:" +
      newEmail
  );
}

module.exports = {
  sendEmailChangedMessage,
};
