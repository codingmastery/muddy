
class Scene {
    constructor(id, name, description, actions, items, location) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sceneActions = actions;
        this.sceneItems = items;
        this.location = location;
    }

    // getters and setters
    get id() {return this.id;}
    get name() {return this.name;}
    get description() {return this.description;}
    get sceneItems() { return this.sceneItems; }
    get sceneActions() {return this.sceneActions;}
    get location() {return this.location;}

    id(newId) {
        this.id = newId;
    }

    name(newName) {
        this.name = newName;
    }

    description(newDescription) {
        this.description = newDescription;
    }
    sceneItems(newItems) {
        this.sceneItems = newItems;
    }

    sceneActions(newActions) {
        this.sceneActions = newActions;
    }

    location(newLocation) {
        this.location = newLocation;
    }
};

export default Scene;