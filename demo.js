let arr=[2, 10, 25, 5, 12, 10, 56, 10, ,10];
let arr2=arr.filter(x=> gretaer10(x));
function gretaer10(x)
{
    if(x>10)
    {
        return x;
    }
}
console.log(arr2);

array_name.reduce(function,initial value)
const [a, b = 20] = [10];
const regx=/^[a-zA-Z]$/