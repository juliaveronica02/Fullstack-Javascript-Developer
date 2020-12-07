## Promise
represent the eventual completion (or failur) of an asynchronous operation, and its resulting value. <br>
There are 3 states of the promise object: <br>
* pending: Initial state, before the promise succeeds or fails.
* resolved: completed promise.
* Rejected: failed promis.
The process: <br>
Pending (Promise) => Resolved (.then() or .catch()) => Pending (Promuse). <br>
when we request data from the server by using a promise, it will be in pending mode until we receive our data. if we achieve to get the information from the server, the promise will be resolved successfully. but if we don't get the information, then the promise will be in the rejected state. <br>