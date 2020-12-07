axios.get('http://localhost:3000/inventory')
    .then((response) => {
        const listContact = document.getElementById("cardData")
        data = response.data;
        console.log("data",data)
        
        response.data.forEach(item => {
            console.log("item", item);
            
            const { image, name, description, price } = item;
            console.log("image", image);
            
    const itemHTML = `
    <div class="card" style="width:18em;">
    <img class="card-img-top" src=${image} alt="Card image cap" style="width:20%">
    <div class="card-body pt-0">
      <h3 class="card-title text-center">${name}</h3>
      <p class="card-text text-concat mb-1">${description}</p>
      <p class="card-text">Rp &nbsp;${price}</p>
      <div class="d-flex flex-row justify-content-center">
      <a href="#" class="btn btn-primary mr-4">Detail</a>
      <a href="#" class="btn btn-primary">Add Cart</a>
      </div>
    </div>
    </div>
  </div>`;
    listContact.innerHTML += itemHTML;
})
})
.catch((pesanError) => {
console.log(pesanError);
});