import Scene from '../scene';

const description = '\
"Hurry up!"- a voice yelled at you.\n\
"There is no time to waste! We are already late!"\n\
The shadow of the voice blurred into the [place=northen] path.\n[unknown=weird]';
const possibleActions = ["north", "look", "help"];
const itemsOnScene = [];
const location = { x: 0, y: 0 };

const scene1 = new Scene(
    1,
    'Start Scene',
    description,
    possibleActions,
    itemsOnScene,
    location
);

export default scene1;