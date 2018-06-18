var appRouter = function(app) {
  app.get("/", function(req, res) {
      res.send("Hello World");
  });

  app.get("/beacons/whitelabel", function(req, res) {
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
});


///////////

app.get("/offers/whitelabel", function(req, res) {
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

app.get("/stream/whitelabel", function(req, res) {
  var accountMock = {
      "endpoint": "https://www.mosquitodigital.co.uk/"
  }
  return res.send(accountMock);

});

}

module.exports = appRouter;
