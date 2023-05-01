let count = 1;

function next(){
    count++;
    if(count > 3){
        count = 1;
        document.querySelector('img').src = `./assets/img-0${count}.jpg`;

    } else {
        document.querySelector('img').src = `./assets/img-0${count}.jpg`;
    }
    console.log(count)
}
function prev(){
    count--;
    if(count > 0){
        document.querySelector('img').src = `./assets/img-0${count}.jpg`;

    } else {
        count = 1;
        document.querySelector('img').src = `./assets/img-0${count}.jpg`;
    }
    
}

