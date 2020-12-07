# File Handle On Backend / Server

Dealing transfer of data from client to server (inside req.body) etc. is probably the most basic knowledge which every backend developer gains in his initial days. But, file uploads (or `<input type="file"/>` ) won’t work with normal approach, and almost every beginner developer faces some difficulty in this area.

We will be using the `multer` Node module for handling file uploads. Make sure to install it in your project directory.

---

## Folder Structure

```sh
├── index.js
├── .gitignore
├── node_modules
├── package.json
├── yarn.lock
├── assets
    └── images
      └── users
    └── files
      └── word
      └── pdf
```

## Multer

Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

**_NOTE: Multer will not process any form which is not multipart (multipart/form-data)._**

### Usage

- First you have to declare mutler and set the destination to store all of your uploaded file.
  _NOTE: `dest:` read start from your root folder_

  ```js
  const multer = require('multer');
  const upload = multer({ dest: 'assets/' });
  ```

Now we set all uploaded file to `assets` folder

- Now we create route to handle uploaded file.

  - Let have simple scenario
    In your frontend, create simple form to add file (i.e images or files)

  ```js
  import React, { useState } from 'react';
  import axios from 'axios';

  const YOUR_API = `http://localhost:3001/upload-file`;

  function AddFile() {
    const [files, setFiles] = useState(null);

    function handleFile(event) {
      setFiles(event.target.files[0]);
    }

    function submitFile() {
      // remember to use new FormData()
      const data = new FormData();
      data.append('avatar', files);
      axios
        .post(YOUR_API, data)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    return (
      <div className='container'>
        <form className='form' onSubmit={submitFile}>
          <div>
            <input type='file' name='files' onChange={handleFile} />
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  ```

  On the above code we append `FormData` a new variable call **_avatar_**. Which, will handle files we uploaded
  to backend, and multer will search `avatar` to handle it.

  - In backend we create a router to handle.

  ```js
  const express = require('express');
  const multer = require('multer');

  const app = express();
  const port = process.env.PORT || 3001;

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'assets/images/users');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage });

  app.post('/upload-files', upload.single('avatar'), (req, res) => {
    try {
      console.log(req.file); // see what files is uploaded
      if (!req.file) {
        return res.status(400).send({
          success: false,
          message: 'No file received'
        });
      } else {
        return res.status(201).send({
          success: true,
          message: 'file received'
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: 'URL error',
        error: error.message
      });
    }
  });

  app.listen(port, () => console.log('server running on ' + port));
  ```

  In case you need to handle a text-only multipart form, you should use the `.none()` method: `upload.none()`

---

## References

- [Multer | GitHub](https://github.com/expressjs/multer#readme)
- [Multer | Expressjs](https://expressjs.com/en/resources/middleware/multer.html)
