//on load
//selecting the video player
var videoPlayerEl = document.querySelector("#watchVideo");
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
    videoPlayerEl.innerHTML = doc.data().URL
    console.log(doc.data().URL)

    //set description
    //set flames
    //set user
    //set views
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

