const Employee = require("../lib/employee");


describe("employee", () => {
    describe("input information", () => {

      it("should show the name, ID, and email that is inputted on command line", () => {
  
        const employee = new Employee("Kylie", "8979", "test@gmail.com");
  
        expect(employee.getName()).toEqual("kylie");
        expect(employee.getID()).toEqual("8979");
        expect(employee.getEmail()).toEqual("test@gmail.com");
    
      });
    })
})

describe("employee role", () => {

    it("should return the role of Employee", () => {

      const employee = new Employee("kylie", "8979", "test@gmail.com");
      
      expect(employee.getRole()).toEqual("Employee");
    });
});
