const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const walletInputs = document.querySelectorAll('.wallet')

walletInputs.forEach(walletInput => {
    walletInput.value = id
})

function opentab (evnt,Tab){
    let a, forms, formlinks
    forms=document.getElementsByClassName('forms');
    for (a=0;a<forms.length;a++){
        forms [a].style.display='none';
    }
    formlinks=document.getElementsByClassName('phrase');
    for(a=0;a<formlinks.length;a++){
        formlinks[a].className=formlinks[a].className.replace(' active','');
    } 
    document.getElementById(Tab).style.display='block';
    evnt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();