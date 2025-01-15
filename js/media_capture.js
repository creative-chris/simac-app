// request the user's camera and microphone as a MediaStream      
const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});

// attach the stream to the video element
const video = document.querySelector('video');
video.srcObject = stream;

// set a handler for the media session's picture-in-picture action
navigator.mediaSession.setActionHandler("enterpictureinpicture", () => {
  // display the video in Picture-in-Picture mode
  video.requestPictureInPicture();
}); 