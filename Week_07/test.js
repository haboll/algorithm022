

function a() {}
var a = 1999;
{
    a = 2000;
    function a() {}
    a = 2001;
    console.log(a);
}
console.log(a);