import React, { Component } from "react";
import Dialog from "../components/dialog";
import characters from "../resources/characters";

class Character extends Component {
  state = {
    displayDialog: false
  };

  constructor(props) {
    super(props);

    this.closeDialog = this.closeDialog.bind(this);
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
        {this.state.displayDialog && (
          <Dialog character={character} closeDialog={this.closeDialog} />
        )}
        <div
          className={`character ${id}`}
          onClick={() => this.openDialog()}
          style={style}
        >
          <img alt="" src={character.sprite} />
        </div>
      </>
    );
  }

  openDialog() {
    this.setState({ displayDialog: true });
  }

  closeDialog() {
    this.setState({ displayDialog: false });
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

          {this.renderDialogOptions(currentDialog.options)}
        </div>
      </div>
    );
  }

  renderDialogOptions(options) {
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
}

export default Character;
