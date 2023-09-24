//document.getElementById('calculate').addEventListener('click', Encrypt);


function Encrypt(){
    const text = document.getElementById('inputText').value;
    const bestText = text.toUpperCase();
    let key = document.getElementById('keyInput').value;
    key = key.toUpperCase();
    let cipher = "";
    console.log("text: " + bestText);
    console.log("key: " + key);
    if (key.length < bestText.length){
        let position = 0;
        while(key.length != bestText.length){
            key += key.charAt(position);
            position++;
        }
        console.log("new key: " + key);
    }
    
    for(let i=0; i<bestText.length; i++){
        const triggers = [".", " ", "?", "!"];
        if (triggers.includes(bestText.charAt(i))){
            cipher += bestText.charAt(i);
            continue;
        }
        const number = ((bestText.charCodeAt(i)-65) + (key.charCodeAt(i)-65)) % 26;
        const e = String.fromCharCode(number + 65);
        cipher += e;
    }

    console.log("encrypted: " + cipher + "\n-----------------------");
}

function Decrypt(){

}