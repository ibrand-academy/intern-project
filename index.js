var l = window.location.href;

function findL(x){
 if(l === x){
  return x;
 }else{
  console.log('can\'t find location');
 }
}
findL('view.html');
console.log(l);
