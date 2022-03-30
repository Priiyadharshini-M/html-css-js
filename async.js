function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },2000)
  })
}
async function kitchen(){

  console.log("Strawberry")
  console.log("Berry")
  console.log("Orange")
  
  await toppings_choice()
  
  console.log("Apple")
  console.log("Lemon")

}
kitchen();
console.log("doing the dishes")
console.log("cleaning the tables")
