function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

document.getElementById("jump").addEventListener("click",topFunction)