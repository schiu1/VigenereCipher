//document.getElementById('calculate').addEventListener('click', Encrypt);


function Vigenere(type){
    const text = document.getElementById('inputText').value;
    const bestText = text.toUpperCase();
    if(text.length == 0){
        document.getElementById('textError').style.display = 'flex';
        return;
    }
    else if (text.length != 0 && document.getElementById('textError').style.display == 'flex'){
        document.getElementById('textError').style.display = 'none';
    }
    let key = document.getElementById('keyInput').value;
    key = key.toUpperCase();
    if(key.length == 0){
        document.getElementById('keyError').style.display = 'flex';
        return;
    }
    else if (key.length != 0 && document.getElementById('keyError').style.display == 'flex'){
        document.getElementById('keyError').style.display = 'none';
    }
    let result = "";
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
            result += bestText.charAt(i);
            continue;
        }
        let number = 0;
        if (type == "encrypt"){
            number = ((bestText.charCodeAt(i)-65) + (key.charCodeAt(i)-65)) % 26;
        }
        else if (type == "decrypt"){
            console.log(bestText.charCodeAt(i)-65);
            console.log(key.charCodeAt(i)-65);
            number = ((bestText.charCodeAt(i)-65) - (key.charCodeAt(i)-65)) % 26;
            if (number < 0){
                number = 26-(-number);
            }
            console.log(number);
        }
        const e = String.fromCharCode(number + 65);
        console.log(e);
        result += e;
    }

    document.getElementById("outputText").innerHTML = result;
    if(type == "encrypt"){
        document.getElementById('decrypt').disabled = false;
    }
    else if (type == "decrypt"){
        document.getElementById('decrypt').disabled = true;
    }

    console.log("encrypted: " + result + "\n-----------------------");
}