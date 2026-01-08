let count = 0;

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function checkCountValue(){
    if(count === 10){
        alert("You got 10 followers");
    }else if(count === 15){
        alert("you got 15 followers");
    }
}