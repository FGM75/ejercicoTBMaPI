require("dotenv").config();
const inquirer = require("inquirer");
const chalk = require("chalk");

const tipoDeTransporte = async () => {
  const respuesta = await inquirer.prompt([
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
      ],
    },
  ]);
  return respuesta;
};

(async () => {
  const respuesta = await tipoDeTransporte;
  console.log(await tipoDeTransporte());

  if (respuesta.eleccion === "bus") {
    console.log(chalk.yellow());
  }

  if (respuesta.eleccion === "metro") {
    const respuestaMetro = async () => {
      const response = inquirer.prompt([
        {
          name: "mensajeMETRO",
          message: "¿Qué información extra quiere obtener de cada parada?",
          type: "checkbox",
          choices: [
            {
              name: "Coordenadas",
              value: "coordenadas",
            },
            {
              name: "Fecha de inauguración",
              value: "fechaInauguración",
            },
          ],
        },
      ]);
      console.log(response);
    };
    return respuestaMetro;
  }
})();
