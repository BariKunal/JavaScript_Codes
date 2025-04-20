const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){  //for grey id
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){ // for white id
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){  //for yellow id
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){   //for red color id
            body.style.backgroundColor = e.target.id;
        }
    });
});