const reviewfield = document.querySelector("#reviewfield");
const progressarea = document.querySelector('#progressdiv');
const progresstext = document.querySelector("#progressbar");


reviewfield.addEventListener("keyup", (e) => {

 //progressarea.style.display = "none";

 
  const text = e.target.value;
 // console.log(text);

  const reviewval = text.replace(/\s+/g, ' ').trim();

  //console.log(reviewval);

    const fetchData = async (response) =>{
    const avg = await response.avg;
    const depth = await response.depth;
    console.log(avg, depth);
    indicator(avg, depth, reviewval);
  }
  
   if(reviewval.length === 0){
    progresstext.innerText='';
    progresstext.classList.remove('w-50','bg-danger', 'w-100', 'bg-success');  
   }
  else{
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
        console.log(response)
        fetchData(response);
      })
      .catch(error => console.log('error', error));  
  }
}); 



const indicator = (avg, depth, reviewval) => {
  //progressarea.style.display = "none";
  console.log(avg, depth);

  if (reviewval.length > 0) {
    //progressarea.style.display = "block";
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
  }
}