const Database = require("./Database");
const MessageBus = require("./MessageBus");
const UserType = {
  Customer: 1,
  Employee: 2,
};

class User {
  userId = "";
  email = "";
  type = 0;

  changeEmail(userId, newEmail) {
    const data = Database.getUserById(userId);
    this.userId = userId;
    this.email = data[1];
    this.type = data[2];
    if (this.email === newEmail) return;
    const companyData = Database.getCompany();
    const companyDomainName = companyData[0];
    const numberOfEmployees = companyData[1];
    const emailDomain = newEmail.split("@")[1];
    const isEmailCorporate = emailDomain === companyDomainName;
    const newType = isEmailCorporate ? UserType.Employee : UserType.Customer;
    if (this.type !== newType) {
      const delta = newType === UserType.Employee ? 1 : -1;
      const newNumber = numberOfEmployees + delta;
      Database.saveCompany(newNumber);
    }
    this.email = newEmail;
    this.type = newType;
    Database.saveUser(this);
    MessageBus.sendEmailChangedMessage(this.userId, newEmail);
  }
}

// RUN
const user = new User();
user.changeEmail(2, "nuevo_email@codelapps.com");
