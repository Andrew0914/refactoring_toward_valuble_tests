class Company {
  constructor(domainName, numberOfEmployees) {
    this.domainName = domainName;
    this.numberOfEmployees = numberOfEmployees;
  }

  changeNumberOfEmployees(delta) {
    if (this.numberOfEmployees + delta < 0)
      throw "Number of employees cant be negative";
    this.numberOfEmployees += delta;
  }

  isEmailCorporate(email) {
    const emailDomain = email.split("@")[1];
    return this.domainName === emailDomain;
  }
}

module.exports = { Company };
