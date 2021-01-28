const { Company } = require("./Company");

function create(data) {
  if (data.length < 2) throw "company: incomplete data";
  const companyDomainName = data[0];
  const numberOfEmployees = data[1];
  return new Company(companyDomainName, numberOfEmployees);
}

module.exports = {
  create
};
