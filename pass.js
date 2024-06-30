#!/usr/bin/env node
"use strict";

//defining the prompt function
const prompt = (message, callback) => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdin.resume();
    stdout.write(message);

    stdin.once("data", (data) => {
        callback(data);
    });

};

prompt("PASSWORD STRENGTH: ", (strength) => {
    console.log("\n");

    const chars = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567899876543210!@#$^.";
    let password = "";

    for (let i = 0; i< strength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    console.log ("_______________________________\n");
    console.log(`Password: ${password}`);
    console.log ("_______________________________\n");
    
    process.exit();
});