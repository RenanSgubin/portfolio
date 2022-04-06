

const totalDivsNumber = 5;
const totalSecondaryDivsNumber = 8;

/*function hoverLanguageDetailsIcons ( classNumber ){
    document.getElementsByClassName("language-detail-icon")[`${classNumber}`].style.backgroundColor = "rgb(226, 226, 226)";
}*/

function showLanguagesDetails( classNumber ){

    //Deixar todos os backgrounds dos icones na cor padrão
    for(let i = 0; i < totalDivsNumber; i++){
        document.getElementsByClassName("language-detail-icon")[i].style.backgroundColor = "#151515";
    }

    //Mudar para o background cinza claro quando clicado
    document.getElementsByClassName("language-detail-icon")[`${classNumber}`].style.backgroundColor = "rgb(52, 52, 52)";


    //Fazer as as divs com os detalhes anteriores sumirem
    for(let d = 0; d < totalDivsNumber; d++){
        document.getElementsByClassName("language-details")[d].style.right = "-15%";
        document.getElementsByClassName("language-details")[d].style.height = "0%";
        document.getElementsByClassName("language-details")[d].style.width = "0%";
    }

    //Fazer aparecer a div clicada com os detalhes
    document.getElementsByClassName("language-details")[`${classNumber}`].style.right = "0%";
    document.getElementsByClassName("language-details")[`${classNumber}`].style.height = "100%";
    document.getElementsByClassName("language-details")[`${classNumber}`].style.width = "90%";

}


/*Para skills secundárias */
function showSecondaryLanguagesDetails( classNumber ){

    //Deixar todos os backgrounds dos icones na cor padrão
    for(let i = 5; i < totalSecondaryDivsNumber; i++){
        document.getElementsByClassName("language-detail-icon")[i].style.backgroundColor = "#151515";
    }

    //Mudar para o background cinza claro quando clicado
    document.getElementsByClassName("language-detail-icon")[`${classNumber}`].style.backgroundColor = "rgb(52, 52, 52)";


    //Fazer as as divs com os detalhes anteriores sumirem
    for(let d = 5; d < totalSecondaryDivsNumber; d++){
        document.getElementsByClassName("language-details")[d].style.height = "0%";
        document.getElementsByClassName("language-details")[d].style.width = "0%";
        document.getElementsByClassName("language-details")[d].style.right = "-15%";
    }

    //Fazer aparecer a div clicada com os detalhes
    document.getElementsByClassName("language-details")[`${classNumber}`].style.right = "0%";
    document.getElementsByClassName("language-details")[`${classNumber}`].style.height = "100%";
    document.getElementsByClassName("language-details")[`${classNumber}`].style.width = "90%";

}



window.onload = () => {

    //Começar com o HTML já selecionado
    document.getElementsByClassName("language-details")[0].style.right = "0%";
    document.getElementsByClassName("language-details")[0].style.height = "100%";
    document.getElementsByClassName("language-details")[0].style.width = "90%";
    document.getElementsByClassName("language-detail-icon")[0].style.backgroundColor = "rgb(52, 52, 52)";

    //Começar com o PHP já selecionado
    document.getElementsByClassName("language-details")[5].style.right = "0%";
    document.getElementsByClassName("language-details")[5].style.height = "100%";
    document.getElementsByClassName("language-details")[5].style.width = "90%";
    document.getElementsByClassName("language-detail-icon")[5].style.backgroundColor = "rgb(52, 52, 52)";
    

}