var saveRandomArray, saveReturnOfGereteRandowArray = x => {saveRandomArray = x},
    compareRandomArrayWithUserInputArray = x => {
      var inputUser = (prompt('WRITE 6 NUMBER FROM 0 TO 60 AND TEST YOUR LUCK. (EX: 43-0-32-60-34-11)')).split('-'), equalitiesOfSaveRadomArrayAndInputUser = "";
      for(let i=0;i<6;i++){
        for(let j=0;j<6;j++){
          if(x[i] == inputUser[j]){
            equalitiesOfSaveRadomArrayAndInputUser += (x[i].toString() + ",");
          }
        }
      }
      resultOfSaveResultAndInputUsers(equalitiesOfSaveRadomArrayAndInputUser);
    }
    gereteRandomArray = () => {
      var mainArray = [], secondaryArray, randomNumberGenerator = () => Math.floor(Math.random() * 60);
      while(mainArray.length < 6){
        secondaryArray = randomNumberGenerator();
        if(mainArray.indexOf(secondaryArray) === -1){
          mainArray.push(secondaryArray);
        }
      }
      return mainArray;
    },
    outputDrawnNumbers = x => {
      let a = "Raffle Numbers: " + x.join(", "); 
      document.querySelector('#saida').innerHTML = a;
    },
    resultOfSaveResultAndInputUsers = x => {
      document.querySelector('#saida2').innerHTML = "Numbers identity: " + x; 
      outputDrawnNumbers(saveRandomArray)
    };
