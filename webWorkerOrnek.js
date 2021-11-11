onmessage = function(mesaj) {
  console.log('Veri ana thread üzerinden iletildi:'+mesaj.data);
  var workerResult = "Worker merhaba diyor!";
  postMessage(workerResult);
}