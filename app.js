const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

client
  .webDetection('./public/yudiz.jpeg')
  .then(results => {
    console.log(JSON.stringify(results[0], null, 2))
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


 
  // documentTextDetection
  // faceDetection -> results[0].faceAnnotations
  // labelDetection -> results[0].labelAnnotations
  // landmarkDetection -> results[0].landmarkAnnotations
  // textDetection -> results[0].textAnnotations
  // logoDetection -> results[0].logoAnnotations
  // imageProperties -> results[0].imagePropertiesAnnotation
  // safeSearchDetection -> results[0].safeSearchAnnotation
  // cropHints -> results[0].cropHintsAnnotation
  // webDetection -> results[0].webDetection 