//on load
//selecting the video player
var videoPlayerEl = document.querySelector("#watchVideo");
//selecting the main description
var mainDescriptionEl = document.querySelector("#mainDescription")
//selecting the views and flames
var viewsLikesEl = document.querySelector("#bottomDesc").children
//selecting the top description
var topDescriptionEl = document.querySelector("#topDesc")
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
    console.log("Document data:", doc.data());
    //set video url
    videoPlayerEl.innerHTML = doc.data().Url
    //set description
    mainDescriptionEl.textContent = doc.data().Description
    //set flames
    viewsLikesEl[1].textContent = "Flames: " + doc.data().Flames
    //set user
    topDescriptionEl.querySelector("h3").textContent = "Submitted by: " + doc.data().User
    //set views
    viewsLikesEl[0].textContent = "Views: " + doc.data().Views
  } else {
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error)
})

//in firebase
  //pull the likes data
  //pull the dislikes data
  //pull the views data
  //pull the video source url

