class Company {
  constructor(domainName, numberOfEmployess) {
    this.domainName = domainName;
    this.numberOfEmployess = numberOfEmployess;
  }

  changeNumberOfEmployees(delta) {
    if (this.numberOfEmployess + delta < 0)
      throw "Number of employees cant be negative";
    this.numberOfEmployess += delta;
  }

  isEmailCorporate(email) {
    const emailDomain = email.split("@")[1];
    return this.domainName === emailDomain;
  }
}

module.exports = { Company };
