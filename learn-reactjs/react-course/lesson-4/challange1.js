// You have written 182 characters, you have -42 characters left.
var tweet = prompt("Compose your tweet writing:");
var tweetCount = tweet.length;
alert(
  "you have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    " characters remaining."
);