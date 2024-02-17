document.addEventListener("DOMContentLoaded", function () {
  const pageWidth = document.documentElement.clientWidth;
  const pageHeight = document.documentElement.clientHeight;
  const timelines = [];
  const fishSizes = [40, 50, 60, 70, 80];

  for (let i = 0; i < 30; i++) {
    const fish = document.createElement("img");
    fish.classList.add("fish");
    fish.src = `fish/${(i % 12) + 1}.svg`;
    fish.height = fishSizes[i % 5];
    fish.width = fishSizes[i % 5];
    fish.alt = "fish";
    const y = Math.round(Math.random() * pageHeight);
    const x = Math.round(Math.random() * ((pageWidth * 2) / 3));
    const tl = gsap.timeline({ ease: "power1.out", repeat: -1 });
    tl.fromTo(
      fish,
      { x: x, y: y, rotationY: 0 },
      {
        x: x + Math.random() * 800 + 200,
        duration: Math.random() * 4 + 1,
      }
    )
      .to(fish, { rotationY: 180 })
      .to(fish, { x: x, duration: Math.random() * 4 + 1 })
      .to(fish, { rotationY: 0 });

    timelines.push(tl);
    document.body.appendChild(fish);
  }

  window.addEventListener("unload", () => {
    timelines.forEach((tl) => {
      tl.kill();
    });
    timelines.length = 0;
  });
});
