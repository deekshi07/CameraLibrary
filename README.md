# CameraLibrary.js 📷

> Lightweight, zero-dependency browser camera component for WebRTC media streams, viewfinder overlays, instant canvas snapshot capture, and client-side downloads.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-success?style=for-the-badge&logo=github)](https://deekshi07.github.io/CameraLibrary/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WebRTC](https://img.shields.io/badge/API-WebRTC%20MediaStream-333333?logo=webrtc)](https://webrtc.org/)

---

## 🌟 Overview

`CameraLibrary.js` is a plug-and-play JavaScript class designed to embed hardware camera streams directly into any DOM element without external dependencies (no jQuery, React, or build pipeline required).

It handles the entire camera lifecycle:
1. **Device Access:** Requests webcam permissions via `navigator.mediaDevices.getUserMedia`.
2. **Viewfinder Stream:** Auto-scales the `<video>` element with an optical border overlay.
3. **Hardware Snapshot:** Flushes current video frame buffer onto an offscreen `<canvas>` at full native resolution.
4. **Modal Preview:** Displays confirmation modal with accept/retry options.
5. **Instant Export:** Converts canvas pixel data to a high-res PNG download link.

---

## 🚀 Quickstart

### 1. Include in HTML

```html
<!-- Viewfinder container -->
<div id="cameraContainer" style="width: 600px; height: 400px; position: relative;"></div>

<!-- Include Library -->
<script src="cameraLibrary.js"></script>
<script>
  // Instantiate with the container ID
  const camera = new CameraLibrary('cameraContainer');
</script>
```

### 2. Run Local Demo

```bash
# Clone the repository
git clone https://github.com/deekshi07/CameraLibrary.git
cd CameraLibrary

# Serve with any static web server (WebRTC requires localhost or HTTPS)
npx serve .
# Or with Python
python -m http.server 8000
```
Open `http://localhost:8000` in your browser and allow camera permissions.

---

## 🛠️ API Reference

### `new CameraLibrary(containerId)`

Creates a new camera instance mounted to `#containerId`.

| Method | Description |
| :--- | :--- |
| `init()` | Initializes the video stream, viewfinder overlay, buttons, and preview modal. |
| `setupCamera()` | Prompts user for video permissions and binds stream to video element. |
| `captureImage()` | Reads `videoWidth`/`videoHeight` and draws the frame onto the canvas. |
| `saveImage()` | Converts canvas to `dataURL('image/png')` and triggers automatic file download. |
| `closePreview()`| Dismisses the image preview modal without downloading. |

---

## 🔐 Permissions & HTTPS Note

Browsers enforce strict security for hardware access:
- **Localhost:** `http://localhost` and `http://127.0.0.1` allow camera permissions for development.
- **Production:** WebRTC camera streams require **HTTPS** encryption.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
