function worldpalidromic(pali){
    let paliTocase=pali.toLowerCase()
    let paliToArray=paliTocase.split("")
    let paliToreverse= paliToArray.reverse()
       let newpali=paliToreverse.join("")
    if (newpali ===paliTocase){
       return pali
   }else{
        return "The word is not palidromic"
   }
    }
console.log(worldpalidromic('saippuakivikauppias')) // This is the logest Palindromic word i knew "saippuakivikauppias"