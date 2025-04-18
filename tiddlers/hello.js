(function () {
  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  var Widget = require("$:/core/modules/widgets/widget.js").widget;

  var Hello = function (parseTreeNode, options) {
    this.initialise(parseTreeNode, options);
  };

  /*
    Inherit from the base widget class
    */
  Hello.prototype = new Widget();
  const coordinates = [
    [53, 120],
    [54, 120],
    [55, 120],
    [57, 120],
    [60, 120],
    [65, 120],
    [70, 120],
    [75, 120],
    [80, 121],
    [86, 123],
    [92, 127],
    [97, 132],
    [102, 139],
    [105, 147],
    [108, 158],
    [110, 171],
    [111, 185],
    [111, 199],
    [109, 213],
    [106, 226],
    [101, 237],
    [94, 248],
    [88, 256],
    [82, 262],
    [77, 266],
    [72, 270],
    [67, 271],
    [62, 272],
    [57, 271],
    [53, 268],
    [50, 264],
    [48, 260],
    [47, 255],
    [47, 249],
    [48, 243],
    [51, 237],
    [54, 231],
    [58, 227],
    [63, 223],
    [67, 220],
    [72, 218],
    [78, 216],
    [84, 215],
    [91, 214],
    [98, 214],
    [106, 213],
    [113, 213],
    [119, 212],
    [126, 212],
    [132, 212],
    [138, 210],
    [144, 208],
    [150, 203],
    [154, 198],
    [158, 192],
    [161, 184],
    [163, 175],
    [166, 164],
    [168, 153],
    [170, 142],
    [172, 134],
    [173, 126],
    [173, 121],
    [173, 117],
    [173, 114],
    [173, 113],
    [172, 112],
    [171, 112],
    [169, 113],
    [167, 116],
    [165, 120],
    [163, 125],
    [161, 132],
    [160, 139],
    [158, 147],
    [157, 155],
    [156, 164],
    [156, 173],
    [155, 183],
    [154, 193],
    [154, 203],
    [154, 211],
    [154, 218],
    [154, 224],
    [154, 229],
    [155, 235],
    [156, 240],
    [157, 245],
    [158, 249],
    [160, 253],
    [161, 256],
    [162, 258],
    [163, 261],
    [165, 263],
    [166, 266],
    [168, 268],
    [169, 270],
    [171, 271],
    [172, 272],
    [173, 272],
    [175, 272],
    [178, 271],
    [181, 269],
    [184, 267],
    [188, 264],
    [191, 261],
    [195, 257],
    [199, 252],
    [203, 247],
    [207, 243],
    [210, 238],
    [213, 233],
    [216, 228],
    [218, 223],
    [219, 217],
    [220, 211],
    [220, 206],
    [220, 201],
    [219, 197],
    [217, 194],
    [215, 192],
    [214, 191],
    [212, 191],
    [210, 191],
    [208, 192],
    [205, 194],
    [203, 196],
    [200, 199],
    [198, 201],
    [197, 204],
    [196, 207],
    [196, 211],
    [195, 215],
    [195, 219],
    [196, 224],
    [197, 229],
    [200, 234],
    [202, 239],
    [205, 243],
    [209, 246],
    [212, 248],
    [215, 249],
    [218, 250],
    [221, 251],
    [224, 251],
    [227, 251],
    [231, 251],
    [234, 250],
    [237, 248],
    [240, 246],
    [244, 243],
    [247, 240],
    [250, 235],
    [253, 230],
    [256, 222],
    [259, 213],
    [261, 203],
    [263, 191],
    [264, 179],
    [266, 168],
    [267, 158],
    [268, 150],
    [269, 144],
    [269, 139],
    [269, 136],
    [269, 134],
    [269, 133],
    [269, 134],
    [269, 137],
    [268, 144],
    [267, 152],
    [266, 162],
    [265, 174],
    [264, 188],
    [263, 203],
    [263, 216],
    [263, 226],
    [264, 235],
    [265, 243],
    [266, 250],
    [268, 256],
    [270, 260],
    [271, 263],
    [273, 266],
    [274, 267],
    [276, 269],
    [279, 270],
    [282, 272],
    [284, 273],
    [287, 273],
    [289, 273],
    [291, 271],
    [294, 266],
    [297, 257],
    [300, 245],
    [304, 231],
    [307, 214],
    [310, 196],
    [313, 177],
    [316, 160],
    [318, 145],
    [320, 134],
    [321, 128],
    [322, 124],
    [322, 122],
    [322, 121],
    [322, 121],
    [322, 125],
    [321, 131],
    [319, 139],
    [318, 146],
    [318, 154],
    [317, 162],
    [317, 171],
    [317, 181],
    [317, 190],
    [318, 199],
    [318, 207],
    [319, 214],
    [320, 221],
    [321, 227],
    [323, 233],
    [324, 238],
    [325, 242],
    [326, 245],
    [328, 248],
    [329, 250],
    [331, 251],
    [333, 251],
    [335, 251],
    [338, 251],
    [341, 249],
    [344, 246],
    [348, 242],
    [353, 236],
    [357, 229],
    [362, 220],
    [367, 211],
    [370, 202],
    [373, 194],
    [375, 188],
    [377, 184],
    [378, 182],
    [378, 181],
    [378, 181],
    [376, 181],
    [374, 182],
    [372, 183],
    [369, 185],
    [366, 188],
    [364, 193],
    [362, 198],
    [361, 204],
    [361, 211],
    [361, 217],
    [361, 223],
    [361, 230],
    [362, 235],
    [363, 240],
    [366, 243],
    [369, 246],
    [372, 248],
    [376, 249],
    [379, 249],
    [383, 249],
    [387, 248],
    [392, 246],
    [396, 244],
    [400, 242],
    [405, 239],
    [409, 236],
    [412, 232],
    [416, 228],
    [419, 223],
    [421, 218],
    [422, 213],
    [423, 208],
    [423, 203],
    [423, 198],
    [422, 194],
    [420, 191],
    [418, 189],
    [415, 187],
    [413, 185],
    [411, 184],
    [408, 183],
    [405, 183],
    [402, 182],
    [399, 182],
    [396, 181],
    [393, 181],
    [391, 181],
    [389, 181],
    [387, 181],
    [386, 181],
    [384, 181],
    [383, 181],
    [382, 181],
    [381, 182],
    [380, 183],
    [378, 184],
    [377, 184],
    [376, 185],
    [376, 185],
  ];

  /*
    Render this widget into the DOM
    */
  /*
    Render this widget into the DOM
    */
  Hello.prototype.render = function (parent, nextSibling) {
    this.parentDomNode = parent;

    // Create canvas element
    const canvas = this.document.createElement("canvas");
    canvas.id = "canvas1";
    canvas.style.width = "100%";
    canvas.style.height = "auto";
    canvas.style.display = "block";
    canvas.style.margin = "0";
    canvas.style.background = "#111";

    // Create container div
    const canvasContainer = this.document.createElement("div");
    canvasContainer.id = "canvas-container";
    canvasContainer.appendChild(canvas);

    // Insert into DOM
    parent.insertBefore(canvasContainer, nextSibling);
    this.domNodes.push(canvasContainer);

    // Get context and setup
    const ctx = canvas.getContext("2d");

    // Calculate bounds of the original coordinates
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    coordinates.forEach((pt) => {
      if (pt[0] < minX) minX = pt[0];
      if (pt[0] > maxX) maxX = pt[0];
      if (pt[1] < minY) minY = pt[1];
      if (pt[1] > maxY) maxY = pt[1];
    });

    const designWidth = maxX - minX;
    const designHeight = maxY - minY;
    // Calculate the center of the original drawing
    const designCenterX = minX + designWidth / 2;
    const designCenterY = minY + designHeight / 2;

    // Create complex points from raw coordinates (no initial scaling)
    const complexPoints = coordinates.map((pt) => ({
      re: pt[0],
      im: pt[1],
    }));

    // Discrete Fourier Transform (DFT)
    function dft(x) {
      const N = x.length;
      const X = [];
      for (let k = 0; k < N; k++) {
        let re = 0,
          im = 0;
        for (let n = 0; n < N; n++) {
          const phi = (2 * Math.PI * k * n) / N;
          // Multiply by e^(-i*phi) = cos(phi) - i*sin(phi)
          re += x[n].re * Math.cos(phi) + x[n].im * Math.sin(phi);
          im += -x[n].re * Math.sin(phi) + x[n].im * Math.cos(phi);
        }
        re /= N;
        im /= N;
        const freq = k;
        const amp = Math.hypot(re, im);
        const phase = Math.atan2(im, re);
        X.push({ re, im, freq, amp, phase });
      }
      return X;
    }

    // Compute Fourier coefficients and sort by amplitude (largest first)
    let fourier = dft(complexPoints);
    fourier.sort((a, b) => b.amp - a.amp);

    // Animation state variables
    let time = 0;
    const dt = (2 * Math.PI) / fourier.length; // Time step per frame
    let path = [];
    const animationSpeed = 1; // Lower = slower, 1.0 = original speed
    let lastFrameTime = 0;
    let animationFrameId = null; // To manage the animation loop

    // Function to resize the canvas and handle DPI scaling
    const resizeCanvas = () => {
      // Stop previous animation frame request if any
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Use parent width for responsiveness
      const newWidth = canvasContainer.clientWidth;

      // Calculate height
      const newHeight = newWidth * (2 / 3);

      // Set the CSS size for the element's layout
      canvas.style.width = newWidth + "px";
      canvas.style.height = newHeight + "px";

      // Set the drawing surface resolution
      const dpr = window.devicePixelRatio || 1;
      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;

      // Scale the context once here to compensate for devicePixelRatio
      ctx.resetTransform(); // Clear previous transforms before scaling
      ctx.scale(dpr, dpr);

      // Reset drawing state
      path = [];
      time = 0;
      lastFrameTime = 0; // Reset last frame time for smooth start

      // Restart the animation loop
      animationFrameId = requestAnimationFrame(draw);
    };

    // Function to draw the set of vectors and update the traced path
    const draw = (currentTime) => {
      // Control frame rate based on timing
      if (lastFrameTime === 0) lastFrameTime = currentTime;
      const elapsed = currentTime - lastFrameTime;

      // Only update if enough time has passed
      if (elapsed > 1000 / 60 / animationSpeed) {
        lastFrameTime = currentTime;

        // Use CSS dimensions for drawing logic before DPR scaling
        const cssWidth = parseFloat(canvas.style.width) || canvas.width;
        const cssHeight = parseFloat(canvas.style.height) || canvas.height;

        // Clear the canvas
        ctx.save();
        ctx.resetTransform();
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.save();

        // Scaling Logic
        const scaleX = cssWidth / designWidth;
        const scaleY = cssHeight / designHeight;
        const scale = Math.min(scaleX, scaleY) * 0.9;

        // Translate to the center of the CSS canvas dimensions
        ctx.translate(cssWidth / 2, cssHeight / 2);
        // Apply the calculated scale
        ctx.scale(scale, scale);
        // Translate the drawing's origin so its original center aligns with the canvas center
        ctx.translate(-designCenterX, -designCenterY);

        let x = 0;
        let y = 0;
        const baseLineWidth = 1;

        // Draw each Fourier vector
        for (let i = 0; i < fourier.length; i++) {
          let prevX = x;
          let prevY = y;
          const freq = fourier[i].freq;
          const radius = fourier[i].amp;
          const phase = fourier[i].phase;
          x += radius * Math.cos(freq * time + phase);
          y += radius * Math.sin(freq * time + phase);

          // Draw the circle (vector path)
          ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
          ctx.lineWidth = baseLineWidth / scale;
          ctx.beginPath();
          ctx.arc(prevX, prevY, radius, 0, 2 * Math.PI);
          ctx.stroke();

          // Draw the vector line
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = baseLineWidth / scale;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        // Add the final tip to the path
        path.unshift({ x, y });
        // Limit path length for performance
        if (path.length > 700) {
          path.pop();
        }

        // Draw the traced path
        ctx.beginPath();
        if (path.length > 0) {
          ctx.moveTo(path[0].x, path[0].y);
          for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
          }
          ctx.strokeStyle = "#ff4081"; // Pink color
          ctx.lineWidth = (baseLineWidth * 2) / scale;
          ctx.stroke();
        }

        ctx.restore();

        // Increment time and loop if needed
        time += dt;
        if (time >= 2 * Math.PI) {
          time = time % (2 * Math.PI);
          path = [path[0]];
        }
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    // Add resize listener
    window.addEventListener("resize", resizeCanvas);

    // Initial setup: size the canvas and start the animation
    resizeCanvas();

    // Store references to event handlers for cleanup
    this.resizeCanvas = resizeCanvas;
  };

  // Add a refresh method to handle widget refresh
  Hello.prototype.refresh = function () {
    return false; // Return true to force a complete refresh
  };

  // Add proper cleanup
  Hello.prototype.removeChildDomNodes = function () {
    if (this.resizeCanvas) {
      window.removeEventListener("resize", this.resizeCanvas);
    }

    // Clean up animation frame
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Remove DOM nodes
    this.domNodes.forEach(function (domNode) {
      domNode.parentNode.removeChild(domNode);
    });
  };

  exports.hello = Hello;
})();
