//document.getElementById('calculate').addEventListener('click', Encrypt);

function Encrypt(){
    const text = document.getElementById('inputText').value;
    let key = document.getElementById('keyInput').value;
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
    for(const letter of text){
        console.log(letter);
    }
}

function Decrypt(){

}