var mysql = require('mysql');
var inquirer = require('inquirer');
//var idInput = "";

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, //8889
    user: "root",
    password: "root",
    database: "bamazonDB"
    });

    connection.connect(function(err) {
        if (err) throw err;

        console.log("connected as id: " + connection.threadId);
        displayProducts();
    })

    function displayProducts() {
        connection.query("SELECT item_id, product_name, department_name, price FROM products", function(err, res) {
            if(err) throw err;
            console.log(res);
            })
            //connection.end();
    }

    inquirer.prompt([
        {type: 'input',
         message: 'Please enter the Item ID of the product you would like to purchase.',
         name: 'idInput'
        }
    ]).then(function(answers) {
        console.log("How many units would you like to purchase?");
        /*var idInput = answers.idInput;
        if (idInput === parseInt(idInput, 10))
            console.log("Thank you!");
        else
            console.log("You must enter the Item ID number to proceed.");*/
    });