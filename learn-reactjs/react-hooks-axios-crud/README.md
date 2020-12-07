## RUN!!
* npm run json-server.
* sudo npm start.

## Note.
* db.json (server).
* must add below code on package.json:
```javascript
"json-server": "json-server --watch db.json --port 5000",
"dev": "concurrently \"npm start\" \"npm run json-server\"",
```