"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

var _palette = require("../palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\campaigns\\new.js";


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      eventName: "",
      minimumContribution: "",
      target: "",
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.target, _this.state.eventName).send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute("/");
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.props.handleToggleModal();
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement("div", { style: { padding: "2rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("h3", { style: { color: _palette.name_color }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Create New Campaign"), _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        style: { padding: "1rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Event Name"), _react2.default.createElement(_semanticUiReact.Input, {
        icon: "user",
        iconPosition: "left",
        value: this.state.eventName,
        onChange: function onChange(event) {
          return _this3.setState({ eventName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Minimum Contribution"), _react2.default.createElement(_semanticUiReact.Input, {
        icon: "money bill alternate outline",
        iconPosition: "left",
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Target Amount (Wei)"), _react2.default.createElement(_semanticUiReact.Input, {
        icon: "target",
        iconPosition: "left",
        value: this.state.target,
        onChange: function onChange(event) {
          return _this3.setState({ target: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        primary: true,
        style: { backgroundColor: _palette.button_primary },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Create!")));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJY29uIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiYnV0dG9uX3ByaW1hcnkiLCJuYW1lX2NvbG9yIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsImV2ZW50TmFtZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJ0YXJnZXQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwicHJvcHMiLCJoYW5kbGVUb2dnbGVNb2RhbCIsInBhZGRpbmciLCJjb2xvciIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDdkMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQVMsQUFBZ0IsQUFBa0I7Ozs7Ozs7SSxBQUVyQzs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7aUJBQVEsQUFDSyxBQUNYOzJCQUZNLEFBRWUsQUFDckI7Y0FITSxBQUdFLEFBQ1I7b0JBSk0sQUFJUSxBQUNkO2UsQUFMTSxBQUtHO0FBTEgsQUFDTixhLEFBT0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh0QixBQUdULEFBQWMsQUFBK0I7O2dDQUhwQztnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBO3lDQU9ELEFBQVEsUUFBUixBQUNILGVBQ0MsTUFBQSxBQUFLLE1BRkgsQUFFUyxxQkFDWCxNQUFBLEFBQUssTUFISCxBQUdTLFFBQ1gsTUFBQSxBQUFLLE1BSkgsQUFJUyxXQUpULEFBTUg7d0JBQ08sU0FkSCxBQU9ELEFBTUUsQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFQRTs7bUJBVU47OytCQUFBLEFBQU8sVUFqQkEsQUFpQlAsQUFBaUI7Z0NBakJWO0FBQUE7O21CQUFBO2dDQUFBO2dEQW1CUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQW5CdkIsQUFtQlAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0F0QlAsQUFzQlQsQUFBYyxBQUFXOzttQkF0QmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBeUJGO21CQUNQOzs2QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLFNBQWQsQUFBWSxBQUFXO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFFBQUksT0FBTyxFQUFYLEFBQVcsQUFBRSxBQUFPO29CQUFwQjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUVBLHdDQUFBLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO2VBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUNwQjtlQUFPLEVBQUUsU0FIWCxBQUdTLEFBQVc7O29CQUhwQjtzQkFBQSxBQUtFO0FBTEY7QUFDRSx5QkFJQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwrQkFBQSxBQUFDO2NBQUQsQUFDTyxBQUNMO3NCQUZGLEFBRWUsQUFDYjtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLGtCQUFBLEFBQUMsT0FBRDtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BRHpCLEFBQ1IsQUFBYyxBQUEwQjtBQUw1Qzs7b0JBQUE7c0JBUEosQUFLRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7c0JBRkYsQUFFZSxBQUNiO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsa0JBQUEsQUFBQyxPQUFEO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFMdEQ7O29CQUFBO3NCQWxCSixBQWdCRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7c0JBRkYsQUFFZSxBQUNiO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsa0JBQUEsQUFBQyxPQUFEO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxNQUFBLEFBQU0sT0FEdEIsQUFDUixBQUFjLEFBQXVCO0FBTHpDOztvQkFBQTtzQkE3QkosQUEyQkUsQUFFRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQXZDRixBQXVDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQztpQkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDcEI7aUJBRkYsQUFHRTtlQUFPLEVBSFQsQUFHUyxBQUFFLEFBQWlCOztvQkFINUI7c0JBQUE7QUFBQTtBQUNFLFNBN0NSLEFBQ0UsQUFHRSxBQXdDRSxBQVVQOzs7OztBLEFBekZ1QixBQTRGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==