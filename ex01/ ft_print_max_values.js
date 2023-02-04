
function DeuxPlusGrandesValeurs(painting){
    let valeur1 = 0;
    let valeur2 = 0;
    
    
    for(let i = 0;  i < painting.length; i++){
        if(painting[i] > valeur1){
            valeur2 = valeur1;
            valeur1 = painting[i];
        }
        else if (painting[i] > valeur2 && painting[i] < valeur1){
            valeur2 = painting[i]
        }
    }
    
    return[valeur1, valeur2];
    }
    
    
    
    console.log(DeuxPlusGrandesValeurs(99,50,5,3,4,67,88));

  