// Simple animation & console message
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Flash USDT Website Loaded Successfully!");

  // Add a small fade effect for sections
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, index) => {
    sec.style.opacity = "0";
    setTimeout(() => {
      sec.style.transition = "opacity 1s ease-in-out";
      sec.style.opacity = "1";
    }, index * 400);
  });
});
