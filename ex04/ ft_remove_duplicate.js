function deleteDoublons(painting) {
    
    let deleteDuplique = [];
  
    for (let a = 0; a < painting.length; a++) {
        let chiffreDoublons = false;
        for (let b = 0; b < deleteDuplique.length; b++) {
            if (tableau[a] === deleteDuplique[b]) {
                chiffreDoublons = true;
            }
        }
        if (chiffreDoublons === false) {
            deleteDuplique.push(tableau[b]);
        }
    }
  
    return deleteDuplique;
  }

  let valeur = [99,99,78,65,33,33,1];

  console.log(deleteDoublons(valeur));

