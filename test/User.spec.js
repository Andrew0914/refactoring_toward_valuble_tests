const { expect } = require("@jest/globals");
const { Company } = require("../Company");
const { User, UserType } = require("../User");

it("Cambiando de un email no corporativo a uno corporativo", () => {
  // Arrange
  const company = new Company("codelapps.com", 1);
  const sut = new User(2, "pruebas@pruebas.com", UserType.Customer);
  // Act
  sut.changeEmail("new@codelapps.com", company);
  // Assert
  expect(company.numberOfEmployees).toBe(2);
  expect(sut.email).toBe("new@codelapps.com");
  expect(sut.type).toBe(UserType.Employee);
});

it("Cambiando un email sin que se cambie el tipo de usuario", () => {
  // Arrange
  const company = new Company("codelapps.com", 1);
  const sut = new User(2, "pruebas@pruebas.com", UserType.Customer);
  // Act
  sut.changeEmail("nuevo_email@gmail.com", company);
  // Assert
  expect(company.numberOfEmployees).toBe(1);
  expect(sut.email).toBe("nuevo_email@gmail.com");
  expect(sut.type).toBe(UserType.Customer);
});

it("Cambiando un email al mismo ", () => {
  // Arrange
  const company = new Company("codelapps.com", 1);
  const sut = new User(2, "pruebas@pruebas.com", UserType.Customer);
  // Act
  sut.changeEmail("pruebas@pruebas.com", company);
  // Assert
  expect(company.numberOfEmployees).toBe(1);
  expect(sut.email).toBe("pruebas@pruebas.com");
  expect(sut.type).toBe(UserType.Customer);
});

it("Cambiando un email ya confirmado lanza excepción", () => {
  // Arrange
  const company = new Company("codelapps.com", 1);
  const sut = new User(2, "pruebas@pruebas.com", UserType.Customer, true);
  // Act - Assert
  expect(() => {
    sut.changeEmail("pruebas@pruebas.com", company);
  }).toThrow("Can't change a confirmed email");
});
