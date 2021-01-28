const Database = require("./Database");
const MessageBus = require("./MessageBus");
const UserType = {
  Customer: 1,
  Employee: 2,
};

class User {
  constructor(userId, email, type) {
    this.userId = userId;
    this.email = email;
    this.type = type;
  }

  changeEmail(newEmail, company) {
    if (this.email === newEmail) return;

    const newType = company.isEmailCorporate(newEmail)
      ? UserType.Employee
      : UserType.Customer;

    if (this.type !== newType) {
      const delta = newType === UserType.Employee ? 1 : -1;
      company.changeNumberOfEmployees(delta);
    }
    this.email = newEmail;
    this.type = newType;
  }
}

module.exports = { User };
// RUN
/*const user = new User();
user.changeEmail(2, "nuevo_email@codelapps.com");*/
