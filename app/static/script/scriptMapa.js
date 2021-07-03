
//SELECIONANDO TODOS OS BLOCOS DE PROCESSO PARA SEM MOVIMENTADOS
const simpleProcess = document.querySelectorAll('.simpleProcess') 

simpleProcess.forEach(item=>{
    item.addEventListener('touchmove', function(e){
        e.preventDefault()
        var targetLocation = e.targetTouches[0]
        console.log('a')
        e.currentTarget.style.left = targetLocation.pageX + 'px'
        e.currentTarget.style.top = targetLocation.pageY + 'px'

    })

})


//simpleProcess divs que se movem

simpleProcess.forEach(item=>{
    item.addEventListener('click', alterarTextoInterior);

})

var item = "";

function alterarTextoInterior(e){
    e.preventDefault()
    const formPopUp = document.querySelector('.formPopUp');
    formPopUp.style.display='block';
    item = e.currentTarget.firstElementChild;
    console.log(item)
    



}

const buttonClickToAssignText = document.querySelector('#buttonClickToAssignText');
buttonClickToAssignText.addEventListener('click', function(e){
    e.preventDefault()
    const formPopUp = document.querySelector('.formPopUp');
    //formPopUp.style.display='none';
    const mainText = document.querySelector('#mainText');
    const mainMargin = document.querySelector('#mainMargin');
    const mainFontSize = document.querySelector('#mainFontSize');
    
    item.style.margin = `${mainMargin.value}px ${mainMargin.value}px ${mainMargin.value}px ${mainMargin.value}px`;
    item.style.fontSize = `${mainFontSize.value}px`;
    item.innerHTML=mainText.value;


})

const buttonClickToClose = document.querySelector('#buttonClickToClose');
buttonClickToClose.addEventListener('click', function(e){
    e.preventDefault()
    const formPopUp = document.querySelector('.formPopUp');
    formPopUp.style.display='none';


})



