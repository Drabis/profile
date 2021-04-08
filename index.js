const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const OUTPUT_DIR = path.resolve(_dirname, 'output');
const outputpath = path.join(OUTPUT_DIR, 'team.html');

const teamMember = [];

function getInfo()
    function getManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name",   
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the manager Id?', 
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager email address?',  
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?',
            },  
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamMember.push(manager);
            addingNewMember();
        })
    }
    function getEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name",   
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the engineer Id?', 
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer email address?',  
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their github?'
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.officeNumber);
            teamMember.push(engineer);
            addingNewMember();
        })
    } 
    function getIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name",   
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the intern Id?', 
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern email address?',  
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is their school?'
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            teamMember.push(intern);
            addingNewMember();
        })
    }
    function addingNewMember() {
        inquirer.prompt([
           {
               type: "checkbox",
               name: 'selectemployee',
               message: 'What is the employee title?',
               choices: ['manager', 'engineer', 'intern', 'done']
           } 
        ]).then(answers => {
            const role = answers.selectemployees;
            if(role === 'manager') {
                getManager();
            }else if (role === 'engineer') {
                getEngineer();
            }else if (role === 'intern') {
                getIntern();
            }else if (role === 'done') {
                renderTeam();
            }
        });
        addingNewMember()
    }
    function renderTeam() {
       fs.writeFileSync(outputpath, render(teamMember), 'utf-8');
    }  
    getManager(); 
getInfo();


// import modules -> Employee subclasses, fs, inquirer, path, page-template, questions

// use path module to define the path to the output directory


// create an array to hold all of our team members

// init function

	// function to create a manager
		// prompt user with questions needed to satisfy the input for a manager object
		// .then statement
			// create a new instance of the Manager class
			// push the new manager object to the team members array
			// call the function to create the rest of the team
  
	// function to create the rest of the team
		// prompt user to select which type of employee they would like to add
		// options include engineer, intern, or an option to not add any more team members
		// .then statement
			// if a type of employee was selected, call function to add that type of employee
			// if the other option was selected, call the function to create the output

	// function to add an engineer
		// same idea as create manager
  
	// function to add an intern
		// same idea as create manager

	// function to create the output
		// call the function from page-template module and pass in the team members array and save to a data variable
		// use fs module to write the a file -> pass in the fs.write(outputPath, the data, and "utf-8")

  // call the function to create a manager to start the process

// call init()