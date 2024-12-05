
const banners = [
  { id: "banner1", url: "https://yanazaiko.github.io/langlearn2.github.io/" },
  { id: "banner2", url: "https://yanazaiko.github.io/zaikoslot.github.io/" },
  { id: "banner3", url: "https://yanazaiko.github.io/yanasgamec.github.io/" },
];


banners.forEach(banner => {
  const element = document.getElementById(banner.id);
  element.addEventListener("click", () => {
    window.open(banner.url, "_blank"); 
  });
});
