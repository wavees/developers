<script>
  // import
  import { onMount } from "svelte";

  onMount(() => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    generate(ctx, canvas.width, canvas.height);
  });


  // generate
  // This function will draw different
  // shapes on our canvas
  function generate(ctx, width, height) {
    // Let's prepare some variables
    let randomX = 0;
    let randomY = 0;

    let number = getRandomInt(3, 5);

    for (let i = 0; i < number; i++) {
      randomX = Math.floor(Math.random() * canvas.width);
      randomY = Math.floor(Math.random() * canvas.height);

      generateShape(ctx, randomX, randomY);
    };
  };

  // generateShape
  // This function is used to generate
  // differently sized/coloured shape
  // on specific coordinates
  function generateShape(ctx, x, y) {
    let shapes = [
      "circle"
    ];

    let colors = [
      "#f6e05e",
      "#3182ce",
      "#38b2ac",
      "#f687b3"
    ];

    // Math.floor(Math.random()*platformHeight),
    switch (shapes[Math.floor(Math.random() * shapes.length)]) {
      case "circle":
        let radius = getRandomInt(10, 35);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fill();

        break;
    
      default:
        break;
    }
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Size variables (Width and Height)
  export let width = 512;
  export let height = 512;
</script>

<canvas id="canvas" width={width} height={height}></canvas>