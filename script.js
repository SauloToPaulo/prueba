let si=document.getElementById('si');

si.addEventListener("click",function(e){swal("Te esperamos","Salmos:91","success",{button:"Bendiciones!",
});});

let no=document.getElementById('no');

no.addEventListener("mousemove",function(e){
  let x=Math.round(Math.random()*90);
  let y=Math.round(Math.random()*90);
no.style.left=x+"%";
no.style.top=y+"%";
});