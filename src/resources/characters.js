export default [
  {
    id: "testgubbe",
    name: "Test Testsson",
    position: {
      // defaults to %
      top: 74,
      left: 72,
      width: 10,
      height: 25
    },
    sprite:
      "https://images.vexels.com/media/users/3/151966/isolated/lists/f7d5b0521f65b5f48621f65596863ea5-sheperd-character-illustration.png",
    portrait:
      "https://www.pngkit.com/png/full/771-7715213_happy-haru-persona-5-character-portraits.png",
    dialog: [
      {
        id: 1,
        text: "Hello, can I help you?",
        options: [
          { text: "Yes", target: 2 },
          { text: "No", target: null },
          { text: "Nevermind", target: 3 }
        ]
      },
      {
        id: 2,
        text: "So, what do you need?",
        options: [
          { text: "I don't know...", target: 3 },
          { text: "Nothing...", target: null }
        ]
      },
      {
        id: 3,
        text: "Ok, whatever."
      }
    ]
  }
];
