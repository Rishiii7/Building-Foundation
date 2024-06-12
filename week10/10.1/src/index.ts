import { createAddressTable, insertIntoAddressTable } from "./Address";
import { joinFunction } from "./Query";
import { createTable, deleteRow, insertIntoTable, updateTable } from "./Users";

// createTable();


// insertIntoTable({
//     username : 'username1',
//     email : 'username1@gmail.com',
//     password : 'pass1'
// });


// updateTable(
//     'username',
//     'username3',
//     3
// );

// deleteRow(3);


// createAddressTable();

// insertIntoAddressTable(
//     'New York',
//     'USA', 
//     '123 Broadway St',
//     '10001',
//     1
// );


joinFunction(1).then( (result) => console.log(result));