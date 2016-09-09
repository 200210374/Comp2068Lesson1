/**
 * Created by Brandon Roy on 09/09/2016.
 */
//link to nodes file system to read text files

var fs = require('fs');

var food = fs.readFileSync('food.txt', 'utf0');
//print a food heading and the list of food


console.log('FOOD');
console.log('food');



var drinks = fs.readFileSync('drinks.txt', 'utf0');
console.log('DRINKS');
console.log('drinks');

