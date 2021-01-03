<script>
// 
/*
    line is an array of strings and shortcodes
    line: [string,sc, sc, string, string,...]
    [{type: text, content:...}, {type:shortCode, content: ..., classType: ...}, ...];
*/
    import ShortCode from './ShortCode.svelte';
    import Debug from './Debug.svelte';
    export let data;
    let shortCodeRegExp = /\[[a-zA-Z0-9]+=\"{0,1}[a-zA-Z0-9]+\"{0,1}\]/g;
    let hasShortCodes = shortCodeRegExp.test(data);
    let strings = data;
    let shortCodes = [];
    if (hasShortCodes) {
        shortCodes = data.match(shortCodeRegExp);
        shortCodes = shortCodes.map(sc => {
            let formatted = sc;
            formatted = formatted.replace(/\[/gi,'');
            formatted = formatted.replace(/\]/gi,'');
            const [type, content] = formatted.trim().split('=');
            sc = {type, content}
            return sc;
        });
        strings = data.split(shortCodeRegExp);
    } else {
        strings =[data];
    }
    console.log(`scs:`, shortCodes);
    console.log(`strings:`, strings);
</script>

<p>
    {#each strings as str, i}
        {str}
        <Debug desc='string i' variable={str}/>
        {#if i<shortCodes.length}
            <ShortCode shortCodeClass={shortCodes[i]["type"]}>{shortCodes[i]["content"]}</ShortCode>
        {/if}
    {/each}
</p>

<style>
    p {
        margin: 0;
        padding: 0;
    }
</style>