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

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _palette = require("../palette");

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _helper = require("../helper/helper");

var _CampaignBasicCard = require("../CampaignBasicCard");

var _CampaignBasicCard2 = _interopRequireDefault(_CampaignBasicCard);

var _CreateCampaignModalContainer = require("../CreateCampaignModalContainer");

var _CreateCampaignModalContainer2 = _interopRequireDefault(_CreateCampaignModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\dashboard\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showModal: false
    }, _this.handleToggleModal = function () {
      _this.setState(function (prev) {
        return {
          showModal: !prev.showModal
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _props = this.props,
          campaigns = _props.campaigns,
          campaignNames = _props.campaignNames;

      var items = campaigns.map(function (address) {
        return _react2.default.createElement(_CampaignBasicCard2.default, {
          CampaignName: campaignNames[address],
          address: address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        });
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("div", { style: _helper.headerContainerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("p", { style: _helper.headerContainerTextStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Open Campaigns"), _react2.default.createElement(_semanticUiReact.Button, {
        content: "New Campaign",
        icon: "add circle",
        primary: true,
        floated: "right",
        style: { backgroundColor: _palette.button_primary },
        onClick: function onClick() {
          return _this2.handleToggleModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), this.renderCampaigns(), _react2.default.createElement(_CreateCampaignModalContainer2.default, {
        showModal: this.state.showModal,
        handleToggleModal: this.handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }));
    }
  }], [{
    key: "getSummary",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
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
        return _ref2.apply(this, arguments);
      }

      return getSummary;
    }()
  }, {
    key: "getData",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(campaigns) {
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
        return _ref3.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
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
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkYXNoYm9hcmRcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJidXR0b25fcHJpbWFyeSIsIkNhbXBhaWduIiwiaGVhZGVyQ29udGFpbmVyU3R5bGUiLCJoZWFkZXJDb250YWluZXJUZXh0U3R5bGUiLCJDYW1wYWlnbkJhc2ljQ2FyZCIsIkNyZWF0ZUNvbXBhaWduTW9kYWwiLCJDYW1wYWlnbkluZGV4Iiwic3RhdGUiLCJzaG93TW9kYWwiLCJoYW5kbGVUb2dnbGVNb2RhbCIsInNldFN0YXRlIiwicHJldiIsInByb3BzIiwiY2FtcGFpZ25zIiwiY2FtcGFpZ25OYW1lcyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImJhY2tncm91bmRDb2xvciIsInJlbmRlckNhbXBhaWducyIsIml0ZW0iLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImFsbCIsImN1ckNhbXBhaWduIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJnZXREYXRhIiwiZGF0YSIsImN1cmRhdGEiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQXNCOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFDRSxBQUNBLEFBQ0s7O0FBQ1AsQUFBTyxBQUF1Qjs7OztBQUM5QixBQUFPLEFBQXlCOzs7Ozs7Ozs7SSxBQUUxQjs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDSjtpQixBQUFRLEFBQ0s7QUFETCxBQUNOLGEsQUFHRixvQkFBb0IsWUFBTSxBQUN4QjtZQUFBLEFBQUssU0FBUyxVQUFBLEFBQUMsTUFBRDs7cUJBQ0QsQ0FBQyxLQURBLEFBQVcsQUFDTjtBQURNLEFBQ3ZCO0FBREYsQUFHRDtBOzs7OztzQ0F5QmlCO21CQUNxQixLQURyQixBQUMwQjtVQUQxQixBQUNSLG1CQURRLEFBQ1I7VUFEUSxBQUNHLHVCQURILEFBQ0csQUFDbkI7O1VBQU0sa0JBQVEsQUFBVSxJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQ3ZDOytCQUNFLEFBQUM7d0JBQ2UsY0FEaEIsQUFDZ0IsQUFBYyxBQUM1QjttQkFGRixBQUVXOztzQkFGWDt3QkFERixBQUNFLEFBS0g7QUFMRztBQUNFLFNBREY7QUFGSixBQUFjLEFBU2QsT0FUYzs7NkJBU04sY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFhO0FBQWI7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OzZCQUVRO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBQSxBQUFLLEFBQU87b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBQSxBQUFHLEFBQU87b0JBQVY7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtjQUZGLEFBRU8sQUFDTDtpQkFIRixBQUlFO2lCQUpGLEFBSVUsQUFDUjtlQUFPLEVBTFQsQUFLUyxBQUFFLEFBQWlCLEFBQzFCO2lCQUFTLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTnRCOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFTRDtBQVRDO0FBQ0UsZ0JBSk4sQUFZRyxBQUFLLEFBQ04sbUNBQUEsQUFBQzttQkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDdEI7MkJBQW1CLEtBRnJCLEFBRTBCOztvQkFGMUI7c0JBZEosQUFDRSxBQWFFLEFBTUw7QUFOSztBQUNFOzs7Ozs0RyxBQXREZ0I7Ozs7O21CQUNoQjtBLDJCQUFXLHdCLEFBQUEsQUFBUzs7dUJBQ2IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RyxBQUd4Qjs7Ozs7OztvRUFDWixBQUFRLGNBQ2IsQUFBVSxJQUFJLFVBQUEsQUFBQyxhQUFEO3lCQUFpQixPQUFBLEFBQUssV0FBdEIsQUFBaUIsQUFBZ0I7QSxBQUQxQyxBQUNMLGlCQUFBLENBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU1pQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUF6RDtBOzt1QkFDVyxLQUFBLEFBQUssUSxBQUFMLEFBQWE7O21CQUExQjtBLGlDQUNBO0EsZ0NBQ0osQSxBQURvQjs7cUJBQ3BCLEFBQUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0I7NkRBQUEsQUFDSyxpREFDRixVQUZILEFBRUcsQUFBVSxRQUFTLFFBRnRCLEFBRXNCLEFBQVEsQUFFL0I7QUFMRDtrREFNTyxFQUFFLFdBQUYsV0FBYSxlLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q1gsQSxBQXhFNEI7O2tCQXdFNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=