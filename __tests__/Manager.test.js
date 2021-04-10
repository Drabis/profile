// require Employee module - which we will be testing in this suite
const Manager = require('../lib/Manager');
describe('manager', () => {
  // describe Initialization
  describe('Initialization', () => {
    it('returns an object that is an instance of the manager class when called with the new keyword', () => {
      const manager = new Manager();
      expect(manager instanceof Manager).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
      const name = "Abou";
      const manager = new Manager(name);

      expect(manager.name).toBe(name);
    });

    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.id).toBe(id);
    });
    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const manager = new Manager("", 0, email);

      expect(manager.email).toBe(email);
    });
  })

  // describe getName
  describe('getName', () => {
    it('returns the name property when the getName() method is called', () => {
      const name = "Obi";
      const manager = new Manager(name);

      expect(manager.getName()).toBe(name);
    });
  })

  // describe getId
  describe( 'getId', () => {
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.getId()).toBe(id);
    });
  });

  describe('getEmail', () => {
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const manager = new Manager("", 0, email);

      expect(manager.getEmail()).toBe(email);
    });
  });

  // decsribe getRole
  describe('getRole', () => {
    it("returns 'manager' when the getRole() method is called", () => {
      const manager = new Manager();

      expect(manager.getRole()).toBe('Manager');
    });
  });
  describe('getOfficeNumber', () => {
    it('returns the officeNumber property when the getOfficeNumber() method is called', () => {
      const officeNumber = 'officeNumber';
      const manager = new Manager("", 0, "", officeNumber);

      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
  });
});