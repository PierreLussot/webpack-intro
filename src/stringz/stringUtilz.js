 export  function ghetto( msg ) {
    let
        result = [],
        suffixes = [
            "gros",
            "wesh",
            "oklm",
            "izi"
        ],
        i = Math.floor(Math.random() * (suffixes.length ));
    result.push(msg, suffixes[i], '!');

    return result.join(' ');
}

 export  function reverseSentence( sentence ) {
    return  sentence.split( ' ').reverse().join('')
}