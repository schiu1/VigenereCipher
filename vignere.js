//document.getElementById('calculate').addEventListener('lengthclick', Encrypt);


function Encrypt(){
    const text = document.getElementById('inputText').value;
    const newText = text.replace(/[\.\?\!\ ]/g, "");
    const bestText = newText.toUpperCase();
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
        const number = ((bestText.charCodeAt(i)-65) + (key.charCodeAt(i)-65)) % 26;
        const e = String.fromCharCode(number + 65);
        cipher += e;
    }

    console.log("encrypted: " + cipher + "\n-----------------------");
}

function Decrypt(){

}