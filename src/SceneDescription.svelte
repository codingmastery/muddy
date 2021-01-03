<script>
    import Line from './Line.svelte';
    import Debug from './Debug.svelte';
    let debug = true;
    export let scene;
    const {description, actions} = scene;
    let sceneDescription = (description)? description : 'The old mages of time and space erased bits of this world... Find them and teach them a lesson!';

    sceneDescription = sceneDescription.split('\n');
    
    // any \n needs to be replaced with br or another p tag...

//    sceneDescription = description;
</script>

<!-- Description -->

    {#each sceneDescription as sceneDescriptionLine}
        
        <Debug desc='descriptionLine' variable={sceneDescriptionLine}/>
        
        <Line data={sceneDescriptionLine}/>
    {/each}


