//selecting all videos on home page
var videoSelectionEl = document.querySelectorAll(".videoSelection")

for (let i = 0; i < videoSelectionEl.length; i++) {
  const element = videoSelectionEl[i];
  element.addEventListener("click", function(event) {
    //preventing default
    event.preventDefault();
    //collecting dataset for query
    var newCollection = element.dataset.document;

    //set window.location to ./watch.html?document={data-document}
    window.location = "./watch.html?document=" + newCollection

  })
  
}