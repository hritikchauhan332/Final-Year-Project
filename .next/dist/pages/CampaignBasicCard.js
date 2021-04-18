"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _helper = require("./helper/helper");

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _semanticUiReact = require("semantic-ui-react");

var _palette = require("./palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\CampaignBasicCard.js";


var ContainerBasicCard = function (_Component) {
  (0, _inherits3.default)(ContainerBasicCard, _Component);

  function ContainerBasicCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContainerBasicCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContainerBasicCard.__proto__ || (0, _getPrototypeOf2.default)(ContainerBasicCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.handleOpen = function () {
      _this.setState({ active: true }, function () {
        setTimeout(_this.handleClose, 1000);
      });
    }, _this.handleClose = function () {
      return _this.setState({ active: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContainerBasicCard, [{
    key: "getIntials",
    value: function getIntials(name) {
      var splits = name.split(" ");
      if (splits.length === 1) return splits[0].toUpperCase().charAt(0);
      if (splits.length > 1) {
        var char1 = splits[0].toUpperCase().charAt(0);
        var char2 = splits[1].toUpperCase().charAt(0);
        return "" + char1 + char2;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          CampaignName = _props.CampaignName,
          address = _props.address;

      var themeColor = (0, _palette.getRandomColors)(_palette.randomAvatarColors);
      return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, style: { border: "1px solid " + themeColor }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.CardContent, { style: _helper.cardContentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, {
        active: this.state.active,
        onClickOutside: this.handleClose,
        page: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("div", { style: _helper.dimmerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "clipboard check",
        style: { fontSize: "3rem", marginBottom: "1rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), "Address Copied To Clipboard!")), _react2.default.createElement("div", { style: _helper.defaultFlex, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Label, {
        horizontal: true,
        style: (0, _extends3.default)({}, _helper.labelStyle, {
          backgroundColor: themeColor
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.getIntials(CampaignName)), _react2.default.createElement("p", { style: _helper.textStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, CampaignName)), _react2.default.createElement("div", { style: _helper.buttonContainerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: (0, _extends3.default)({}, _helper.buttonStyle, { border: "1.5px solid " + themeColor }),
        onClick: function onClick() {
          window.open("/campaigns/" + address, "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", style: _helper.iconStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: _react2.default.createElement(_reactCopyToClipboard2.default, { text: address, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          style: (0, _extends3.default)({}, _helper.buttonStyle, {
            border: "1.5px solid " + themeColor
          }),
          onClick: this.handleOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "copy", style: _helper.iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }))),
        position: "bottom center",
        content: "Click To Copy Campaign Address",
        on: ["hover"],
        style: (0, _extends3.default)({
          backgroundColor: themeColor
        }, _helper.popupStyle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))));
    }
  }]);

  return ContainerBasicCard;
}(_react.Component);

exports.default = ContainerBasicCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDYW1wYWlnbkJhc2ljQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImRpbW1lclN0eWxlIiwiZGVmYXVsdEZsZXgiLCJsYWJlbFN0eWxlIiwidGV4dFN0eWxlIiwiaWNvblN0eWxlIiwiYnV0dG9uU3R5bGUiLCJjYXJkQ29udGVudFN0eWxlIiwiYnV0dG9uQ29udGFpbmVyU3R5bGUiLCJwb3B1cFN0eWxlIiwiQ29weVRvQ2xpcGJvYXJkIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiRGltbWVyIiwiSWNvbiIsIkxhYmVsIiwiUG9wdXAiLCJnZXRSYW5kb21Db2xvcnMiLCJyYW5kb21BdmF0YXJDb2xvcnMiLCJDb250YWluZXJCYXNpY0NhcmQiLCJzdGF0ZSIsImFjdGl2ZSIsImhhbmRsZU9wZW4iLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVDbG9zZSIsIm5hbWUiLCJzcGxpdHMiLCJzcGxpdCIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiY2hhckF0IiwiY2hhcjEiLCJjaGFyMiIsInByb3BzIiwiQ2FtcGFpZ25OYW1lIiwiYWRkcmVzcyIsInRoZW1lQ29sb3IiLCJib3JkZXIiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImdldEludGlhbHMiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTLEFBQWlCLEFBQTBCOzs7Ozs7O0ksQUFFOUM7Ozs7Ozs7Ozs7Ozs7O29PLEFBQ0o7YyxBQUFRLEFBQ0U7QUFERixBQUNOLGEsQUFFRixhQUFhLFlBQU0sQUFDakI7WUFBQSxBQUFLLFNBQVMsRUFBRSxRQUFoQixBQUFjLEFBQVUsUUFBUSxZQUFNLEFBQ3BDO21CQUFXLE1BQVgsQUFBZ0IsYUFBaEIsQUFBNkIsQUFDOUI7QUFGRCxBQUdEO0EsYSxBQUNELGNBQWMsWUFBQTthQUFNLE1BQUEsQUFBSyxTQUFTLEVBQUUsUUFBdEIsQUFBTSxBQUFjLEFBQVU7QTs7Ozs7K0IsQUFFakMsTUFBTSxBQUNmO1VBQU0sU0FBUyxLQUFBLEFBQUssTUFBcEIsQUFBZSxBQUFXLEFBQzFCO1VBQUksT0FBQSxBQUFPLFdBQVgsQUFBc0IsR0FBRyxPQUFPLE9BQUEsQUFBTyxHQUFQLEFBQVUsY0FBVixBQUF3QixPQUEvQixBQUFPLEFBQStCLEFBQy9EO1VBQUksT0FBQSxBQUFPLFNBQVgsQUFBb0IsR0FBRyxBQUNyQjtZQUFNLFFBQVEsT0FBQSxBQUFPLEdBQVAsQUFBVSxjQUFWLEFBQXdCLE9BQXRDLEFBQWMsQUFBK0IsQUFDN0M7WUFBTSxRQUFRLE9BQUEsQUFBTyxHQUFQLEFBQVUsY0FBVixBQUF3QixPQUF0QyxBQUFjLEFBQStCLEFBQzdDO29CQUFBLEFBQVUsUUFBVixBQUFrQixBQUNuQjtBQUNGOzs7OzZCQUVRO21CQUMyQixLQUQzQixBQUNnQztVQURoQyxBQUNDLHNCQURELEFBQ0M7VUFERCxBQUNlLGlCQURmLEFBQ2UsQUFDdEI7O1VBQU0sYUFBTixBQUFtQixBQUFnQixBQUNuQzs2QkFDRSxBQUFDLHVDQUFLLE9BQU4sTUFBWSxPQUFPLEVBQUUsdUJBQXJCLEFBQW1CLEFBQXVCO29CQUExQztzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLDhDQUFELEFBQWEsQUFBTztvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7Z0JBQ1MsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7d0JBQWdCLEtBRmxCLEFBRXVCLEFBQ3JCO2NBSEY7O29CQUFBO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlBLGNBQUEsU0FBQSxBQUFLLEFBQU87b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7ZUFBTyxFQUFFLFVBQUYsQUFBWSxRQUFRLGNBRjdCLEFBRVMsQUFBa0M7O29CQUYzQztzQkFERixBQUNFO0FBQUE7QUFDRSxVQVJSLEFBQ0UsQUFLRSxBQVFGLGtEQUFBLGNBQUEsU0FBQSxBQUFLLEFBQU87b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7b0JBQUQsQUFFRTtzQ0FBQSxBQUNLOzJCQUhQLEFBRUUsQUFFbUI7QUFBakI7O29CQUpKO3NCQUFBLEFBT0c7QUFQSDtBQUNFLGNBTUMsQUFBSyxXQVJWLEFBQ0UsQUFPRyxBQUFnQixBQUVuQixnQ0FBQSxjQUFBLE9BQUEsQUFBRyxBQUFPO29CQUFWO3NCQUFBLEFBQXNCO0FBQXRCO1NBeEJKLEFBY0UsQUFVRSxBQUVGLGdDQUFBLGNBQUEsU0FBQSxBQUFLLEFBQU87b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7c0NBQ0MsQUFBWSwyQkFBYSx5QkFEM0IsQUFDRSxBQUFnRCxBQUNoRDtpQkFBUyxtQkFBTSxBQUNiO2lCQUFBLEFBQU8scUJBQVAsQUFBMEIsU0FBMUIsQUFBcUMsQUFDdEM7QUFKSDs7b0JBQUE7c0JBQUEsQUFNRTtBQU5GO0FBQ0UseUJBS0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsT0FBWCxBQUFpQixBQUFPO29CQUF4QjtzQkFQSixBQUNFLEFBTUUsQUFFRjtBQUZFOzJCQUVGLEFBQUM7aUNBRUcsQUFBQyxnREFBZ0IsTUFBakIsQUFBdUI7c0JBQXZCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUM7d0NBQ0MsQUFDSztxQ0FGUCxBQUNFLEFBRXlCLEFBRXpCO0FBRkU7bUJBRU8sS0FMWCxBQUtnQjs7c0JBTGhCO3dCQUFBLEFBT0U7QUFQRjtBQUNFLDJCQU1BLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQVgsQUFBa0IsQUFBTztzQkFBekI7d0JBVlIsQUFFSSxBQUNFLEFBT0UsQUFJTjtBQUpNOztrQkFWUixBQWNXLEFBQ1Q7aUJBZkYsQUFlVSxBQUNSO1lBQUksQ0FoQk4sQUFnQk0sQUFBQyxBQUNMOzsyQkFqQkYsQUFpQkUsQUFDbUIsQUFDZDtBQURIOztvQkFsQko7c0JBckNSLEFBQ0UsQUFDRSxBQTBCRSxBQVNFLEFBMEJUO0FBMUJTO0FBQ0U7Ozs7O0EsQUE5RG1CLEFBMEZqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDYW1wYWlnbkJhc2ljQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=