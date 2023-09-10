//document.getElementById('calculate').addEventListener('click', Encrypt);


function Encrypt(){
    const text = document.getElementById('inputText').value;
    let key = document.getElementById('keyInput').value;
    let cipher = "";
    console.log("text: " + text);
    console.log("key: " + key);
    if (key.length < text.length){
        let position = 0;
        while(key.length != text.length){
            key += key.charAt(position);
            position++;
        }
        console.log(key);
    }
    
    for(let i=0; i<text.length; i++){
        const number = ((text.charCodeAt(i)-97) + (key.charCodeAt(i)-97)) % 26;
        const e = String.fromCharCode(number + 97);
        console.log(e);
        cipher += e;
    }

    console.log(cipher);
}

function Decrypt(){

}