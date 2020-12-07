# Create Inventory App
## Use JSON Data
Create Data.js like this :
```javascript
[
    "product" : {
        name: "productname",
        detail: "detailProduct",
        price: "price",
        stock: "jumlahStock"
    },
    "order" : {
        name: "productname",
        total: "totalProduct",
        price: "price",
    } 
]
```
## Run json-server
sudo npm install -g json-server <br>
sudo npm install -g fake-server <br>
json-server --watch db.json <br>

## remove git
rm -rf .git

## add new remote
git remote add origin <githubLink><br>
git remote -v

## fatal: refusing to merge unrelated histories
git pull origin master --allow-unrelated-histories<br>