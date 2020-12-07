document.getElementById('simpanBarang').addEventListener('submit', function (event) {
    // event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    //untuk post
    const data = {
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        image: image
    }
    axios.post('http://localhost:3000/inventory', data).then(res => {
        console.log("post",res);
        window.alert('data berhasil di tambah');
    }).catch(err => {
        console.log(err);
    });
});