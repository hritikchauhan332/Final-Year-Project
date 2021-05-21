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

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\campaigns\\new.js";


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
      eventDescription: "",
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
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.target, _this.state.eventName, _this.state.eventDescription).send({
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
          lineNumber: 47
        }
      }, _react2.default.createElement("h3", { style: { color: _palette.name_color }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Create New Campaign"), _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        style: { padding: "1rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
          lineNumber: 57
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Event Description"), _react2.default.createElement(_semanticUiReact.Input, {
        icon: "user",
        iconPosition: "left",
        value: this.state.eventDescription,
        onChange: function onChange(event) {
          return _this3.setState({ eventDescription: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Minimum Contribution (Wei)"), _react2.default.createElement(_semanticUiReact.Input, {
        icon: "money bill alternate outline",
        iconPosition: "left",
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
          lineNumber: 90
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        primary: true,
        style: { backgroundColor: _palette.button_primary },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Create!")));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJY29uIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiYnV0dG9uX3ByaW1hcnkiLCJuYW1lX2NvbG9yIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsImV2ZW50TmFtZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJ0YXJnZXQiLCJldmVudERlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInByb3BzIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJwYWRkaW5nIiwiY29sb3IiLCJ2YWx1ZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3ZDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFTLEFBQWdCLEFBQWtCOzs7Ozs7O0ksQUFFckM7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNKO2lCQUFRLEFBQ0ssQUFDWDsyQkFGTSxBQUVlLEFBQ3JCO2NBSE0sQUFHRSxBQUNSO3dCQUpNLEFBSVksQUFDbEI7b0JBTE0sQUFLUSxBQUNkO2UsQUFOTSxBQU1HO0FBTkgsQUFDTixhLEFBUUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7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QUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esd0NBQUEsQUFBQztjQUFELEFBQ08sQUFDTDtzQkFGRixBQUVlLEFBQ2I7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxrQkFBQSxBQUFDLE9BQUQ7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUR0QixBQUNSLEFBQWMsQUFBdUI7QUFMekM7O29CQUFBO3NCQXhDSixBQXNDRSxBQUVFLEFBVUY7QUFWRTtBQUNFLDJCQVNKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBbERGLEFBa0RFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2lCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtpQkFGRixBQUdFO2VBQU8sRUFIVCxBQUdTLEFBQUUsQUFBaUI7O29CQUg1QjtzQkFBQTtBQUFBO0FBQ0UsU0F4RFIsQUFDRSxBQUdFLEFBbURFLEFBVVA7Ozs7O0FBR0gsQSxBQXpHMEI7O2tCQXlHMUIsQUFBZSIsImZpbGUiOiJuZXcuanMiLCJzb3VyY2VSb290IjoiRDovUmVhY3RfYW5kX0ZpbmFsX1lfUC9GaW5hbF9WZXIifQ==