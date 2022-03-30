const chocolate = (isEmpty) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isEmpty) {
        resolve(5);
      } else {
        reject("I am sad");
      }
    }, 2000);
  });
};
chocolate(false)
  .then((result) => {
    console.log("There are "+result+" chocolates");  
  })
  /*.catch((error) => {
    console.log(error); 
  })*/
  .finally(() => {
    console.log("Finished");
  });
chocolate(true)
  /*.then((result) => {
    console.log("There are "+result+" chocolates"); 
  })*/
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished"); 
  });
