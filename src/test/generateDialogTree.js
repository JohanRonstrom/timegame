var fs = require("fs");
var stream = fs.createWriteStream("dialogTree.mmd");
import * from "../resources/characters";

const NL = "\n";

console.log(characters);

stream.once("open", function(fd) {
  stream.write("graph LR" + NL);
  stream.write("A --> B" + NL);
  stream.end();
});

// graph LR

// 1["Hello, what are you doing here?"]
// 1 --> |"Not sure"| 2
// 1 --> |"Let's see..."| 3
// 1 --> 4

// 2["Apan är en apa"]
// 2 --> |"whatever"| 78
// 2 --> |"more options"| 4
