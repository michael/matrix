var resources_fixture = {
  "properties": {
      "name": {
          "name": "Country Name",
          "type": "string",
          "unique": true
      },
      "location": {
          "name": "Location",
          "type": "string",
          "unique": true,
          "meta": {
              "facet": true
          }
      },
      "created_at": {
          "name": "Created At",
          "type": "date",
          "unique": true,
          "meta": {
              "facet": true
          }
      },
      "emotions": {
          "name": "Emotions",
          "type": "string",
          "unique": false,
          "meta": {
              "facet": true
          }
      },
      "events": {
          "name": "Events",
          "type": "string",
          "unique": true,
          "meta": {
              "facet": true
          }
      },
      "colors": {
          "name": "Colors",
          "type": "string",
          "unique": false,
          "meta": {
              "facet": true
          }
      },
      "iconic_traits": {
        "name": "Iconic Trait",
        "type": "string",
        "unique": false,
        "meta": {
            "facet": true
        }
      },
      "brands": {
        "name": "Brands",
        "type": "string",
        "unique": false,
        "meta": {
            "facet": true
        }
      },
      "image": {
          "name": "Image URL",
          "type": "string",
          "unique": true
      }
  },
  
  "items": {
    "/image/playing_children": {
      "name": "Children playing in the Park",
      "entities": ["Park", "Summer", "Children"],
      "iconic_entities": ["Children"]
    },
    "/image/mrproper_3d": {
      "name": "Mr. Proper in Action",
      "location": "New York",
      "created_at": new Date(),
      "emotions": ["Cheerful"],
      "events": ["Donauinselfest"],
      "colors": ["Red", "Blue"],
      "emotions": ["Cheerful"],
      "iconic_traits": ["Clean", "Kitchen"]
      "brands": ["Mr Proper"]
      "image": "http://foo.com/images/mrproper_3d"
    }
  }
}