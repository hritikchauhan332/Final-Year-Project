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

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _SidebarComponent = require("./SidebarComponent");

var _SidebarComponent2 = _interopRequireDefault(_SidebarComponent);

var _ContributeModal = require("./ContributeModal");

var _ContributeModal2 = _interopRequireDefault(_ContributeModal);

var _showHelper = require("../helper/showHelper");

var _helper = require("../helper/helper");

var _TableComponent = require("./TableComponent");

var _TableComponent2 = _interopRequireDefault(_TableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\campaigns\\show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      showModal: false,
      activeIndex: 0,
      showTable: false
    }, _this.handleToggleModal = function () {
      _this.setState(function (prev) {
        return {
          showModal: !prev.showModal
        };
      });
    }, _this.handleSidebarVisible = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    }, _this.handleViewRequests = function () {
      window.open("/campaigns/" + _this.props.address + "/requests", "_blank");
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        items: (0, _showHelper.getItemCards)(this.props),
        style: { display: "flex" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_SidebarComponent2.default, {
        visible: this.state.visible,
        handleShowContributeModal: this.handleToggleModal,
        handleViewRequests: this.handleViewRequests,
        handleShowTable: this.handleShowTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("div", {
        style: {
          fontSize: "2rem",
          fontWeight: "500",
          marginTop: "2rem",
          marginLeft: "2rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Campaign Details"), _react2.default.createElement("div", {
        style: {
          padding: "0rem 2rem 2rem 2rem",
          marginLeft: "6rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: "2rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.renderCards()))), _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, {
          onClick: this.handleSidebarVisible,
          circular: true,
          icon: this.state.visible ? "minus" : "add",
          style: _helper.floatingButtonStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }),
        position: "top center",
        content: this.state.visible ? "Less" : "More",
        on: ["hover"],
        style: {
          backgroundColor: "#000080",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))), _react2.default.createElement(_ContributeModal2.default, {
        address: this.props.address,
        showModal: this.state.showModal,
        handleToggleModal: this.handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement(_TableComponent2.default, { transcationsList: this.props.transcationsList || [], __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), ")");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, etherscanAddress, transcations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                etherscanAddress = "https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=" + props.query.address + "&startblock=0&endblock=99999999&sort=asc&apikey=92DFXGGSPQWKX9GT5IDJCM3YM8FZ9XSM5S";
                _context.next = 7;
                return _axios2.default.get(etherscanAddress);

              case 7:
                transcations = _context.sent;

                console.log(summary);

                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  eventName: summary[5],
                  targetAmount: summary[6],
                  transcationsList: transcations.data.result
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlBvcHVwIiwiYXhpb3MiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIlNpZGViYXJDb21wb25lbnQiLCJDb250cmlidXRlTW9kYWwiLCJnZXRJdGVtQ2FyZHMiLCJmbG9hdGluZ0J1dHRvblN0eWxlIiwiVGFibGVDb21wb25lbnQiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInZpc2libGUiLCJzaG93TW9kYWwiLCJhY3RpdmVJbmRleCIsInNob3dUYWJsZSIsImhhbmRsZVRvZ2dsZU1vZGFsIiwic2V0U3RhdGUiLCJwcmV2IiwiaGFuZGxlU2lkZWJhclZpc2libGUiLCJoYW5kbGVWaWV3UmVxdWVzdHMiLCJ3aW5kb3ciLCJvcGVuIiwicHJvcHMiLCJhZGRyZXNzIiwiZGlzcGxheSIsImhhbmRsZVNob3dUYWJsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwicmVuZGVyQ2FyZHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRyYW5zY2F0aW9uc0xpc3QiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aGVyc2NhbkFkZHJlc3MiLCJnZXQiLCJ0cmFuc2NhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiZXZlbnROYW1lIiwidGFyZ2V0QW1vdW50IiwiZGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUM3QixBQUFP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S0E7QUFMQTtBQUNFLDBCQUlGLEFBQUMsMENBQWUsa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsb0JBQTdDLEFBQWlFO29CQUFqRTtzQkFyREYsQUFxREU7QUFBQTtVQXRESixBQUNFLEFBd0RIOzs7Ozs0RyxBQTNGNEI7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QSxtQ0FDQTtBLG1DQUNKLCtFQUNBLE1BQUEsQUFBTSxNQUROLEFBQ1ksVSxBQUNaOzt1QkFDeUIsZ0JBQUEsQUFBTSxJLEFBQU4sQUFBVTs7bUJBQS9CO0Esd0NBRU47O3dCQUFBLEFBQVEsSUFBUixBQUFZOzs7MkJBR0QsTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEFBQ2pCOzZCQUFXLFFBUE4sQUFPTSxBQUFRLEFBQ25CO2dDQUFjLFFBUlQsQUFRUyxBQUFRLEFBQ3RCO29DQUFrQixhQUFBLEFBQWEsSyxBQVQxQixBQVMrQjtBQVQvQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFwQ3FCLEFBc0gzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==