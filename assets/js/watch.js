//on load
//selecting the video player
var videoPlayerEl = document.querySelector("#watchVideo");
//selecting the main description
var mainDescriptionEl = document.querySelector("#mainDescription")
//selecting the views and flames
var viewsLikesEl = document.querySelector("#bottomDesc").children
//selecting the top description
var topDescriptionEl = document.querySelector("#topDescript")
//variable for likes
var flamesVar = 0;
//variable for views
var viewsVar = 0;
//selecting the flames button
var flamesButtonEl = document.querySelector("#flamesButton")
  //getting query from url
var searchQuery = window.location.search
//parsing the search for the collection
const urlParms = new URLSearchParams(searchQuery)
const documentFromUrl = urlParms.get("document")
  //get collection and document for promise
var docRef = db.collection("Videos").doc(documentFromUrl);
//promise to call data from document
docRef.get().then(function(doc) {
  if (doc.exists) {
    //setting viewsvar
    viewsVar = doc.data().Views
    //itterating views
    viewsVar++
    //updating views in database
    docRef.update({
      Views: viewsVar
    })
    //updating viewsEl
    viewsLikesEl[0].textContent = "Views: " + viewsVar
    //set video url
    videoPlayerEl.innerHTML = doc.data().Url
    //set description
    mainDescriptionEl.textContent = doc.data().Description
    //set flamesVar
    flamesVar = doc.data().Flames
    //set flames
    viewsLikesEl[1].textContent = "Flames: " + flamesVar
    //set user
    topDescriptionEl.querySelector("#submittext").textContent = "Submitted by: " + doc.data().User
  } else {
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error)
})

flamesButtonEl.addEventListener("click", function(element) {
  if (flamesButtonEl.dataset.state == "notSelected") {
    //prevent default
    element.preventDefault()
    //change data-state to selected
    flamesButtonEl.dataset.state = "selected"
    //itterate the flames
    flamesVar++
    //set flames in database
    docRef.update({
      Flames: flamesVar
    })
    //set flamesEl
    viewsLikesEl[1].textContent = "Flames: " + flamesVar
  } else if (flamesButtonEl.dataset.state == "selected") {
    //prevent default
    element.preventDefault()
    //change data-state to notSelected
    flamesButtonEl.dataset.state = "notSelected"
    //de-itterate flames
    flamesVar--
    //set flames in database
    docRef.update({
      Flames: flamesVar
    })
    //set flamesEl
    viewsLikesEl[1].textContent = "Flames: " + flamesVar
  }


})
