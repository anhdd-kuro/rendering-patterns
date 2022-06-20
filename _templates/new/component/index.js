/* eslint-disable */
const _ = require("lodash");

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Component Name(ex: PFoo):",
        validate: (name) => {
          if (!name.length) return "Component's name is required";

          if (name[0] !== "P") return "Component's name must start with P";

          const kebabCaseName = _.kebabCase(name);

          if (kebabCaseName.indexOf("-") === -1)
            return "Component's name must contains at least 2 words in Pascal Case";

          return true;
        },
      },
      {
        type: "select",
        name: "level",
        message: "Component level:",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "confirm",
        name: "hasChildren",
        message: "Dose it use React.children?",
        initial: true,
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const startCaseName = _.startCase(answers.name);
      const pascalCaseName = startCaseName.replace(/\s/g, "");

      return {
        ...answers,
        name: pascalCaseName,
        titleLevel: _.capitalize(answers.level),
      };
    });
  },
};
