window.onload = function () {
  setTimeout(function () {
          var options = {
              strings: ["Full Stack Developer", "Creative Programmer", "DevOps Enthusiast", "Team Player"],
              typeSpeed: 45,
              backSpeed: 30,
              backDelay: 300,
              startDelay: 0,
              loop: true,
              showCursor: false,
              loopCount: Infinity
          }

          setTimeout(function () {
              var typed = new Typed(".tagline", options);
          }, 0);

      }, 300);
};
