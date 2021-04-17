"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

var _palette = require("./palette");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
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
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this2 = this;

      var _props = this.props,
          campaigns = _props.campaigns,
          campaignNames = _props.campaignNames;

      var buttonStyle = {
        width: "2rem",
        height: "1.9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0.5rem",
        backgroundColor: "white",
        border: "1.5px solid " + _palette.button_primary
      };
      var iconStyle = {
        marginLeft: "0.45rem",
        color: "black"
      };
      var textStyle = {
        fontSize: "1.35rem",
        marginBottom: "0",
        fontWeight: "800",
        marginLeft: "0.5rem"
      };
      var items = campaigns.map(function (address) {
        return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement(_semanticUiReact.CardContent, {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement(_semanticUiReact.Label, {
          horizontal: true,
          style: {
            width: "1rem",
            height: "2.5rem",
            borderRadius: "100%",
            backgroundColor: "#1034A6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _this2.getIntials(campaignNames[address])), _react2.default.createElement("p", { style: textStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, campaignNames[address])), _react2.default.createElement("div", {
          style: {
            position: "absolute",
            right: "0",
            marginRight: "2rem",
            display: "flex"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          style: buttonStyle,
          onClick: function onClick() {
            window.open("/campaigns/" + address, "_blank");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", style: iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        })), _react2.default.createElement(_reactCopyToClipboard2.default, { text: address, __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { style: buttonStyle, onClick: _this2.handleOpen, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "copy", style: iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }))))));
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("p", {
        style: {
          fontSize: "1.5rem",
          fontWeight: "700",
          textTransform: "capitalize",
          marginBottom: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "New Campaign",
        icon: "add circle",
        primary: true,
        floated: "right",
        style: { backgroundColor: _palette.button_primary },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })))), this.renderCampaigns());
    }
  }], [{
    key: "getSummary",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
        var campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(item);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSummary(_x) {
        return _ref.apply(this, arguments);
      }

      return getSummary;
    }()
  }, {
    key: "getData",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(campaigns) {
        var _this3 = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _promise2.default.all(campaigns.map(function (curCampaign) {
                  return _this3.getSummary(curCampaign);
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getData(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var campaigns, data, campaignNames;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context3.sent;
                _context3.next = 5;
                return this.getData(campaigns);

              case 5:
                data = _context3.sent;
                campaignNames = {};

                data.map(function (curdata, index) {
                  campaignNames = (0, _extends3.default)({}, campaignNames, (0, _defineProperty3.default)({}, campaigns[index], curdata[5]));
                });
                return _context3.abrupt("return", { campaigns: campaigns, campaignNames: campaignNames });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDYXJkQ29udGVudCIsIkljb24iLCJMYWJlbCIsIkRpbW1lciIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiYnV0dG9uX3ByaW1hcnkiLCJDYW1wYWlnbiIsIkNvcHlUb0NsaXBib2FyZCIsIkNhbXBhaWduSW5kZXgiLCJuYW1lIiwic3BsaXRzIiwic3BsaXQiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImNoYXJBdCIsImNoYXIxIiwiY2hhcjIiLCJwcm9wcyIsImNhbXBhaWducyIsImNhbXBhaWduTmFtZXMiLCJidXR0b25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJpY29uU3R5bGUiLCJjb2xvciIsInRleHRTdHlsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImJvcmRlclJhZGl1cyIsImdldEludGlhbHMiLCJwb3NpdGlvbiIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwiaGFuZGxlT3BlbiIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJhbGwiLCJjdXJDYW1wYWlnbiIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiZ2V0RGF0YSIsImRhdGEiLCJjdXJkYXRhIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7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Ozs7O21CQUNoQjtBLDJCQUFXLHdCLEFBQUEsQUFBUzs7dUJBQ2IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RyxBQUd4Qjs7Ozs7OztvRUFDWixBQUFRLGNBQ2IsQUFBVSxJQUFJLFVBQUEsQUFBQyxhQUFEO3lCQUFpQixPQUFBLEFBQUssV0FBdEIsQUFBaUIsQUFBZ0I7QSxBQUQxQyxBQUNMLGlCQUFBLENBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU1pQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUF6RDtBOzt1QkFDVyxLQUFBLEFBQUssUSxBQUFMLEFBQWE7O21CQUExQjtBLGlDQUNBO0EsZ0NBQ0osQSxBQURvQjs7cUJBQ3BCLEFBQUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0I7NkRBQUEsQUFDSyxpREFDRixVQUZILEFBRUcsQUFBVSxRQUFTLFFBRnRCLEFBRXNCLEFBQVEsQUFFL0I7QUFMRDtrREFNTyxFQUFFLFdBQUYsV0FBYSxlLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQXRCaUIsQUFnSzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==