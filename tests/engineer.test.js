const Employee = require("../lib/engineer");

describe("engineer", () => {
    describe("input information", () => {

      it("should show the name, ID, and email that is inputted on command line", () => {
  
        const testEmployee = new Employee("Kylie", "8979", "test@gmail.com");
  
        expect(testEmployee.getName()).toEqual("kylie");
        expect(testEmployee.getID()).toEqual("8979");
        expect(testEmployee.getEmail()).toEqual("test@gmail.com");
    
      });
    })
})