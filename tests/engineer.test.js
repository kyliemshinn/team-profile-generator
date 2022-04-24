const Employee = require("../lib/engineer");

describe("engineer", () => {
    describe("input information", () => {

      it("should show the name, ID, email, and github account that is inputted on command line", () => {
  
        const engineer = new Engineer("Kylie", "8979", "test@gmail.com", "testacc");
  
        expect(engineer.getName()).toEqual("kylie");
        expect(engineer.getID()).toEqual("8979");
        expect(engineer.getEmail()).toEqual("test@gmail.com");
        expect(engineer.getGithub()).toEqual("testacc");
    
      });
    });
});

describe("engineer role", () => {

    it("should return the engineer role", () => {

      const engineer = new Manager("kylie", "8979", "test@gmail.com", "555-555-9786");
      
      expect(engineer.getRole()).toEqual("Engineer");
    });
});