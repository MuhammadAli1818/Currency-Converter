#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Based Currency
    EURO: 0.94,
    INR: 83.37,
    PKR: 277.69,
    GBP: 0.81,
    JPY: 154.59,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "GBP", "JPY"],
    },
    {
        name: "two",
        message: "Convert To Currency",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "GBP", "JPY"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromUser = currency[userAnswer.from];
let twoUser = currency[userAnswer.two];
let amountUser = userAnswer.amount;
let baseAmount = amountUser / fromUser;
let convertedAmount = baseAmount * twoUser;
console.log(convertedAmount);
