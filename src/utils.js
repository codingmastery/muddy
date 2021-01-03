import commands from './commands';

export const printHelp = () => {
    return `The following options are valid: ${[...commands]}`;
};

export const printSelf = (player) => {
    // Should we create a background Story?
    return `${player.name}: ${player.title}`;
};

const utils = {
    printHelp,
};

export default utils;