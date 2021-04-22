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

var _routes = require("../routes");

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
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.CardContent, { style: _helper.cardContentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, {
        active: this.state.active,
        onClickOutside: this.handleClose,
        page: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("div", { style: _helper.dimmerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        name: "clipboard check",
        style: { fontSize: "3rem", marginBottom: "1rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "Address Copied To Clipboard!")), _react2.default.createElement("div", { style: _helper.defaultFlex, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Label, {
        horizontal: true,
        style: (0, _extends3.default)({}, _helper.labelStyle, {
          backgroundColor: themeColor
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.getIntials(CampaignName)), _react2.default.createElement("p", { style: _helper.textStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, CampaignName)), _react2.default.createElement("div", { style: _helper.buttonContainerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: (0, _extends3.default)({}, _helper.buttonStyle, { border: "1.5px solid " + themeColor }),
        onClick: function onClick() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", style: _helper.iconStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))), _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: _react2.default.createElement(_reactCopyToClipboard2.default, { text: address, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          style: (0, _extends3.default)({}, _helper.buttonStyle, {
            border: "1.5px solid " + themeColor
          }),
          onClick: this.handleOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "copy", style: _helper.iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
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
          lineNumber: 87
        }
      }))));
    }
  }]);

  return ContainerBasicCard;
}(_react.Component);

exports.default = ContainerBasicCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDYW1wYWlnbkJhc2ljQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImRpbW1lclN0eWxlIiwiZGVmYXVsdEZsZXgiLCJsYWJlbFN0eWxlIiwidGV4dFN0eWxlIiwiaWNvblN0eWxlIiwiYnV0dG9uU3R5bGUiLCJjYXJkQ29udGVudFN0eWxlIiwiYnV0dG9uQ29udGFpbmVyU3R5bGUiLCJwb3B1cFN0eWxlIiwiQ29weVRvQ2xpcGJvYXJkIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiRGltbWVyIiwiSWNvbiIsIkxhYmVsIiwiUG9wdXAiLCJnZXRSYW5kb21Db2xvcnMiLCJyYW5kb21BdmF0YXJDb2xvcnMiLCJMaW5rIiwiQ29udGFpbmVyQmFzaWNDYXJkIiwic3RhdGUiLCJhY3RpdmUiLCJoYW5kbGVPcGVuIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2UiLCJuYW1lIiwic3BsaXRzIiwic3BsaXQiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImNoYXJBdCIsImNoYXIxIiwiY2hhcjIiLCJwcm9wcyIsIkNhbXBhaWduTmFtZSIsImFkZHJlc3MiLCJ0aGVtZUNvbG9yIiwiYm9yZGVyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRJbnRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTLEFBQWlCLEFBQTBCOztBQUNwRCxBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7OztvTyxBQUNKO2MsQUFBUSxBQUNFO0FBREYsQUFDTixhLEFBRUYsYUFBYSxZQUFNLEFBQ2pCO1lBQUEsQUFBSyxTQUFTLEVBQUUsUUFBaEIsQUFBYyxBQUFVLFFBQVEsWUFBTSxBQUNwQzttQkFBVyxNQUFYLEFBQWdCLGFBQWhCLEFBQTZCLEFBQzlCO0FBRkQsQUFHRDtBLGEsQUFDRCxjQUFjLFlBQUE7YUFBTSxNQUFBLEFBQUssU0FBUyxFQUFFLFFBQXRCLEFBQU0sQUFBYyxBQUFVO0E7Ozs7OytCLEFBRWpDLE1BQU0sQUFDZjtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQXBCLEFBQWUsQUFBVyxBQUMxQjtVQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLEdBQUcsT0FBTyxPQUFBLEFBQU8sR0FBUCxBQUFVLGNBQVYsQUFBd0IsT0FBL0IsQUFBTyxBQUErQixBQUMvRDtVQUFJLE9BQUEsQUFBTyxTQUFYLEFBQW9CLEdBQUcsQUFDckI7WUFBTSxRQUFRLE9BQUEsQUFBTyxHQUFQLEFBQVUsY0FBVixBQUF3QixPQUF0QyxBQUFjLEFBQStCLEFBQzdDO1lBQU0sUUFBUSxPQUFBLEFBQU8sR0FBUCxBQUFVLGNBQVYsQUFBd0IsT0FBdEMsQUFBYyxBQUErQixBQUM3QztvQkFBQSxBQUFVLFFBQVYsQUFBa0IsQUFDbkI7QUFDRjs7Ozs2QkFFUTttQkFDMkIsS0FEM0IsQUFDZ0M7VUFEaEMsQUFDQyxzQkFERCxBQUNDO1VBREQsQUFDZSxpQkFEZixBQUNlLEFBQ3RCOztVQUFNLGFBQU4sQUFBbUIsQUFBZ0IsQUFDbkM7NkJBQ0UsQUFBQyx1Q0FBSyxPQUFOLE1BQVksT0FBTyxFQUFFLHVCQUFyQixBQUFtQixBQUF1QjtvQkFBMUM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyw4Q0FBRCxBQUFhLEFBQU87b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2dCQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ25CO3dCQUFnQixLQUZsQixBQUV1QixBQUNyQjtjQUhGOztvQkFBQTtzQkFBQSxBQUtFO0FBTEY7QUFDRSx5QkFJQSxjQUFBLFNBQUEsQUFBSyxBQUFPO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2VBQU8sRUFBRSxVQUFGLEFBQVksUUFBUSxjQUY3QixBQUVTLEFBQWtDOztvQkFGM0M7c0JBREYsQUFDRTtBQUFBO0FBQ0UsVUFSUixBQUNFLEFBS0UsQUFRRixrREFBQSxjQUFBLFNBQUEsQUFBSyxBQUFPO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO29CQUFELEFBRUU7c0NBQUEsQUFDSzsyQkFIUCxBQUVFLEFBRW1CO0FBQWpCOztvQkFKSjtzQkFBQSxBQU9HO0FBUEg7QUFDRSxjQU1DLEFBQUssV0FSVixBQUNFLEFBT0csQUFBZ0IsQUFFbkIsZ0NBQUEsY0FBQSxPQUFBLEFBQUcsQUFBTztvQkFBVjtzQkFBQSxBQUFzQjtBQUF0QjtTQXhCSixBQWNFLEFBVUUsQUFFRixnQ0FBQSxjQUFBLFNBQUEsQUFBSyxBQUFPO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO29CQUEzQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztzQ0FDQyxBQUFZLDJCQUFhLHlCQUQzQixBQUNFLEFBQWdELEFBQ2hEO2lCQUFTLG1CQUFNLEFBQUUsQ0FGbkI7O29CQUFBO3NCQUFBLEFBSUU7QUFKRjtBQUNFLHlCQUdBLEFBQUMsdUNBQUssTUFBTixBQUFXLE9BQVgsQUFBaUIsQUFBTztvQkFBeEI7c0JBTk4sQUFDRSxBQUNFLEFBSUUsQUFHSjtBQUhJOzRCQUdKLEFBQUM7aUNBRUcsQUFBQyxnREFBZ0IsTUFBakIsQUFBdUI7c0JBQXZCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUM7d0NBQ0MsQUFDSztxQ0FGUCxBQUNFLEFBRXlCLEFBRXpCO0FBRkU7bUJBRU8sS0FMWCxBQUtnQjs7c0JBTGhCO3dCQUFBLEFBT0U7QUFQRjtBQUNFLDJCQU1BLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQVgsQUFBa0IsQUFBTztzQkFBekI7d0JBVlIsQUFFSSxBQUNFLEFBT0UsQUFJTjtBQUpNOztrQkFWUixBQWNXLEFBQ1Q7aUJBZkYsQUFlVSxBQUNSO1lBQUksQ0FoQk4sQUFnQk0sQUFBQyxBQUNMOzsyQkFqQkYsQUFpQkUsQUFDbUIsQUFDZDtBQURIOztvQkFsQko7c0JBckNSLEFBQ0UsQUFDRSxBQTBCRSxBQVNFLEFBMEJUO0FBMUJTO0FBQ0U7Ozs7O0EsQUE5RG1CLEFBMEZqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDYW1wYWlnbkJhc2ljQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=