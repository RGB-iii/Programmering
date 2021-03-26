// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/XVPSCubOC/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let confidence = 0;
//THIS
let QuestionImage;
let IdeaImage;
let IdkImage;
let LoveImage;
let NoImage;
let TiredImage;
let YesImage;


// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  //THIS
  QuestionImage = loadImage('Question.png');
  IdeaImage = loadImage('Idea.png');
  IdkImage = loadImage('Idk.png');
  LoveImage = loadImage('Love.png');
  NoImage = loadImage('No.png');
  TiredImage = loadImage('Tired.png');
  YesImage = loadImage('Yes.png');
}

function setup() {
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  //background("green");
  // Draw the video
  image(flippedVideo, 0, 0);
  
  //AND THIS
  if (label == "Question" && confidence > 0.95){
    image(QuestionImage, 50, 50);
  }
  
   if (label == "Idea" && confidence > 0.90){
    image(IdeaImage, 50, 5, 200, 200);
  }
  
   if (label == "Idk" && confidence > 0.60){
    image(IdkImage, 50, 50);
  }
  
   if (label == "Love" && confidence > 0.001){
    image(LoveImage, 50, 50, 200, 200);
  }
  
   if (label == "No" && confidence > 0.10){
    image(NoImage, 50, 50, 200, 200);
  }
  
   if (label == "Tired" && confidence > 0.90){
    image(TiredImage, 50, 50, 200, 200);
  }
  
   if (label == "Yes" && confidence > 0.50){
    image(YesImage, 50, 50, 200, 200);
  }

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  text(confidence, width / 2, height - 20);

}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
//   console.log(results[0]);
  label = results[0].label;
  confidence = results[0].confidence;
  // Classifiy again!
  classifyVideo();
}