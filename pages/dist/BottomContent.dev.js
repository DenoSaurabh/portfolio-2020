"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomContent = BottomContent;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _skills = require("../styles/pages/skills");

var _typography = require("../styles/typography");

import React from "react";
var __jsx = React.createElement;

function BottomContent() {
  return __jsx(_skills.BottomContent, null, __jsx(_typography.NeueLightSmallText, null, "not only those, every single app made by me has great focus on:"), __jsx(_typography.NeuePrimaryHeading, null, "PERFORMANCE"), __jsx(_typography.NeuePrimaryHeading, null, "ERROR HANDLING"), __jsx(_typography.NeuePrimaryHeading, null, "SECURITY"), __jsx(_typography.NeuePrimaryHeading, null, "ACCESSIBILITY"), __jsx(_typography.NeueLightSmallText, null, "want exactly these kinds of apps, you are in right place :thumbs_up: .", __jsx(_link["default"], {
    href: "mailto:denosaurabh@gmail.com"
  }, __jsx("u", null, "let\u2019s talk"))));
}