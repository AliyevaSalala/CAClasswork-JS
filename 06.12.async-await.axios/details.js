let id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const BASE_URL = "https://fakestoreapi.com/products";

// axios(`${BASE_URL}/${id}`).then((res) => console.log(res.data));

async function getData(endpoint) {
  try {
    
    const res = await axios(`${BASE_URL}/${endpoint}/${id}`);
    // console.log(res.data);
    details.innerHTML = `
   <div class="col-12 col-md-6 col-lg-3 mb-4">
   <div class="card" style="width: 18rem">
     <div class="card-body">
     <img src="${res.data.image}" class="card-img-top"/>
       <h5 class="card-title">Title: ${res.data.title}</h5>
       <h5 class="card-title">Description: ${res.data.description}</h5>
       <p class="card-text">
       price: ${res.data.price}
       </p>
       <a href="#" class="btn btn-primary" onclick=goBack()>Go Back</a>
     </div>
   </div>
 </div>
   `;
  } catch (error) {
    console.log(error);
  }
}

getData("");


function goBack(){
    window.history.back()
}