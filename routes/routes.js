var appRouter = function(app) {
  app.get("/", function(req, res) {
      res.send("Hello World");
  });

  app.get("/beacons", function(req, res) {
    var accountMock = {
        "beacons": [
        {
            "Uuid": "00000000-0000-0000-0000-000000000000",
            "Major": "1",
            "Minor": "1",
            "Name" : "Ben"

        },
        {
          "Uuid": "00000000-0000-0000-0000-000000000000",
          "Major": "2",
          "Minor": "1",
          "Name" : "Izzy"
        },
        {
          "Uuid": "00000000-0000-0000-0000-000000000000",
          "Major": "2",
          "Minor": "1",
          "Name" : "Fish"
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
          "OfferID": "0001",
          "OfferURL": "https://www.mosquitodigital.co.uk/",
          "OfferName" : "Money off"

      },
      {
        "OfferID": "0002",
        "OfferURL": "https://www.mosquitodigital.co.uk/",
        "OfferName" : "Money off"

      },
      {
        "OfferID": "0003",
        "OfferURL": "https://www.mosquitodigital.co.uk/",
        "OfferName" : "Money off"

      }
  ]
  }
  return res.send(accountMock);

});

app.get("/stream", function(req, res) {
  var accountMock = {
      "endpoint": "https://www.mosquitodigital.co.uk/"
  }
  return res.send(accountMock);

});

}

module.exports = appRouter;
