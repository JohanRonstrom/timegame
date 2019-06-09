export default [
  {
    id: "waterfall",
    background:
      "https://cdn.pixabay.com/photo/2017/07/12/19/31/watercolour-2498058_1280.jpg",
    name: "Waterfall",
    exits: [
      {
        text: "To the road!",
        target: "crossroads",
        position: {
          top: 0,
          left: 0,
          width: 10,
          height: 100
        }
      }
    ]
  },
  {
    id: "village",
    background:
      "https://cdn.pixabay.com/photo/2017/07/11/14/51/watercolour-2493815_1280.jpg",
    name: "Village",
    characters: ["testgubbe"],
    exits: [
      {
        text: "Get on the road again",
        target: "crossroads",
        position: {
          top: 20,
          left: 0,
          width: 10,
          height: 80
        }
      },
      {
        text: "Secret passage to the waterfall...",
        target: "waterfall",
        position: {
          top: 70,
          left: 90,
          width: 10,
          height: 25
        }
      }
    ]
  },
  {
    id: "crossroads",
    background:
      "https://cdn.pixabay.com/photo/2017/09/28/04/47/forest-2794322_1280.jpg",
    name: "Crossroads",
    exits: [
      {
        text: "Look, a waterfall :-)",
        target: "waterfall",
        position: {
          top: 20,
          left: 0,
          width: 15,
          height: 60
        }
      },
      {
        text: "What a quaint village",
        target: "village",
        position: {
          top: 45,
          left: 40,
          width: 20,
          height: 30
        }
      }
    ]
  }
];
