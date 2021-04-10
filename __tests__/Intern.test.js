// require Employee module - which we will be testing in this suite
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Intern');
describe('intern', () => {
  // describe Initialization
  describe('Initialization', () => {
    it('returns an object that is an instance of the intern class when called with the new keyword', () => {
      const intern = new Intern();
      expect(intern instanceof Intern).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
      const name = "Abou";
      const intern = new Intern(name);

      expect(intern.name).toBe(name);
    });

    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const intern = new Intern("", id);

      expect(intern.id).toBe(id);
    });
    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const intern = new Intern("", 0, email);

      expect(intern.email).toBe(email);
    });
  })

  // describe getName
  describe('getName', () => {
    it('returns the name property when the getName() method is called', () => {
      const name = "Obi";
      const intern = new Intern(name);

      expect(intern.getName()).toBe(name);
    });
  })

  // describe getId
  describe( 'getId', () => {
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const intern = new Intern("", id);

      expect(intern.getId()).toBe(id);
    });
  });

  describe('getEmail', () => {
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const intern = new Intern("", 0, email);

      expect(intern.getEmail()).toBe(email);
    });
  });

  // decsribe getRole
  describe('getRole', () => {
    it("returns 'Intern' when the getRole() method is called", () => {
      const intern = new Intern();

      expect(intern.getRole()).toBe('Intern');
    });
  });
  describe('getSchool', () => {
    it("returns the 'School' property when the getSchool() method is called", () => {
      const school = 'schoolName';
      const intern = new Intern("", 0, "", school);

      expect(intern.getSchool()).toBe(school);
    });
  });
});