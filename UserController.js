const Database = require("./Database");
const MessageBus = require("./MessageBus");
const { User } = require("./User");

class UserController {
  changeEmail(userId, newEmail) {
    const data = Database.getUserById(userId);
    const email = data[1];
    const type = data[2];
    const user = new User(userId, email, type);

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

const controller = new UserController()
controller.changeEmail(1,"nuevo@codelapps.com")
