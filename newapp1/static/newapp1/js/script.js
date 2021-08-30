
const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");



reviewfield.addEventListener("keyup", (e) => {
  const text = e.target.value;
  console.log(text);
  const reviewval = text.replace(/\s+/g, '').trim();
  console.log(reviewval);
  
  var cli = 0;
  var ari = 0;
  var avg = 0;
  var depth = reviewval.length;
  

  
  const params = {
    text: reviewval,
    
};
const options = {
    method: 'POST',
    body: JSON.stringify( params )  
};


  fetch('https://ipeirotis-hrd.appspot.com/_ah/api/readability/v1/getReadabilityMetrics', options)
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  cli = data.COLEMAN_LIAU;
  ari = data.ARI;
  avg = (cli+ari)/2;
  //depth = data.CHARACTERS;
  console.log(avg);
  })

.catch((error) => {
  console.error('Error:', error);
  });


  progressarea.style.display = "none";

  if (reviewval.length > 0) {
    progressarea.style.display = "block";
   if(depth>273){
    progresstext.innerText='High';
    progresstext.classList.remove('w-25','w-50','w-75','bg-danger','bg-info','bg-warning');
    progresstext.classList.add('w-100','bg-success');

   }
   else if(depth>145.500){
     progresstext.innerText='High';
     progresstext.classList.remove('w-25','w-50','w-75','bg-danger','bg-info','bg-warning');
     progresstext.classList.add('w-100','bg-success');
   }
   else if(depth>123.500 && avg>8.261){
    progresstext.innerText='High';
    progresstext.classList.remove('w-25','w-50','w-75','bg-danger','bg-info','bg-warning');
    progresstext.classList.add('w-100','bg-success');
   }

   else if(depth>371 && avg>20.282){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-warning','bg-success');
    progresstext.classList.add('w-25','bg-danger');
   }

   else if(depth<=123.500){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-warning','bg-success');
    progresstext.classList.add('w-25','bg-danger');
   }

   else if(depth<=145.500 && avg<=8.261){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-warning','bg-success');
    progresstext.classList.add('w-25','bg-danger');
   }

   else if(avg>20.82){
    progresstext.innerText='Low';
    progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-warning','bg-success');
    progresstext.classList.add('w-25','bg-danger');
   }

   else{
    progresstext.innerText='Low';
    progresstext.classList.remove('w-50','w-75','w-100','bg-info','bg-success', 'bg-danger');
    progresstext.classList.add('w-25','bg-warning');
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



let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;

		showValue.innerHTML = i + " out of 5";
	});
}

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