importScripts('imageManips.js');

this.onmessage = function(e) {
  var imageData = e.data.imageData;
  var type = e.data.type;
  console.log(e.data.type);

  try {
    console.log("here");
    length = imageData.data.length / 4;
    for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      r = imageData.data[i * 4 + 0];
      g = imageData.data[i * 4 + 1];
      b = imageData.data[i * 4 + 2];
      a = imageData.data[i * 4 + 3];
      //console.log(r + " " + g + " " + b + " " + a);
      pixel = manipulate(type, r, g, b, a);
      imageData.data[i * 4 + 0] = pixel[0];
      imageData.data[i * 4 + 1] = pixel[1];
      imageData.data[i * 4 + 2] = pixel[2];
      imageData.data[i * 4 + 3] = pixel[3];
      //console.log(pixel[0]);
    }
    //send message from worker to main
    postMessage(imageData);
  } catch (e) {
      console.log("enter error");
    function ManipulationException(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new ManipulationException('Image manipulation error');
    postMessage(undefined);
  }
}
