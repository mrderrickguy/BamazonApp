var mysql = require('mysql');
var inquirer= require('inquirer');
//var http = require("http");
var fs = require("fs");
var Table = require('cli-table');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "14Derrick+",
  database: "bamazon"
});


var PORT = 8080;

// var server = http.createServer(handleRequest);


function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}



//Database is made, called bamazon




connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected as id' + connection.threadId);
 productSearch();
})
function productSearch() {
  inquirer
    .prompt({
      name: "Bamazon Store",
      type: "input",
      message: "Welcome! Please press enter to start.",
      
      
    })
  
.then(function(answer) {
startBuying();
    });
}



function startBuying() {
  connection.query('SELECT * FROM products', function(err, res) {
    
    var choiceArray = [];
    for (var i = 0; i < res.length; i++) {
      choiceArray.push(res[i].item);
    }
    inquirer.prompt([{
      name: 'item',
      type: 'input',
      message: 'What is the id of what you would like to purchase? (Enter the id of item)',
      choices:["id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10"]
    },
    {
      name: 'quantity',
      type: 'input',
      message: 'How many would you like?'
    }]).then(function(answer) {
      console.log(answer);
      var id = answer.item;
      console.log(id);
      var chosenItem = res[id-1];
      console.log(chosenItem);
      var newQuantity = chosenItem.quantity - answer.quantity;
      if (newQuantity >= 0) {
        connection.query('UPDATE products SET ? WHERE id = ?', [{ quantity: newQuantity }, id]);
        startBuying();
      } else {
        console.log('There are not enough in stock for you to purchase that many.');
        startBuying();
      }
    })
  })
console.log(query.sql);
}

 
  



