const chalk = require('chalk');

const checkEnv = () => {
    switch (process.env.NODE_ENV) {
    case 'test':
    case 'silent':
        return false;
    default:
        return true;
    }
};

const error = text => {
    if (checkEnv()) console.error(chalk.red(text));
};

const warn = text => {
    if (checkEnv()) console.warn(chalk.yellow(text));
};

const info = text => {
    if (checkEnv()) console.info(chalk.cyan(text));
};

const log = text => {
    if (checkEnv()) console.log(chalk.blue(text));
};

module.exports = {error, warn, info, log};
