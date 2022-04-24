const Employee = require("../lib/manager");

describe("manager", () => {
    describe("input information", () => {

      it("should show the name, ID, and email that is inputted on command line", () => {
  
        const testEmployee = new Employee("Kylie", "8979", "test@gmail.com", "555-555-9786");
  
        expect(testEmployee.getName()).toEqual("kylie");
        expect(testEmployee.getID()).toEqual("8979");
        expect(testEmployee.getEmail()).toEqual("test@gmail.com");
        expect(testEmployee.getOfficeNumber()).toEqual("555-555-9786");
      });
    });
});

describe("manager role", () => {

    it("should return the role of manager", () => {

      const testEmployee = new Employee("kylie", "8979", "test@gmail.com");
      
      expect(testEmployee.getRole()).toEqual("Employee");
    });
});