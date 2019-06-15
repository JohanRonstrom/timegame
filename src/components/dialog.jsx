import React, { Component } from "react";

class Dialog extends Component {
  state = { currentDialogId: 1 };

  render() {
    const { character } = this.props;
    const playerPortrait =
      "http://20090414232451_181588.webstarts.com/uploads/Claw.png";

    if (!this.state.currentDialogId) {
      return null;
    }

    const currentDialog = character.dialog.find(
      x => x.id === this.state.currentDialogId
    );

    return (
      <div className="overlay">
        <div className="dialog-wrapper">
          <div className="portrait-wrapper">
            <img src={playerPortrait} className="portrait player-portrait" />
            <img
              src={character.portrait}
              className="portrait character-portrait"
            />
          </div>
          <div className="dialog">
            <p>{currentDialog.text}</p>

            {this.renderDialogOptions(currentDialog.options)}
          </div>
        </div>
      </div>
    );
  }

  renderDialogOptions(options) {
    if (options) {
      return options.map(function(option, index) {
        return (
          <p onClick={() => this.setDialogId(option.target)} key={index}>
            - {option.text}
          </p>
        );
      }, this);
    } else {
      return <p onClick={() => this.setDialogId(null)}>[Close]</p>;
    }
  }

  setDialogId(id) {
    if (id) {
      this.setState({ currentDialogId: id });
    } else {
      this.setState({ currentDialogId: 1 });
      this.props.closeDialog();
    }
  }
}

export default Dialog;
