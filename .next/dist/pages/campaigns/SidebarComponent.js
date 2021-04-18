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
          handleViewRequests = _props.handleViewRequests;

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
          lineNumber: 13
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", onClick: handleShowContributeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "asl", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), "Contribute"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", onClick: handleViewRequests, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), "View Requests"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "money", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), "Transactions"));
    }
  }]);

  return SidebarComponent;
}(_react.Component);

exports.default = SidebarComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXFNpZGViYXJDb21wb25lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJJY29uIiwiTWVudSIsIlNpZGViYXIiLCJTaWRlYmFyQ29tcG9uZW50IiwicHJvcHMiLCJ2aXNpYmxlIiwiaGFuZGxlU2hvd0NvbnRyaWJ1dGVNb2RhbCIsImhhbmRsZVZpZXdSZXF1ZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTTs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs2QkFDSzttQkFLSCxLQUxHLEFBS0U7VUFMRixBQUVMLGlCQUZLLEFBRUw7VUFGSyxBQUdMLG1DQUhLLEFBR0w7VUFISyxBQUlMLDRCQUpLLEFBSUwsQUFHRjs7NkJBQ0UsQUFBQztBQUFELEFBQ00sQUFDSjttQkFGRixBQUVZLEFBQ1Y7Y0FIRixBQUdPLEFBQ0w7a0JBSkYsQUFLRTtrQkFMRixBQU1FO2lCQU5GLEFBTVcsQUFDVDtlQVBGLEFBT1E7O29CQVBSO3NCQUFBLEFBU0U7QUFURjtBQUNFLE9BREYsa0JBU0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjLEtBQUksU0FBbEIsQUFBMkI7b0JBQTNCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFWSixBQVNFLEFBSUEsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjLEtBQUksU0FBbEIsQUFBMkI7b0JBQTNCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFkSixBQWFFLEFBSUEsa0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFuQk4sQUFDRSxBQWlCRSxBQU1MOzs7OztBQUdILEEsQUFuQytCOztrQkFtQy9CLEFBQWUiLCJmaWxlIjoiU2lkZWJhckNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=