import React, { Component } from "react";
import Character from "../components/character";
import scenes from "../resources/scenes";
import { Link } from "react-router-dom";

class Scene extends Component {
  state = {};

  renderExits(scene) {
    if (!scene.exits) {
      return null;
    }

    return scene.exits.map((exit, index) => {
      var style = {
        top: exit.position.top + "%",
        left: exit.position.left + "%",
        width: exit.position.width + "%",
        height: exit.position.height + "%"
      };

      return (
        <Link className="exit" to={exit.target} style={style} key={index}>
          {exit.text}
        </Link>
      );
    });
  }

  renderCharacters(scene) {
    if (!scene.characters) {
      return null;
    }

    return scene.characters.map(character => (
      <Character id={character} key={character} />
    ));
  }

  render() {
    const { id } = this.props.match.params;
    var scene = scenes.find(x => x.id === id);

    if (!scene) {
      console.error("Scene does not exist:", id);
      return null;
    }

    var style = {
      backgroundImage: `url(${scene.background})`
    };

    return (
      <div className={`scene ${id}`} style={style}>
        {this.renderExits(scene)}

        {this.renderCharacters(scene)}
      </div>
    );
  }
}

export default Scene;
