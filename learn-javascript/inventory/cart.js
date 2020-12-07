axios.get('http://localhost:3000/inventory')
.then((response) => {
    const simpanBarang = document.getElementById("tableData")
    data = response.data;
    console.log(data)
    
    response.data.forEach(item => {
        const { id, name, description, price,image, quantity} = item;
        //div ini untuk id card
        const itemHTML = `
        <tr>
            <td>${id}</td>
            <td> <image src=${image} style="width:50px; height=20px;"></image></td>
            <td>${name}</td>
            <td>${description}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>
            <button onclick="ganti(${id})"class="btn btn-outline-primary"data-toggle="modal" data-target="#myModal"><i class="fa fa-pencil-square">&nbsp;&nbsp;Change</button></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <button onclick="hapus(${id})" class="btn btn-outline-danger"><i class="fa fa-ban">&nbsp;&nbsp;Delete</button></i>
        </tr>`;
        simpanBarang.innerHTML += itemHTML;
    })
})
.catch((pesanError) => {
    console.log(pesanError);
});

const hapus = id => {
    axios.delete(`http://localhost:3000/inventory/${id}`)
}
const ganti = id => {
    const inventory = data.find(item => {
        return item.id === id
    })
    if (inventory) {
        const name = window.prompt('Name', inventory.name);
        const description = window.prompt('Description', inventory.description);
        const price = window.prompt('Price', inventory.price);
        const quantity = window.prompt('Image', inventory.quantity);
        axios.put(`http://localhost:3000/stock/${id}`, {
            name,
            description,
            price,
            quantity,
        });
    }

}