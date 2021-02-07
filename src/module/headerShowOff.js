function headerShowOff() {
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    let scrollDownAmount = 0;
    let scrollUpAmount = 0;
    let prevScrollDown = false;
    window.onscroll = function () {
      if (window.pageYOffset < 16) {
        document.getElementById("navbar").classList.remove("onScroll");
      } else {
        document.getElementById("navbar").classList.add("onScroll");
      }
      const currentScrollPos = window.pageYOffset;
      const currentScrollAmount = currentScrollPos - prevScrollpos;
      if (currentScrollAmount > 0) {
        if (prevScrollDown) {
          scrollUpAmount = 0;
          scrollDownAmount = scrollDownAmount + currentScrollAmount;

          if (scrollDownAmount > 70) {
            document.getElementById("navbar").style.top = "-5.0rem";
          }
        }
        prevScrollDown = true;
      } else {
        if (!prevScrollDown) {
          scrollDownAmount = 0;
          scrollUpAmount = scrollUpAmount + currentScrollAmount;
          if (scrollUpAmount < -70) {
            document.getElementById("navbar").style.top = "0";
          }
        }
        prevScrollDown = false;
      }

      prevScrollpos = currentScrollPos;
    };
  }
}

export default headerShowOff;
