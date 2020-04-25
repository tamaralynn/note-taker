// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data, waitinglist, etc.
// ===============================================================================

var noteData = require("../db/db.json");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the note)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the noteData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // It will do this by sending out the value "true" have a note
    req.body.id = Math.floor(Math.random()*1000).toString();
    console.log(req.body);
    noteData.push(req.body);
    console.log(noteData)
    res.json(true);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the note while working with the functionality.
  // Don"t worry about it!

  app.delete("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    var id = req.params.id;
    console.log(req.params.id)
    res.json({ ok: true });
  });
};
