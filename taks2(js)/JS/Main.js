function Change(){
    let inp_value = document.getElementById('gr').value
    let inp = inp_value.slice(-3,-2)
switch (inp) {
    case '1':
        document.getElementById('Lose').innerHTML="Morning Group"
        document.body.style.backgroundColor="#f2ee69"        
        break;

        case '2':
        document.getElementById('Lose').innerHTML="Afternoon Group"
        document.body.style.backgroundColor="#ffc800"
        document.getElementById('Lose').style.color="white"
        break; 

        case '3':
        document.getElementById('Lose').innerHTML="Afternoon Group"
        document.body.style.backgroundColor="#101529"
        document.getElementById('Lose').style.color="white"
        break; 
 default:
        document.getElementById('Lose').innerHTML="Add valid option"
        document.body.style.backgroundColor="red"
        break;
}
}

function Modes() {
if(document.body.style.backgroundColor==="white")
{
document.body.style.backgroundColor="black"
document.body.style.color="white"
}
else
{
document.body.style.backgroundColor="white"
document.body.style.color="black"
}

}


