import React, { Component } from "react";
import characters from "../resources/characters";

class Character extends Component {
  state = {
    dialog: null
  };

  setDialogOption(id) {
    this.setState({ dialog: id });
  }

  renderDialog(character) {
    if (!this.state.dialog) {
      return null;
    }

    const currentDialog = character.dialog.find(
      x => x.id === this.state.dialog
    );

    return (
      <div className="overlay">
        <div className="dialog">
          <p>{currentDialog.text}</p>

          {this.renderOptions(currentDialog.options)}
        </div>
      </div>
    );
  }

  renderOptions(options) {
    if (options) {
      return options.map(function(option, index) {
        return (
          <p onClick={() => this.setDialogOption(option.target)} key={index}>
            {option.text}
          </p>
        );
      }, this);
    } else {
      return <p onClick={() => this.setDialogOption(null)}>Close</p>;
    }
  }

  render() {
    const { id } = this.props;
    const character = characters.find(x => x.id === id);

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
        {this.renderDialog(character)}
        <div
          className={`character ${id}`}
          onClick={() => this.setDialogOption(1)}
          style={style}
        >
          <img alt="" src={character.sprite} />
        </div>
      </>
    );
  }
}

export default Character;
