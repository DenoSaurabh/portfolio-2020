"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _client = require("@apollo/client");

var _apollo = _interopRequireDefault(require("../lib/apollo"));

var _skills = require("../apollo/skills.queries");

var _skills2 = require("../styles/pages/skills");

var _typography = require("../styles/typography");

var _page = _interopRequireDefault(require("../layouts/page/page"));

var _cursor = require("../state/cursor.recoil");

import React from "react";
var __jsx = React.createElement;
var fadeFromLeft = {
  initial: {
    x: -300,
    opacity: 0
  },
  animate: function animate(i) {
    return {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1 + i * 0.15,
        duration: 0.7,
        ease: 'easeOut'
      }
    };
  }
};

var SkillsPage = function SkillsPage() {
  var _useCursor = (0, _cursor.useCursor)(),
      updateCursorStatus = _useCursor.updateCursorStatus;

  (0, _react.useEffect)(function () {
    return function () {
      return updateCursorStatus(null);
    };
  }, []);
  return __jsx(_page["default"], {
    id: "skills",
    title: "Skills",
    metaName: "skill-set denosaurabh",
    metaDes: "frontend, backend and ui/ux knowledge of denosaurabh",
    nextPageLink: "/about",
    nextPageTitle: "about"
  }, __jsx(_skills2.SkillsPageContent, null, __jsx(_skills2.TopContent, null, __jsx(LeftContent, null), __jsx(RightContent, null)), __jsx(BottomContent, null)));
};

function LeftContent() {
  return __jsx(_skills2.LeftContent, null, __jsx(_typography.NeueSecondaryHeading, {
    initial: "initial",
    animate: "animate",
    custom: 1,
    key: "1",
    variants: fadeFromLeft
  }, "01 ", __jsx("br", null), " FRONTEND DEVELOPER."), __jsx(_typography.NeueSecondaryHeading, {
    initial: "initial",
    animate: "animate",
    custom: 2,
    key: "2",
    variants: fadeFromLeft
  }, "02 ", __jsx("br", null), " BACKEND DEVELOPER."), __jsx(_typography.NeueSecondaryHeading, {
    initial: "initial",
    animate: "animate",
    custom: 3,
    key: "3",
    variants: fadeFromLeft
  }, "03 ", __jsx("br", null), " UI/UX DESIGNER."));
}

function RightContent() {
  var _useQuery = (0, _client.useQuery)(_skills.GET_FRONTEND_SKILLS),
      loadingFrontEnd = _useQuery.loading,
      frontendQueryError = _useQuery.error,
      frontEndSkills = _useQuery.data;

  var _useQuery2 = (0, _client.useQuery)(_skills.GET_BACKEND_SKILLS),
      loadingBackEnd = _useQuery2.loading,
      backendQueryError = _useQuery2.error,
      backEndSkills = _useQuery2.data;

  var _useQuery3 = (0, _client.useQuery)(_skills.GET_UIUX_SKILLS),
      loadingUIUX = _useQuery3.loading,
      UIUXQueryError = _useQuery3.error,
      UIUXSkills = _useQuery3.data;

  if (loadingFrontEnd || loadingBackEnd || loadingUIUX) return __jsx("h1", null, "loading");
  return __jsx(_skills2.RightContent, null, __jsx(_skills2.SkillsBox, null, frontEndSkills.skillSet.skills.map(function (el, i) {
    return __jsx(_typography.NeueLightMiniText, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        delay: 1 + 0.3 * i
      },
      key: i
    }, el);
  })), __jsx(_skills2.SkillsBox, null, backEndSkills.skillSet.skills.map(function (el, i) {
    return __jsx(_typography.NeueLightMiniText, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        delay: 1 + 0.3 * i
      },
      key: i
    }, el);
  })), __jsx(_skills2.SkillsBox, null, UIUXSkills.skillSet.skills.map(function (el, i) {
    return __jsx(_typography.NeueLightMiniText, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        delay: 1 + 0.3 * i
      },
      key: i
    }, el);
  })));
}

function BottomContent() {
  return __jsx(_skills2.BottomContent, null, __jsx(_typography.NeueLightSmallText, null, "not only those, every single app made by me has great focus on:"), __jsx(_typography.NeuePrimaryHeading, null, "PERFORMANCE"), __jsx(_typography.NeuePrimaryHeading, null, "ERROR HANDLING"), __jsx(_typography.NeuePrimaryHeading, null, "SECURITY"), __jsx(_typography.NeuePrimaryHeading, null, "ACCESSIBILITY"), __jsx(_typography.NeueLightSmallText, null, "want exactly these kinds of apps, you are in right place :thumbs_up: .", __jsx(_link["default"], {
    href: "mailto:denosaurabh@gmail.com"
  }, __jsx("u", null, "let\u2019s talk"))));
}

var _default = (0, _apollo["default"])({
  ssr: true
})(SkillsPage);

exports["default"] = _default;