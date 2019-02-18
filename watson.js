//client upload wav file to server, post/ajax call to server for file,
//before sending to client, add user, timestamp, unique ids for all posts in new object with post
//set up back end first, get node with watson api, save a wav file, create config, get it to
//console.log first
//get api routing up, server, wrap the wav file and funnel into watson
//client side, ajax call sends wav file, and add a user id to authenticate
//get back end talking to front end, use same wav file
//now file upload working (widget), enter into ajax call which sends to watson (console.log in front
//end) dropzone
//Converts speech to text
require("dotenv").config();
var SpeechToTextV1 = require("watson-developer-cloud/speech-to-text/v1");
var fs = require("fs");

var speechToText = new SpeechToTextV1({
  iam_apikey: process.env.iam_apikey,
  url: process.env.url
});

var audioFile = "Test-Audio.wav";

var params = {
  objectMode: true,
  content_type: "audio/wav",
  model: "en-US_BroadbandModel",
  profanity_filter: true
};

var recognizeStream = speechToText.recognizeUsingWebSocket(params);

fs.createReadStream(audioFile).pipe(recognizeStream);

recognizeStream.on("data", function(event) {
  onEvent("Data:", event);
});
recognizeStream.on("error", function(event) {
  onEvent("Error:", event);
});
recognizeStream.on("close", function(event) {
  onEvent("Close:", event);
});

function onEvent(name, event) {
  console.log(name, JSON.stringify(event, null, 2));
}

module.exports = speechToText;