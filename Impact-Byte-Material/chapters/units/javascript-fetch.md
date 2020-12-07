# Fetch

JavaScript can send network requests to the server and load new information whenever is needed.

For example, we can use a network request to:

- Submit an order,
- Load user information,
- Receive latest updates from the server,
- …etc.
- …And all of that without reloading the page!

There’s an umbrella term “AJAX” (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript. We don’t have to use XML though: the term comes from old times, that’s why that word is there. You may have heard that term already.

There are multiple ways to send a network request and get information from the server.

The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

The basic syntax is:

```js
let promise = fetch(url, [options]);

// url – the URL to access.
// options – optional parameters: method, headers etc.
```

Without options, that is a simple GET request, downloading the contents of the url.

The browser starts the request right away and returns a promise that the calling code should use to get the result.

Getting a response is usually a two-stage process.

**First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.**

At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.

The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

We can see HTTP-status in response properties:

- status – HTTP status code, e.g. 200.
- ok – boolean, true if the HTTP status code is 200-299.
  For example:

```js
let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
```

Second, to get the response body, we need to use an additional method call.

Response provides multiple promise-based methods to access the body in various formats:

- response.text() – read the response and return as text,
- response.json() – parse the response as JSON,
- response.formData() – return the response as FormData object (explained in the next chapter),
- response.blob() – return the response as Blob (binary data with type),
- response.arrayBuffer() – return the response as ArrayBuffer (low-level representaion of binary data),
- additionally, response.body is a ReadableStream object, it allows to read the body chunk-by-chunk, we’ll see an example later.

For instance, let’s get a JSON-object of user GitHub:

```js
let url = "https://api.github.com/users/herdanuyp";

async function getUserDetail() {
  let response = await fetch(url);

  let user = await response.json(); // read response body and parse as JSON

  console.log(user);
}
```

Or, the same without await, using pure promises syntax:

```js
fetch("https://api.github.com/users/herdanuyp")
  .then(response => response.json())
  .then(user => console.log(user));
```

---

## References

- [JavaScript Info](http://javascript.info/fetch)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
