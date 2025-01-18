// cameraLibrary.js

class CameraLibrary {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.video = null;
      this.canvas = null;
      this.context = null;
      this.overlay = null;
      this.captureButton = null;
      this.previewModal = null;
      this.acceptButton = null;
      this.rejectButton = null;
      this.init();
    }
  
    init() {
      this.setupCamera();
      this.createOverlay();
      this.createCaptureButton();
      this.createPreviewModal();
    }
  
    setupCamera() {
      this.video = document.createElement('video');
      this.video.autoplay = true;
      this.video.style.width = '100%';
      this.video.style.height = '100%';
      this.container.appendChild(this.video);
  
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.video.srcObject = stream;
        })
        .catch((err) => {
          console.error('Camera access denied:', err);
        });
    }
  
    createOverlay() {
      this.overlay = document.createElement('div');
      this.overlay.style.position = 'absolute';
      this.overlay.style.top = '0';
      this.overlay.style.left = '0';
      this.overlay.style.width = '100%';
      this.overlay.style.height = '100%';
      this.overlay.style.border = '2px solid rgba(255, 255, 255, 0.5)';
      this.overlay.style.pointerEvents = 'none';
      this.container.style.position = 'relative';
      this.container.appendChild(this.overlay);
    }
  
    createCaptureButton() {
      this.captureButton = document.createElement('button');
      this.captureButton.innerText = 'Capture';
      this.captureButton.style.position = 'absolute';
      this.captureButton.style.bottom = '20px';
      this.captureButton.style.left = '50%';
      this.captureButton.style.transform = 'translateX(-50%)';
      this.captureButton.style.padding = '10px 20px';
      this.captureButton.style.backgroundColor = '#007bff';
      this.captureButton.style.color = '#fff';
      this.captureButton.style.border = 'none';
      this.captureButton.style.borderRadius = '5px';
      this.captureButton.style.cursor = 'pointer';
      this.container.appendChild(this.captureButton);
  
      this.captureButton.addEventListener('click', () => this.captureImage());
    }
  
    createPreviewModal() {
      this.previewModal = document.createElement('div');
      this.previewModal.style.position = 'fixed';
      this.previewModal.style.top = '50%';
      this.previewModal.style.left = '50%';
      this.previewModal.style.transform = 'translate(-50%, -50%)';
      this.previewModal.style.backgroundColor = '#fff';
      this.previewModal.style.border = '1px solid #ddd';
      this.previewModal.style.padding = '20px';
      this.previewModal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      this.previewModal.style.display = 'none';
  
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.previewModal.appendChild(this.canvas);
  
      this.acceptButton = document.createElement('button');
      this.acceptButton.innerText = '✔';
      this.acceptButton.style.margin = '10px';
      this.acceptButton.style.padding = '10px';
      this.acceptButton.style.backgroundColor = 'green';
      this.acceptButton.style.color = '#fff';
      this.acceptButton.style.border = 'none';
      this.acceptButton.style.borderRadius = '5px';
      this.acceptButton.style.cursor = 'pointer';
      this.previewModal.appendChild(this.acceptButton);
  
      this.rejectButton = document.createElement('button');
      this.rejectButton.innerText = '✖';
      this.rejectButton.style.margin = '10px';
      this.rejectButton.style.padding = '10px';
      this.rejectButton.style.backgroundColor = 'red';
      this.rejectButton.style.color = '#fff';
      this.rejectButton.style.border = 'none';
      this.rejectButton.style.borderRadius = '5px';
      this.rejectButton.style.cursor = 'pointer';
      this.previewModal.appendChild(this.rejectButton);
  
      document.body.appendChild(this.previewModal);
  
      this.acceptButton.addEventListener('click', () => this.saveImage());
      this.rejectButton.addEventListener('click', () => this.closePreview());
    }
  
    captureImage() {
      const width = this.video.videoWidth;
      const height = this.video.videoHeight;
      this.canvas.width = width;
      this.canvas.height = height;
      this.context.drawImage(this.video, 0, 0, width, height);
      this.previewModal.style.display = 'block';
    }
  
    saveImage() {
      const image = this.canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'captured-image.png';
      link.click();
      this.closePreview();
    }
  
    closePreview() {
      this.previewModal.style.display = 'none';
    }
  }
  
  // Usage example:
  // Create a container with an ID and pass the ID to the CameraLibrary class.
  // const camera = new CameraLibrary('cameraContainer');
  