const { EmailChangedEvent } = require("./EmailChangedEvent");
const UserType = {
  Customer: 1,
  Employee: 2,
};

class User {
  emailChangedEvents = new Array();

  constructor(userId, email, type, isEmailConfirmed = false) {
    this.userId = userId;
    this.email = email;
    this.type = type;
    this.isEmailConfirmed = isEmailConfirmed;
  }

  changeEmail(newEmail, company) {
    const message = this.canChangeEmail();
    if (message !== null) throw message;
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
    this.emailChangedEvents.push(new EmailChangedEvent(this.userId, newEmail));
  }

  canChangeEmail() {
    if (this.isEmailConfirmed) return "Can't change a confirmed email";
    return null;
  }
}

module.exports = { User, UserType };
// RUN
/*const user = new User();
user.changeEmail(2, "nuevo_email@codelapps.com");*/
