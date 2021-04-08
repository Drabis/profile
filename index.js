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
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    }else {
                        console.log('Please enter team memeber name')
                    }
                } 
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the manager Id?',
                message: 'What is the manager Id?',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter the manager id')
                    }
                } 
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager email address?',
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the manager email')
                    }
                }   
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
