const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");


reviewfield.addEventListener("keyup", (e) => {

  progressarea.style.display = "none";
  const text = e.target.value;
 // console.log(text);

  const reviewval = text.replace(/\s+/g, ' ').trim();
  const depth = reviewval.length;
  //console.log(reviewval);

  if (reviewval.length > 0) {
    progressarea.style.display = "block";
   if(depth>=500){
    progresstext.innerText='High';
    progresstext.classList.remove('w-50','bg-danger');
    progresstext.classList.add('w-100','bg-success');

   }
  
   else{
    progresstext.innerText='Low';
    progresstext.classList.remove('w-100','bg-success');
    progresstext.classList.add('w-50','bg-danger');
   }
  }
}); 

