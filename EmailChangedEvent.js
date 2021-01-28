class EmailChangedEvent {
  constructor(userId, newEmail) {
    this.userId = userId;
    this.email = newEmail;
  }
}

module.exports = {
  EmailChangedEvent
}