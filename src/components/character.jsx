import React, { Component } from "react";
import characters from "../resources/characters";

class Character extends Component {
  state = {};

  render() {
    const { id } = this.props;
    var character = characters.find(x => x.id === id);

    if (!character) {
      console.error("Character does not exist:", id);
      return null;
    }

    var style = {
      top: character.position.top + "%",
      left: character.position.left + "%",
      width: character.position.width + "%",
      height: character.position.height + "%"
    };

    return (
      <>
        {/* <div className="overlay">
          <div className="dialog">Dialog</div>
        </div> */}

        <div className={`character ${id}`} style={style}>
          <img alt="" src={character.sprite} />
        </div>
      </>
    );
  }
}

export default Character;
