import React, { Component } from "react";
import characters from "../resources/characters";

class Dev extends Component {
  state = {};

  render() {
    const { action, parameter } = this.props.match.params;

    switch (action) {
      case "dialogtree":
        if (parameter) {
          return this.drawDialogTree(parameter);
        } else {
          return "No parameter";
        }
      default:
        return "No action";
    }
  }

  drawDialogTree(parameter) {
    const character = characters.find(x => x.id === parameter);

    console.log(character);

    return (
      <code style={{ fontSize: "75%" }}>
        <span>graph LR</span>
        <br />

        {character.dialog &&
          character.dialog.map((dialog, index) => {
            let hasStop = false;
            const stopId = dialog.id + ".Stop";
            const stopObject = stopId + '{" "}';
            const stopStyling = "style " + stopId + " fill:black";

            return (
              <div key={index}>
                <span>
                  {dialog.id}["{dialog.id}. {dialog.text}"]
                </span>
                {dialog.options ? (
                  dialog.options.map((option, index) => {
                    let target;
                    if (option.target) {
                      target = option.target;
                    } else {
                      target = stopId;
                      hasStop = true;
                    }

                    return (
                      <span key={index}>
                        {dialog.id} --> |"{index + 1}. {option.text}"| {target}
                      </span>
                    );
                  })
                ) : (
                  <span>
                    {dialog.id} --> |"[Close]"| {stopObject}
                    {(hasStop = true)}
                  </span>
                )}
                {hasStop && (
                  <div>
                    <span>{stopObject}</span>
                    <span>{stopStyling}</span>
                  </div>
                )}
                <br />
              </div>
            );
          })}
      </code>
    );
  }
}

export default Dev;
