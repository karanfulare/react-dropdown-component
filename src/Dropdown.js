import React from "react";

class Dropdown extends React.Component {
  // my data source
  object = {
    myarrray: ["good", "better", "best", "be you "],
  };

  render() {
    return (
      <div className="app">
        <div>
          <p>Should you use a dropdown ?</p>
          <select className="dropdown">
            {this.object.myarrray.map(
              (
                data /// using map() which loops over my array and gets the data
              ) => (
                <option className="option">{data}</option>
              )
            )}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
