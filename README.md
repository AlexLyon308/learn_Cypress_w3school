# learn_cypress

Important command lines 

//Generate package.json setting file 
npm init -y 

//Install Cypress and required plugins 
npm install Cypress 
npm i --save-dev cypress-localstorage-commands

//Open Cypress app 
npx cypress open 

//Run Cypress in terminal (all test files) 
npx cypress run  

//Run Cypress in terminal (single files) 
npx cypress run --spec *path to the file* 

ex : npx cypress run --spec cypress/e2e/Amatrium/Test_AmatriumLogin.cy.js 