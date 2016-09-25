# Web Workers Demo
Migrate Long Running JS onto a Web Worker

### [Relevant Quiz from Browser Rendering Optimization](https://www.udacity.com/course/viewer#!/c-ud860/l-4138168623/e-4184098558/m-4150829139)

### [Relevant solution from Browser Rendering Optimization](https://www.udacity.com/course/viewer#!/c-ud860/l-4138168623/e-4184098558/m-4146278980)

Working on the quiz? Start by examining index.html and the javascript files linked inside it.

### Things Learned
- python -m SimpleHTTPServer

### steps to implement a web worker
- define worker variable in the main thread
```javascript
var worker = new Worker('scripts/worker.js');
```
- send messages from main thread to the worker
```javascript
worker.postMessage({'type':type, 'imageData':imageData});
```

- receive messages (results) from the worker to main thread
```javascript
worker.onmessage = function(e) {
    toggleButtonsAbledness();
    var img = e.data;
    if (img) return ctx.putImageData(e.data, 0, 0);
};
```

- receive messages from main thread to the worker
```javascript
this.onmessage = function(e) {
  var imageData = e.data.imageData;
  var type = e.data.type;
  //put all the computational operations here
  //send results from the worker to main thread
  postMessage(imageData);
}
```
