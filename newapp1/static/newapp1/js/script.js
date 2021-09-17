
const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");





reviewfield.addEventListener("keyup", (e) => {

  var depth = 0;
  var avg = 0;
  const text = e.target.value;
 // console.log(text);

  const reviewval = text.replace(/\s+/g, ' ').trim();
  //console.log(reviewval);
  
  
  if(reviewval.length>0){
      var formdata = new FormData();
      formdata.append("review_box", reviewval);

      var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("getindices", requestOptions)
      .then(res => res.json())
      .then(response =>{
        //console.log(response.avg)
        avg = response.avg;
        depth = response.depth;
        console.log(avg, depth);
      } )
      .catch(error => console.log('error', error));
      
  
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