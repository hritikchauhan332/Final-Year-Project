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

var _palette = require("./palette");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _helper = require("./helper/helper");

var _CampaignBasicCard = require("./CampaignBasicCard");

var _CampaignBasicCard2 = _interopRequireDefault(_CampaignBasicCard);

var _CreateCampaignModalContainer = require("./CreateCampaignModalContainer");

var _CreateCampaignModalContainer2 = _interopRequireDefault(_CreateCampaignModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\index.js?entry";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiYnV0dG9uX3ByaW1hcnkiLCJDYW1wYWlnbiIsImhlYWRlckNvbnRhaW5lclN0eWxlIiwiaGVhZGVyQ29udGFpbmVyVGV4dFN0eWxlIiwiQ2FtcGFpZ25CYXNpY0NhcmQiLCJDcmVhdGVDb21wYWlnbk1vZGFsIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwic2hvd01vZGFsIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJzZXRTdGF0ZSIsInByZXYiLCJwcm9wcyIsImNhbXBhaWducyIsImNhbXBhaWduTmFtZXMiLCJpdGVtcyIsIm1hcCIsImFkZHJlc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJhbGwiLCJjdXJDYW1wYWlnbiIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiZ2V0RGF0YSIsImRhdGEiLCJjdXJkYXRhIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFzQjs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQ0UsQUFDQSxBQUNLOztBQUNQLEFBQU8sQUFBdUI7Ozs7QUFDOUIsQUFBTyxBQUF5Qjs7Ozs7Ozs7O0ksQUFFMUI7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0o7aUIsQUFBUSxBQUNLO0FBREwsQUFDTixhLEFBR0Ysb0JBQW9CLFlBQU0sQUFDeEI7WUFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLE1BQUQ7O3FCQUNELENBQUMsS0FEQSxBQUFXLEFBQ047QUFETSxBQUN2QjtBQURGLEFBR0Q7QTs7Ozs7c0NBeUJpQjttQkFDcUIsS0FEckIsQUFDMEI7VUFEMUIsQUFDUixtQkFEUSxBQUNSO1VBRFEsQUFDRyx1QkFESCxBQUNHLEFBQ25COztVQUFNLGtCQUFRLEFBQVUsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUN2QzsrQkFDRSxBQUFDO3dCQUNlLGNBRGhCLEFBQ2dCLEFBQWMsQUFDNUI7bUJBRkYsQUFFVzs7c0JBRlg7d0JBREYsQUFDRSxBQUtIO0FBTEc7QUFDRSxTQURGO0FBRkosQUFBYyxBQVNkLE9BVGM7OzZCQVNOLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBYTtBQUFiO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs2QkFFUTttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQUEsQUFBSyxBQUFPO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUEsQUFBRyxBQUFPO29CQUFWO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsbUNBQUEsQUFBQztpQkFBRCxBQUNVLEFBQ1I7Y0FGRixBQUVPLEFBQ0w7aUJBSEYsQUFJRTtpQkFKRixBQUlVLEFBQ1I7ZUFBTyxFQUxULEFBS1MsQUFBRSxBQUFpQixBQUMxQjtpQkFBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQU50Qjs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBU0Q7QUFUQztBQUNFLGdCQUpOLEFBWUcsQUFBSyxBQUNOLG1DQUFBLEFBQUM7bUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3RCOzJCQUFtQixLQUZyQixBQUUwQjs7b0JBRjFCO3NCQWRKLEFBQ0UsQUFhRSxBQU1MO0FBTks7QUFDRTs7Ozs7NEcsQUF0RGdCOzs7OzttQkFDaEI7QSwyQkFBVyx3QixBQUFBLEFBQVM7O3VCQUNiLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkcsQUFHeEI7Ozs7Ozs7b0VBQ1osQUFBUSxjQUNiLEFBQVUsSUFBSSxVQUFBLEFBQUMsYUFBRDt5QkFBaUIsT0FBQSxBQUFLLFdBQXRCLEFBQWlCLEFBQWdCO0EsQUFEMUMsQUFDTCxpQkFBQSxDQURLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNaUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOzttQkFBekQ7QTs7dUJBQ1csS0FBQSxBQUFLLFEsQUFBTCxBQUFhOzttQkFBMUI7QSxpQ0FDQTtBLGdDQUNKLEEsQUFEb0I7O3FCQUNwQixBQUFLLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQzNCOzZEQUFBLEFBQ0ssaURBQ0YsVUFGSCxBQUVHLEFBQVUsUUFBUyxRQUZ0QixBQUVzQixBQUFRLEFBRS9CO0FBTEQ7a0RBTU8sRUFBRSxXQUFGLFdBQWEsZSxBQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNYLEEsQUF4RTRCOztrQkF3RTVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUmVhY3RfYW5kX0ZpbmFsX1lfUC9GaW5hbF9WZXIifQ==