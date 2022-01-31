var tab = [[80,81,82,83,84,85],[86,87,88,89,90,91],[91,92,93,94,95,96],[97,98,99,100,101,102],[103,104,105,106,107,108],[109,110,111,112,113,114],[115,116,117,118,119,120]];
var turno = 2;
var count = 0;
var prova = 0;
var a = 0;
var b = 0;

function start(pulsante){
    var temp = 0;
    pulsante -= 1;
    invertiTurno();
    inserisci(pulsante);

    if(count != -1){
        for(var i = a; i > b; i--){
            if(tab[pulsante][temp] != 1 && tab[pulsante][temp] != 2){
                if(turno == 1){
                    document.getElementById(i).style.background = 'red';
                    document.getElementById("mes").innerHTML = 'Turno del Blu';
                    tab[pulsante][temp] = 1;
                }else{
                    document.getElementById(i).style.background = 'blue';
                    document.getElementById("mes").innerHTML = 'Turno del Rosso';
                    tab[pulsante][temp] = 2;
                }
                break;
            }
            temp++;
        }
    count++;
    }
    if(count == 42){
        document.getElementById("mes").innerHTML = 'Pareggio';
        count = -1;
    }
    if(count != -1){
        prova = vittoria();
        if(prova == 1){
            if(turno == 1){
                document.getElementById("mes").innerHTML = 'ha vinto il: ROSSO';
                count = -1;
            }else{
                document.getElementById("mes").innerHTML = 'ha vinto il: BLU';
                count = -1;
            }
        }
    }   
}   
function invertiTurno(){
    if(turno == 2){
        turno--;
    }else{
        turno++;
    }
}
function inserisci(pulsante){
    switch(pulsante){
        case 0: a = 6; b = 0; break;
        case 1: a = 12; b = 6; break;
        case 2: a = 18; b = 12; break;
        case 3: a = 24; b = 18; break;
        case 4: a = 30; b = 24; break;
        case 5: a = 36; b = 30; break;
        case 6: a = 42; b = 36; break;
    }
}
function vittoria(){
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 6; j++){
            if(tab[i][j] == tab[i][j+1] && tab[i][j+1] == tab[i][j+2] && tab[i][j+2] == tab[i][j+3]){
                return 1;
            }else
            if(tab[i][j] == tab[i+1][j] && tab[i+1][j] == tab[i+2][j] && tab[i+2][j] == tab[i+3][j]){
                return 1;
            }else
            if(tab[i][j] == tab[i+1][j+1] && tab[i+1][j+1] == tab[i+2][j+2] && tab[i+2][j+2] == tab[i+3][j+3]){
                return 1;
            }
        }
    }
    return 0;
}
