var appRouter = function(app) {
  app.get("/", function(req, res) {
      res.send("Hello World");
  });

  app.get("/beacons", function(req, res) {
    var accountMock = {
        "beacons": [
        {
            "beaconUDID": "00000000-0000-0000-0000-000000000000",
            "major": "1",
            "minor": "1"

        },
        {
          "beaconUDID": "00000000-0000-0000-0000-000000000000",
          "major": "2",
          "minor": "1"
        },
        {
          "beaconUDID": "00000000-0000-0000-0000-000000000000",
          "major": "2",
          "minor": "1"
        }
    ]
    }
    return res.send(accountMock);
    //
    // if(!req.query.username) {
    //     return res.send({"status": "error", "message": "missing username"});
    // } else if(req.query.username != accountMock.username) {
    //     return res.send({"status": "error", "message": "wrong username"});
    // } else {
    // }
});


///////////

app.get("/offers", function(req, res) {
  var accountMock = {
      "offers": [
      {
          "offerID": "0001",
          "offerUrl": "https://www.mosquitodigital.co.uk/",

      },
      {
        "beaconUDID": "0002",
        "offerUrl": "https://www.mosquitodigital.co.uk/",
      },
      {
        "beaconUDID": "0003",
        "offerUrl": "https://www.mosquitodigital.co.uk/",
      }
  ]
  }
  return res.send(accountMock);

});



}

module.exports = appRouter;
