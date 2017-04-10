// Generated by CoffeeScript 1.10.0
var React, cx;

React = require('react');

cx = require('classnames');

module.exports = React.createClass({
  displayName: "SpinKit",
  propTypes: {
    spinnerName: React.PropTypes.string.isRequired,
    noFadeIn: React.PropTypes.bool,
    overrideSpinnerClassName: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      spinnerName: 'sk-three-bounce',
      noFadeIn: false,
      overrideSpinnerClassName: ""
    };
  },
  render: function() {
    var classTests, classes;
    classTests = {
      "sk-fade-in": !this.props.noFadeIn,
      "sk-spinner": this.props.overrideSpinnerClassName === ""
    };
    classTests[this.props.overrideSpinnerClassName] = this.props.overrideSpinnerClassName;
    classes = cx(classTests);
    if (this.props.className) {
      classes = classes + " " + this.props.className;
    }
    if (!this.props.noFadeIn) {
      require('../css/fade-in.css');
    }
    switch (this.props.spinnerName) {
      case "three-bounce":
        require('../css/three-bounce.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-three-bounce " + classes
        }), React.createElement("div", {
          "className": "sk-bounce1"
        }), React.createElement("div", {
          "className": "sk-bounce2"
        }), React.createElement("div", {
          "className": "sk-bounce3"
        }));
      case "double-bounce":
        require('../css/double-bounce.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-double-bounce " + classes
        }), React.createElement("div", {
          "className": "sk-double-bounce1"
        }), React.createElement("div", {
          "className": "sk-double-bounce2"
        }));
      case "rotating-plane":
        require('../css/rotating-plane.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": classes
        }), React.createElement("div", {
          "className": "sk-rotating-plane"
        }));
      case "wave":
        require('../css/wave.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-wave " + classes
        }), React.createElement("div", {
          "className": "sk-rect1"
        }), React.createElement("div", {
          "className": "sk-rect2"
        }), React.createElement("div", {
          "className": "sk-rect3"
        }), React.createElement("div", {
          "className": "sk-rect4"
        }), React.createElement("div", {
          "className": "sk-rect5"
        }));
      case "wandering-cubes":
        require('../css/wandering-cubes.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-wandering-cubes " + classes
        }), React.createElement("div", {
          "className": "cube1"
        }), React.createElement("div", {
          "className": "cube2"
        }));
      case "pulse":
        require('../css/pulse.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": classes
        }), React.createElement("div", {
          "className": "sk-pulse"
        }));
      case "chasing-dots":
        require('../css/chasing-dots.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": classes
        }), React.createElement("div", {
          "className": "sk-chasing-dots"
        }, React.createElement("div", {
          "className": "sk-dot1"
        }), React.createElement("div", {
          "className": "sk-dot2"
        })));
      case "circle":
        require('../css/circle.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-circle-wrapper " + classes
        }), React.createElement("div", {
          "className": "sk-circle1 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle2 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle3 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle4 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle5 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle6 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle7 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle8 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle9 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle10 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle11 sk-circle"
        }), React.createElement("div", {
          "className": "sk-circle12 sk-circle"
        }));
      case "cube-grid":
        require('../css/cube-grid.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": "sk-cube-grid " + classes
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }), React.createElement("div", {
          "className": "sk-cube"
        }));
      case "wordpress":
        require('../css/wordpress.css');
        return React.createElement("div", React.__spread({}, this.props, {
          "className": classes
        }), React.createElement("div", {
          "className": "sk-wordpress"
        }, React.createElement("span", {
          "className": "sk-inner-circle"
        })));
    }
  }
});
