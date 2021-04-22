"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\campaigns\\SidebarComponent.js";


var SidebarComponent = function (_Component) {
  (0, _inherits3.default)(SidebarComponent, _Component);

  function SidebarComponent() {
    (0, _classCallCheck3.default)(this, SidebarComponent);

    return (0, _possibleConstructorReturn3.default)(this, (SidebarComponent.__proto__ || (0, _getPrototypeOf2.default)(SidebarComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(SidebarComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          handleShowContributeModal = _props.handleShowContributeModal,
          address = _props.address;

      return _react2.default.createElement(_semanticUiReact.Sidebar, {
        as: _semanticUiReact.Menu,
        animation: "overlay",
        icon: "labeled",
        inverted: true,
        vertical: true,
        visible: visible,
        width: "thin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", onClick: handleShowContributeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "asl", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), "Contribute"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", onClick: function onClick() {}, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), "View Requests")));
    }
  }]);

  return SidebarComponent;
}(_react.Component);

exports.default = SidebarComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXFNpZGViYXJDb21wb25lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJY29uIiwiTWVudSIsIlNpZGViYXIiLCJMaW5rIiwiU2lkZWJhckNvbXBvbmVudCIsInByb3BzIiwidmlzaWJsZSIsImhhbmRsZVNob3dDb250cmlidXRlTW9kYWwiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ2lELEtBRGpELEFBQ3NEO1VBRHRELEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1UsbUNBRFYsQUFDVTtVQURWLEFBQ3FDLGlCQURyQyxBQUNxQyxBQUU1Qzs7NkJBQ0UsQUFBQztBQUFELEFBQ00sQUFDSjttQkFGRixBQUVZLEFBQ1Y7Y0FIRixBQUdPLEFBQ0w7a0JBSkYsQUFLRTtrQkFMRixBQU1FO2lCQU5GLEFBTVcsQUFDVDtlQVBGLEFBT1E7O29CQVBSO3NCQUFBLEFBU0U7QUFURjtBQUNFLE9BREYsa0JBU0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjLEtBQUksU0FBbEIsQUFBMkI7b0JBQTNCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFWSixBQVNFLEFBSUEsK0JBQUEsQUFBQyw4QkFBSyx1QkFBQSxBQUFxQixVQUEzQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjLEtBQUksU0FBUyxtQkFBTSxBQUFFLENBQW5DO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFoQlIsQUFDRSxBQWFFLEFBQ0UsQUFPUDs7Ozs7QUFHSCxBLEFBN0IrQjs7a0JBNkIvQixBQUFlIiwiZmlsZSI6IlNpZGViYXJDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc2hlc2gvZmluYWwtcHJvamVjdCJ9