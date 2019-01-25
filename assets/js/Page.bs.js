'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Page");

function handleClick(_event, _self) {
  console.log("clicked!");
  return /* () */0;
}

function factorial(n) {
  var match = n <= 0;
  if (match) {
    return 1;
  } else {
    return Caml_int32.imul(n, factorial(n - 1 | 0));
  }
}

console.log(factorial(6));

function make(message, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          onClick: Curry._1(self[/* handle */0], handleClick)
                        }, message);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.handleClick = handleClick;
exports.factorial = factorial;
exports.make = make;
/* component Not a pure module */
