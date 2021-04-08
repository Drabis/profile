// require Employee module - which we will be testing in this suite
const Engineer = require('../lib/Engineer');
describe('engineer', () => {
  // describe Initialization
  describe('Initialization', () => {
    it('returns an object that is an instance of the engineer class when called with the new keyword', () => {
      const engineer = new Engineer();
      expect(engineer instanceof engineer).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
      const name = "Abou";
      const engineer = new Engineer(name);

      expect(engineer.name).toBe(name);
    });

    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.id).toBe(id);
    });
    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.email).toBe(email);
    });
  })

  // describe getName
  describe('getName', () => {
    it('returns the name property when the getName() method is called', () => {
      const name = "Obi";
      const engineer = new Engineer(name);

      expect(engineer.getName()).toBe(name);
    });
  })

  // describe getId
  describe( 'getId', () => {
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.getId()).toBe(id);
    });
  });

  describe('getEmail', () => {
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.getEmail()).toBe(email);
    });
  });

  // decsribe getRole
  describe('getRole', () => {
    it("returns 'Engineer' when the getRole() method is called", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toBe('Engineer');
    });
  });
  describe('getGithub', () => {
    it('returns the GitHub property when the getGithub() method is called', () => {
      const github = 'github/username';
      const engineer = new Engineer("", 0, "", github);

      expect(engineer.getGithub()).toBe(github);
    });
  });
});