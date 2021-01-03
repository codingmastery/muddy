<script>
    import {GAME_TICK} from './config';
    import {printHelp} from './utils';
    import scenes from './scenes/index.js';
    import SceneDescription from './SceneDescription.svelte';
    let userAction = "";
    let scene_description = "";
    let actionResult = "";
    let internalClock = 0;
    console.log("Starting Mud");
    console.log(`Scenes:`, scenes);
    const [init] = scenes;
    console.log(`init Scene`, init);
    const handleUserAction = () => {
        switch(userAction) {
            case "": break;
            default:
                actionResult = printHelp();
                break;
        }
    }


</script>

<SceneDescription scene={init} />

<!-- User possible Actions -->
<form on:submit|preventDefault={handleUserAction}>
    <div class='form-group'>
        <label for='user-action'>What would you like to do?</label>
        <input id='user-action' type="text" bind:value={userAction}/>
    </div>
    <button>Execute Action</button>
</form>

<p>user action: {userAction}</p>

<p>result: {actionResult}</p>

<style>
    form {
        margin-top: 20px;
    }
</style>