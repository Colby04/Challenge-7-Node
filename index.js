// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username:'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:'
    },
    {
        type: 'confirm',
        name: 'confirmLogin',
        message: 'Are you sure you want to login?'
    }
];
    inquirer.prompt(questions)
    .then(answers => {
        console.log('User Input:');
        console.log(answers);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    function generateREADME(data) {
        return `
    # ${data.title}
    
    ## Description
    
    ${data.description}
    
    // Add more sections based on user input
        `;
}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated successfully!')
    );
}

// Function call to initialize app
function init() {
    promptUser()
    .then ((data) => {const README = generateMarkdown(data);
    writeToFile('README.md', READMEContent);
});
}}
