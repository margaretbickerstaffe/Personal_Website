window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  let experienceText = document.querySelector(".experience");
  experienceText.addEventListener("click", function(){
    window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/experience.html";
  });
  let homeText = document.querySelector(".home");
  homeText.addEventListener("click", function(){
    window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/margaretbickerstaffeversion2.html";
  });
  let aboutMeText = document.querySelector(".aboutMe");
  aboutMeText.addEventListener("click", function(){
    window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/aboutMe.html";
  });
  let pastProjectsText = document.querySelector(".pastProjects");
  pastProjectsText.addEventListener("click", function(){
    window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/portfolio.html";
  });
  let resumeText = document.querySelector(".resume");
  resumeText.addEventListener("click", function(){
     window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/resume.html";
   });
  let learnMoreText = document.querySelector(".learnMore");
  learnMoreText.addEventListener("click", function(){
    window.location.href = "file:///Users/maggiebickerstaffe/Desktop/Bickestaffe/MargaretBickerstaffe/aboutMe.html";
  });
}
