//document.getElementById('calculate').addEventListener('click', Encrypt);


function Encrypt(type){
    const text = document.getElementById('inputText').value;
    const bestText = text.toUpperCase();
    let key = document.getElementById('keyInput').value;
    key = key.toUpperCase();
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