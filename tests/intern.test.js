const Employee = require("../lib/intern");

describe("Intern", () => {
    describe("input information", () => {

      it("should show the name, ID, email, and school that is inputted on command line", () => {
  
        const intern = new Employee("Kylie", "8979", "test@gmail.com", "UC Berkeley");
  
        expect(intern.getName()).toEqual("kylie");
        expect(intern.getID()).toEqual("8979");
        expect(intern.getEmail()).toEqual("test@gmail.com");
        expect(intern.getSchool()).toEqual("UC Berkeley");
    
      });
    })
})

describe("intern role", () => {

    it("should return the role of intern", () => {

      const intern = new Intern("kylie", "8979", "test@gmail.com", "UC Berkeley");
      
      expect(intern.getRole()).toEqual("Intern");
    });
});