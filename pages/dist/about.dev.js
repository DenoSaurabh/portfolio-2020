"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _link = _interopRequireDefault(require("next/link"));

var _reactHooks = require("@apollo/react-hooks");

var _withHtml = _interopRequireDefault(require("react-markdown/with-html"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _apollo = _interopRequireDefault(require("../lib/apollo"));

var _about = require("../styles/pages/about");

var _typography = require("../styles/typography");

var _about2 = require("../apollo/about.queries");

var _page = _interopRequireDefault(require("../layouts/page/page"));

var _cursor = require("../state/cursor.recoil");

import React from "react";
var __jsx = React.createElement;

var AboutPage = function AboutPage() {
  var _useCursor = (0, _cursor.useCursor)(),
      updateCursorStatus = _useCursor.updateCursorStatus;

  var _useQuery = (0, _reactHooks.useQuery)(_about2.GET_ABOUT),
      loading = _useQuery.loading,
      error = _useQuery.error,
      about = _useQuery.data;

  if (loading) return __jsx("h1", null, "Loading");
  (0, _react.useEffect)(function () {
    return function () {
      return updateCursorStatus(null);
    };
  }, []);
  return __jsx(_page["default"], {
    id: "about",
    title: "About",
    metaName: "about denosaurabh",
    metaDes: "how denosaurabh solve problem, denosaurabh contact",
    nextPageTitle: "blogs",
    nextPageLink: "/blogs"
  }, __jsx(_about.AboutContent, null, __jsx(_about.LeftContent, null, about.abouts.map(function (_ref) {
    var title = _ref.title,
        description = _ref.description;
    return __jsx("div", null, __jsx(_typography.NeueUBoldMediumSmallText, null, title), __jsx("br", null), __jsx(_typography.NeueLightMiniText, null, (0, _reactHtmlParser["default"])(description.html)), __jsx("br", null), __jsx("br", null));
  })), "\xA0", __jsx(_about.RightContent, null, __jsx(_typography.NeueSecondaryHeading, null, "I love making projects on great Ideas, let's build a project togethor!"), __jsx("br", null), __jsx("b", null, __jsx(_typography.NeueLightMiniText, null, "get a cup of coffee and let's have a chit-chat, I will never miss some great ideas! If the idea is great I can even research more on it as well throw some tips to you for free :D")), __jsx("br", null), __jsx(_typography.NeueLightSmallText, null, "denosaurabh@gmail.com"), __jsx(_about.ChatsBox, null, __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://join.skype.com/invite/b0duJveFed9U"
  }, __jsx("a", null, "Skype"))), __jsx(_typography.NeueLightMiniText, {
    onHoverStart: function onHoverStart() {
      return updateCursorStatus({
        text: 'denosaurabh@gmail.com',
        alignment: 'right'
      });
    },
    onHoverEnd: function onHoverEnd() {
      return updateCursorStatus(null);
    }
  }, __jsx(_link["default"], {
    href: "https://hangouts.google.com/"
  }, __jsx("a", null, "Hangout"))), __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://twitter.com/messages"
  }, __jsx("a", null, "Twitter"))), __jsx(_typography.NeueLightMiniText, {
    onHoverStart: function onHoverStart() {
      return updateCursorStatus({
        text: 'denosaurabh #5404. I am most active on discord, chatting daily with other developer communities.',
        alignment: 'left'
      });
    },
    onHoverEnd: function onHoverEnd() {
      return updateCursorStatus(null);
    }
  }, __jsx(_link["default"], {
    href: "https://discord.com"
  }, __jsx("a", null, "Discord")))), __jsx("b", null, __jsx(_typography.NeueLightMiniText, null, "or follow me on \u2192")), __jsx(_about.SocialBox, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: 1.5
    }
  }, __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://twitter.com/denosaurabh"
  }, __jsx("a", null, "Twitter"))), __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://github.com/denosaurabh"
  }, __jsx("a", null, "Github"))), __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://dribbble.com/denosaurabh"
  }, __jsx("a", null, "Dribble"))), __jsx(_typography.NeueLightMiniText, null, __jsx(_link["default"], {
    href: "https://linkedin.com/in/denosaurabh"
  }, __jsx("a", null, "LinkedIn")))))));
};

var _default = (0, _apollo["default"])({
  ssr: true
})(AboutPage);

exports["default"] = _default;