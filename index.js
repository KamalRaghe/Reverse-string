{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
const string = document.getElementById('string')
const re = document.getElementById('re')    
const input = document.getElementById('input')
const btn = document.getElementById('btn')    

function reverse(){
    let str = input.value
    let reverse = ''
    for (i=0;i < str.length; i++){
        reverse = str[i] + reverse 
    }
    string.innerHTML = 'String: ' + str
    re.innerHTML = 'Reverse: ' + reverse
}

btn.addEventListener('click', reverse)