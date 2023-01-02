import "./styles.css";
import React, { useState } from "react";

var placeDataBase = {
  MountainPlaces: [
    {
      name: "Auli",
      description:
        "Auli is a Himalayan ski resort and hill station in the north Indian state of Uttarakhand,India. It’s surrounded by coniferous and oak forests, plus the Nanda Devi and Nar Parvat mountains. A long cable car links Auli to the town of Joshimath. North of Auli are the colorful Badrinath Temple, a Hindu pilgrimage site, and the Valley of Flowers National Park, with its alpine flora and wildlife like snow leopards and red foxes.Auli can be visited all through the year. The primary attraction for tourists in the place is snow skiing and the best time for it is from November to March. The months from May to November offer a cool and pleasant climate to the tourists.",
      rating: "5 / 5"
    },
    {
      name: "Mukteshwar",
      description:
        "Mukteshwar is a village and tourist destination in the Nainital district of Uttarakhand, India.Fruit orchards, coniferous forests, lush green trails and narrow lanes make Mukteshwar a special destination for trekking. Apart from trekking, camping, paragliding; Mukteshwar is also known for rock climbing and rappelling. The region is full of hard rocky hills, which are suitable for rock climbing. The comfortable temperate climate of the hills makes Mukteshwar a great place to visit all year round, but the summer months between March and June are the most popular and the best time to visit hill station.",
      rating: "5 / 5"
    },
    {
      name: "Valley of Flowers National Park ",
      description:
        "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli district in the state of Uttarakhand,India and is known for its meadows of endemic alpine flowers and the variety of flora.At 3352 to 3658 meters above sea level, the gentle landscape of the Valley of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park to the east.Together, they encompass a unique transition zone between the mountain ranges of the Zanskar and Great Himalaya.The Valley is beautiful in May, June and September. But for maximum number of flowers in July and August are most preferred months.",
      rating: "5 / 5"
    }
  ],
  BeachPlaces: [
    {
      name: "Minicoy,Lakshadweep",
      description:
        "Thundi Beach and Kadmat Beach are the proud entrants in the coveted list of Blue Beaches, an eco-label given to the cleanest beaches in the world. ",
      rating: "5 / 5"
    },
    {
      name: "Goa",
      description:
        "There are so many beaches in Goa like Baga beach, Colva Beach,Palolem Beach, Candolim Beach, Agonda Beach.More than 50 beach shacks pull you to offer food, drink and music.",
      rating: "4 / 5"
    },
    {
      name: "Radhanagar Beach, Havelock Island",
      description:
        "Situated in Andaman & Nicobar, It's needless to say that it is the best beach in India. Many people across the world come over to marvel at this lovely beach. But if you want some time alone go for a stroll along the shores, you'll find much-needed tranquility here.",
      rating: "5 / 5"
    }
  ],
  CulturalAndHeritagePlaces: [
    {
      name: "Hampi",
      description:
        "Hampi is an ancient village in the south Indian state of Karnataka.It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.Winter season is the best time to visit Hampi. Hampi Festival is one of the most enjoyable and well known festivals in Hampi that come in the month of November. People celebrate this festival by indulging in various activities like shows of music, fireworks, dance, puppet shows, etc",
      rating: "5 / 5"
    },
    {
      name: "Kailash Temple",
      description:
        "The Kailasha or Kailashanatha temple is the largest of the rock-cut Hindu temples at the Ellora Caves, Aurangabad District, Maharashtra, India.A megalith carved from a rock cliff face, it is considered one of the most remarkable cave temples in the world because of its size, architecture and sculptural treatment, and the climax of the rock-cut phase of Indian architecture.The best time to visit Kailash Temple would be in December, when an Indian classical music festival is held.",
      rating: "5 / 5"
    },
    {
      name: "Unakoti Heritage Site",
      description:
        "Unakoti is a historical and archaeological Hindu pilgrimage center located in Kailashahar subdivision of Unakoti district of Tripura state, India .Unakoti literally means 'one less one crore'.Unkoti Hill is a sculptural emblem and ancient Shaivite place that hosts approx ninety-nine lakh ninety-nine thousand nine hundred and ninety-nine rock carvings figures and images of gods and goddesses. It is a place of worship with huge rock reliefs celebrating Shiva.October to April are the best period to visit.",
      rating: "5 / 5"
    }
  ]
};

export default function App() {
  var [SelectedTypeOfPlace, SetSelectedTypeOfPlace] = useState(
    "MountainPlaces"
  );

  function typeOfPlaceClickHandler(typeOfPlace) {
    SetSelectedTypeOfPlace(typeOfPlace);
  }

  return (
    <div className="App">
      <h1 style={{ fontStyle: "italic" }}>YOUR TRAVEL GUIDE</h1>
      <p style={{ textAlign: "center" }}>
        Do you like <strong style={{ fontStyle: "italic" }}>travelling</strong>?
        If yes, then you are at the right place. Checkout some cool places to
        hang out with your friends and family.
      </p>
      <h2 style={{ fontSize: "20px" }}> Select a type </h2>
      <div>
        {" "}
        {Object.keys(placeDataBase).map((typeOfPlace) => (
          <button
            style={{
              backgroundColor: "#7dd3fc",
              padding: "1rem",
              margin: "1rem",
              fontSize: "larger",
              fontStyle: "italic",
              cursor: "pointer",
              borderRadius: ".2rem",
              border: "2px solid"
            }}
            onClick={() => typeOfPlaceClickHandler(typeOfPlace)}
            key={typeOfPlace}
          >
            {typeOfPlace}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyle: "none" }}>
          {placeDataBase[SelectedTypeOfPlace].map((place, index) => (
            <li
              style={{
                backgroundColor: "#e0f2fe",
                fontSize: "large",
                fontStyle: "oblique",
                padding: "1rem",
                height: "50%",
                width: "80%",
                margin: "1rem",
                borderRadius: "1rem",
                marginLeft: "100px"
              }}
              key={index}
            >
              <div style={{ fontSize: "larger" }}>
                <u>{place.name}</u>
              </div>
              <div style={{ fontSize: "16px" }}>{place.description}</div>
              <div style={{ fontSize: "large" }}>{place.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
