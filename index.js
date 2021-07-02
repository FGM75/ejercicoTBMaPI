const inquirer = require("inquirer");


inquirer.prompt
    (
        [
            {
                name: "eleccion",
                message: "¿Que tipo de transporte quieres utilizar?",
                type: "list",
                choices: [
                    {
                        name: "BUS",
                        value: "bus",
                    },
                    {
                        name: "METRO",
                        value: "metro",
                    },
                ]

            }
        ]
    ).then((respuestas) => {
        console.log(respuestas)
    });
