const Database = require("./Database");
const MessageBus = require("./MessageBus");
const UserFactory = require("./UserFactory");
const CompanyFactory = require("./CompanyFactory");
const { Company } = require("./Company");
class UserController {
  changeEmail(userId, newEmail) {
    const data = Database.getUserById(userId);
    const user = UserFactory.create(data);

    const companyData = Database.getCompany();
    const company = CompanyFactory.create(companyData);

    user.changeEmail(newEmail, company);

    Database.saveCompany(company);
    Database.saveUser(user);
    MessageBus.sendEmailChangedMessage(userId, newEmail);
  }
}

// RUN
const controller = new UserController();
controller.changeEmail(2, "nuevo@codelapps.com");
