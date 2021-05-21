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

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\campaigns\\show.js?entry";


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
          lineNumber: 57
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_SidebarComponent2.default, {
        visible: this.state.visible,
        handleShowContributeModal: this.handleToggleModal,
        address: this.props.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 73
        }
      }, "Campaign Details"), _react2.default.createElement("div", {
        style: {
          padding: "0rem 2rem 2rem 2rem",
          marginLeft: "6rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: "2rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.renderCards()))), _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, {
          onClick: this.handleSidebarVisible,
          circular: true,
          icon: this.state.visible ? "minus" : "add",
          style: _helper.floatingButtonStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
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
          lineNumber: 94
        }
      }))), _react2.default.createElement(_ContributeModal2.default, {
        address: this.props.address,
        showModal: this.state.showModal,
        handleToggleModal: this.handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_TableComponent2.default, { transcationsList: this.props.transcationsList || [], __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }));
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
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  eventName: summary[5],
                  targetAmount: summary[6],
                  eventDescription: summary[7],
                  transcationsList: transcations.data.result
                });

              case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlBvcHVwIiwiYXhpb3MiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIlNpZGViYXJDb21wb25lbnQiLCJDb250cmlidXRlTW9kYWwiLCJnZXRJdGVtQ2FyZHMiLCJmbG9hdGluZ0J1dHRvblN0eWxlIiwiVGFibGVDb21wb25lbnQiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInZpc2libGUiLCJzaG93TW9kYWwiLCJhY3RpdmVJbmRleCIsInNob3dUYWJsZSIsImhhbmRsZVRvZ2dsZU1vZGFsIiwic2V0U3RhdGUiLCJwcmV2IiwiaGFuZGxlU2lkZWJhclZpc2libGUiLCJwcm9wcyIsImRpc3BsYXkiLCJhZGRyZXNzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJyZW5kZXJDYXJkcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidHJhbnNjYXRpb25zTGlzdCIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZXRoZXJzY2FuQWRkcmVzcyIsImdldCIsInRyYW5zY2F0aW9ucyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsImV2ZW50TmFtZSIsInRhcmdldEFtb3VudCIsImV2ZW50RGVzY3JpcHRpb24iLCJkYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVE7O0FBQzdCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8s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TSxNLEFBQWYsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QSxtQ0FDQTtBLG1DQUNKLCtFQUNBLE1BQUEsQUFBTSxNQUROLEFBQ1ksVSxBQUNaOzt1QkFDeUIsZ0JBQUEsQUFBTSxJLEFBQU4sQUFBVTs7bUJBQS9CO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUxYLEFBS1csQUFBUSxBQUN4QjsyQkFBUyxRQU5KLEFBTUksQUFBUSxBQUNqQjs2QkFBVyxRQVBOLEFBT00sQUFBUSxBQUNuQjtnQ0FBYyxRQVJULEFBUVMsQUFBUSxBQUN0QjtvQ0FBa0IsUUFUYixBQVNhLEFBQVEsQUFDMUI7b0NBQWtCLGFBQUEsQUFBYSxLLEFBVjFCLEFBVStCO0FBVi9CLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQTlCcUIsQUFnSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUmVhY3RfYW5kX0ZpbmFsX1lfUC9GaW5hbF9WZXIifQ==