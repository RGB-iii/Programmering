//gotResult er Image Classifier
//gotResults er fra Sound Classifier

//Fra Sound Classifier
let soundLabel = "waiting...";

// Classifier Variabel
let classifier;

// Image Classifer
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/XVPSCubOC/';

// Sound Classifier
let modelURL = 'https://teachablemachine.withgoogle.com/models/AvCAQzAoW/';

// Video
let video;
let flippedVideo;
// To store the classification
let imageLabel = "";
let confidence = 0;

// Dette kan ændres (Image Classifier)
let QuestionImage;
let IdeaImage;
let IdkImage;
let LoveImage;
let NoImage;
let TiredImage;
let YesImage;

// Load Image Classifier model
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');

  // Load Sound Classifier model
  classifier = ml5.soundClassifier(modelURL + 'model.json');

//Dette kan ændres (Image Classifier)
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

  // classify audioen (lytter til mikrofonen by default)
  classifyAudio();


}

function classifyAudio() {
  classifier.classify(gotResults);
}


function draw() {

  textAlign(CENTER, CENTER);

  // Når der er baggrundslyd vises hovedtelefonerne
  //Dette kan ændres (Sound Classification)
  let emoji = "🎧";

  if (soundLabel == "Ko") {
    emoji = "🐮";
  } else if (soundLabel == "Kat") {
    emoji = "🐱";
  } else if (soundLabel == "Gris") {
    emoji = "🐷";
  }
  // Opret/tegn emojisne
  textSize(256);
  text(emoji, width / 2, height / 2);


  // Classification
  function gotResults(error, results) {
    if (error) {
      console.error(error);
      return;
    }
    // Store the label
    label = results[0].label;
  }

  // Opret videoen
  image(flippedVideo, 0, 0);

  //Dette kan ændres (Image Classification)
  if (imageLabel == "Question" && confidence > 0.95) {
    image(QuestionImage, 50, 50);
  }

  if (imageLabel == "Idea" && confidence > 0.90) {
    image(IdeaImage, 50, 5, 200, 200);
  }

  if (imageLabel == "Idk" && confidence > 0.60) {
    image(IdkImage, 50, 50);
  }

  if (imageLabel == "Love" && confidence > 0.001) {
    image(LoveImage, 50, 50, 200, 200);
  }

  if (imageLabel == "No" && confidence > 0.10) {
    image(NoImage, 50, 50, 200, 200);
  }

  if (imageLabel == "Tired" && confidence > 0.90) {
    image(TiredImage, 50, 50, 200, 200);
  }

  if (imageLabel == "Yes" && confidence > 0.50) {
    image(YesImage, 50, 50, 200, 200);
  }

  // Opret/tegn "imageLabel"
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(imageLabel, width / 2, height - 4);
  text(confidence, width / 2, height - 20);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

//Image Classifier
// Når vi får et resultat
function gotResult(error, results) {
  // Hvis der er en fejl
  if (error) {
    console.error(error);
    return;
  }
    // Henter resultat fra et erray
  imageLabel = results[0].imageLabel;
  confidence = results[0].confidence;
  // Classify en sidste gang
  classifyVideo();

  }

  //Sound Classifier
  function gotResults(error, results) {
    if (error) {
      console.error(error);
      return;
    }
      soundLabel = results[0].soundLabel;
    }

    
