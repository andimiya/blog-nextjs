'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrea/temp/blog-nextjs/client/components/BlogRoll.js';


var BlogRoll = function BlogRoll(props) {

  console.log(props, 'props');

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.title, props.slug, props.created_by, _react2.default.createElement(_link2.default, { as: '/post/' + props.id, href: '/post?id=' + props.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.title)));
};

exports.default = BlogRoll;