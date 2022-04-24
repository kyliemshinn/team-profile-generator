const Employee = require("../lib/manager");

describe("manager", () => {
    describe("input information", () => {

      it("should show the name, ID, phone number, and email that is inputted on command line", () => {
  
        const manager = new Manager("Kylie", "8979", "test@gmail.com", "555-555-9786");
  
        expect(manager.getName()).toEqual("kylie");
        expect(manager.getID()).toEqual("8979");
        expect(manager.getEmail()).toEqual("test@gmail.com");
        expect(manager.getOfficeNumber()).toEqual("555-555-9786");
      });
    });
});

describe("manager role", () => {

    it("should return the role of manager", () => {

      const manager = new Manager("kylie", "8979", "test@gmail.com", "555-555-9786");
      
      expect(manager.getRole()).toEqual("Manager");
    });
});