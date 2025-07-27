const images = [
  "https://picsum.photos/id/1015/800/600", // 0
  "https://picsum.photos/id/1011/800/600", // 1
  "https://picsum.photos/id/1005/800/600", // 2
  "https://picsum.photos/id/1016/800/600", // 3
  "https://picsum.photos/id/1012/800/600", // 4
  "https://picsum.photos/id/1003/800/600", // 5
  "https://picsum.photos/id/1020/800/600", // 6
  "https://picsum.photos/id/1031/800/600", // 7
  "https://picsum.photos/id/1027/800/600", // 8
  "https://picsum.photos/id/1025/800/600"  // 9
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
  const boxes = document.querySelectorAll(".image-box");
  boxes.forEach(box => {
    if (category === "all" || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}
