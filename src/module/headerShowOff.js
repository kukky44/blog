function headerShowOff() {
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (window.pageYOffset < 16) {
        document.getElementById("navbar").classList.remove("onScroll");
      } else {
        document.getElementById("navbar").classList.add("onScroll");
      }
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        if (currentScrollPos === 0) return;
        document.getElementById("navbar").style.top = "-5.0rem";
      }
      prevScrollpos = currentScrollPos;
    };
  }
}

export default headerShowOff;
