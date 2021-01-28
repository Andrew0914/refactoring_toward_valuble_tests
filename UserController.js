const Database = require("./Database");
const MessageBus = require("./MessageBus");
const UserFactory = require("./UserFactory");
class UserController {
  changeEmail(userId, newEmail) {
    const data = Database.getUserById(userId);
    const user = UserFactory.create(data);

    const companyData = Database.getCompany();
    const companyDomainName = companyData[0];
    const numberOfEmployees = companyData[1];

    const newNumberOfEmployees = user.changeEmail(
      newEmail,
      companyDomainName,
      numberOfEmployees
    );

    Database.saveCompany(newNumberOfEmployees);
    Database.saveUser(user);
    MessageBus.sendEmailChangedMessage(userId, newEmail);
  }
}

// RUN
const controller = new UserController();
controller.changeEmail(2, "nuevo@codelapps.com");
