
const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");

const depthfield = document.querySelector("#depthfield");
const arifield = document.querySelector("#arifield");
const clifield = document.querySelector("#clifield");
const avgfield = document.querySelector("#avgfield");




reviewfield.addEventListener("keyup", (e) => {
  const text = e.target.value;
  //console.log(text);
  const reviewval = text.replace(/\s+/g, '').trim();
  //console.log(reviewval);
  
  var words=0;
  var L=0;
  var S=0;
  var sent=0;
  var ari=0;
  var cli=0;
  var avg=0;
  
  if(reviewval.length>0){
    var depth = reviewval.length;
  depthfield.value = depth;
  console.log("depth " + depth);
  
   words = reviewval.split(' ').length;
  console.log("words"+words);
  
   L = (depth/words)*100;
  console.log("L"+L);

  sent = reviewval.split('.').length;
  console.log("sent"+sent);
  S = (sent/words)*100;
  console.log("S"+S);

 cli = 0.0588 * L - 0.296 * S - 15.8;
  console.log("cli " + cli);

 ari = 4.71 * (L/100) + 0.5 * (100/S) - 21.43;
  console.log("ari " + ari);

 avg = (cli + ari )/2;
  console.log("avg " + avg); 

  
  }
 

  progressarea.style.display = "none";

  if (reviewval.length > 0) {
    progressarea.style.display = "block";
   if(depth>273){
    progresstext.innerText='High';
    progresstext.classList.remove('w-50','bg-danger');
    progresstext.classList.add('w-100','bg-success');

   }
   else if(depth>145.500){
    progresstext.innerText='High';
    progresstext.classList.remove('w-50','bg-danger');
    progresstext.classList.add('w-100','bg-success');

   }
   else if(depth>123.500 && avg>8.261){
    progresstext.innerText='High';
    progresstext.classList.remove('w-50','bg-danger');
    progresstext.classList.add('w-100','bg-success');

   }

   else if(depth>371 && avg>20.282){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }

   else if(depth<=123.500){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }

   else if(depth<=145.500 && avg<=8.261){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }

   else if(avg>20.82){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }

   else{
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }
   
  /*  if(reviewval.length < 30) {
      progresstext.innerText='Low';
      progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-warning','bg-success');
      progresstext.classList.add('w-25','bg-danger');
    }
    
    else{
      progresstext.innerText='High';
      progresstext.classList.remove('w-25','w-50','w-75','bg-danger','bg-info','bg-warning');
      progresstext.classList.add('w-100','bg-success');
    } */
  }
}); 





/*else if(reviewval.length >= 30 && reviewval.length < 60) {
  progresstext.innerText='Average';
  progresstext.classList.remove('w-25','w-75','w-100','bg-danger','bg-info','bg-success');
  progresstext.classList.add('w-50','bg-warning');
}
else if(reviewval.length >= 60 && reviewval.length < 100) {
  progresstext.innerText='Medium';
  progresstext.classList.remove('w-25','w-50','w-100','bg-danger','bg-warning','bg-success');
  progresstext.classList.add('w-75','bg-info');
}*/