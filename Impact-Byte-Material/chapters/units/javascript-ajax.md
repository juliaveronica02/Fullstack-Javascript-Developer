# JavaScript AJAX

AJAX is stand for Asynchronus JavaScript And XML. AJAX is not a programming language. AJAX just uses a combination of:

- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

> AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Basically, what Ajax does is make use of the browser's built-in XMLHttpRequest (XHR) object to send and receive information to and from a web server asynchronously, in the background, without blocking the page or interfering with the user's experience.

## The Basics

To do the request, we need 3 steps:

1. Create XMLHttpRequest:

```js
let request = new XMLHttpRequest();
```

2. Initialize it, usually right after new XMLHttpRequest:

```js
request.open(method, URL, [async, user, password]);
```

This method specifies the main parameters of the request:

- method – HTTP-method. Usually "GET" or "POST".
- URL – the URL to request, a string, can be URL object.
- async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
- user, password – login and password for basic HTTP auth (if required).

Please note that open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.

3. Send it out

```js
xhr.send([body]);
```

This method opens the connection and sends the request to server. The optional body parameter contains the request body.

Some request methods like GET do not have a body. And some of them like POST use body to send the data to the server. We’ll see examples of that later.

4. Listen to xhr events for response.

These three events are the most widely used:

- load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.
- error – when the request couldn’t be made, e.g. network down or invalid URL.
- progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.

```js
xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() {
  // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

xhr.onprogress = function(event) {
  // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  alert(`Received ${event.loaded} of ${event.total}`);
};
```

For instance:

```js
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open("GET", "https://api.github.com/users/herdanuyp");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function() {
  alert("Request failed");
};
```

Once the server has responded, we can receive the result in the following xhr properties:

- status
  HTTP status code (a number): 200, 404, 500 and so on, can be 0 in case of a non-HTTP failure.
- statusText
  HTTP status message (a string): usually OK for 200, Not Found for 404, Forbidden for 403 and so on.
- response (old scripts may use responseText)
  The server response body.

Please check out the [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) reference for a complete list of response codes.

## Ready States

XMLHttpRequest changes between states as it progresses. The current state is accessible as xhr.readyState.

All states, as in the [specification](https://xhr.spec.whatwg.org/#states):

```sh
UNSENT = 0; // initial state
OPENED = 1; // open called
HEADERS_RECEIVED = 2; // response headers received
LOADING = 3; // response is loading (a data packed is received)
DONE = 4; // request complete
```

We can track them using `readystatechange` event:

```js
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/herdanuyp", false);

try {
  xhr.send();
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    alert(xhr.response);
  }
} catch (err) {
  // instead of onerror
  alert("Request failed");
}
```

For instance of full usage:

```js
function getGitHubFollowers() {
  // Creating the XMLHttpRequest object
  let request = new XMLHttpRequest();

  // Instantiating the request object
  request.open("GET", "https://api.github.com/users/herdanuyp/followers");

  // Defining event listener for readystatechange event
  request.onreadystatechange = function() {
    // Check if the request is compete and was successful
    if (this.readyState === 4 && this.status === 200) {
      // Inserting the response from server into an HTML element
      document.getElementById("result").innerHTML = this.responseText;
    }
  };

  // Sending the request to the server
  request.send();
}
```

---

## References

- [Tutorial Republic](https://www.tutorialrepublic.com/javascript-tutorial/javascript-ajax.php)
- [W3 Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

**Bahasa**

- [Petani Kode](https://www.petanikode.com/javascript-ajax/)
