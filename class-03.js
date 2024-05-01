#! /user/bin/env/ node
import inquirer from "inquirer";
async function manageTodos() {
    let todos = [];
    let condition = true;
    while (condition) {
        let addTask = await inquirer.prompt([
            {
                name: "firstQuestion",
                type: "input",
                message: "What would you like to add in your Todos List?",
            },
            {
                name: "secondQuestion",
                type: "confirm",
                message: "would you like to add more actions in your Todos List?",
                default: "false",
            },
        ]);
        todos.push(addTask.firstQuestion);
        // condition = addTask.secondQuestion ;
        console.log(todos);
        if (!addTask.secondQuestion) {
            let limitToContinue = await inquirer.prompt([
                {
                    name: "exit",
                    type: "confirm",
                    message: "Do want to exit?",
                    default: "false",
                },
            ]);
            if (limitToContinue.exit) {
                console.log("You already exited from Todos List.");
                condition = false;
            }
            else {
                condition = true;
            }
        }
    }
}
manageTodos();
/////////////  It will improving more than that inshallah.
