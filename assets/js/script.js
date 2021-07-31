//selecting all videos on home page
var videoSelectionEl = document.querySelectorAll(".videoSelection")

for (let i = 0; i < videoSelectionEl.length; i++) {
  const element = videoSelectionEl[i];
  element.addEventListener("click", function(event) {
    //preventing default
    event.preventDefault();
    //collecting dataset for query
    var newCollection = element.dataset.collection;

    //set window.location to ./watch.html?collection={data-collection}
    window.location = "./watch.html?collection=" + newCollection

  })
  
}