const btn=document.getElementById("input");
btn.addEventListener("keyup",()=>{
    const a=document.getElementById("input").value.toUpperCase();
    console.log(a)
    document.getElementById("output").innerHTML=a;
});