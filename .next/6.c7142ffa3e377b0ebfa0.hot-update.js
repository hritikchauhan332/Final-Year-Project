webpackHotUpdate(6,{

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(451);

var _axios = __webpack_require__(1458);

var _axios2 = _interopRequireDefault(_axios);

var _Layout = __webpack_require__(846);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1438);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(561);

var _web2 = _interopRequireDefault(_web);

var _SidebarComponent = __webpack_require__(1476);

var _SidebarComponent2 = _interopRequireDefault(_SidebarComponent);

var _palette = __webpack_require__(512);

var _ContributeModal = __webpack_require__(1477);

var _ContributeModal2 = _interopRequireDefault(_ContributeModal);

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
    }, _this.handleClick = function () {
      _this.setState({
        activeIndex: (_this.state.activeIndex + 1) % 2
      });
    }, _this.handleShowTable = function () {
      _this.setState({
        showTable: !_this.state.showTable
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          eventName = _props.eventName,
          targetAmount = _props.targetAmount;

      var cardStyle = {
        overflowWrap: "break-word",
        width: "20rem",
        height: "12rem",
        padding: "1rem"
      };
      var items = [{
        header: eventName,
        meta: "Name Of Compaign",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, "It's the name of the current compaign"),
        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[0]
        })
      }, {
        header: manager.substring(0, 16) + "...",
        meta: "Address of Manager",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "The manager created this campaign and can create requests to withdraw money"),

        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[1]
        })
      }, {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, "You must contribute at least this much wei to become an approver"),
        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[2]
        })
      }, {
        header: requestsCount,
        meta: "Number of Requests",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, "A request tries to withdraw money from the contract. Requests must be approved by approvers"),

        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[3]
        })
      }, {
        header: approversCount,
        meta: "Number of Approvers",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "Number of people who have already donated to this campaign"),
        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[4]
        })
      }, {
        header: _web2.default.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, "The balance is how much money this campaign has left to spend."),
        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[5]
        })
      }, {
        header: targetAmount,
        meta: "Target Amount",
        description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }, "It's the target amount which is needed to be raised."),
        style: (0, _extends3.default)({}, cardStyle, {
          backgroundColor: _palette.randomCardColors[2]
        })
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        items: items,
        style: { display: "flex", justifyContent: "center" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      });
    }
  }, {
    key: "renderTableData",
    value: function renderTableData() {
      return this.props.transcationsList.map(function (transcation) {
        var from = transcation.from,
            isError = transcation.isError,
            timeStamp = transcation.timeStamp,
            value = transcation.value;

        var sucess = parseInt(isError) ? "False" : "True";
        return _react2.default.createElement(_semanticUiReact.Table.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, from), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, sucess), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, timeStamp), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, value));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement(_SidebarComponent2.default, {
        visible: this.state.visible,
        handleShowContributeModal: this.handleToggleModal,
        handleViewRequests: this.handleViewRequests,
        handleShowTable: this.handleShowTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement("div", {
        style: {
          padding: "1rem 2rem 2rem 2rem",
          marginLeft: this.state.visible ? "6rem" : ""
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "Campaign Details"), _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: "2rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, this.renderCards()))), _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, {
          onClick: this.handleSidebarVisible,
          circular: true,
          icon: this.state.visible ? "minus" : "add",
          style: {
            position: "fixed",
            right: "5%",
            bottom: "10%",
            zIndex: "1",
            padding: "1.5rem",
            backgroundColor: _palette.button_primary,
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
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
          lineNumber: 236
        }
      }))), _react2.default.createElement(_ContributeModal2.default, {
        address: this.props.address,
        showModal: this.state.showModal,
        handleToggleModal: this.handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }), this.state.showTable && _react2.default.createElement(_semanticUiReact.Accordion, {
        style: this.state.visible ? { marginLeft: "12rem", width: "75%" } : { marginLeft: "10rem", width: "80%" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
        active: this.state.activeIndex === 0,
        index: 0,
        onClick: this.handleClick,
        style: this.state.activeIndex !== 0 ? { paddingBottom: "2rem" } : {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }), "Transaction Table"), _react2.default.createElement(_semanticUiReact.Accordion.Content, {
        active: this.state.activeIndex === 0,
        style: { paddingBottom: "2rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react2.default.createElement(_semanticUiReact.Table, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, "From"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, "Success"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, "Timestamp"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, "Amount Transfer(WEI)"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, this.renderTableData())))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlRhYmxlIiwiSWNvbiIsIkRpbW1lciIsIlBvcHVwIiwiQWNjb3JkaW9uIiwiYXhpb3MiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJTaWRlYmFyQ29tcG9uZW50IiwiYnV0dG9uX3ByaW1hcnkiLCJnZXRSYW5kb21Db2xvcnMiLCJyYW5kb21DYXJkQ29sb3JzIiwiQ29udHJpYnV0ZU1vZGFsIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJ2aXNpYmxlIiwic2hvd01vZGFsIiwiYWN0aXZlSW5kZXgiLCJzaG93VGFibGUiLCJoYW5kbGVUb2dnbGVNb2RhbCIsInNldFN0YXRlIiwicHJldiIsImhhbmRsZVNpZGViYXJWaXNpYmxlIiwiaGFuZGxlVmlld1JlcXVlc3RzIiwid2luZG93Iiwib3BlbiIsInByb3BzIiwiYWRkcmVzcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2hvd1RhYmxlIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiZXZlbnROYW1lIiwidGFyZ2V0QW1vdW50IiwiY2FyZFN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN1YnN0cmluZyIsInV0aWxzIiwiZnJvbVdlaSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRyYW5zY2F0aW9uc0xpc3QiLCJtYXAiLCJ0cmFuc2NhdGlvbiIsImZyb20iLCJpc0Vycm9yIiwidGltZVN0YW1wIiwidmFsdWUiLCJzdWNlc3MiLCJwYXJzZUludCIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYXJkcyIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJjb2xvciIsInBhZGRpbmdCb3R0b20iLCJyZW5kZXJUYWJsZURhdGEiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aGVyc2NhbkFkZHJlc3MiLCJnZXQiLCJ0cmFuc2NhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQVMsQUFBZ0IsQUFBaUIsQUFBd0I7O0FBQ2xFLEFBQU8sQUFBcUI7Ozs7Ozs7OztJLEFBRXRCOzs7Ozs7Ozs7Ozs7Ozt3TixBQUNKO2VBQVEsQUFDRyxBQUNUO2lCQUZNLEFBRUssQUFDWDttQkFITSxBQUdPLEFBQ2I7aUIsQUFKTSxBQUlLO0FBSkwsQUFDTixhLEFBTUYsb0JBQW9CLFlBQU0sQUFDeEI7WUFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLE1BQUQ7O3FCQUNELENBQUMsS0FEQSxBQUFXLEFBQ047QUFETSxBQUN2QjtBQURGLEFBR0Q7QSxhLEFBRUQsdUJBQXVCLFlBQU0sQUFDM0I7WUFBQSxBQUFLO2lCQUNNLENBQUMsTUFBQSxBQUFLLE1BRGpCLEFBQWMsQUFDUyxBQUV4QjtBQUhlLEFBQ1o7QSxhLEFBSUoscUJBQXFCLFlBQU0sQUFDekI7YUFBQSxBQUFPLHFCQUFtQixNQUFBLEFBQUssTUFBL0IsQUFBcUMsdUJBQXJDLEFBQXlELEFBQzFEO0EsYSxBQWtLRCxjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLO3FCQUNVLENBQUMs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QUFQO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSw0QkFBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSw4QkFBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBO0FBQUE7QUFBQSxTQU5OLEFBQ0UsQUFDRSxBQUlFLEFBR0osMkNBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUFhO0FBQWI7QUFBQSxjQXJGWixBQUNFLEFBcURJLEFBa0JFLEFBSUUsQUFTRSxBQUFhLEFBQUssQUFPL0I7Ozs7OzRHLEFBdlE0Qjs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBLG1DQUNBO0EsbUNBQ0osK0VBQ0EsTUFBQSxBQUFNLE1BRE4sQUFDWSxVLEFBQ1o7O3VCQUN5QixnQkFBQSxBQUFNLEksQUFBTixBQUFVOzttQkFBL0I7QSx3Q0FFTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7OzsyQkFHRCxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjt1Q0FBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjtpQ0FBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMWCxBQUtXLEFBQVEsQUFDeEI7MkJBQVMsUUFOSixBQU1JLEFBQVEsQUFDakI7NkJBQVcsUUFQTixBQU9NLEFBQVEsQUFDbkI7Z0NBQWMsUUFSVCxBQVFTLEFBQVEsQUFDdEI7b0NBQWtCLGFBQUEsQUFBYSxLLEFBVDFCLEFBUytCO0FBVC9CLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4UE4sQSxBQWxTMkI7O2tCQWtTM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\shesh\\final-project\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\shesh\\final-project\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jNzE0MmZmYTNlMzc3YjBlYmZhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YzlhY2EyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBHcmlkLFxyXG4gIEJ1dHRvbixcclxuICBUYWJsZSxcclxuICBJY29uLFxyXG4gIERpbW1lcixcclxuICBQb3B1cCxcclxuICBBY2NvcmRpb24sXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgU2lkZWJhckNvbXBvbmVudCBmcm9tIFwiLi9TaWRlYmFyQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGJ1dHRvbl9wcmltYXJ5LCBnZXRSYW5kb21Db2xvcnMsIHJhbmRvbUNhcmRDb2xvcnMgfSBmcm9tIFwiLi4vcGFsZXR0ZVwiO1xyXG5pbXBvcnQgQ29udHJpYnV0ZU1vZGFsIGZyb20gXCIuL0NvbnRyaWJ1dGVNb2RhbFwiO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgc2hvd1RhYmxlOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBoYW5kbGVUb2dnbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+ICh7XHJcbiAgICAgIHNob3dNb2RhbDogIXByZXYuc2hvd01vZGFsLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNpZGViYXJWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVWaWV3UmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgLCBcIl9ibGFua1wiKTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGV0aGVyc2NhbkFkZHJlc3MgPVxyXG4gICAgICBcImh0dHBzOi8vYXBpLXJpbmtlYnkuZXRoZXJzY2FuLmlvL2FwaT9tb2R1bGU9YWNjb3VudCZhY3Rpb249dHhsaXN0JmFkZHJlc3M9XCIgK1xyXG4gICAgICBwcm9wcy5xdWVyeS5hZGRyZXNzICtcclxuICAgICAgXCImc3RhcnRibG9jaz0wJmVuZGJsb2NrPTk5OTk5OTk5JnNvcnQ9YXNjJmFwaWtleT05MkRGWEdHU1BRV0tYOUdUNUlESkNNM1lNOEZaOVhTTTVTXCI7XHJcbiAgICBjb25zdCB0cmFuc2NhdGlvbnMgPSBhd2FpdCBheGlvcy5nZXQoZXRoZXJzY2FuQWRkcmVzcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXHJcbiAgICAgIGV2ZW50TmFtZTogc3VtbWFyeVs1XSxcclxuICAgICAgdGFyZ2V0QW1vdW50OiBzdW1tYXJ5WzZdLFxyXG4gICAgICB0cmFuc2NhdGlvbnNMaXN0OiB0cmFuc2NhdGlvbnMuZGF0YS5yZXN1bHQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICBldmVudE5hbWUsXHJcbiAgICAgIHRhcmdldEFtb3VudCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgY2FyZFN0eWxlID0ge1xyXG4gICAgICBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiLFxyXG4gICAgICB3aWR0aDogXCIyMHJlbVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTJyZW1cIixcclxuICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGV2ZW50TmFtZSxcclxuICAgICAgICBtZXRhOiBcIk5hbWUgT2YgQ29tcGFpZ25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgSXQncyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBjb21wYWlnblxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIC4uLmNhcmRTdHlsZSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcmFuZG9tQ2FyZENvbG9yc1swXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBgJHttYW5hZ2VyLnN1YnN0cmluZygwLCAxNil9Li4uYCxcclxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG9cclxuICAgICAgICAgICAgd2l0aGRyYXcgbW9uZXlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgLi4uY2FyZFN0eWxlLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByYW5kb21DYXJkQ29sb3JzWzFdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgLi4uY2FyZFN0eWxlLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByYW5kb21DYXJkQ29sb3JzWzJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0XHJcbiAgICAgICAgICAgIGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVyc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5jYXJkU3R5bGUsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhbmRvbUNhcmRDb2xvcnNbM10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgIE51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5jYXJkU3R5bGUsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhbmRvbUNhcmRDb2xvcnNbNF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXHJcbiAgICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIChldGhlcilcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAuLi5jYXJkU3R5bGUsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhbmRvbUNhcmRDb2xvcnNbNV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogdGFyZ2V0QW1vdW50LFxyXG4gICAgICAgIG1ldGE6IFwiVGFyZ2V0IEFtb3VudFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBJdCdzIHRoZSB0YXJnZXQgYW1vdW50IHdoaWNoIGlzIG5lZWRlZCB0byBiZSByYWlzZWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgLi4uY2FyZFN0eWxlLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByYW5kb21DYXJkQ29sb3JzWzJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkLkdyb3VwXHJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYmxlRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRyYW5zY2F0aW9uc0xpc3QubWFwKCh0cmFuc2NhdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGZyb20sIGlzRXJyb3IsIHRpbWVTdGFtcCwgdmFsdWUgfSA9IHRyYW5zY2F0aW9uO1xyXG4gICAgICBjb25zdCBzdWNlc3MgPSBwYXJzZUludChpc0Vycm9yKSA/IFwiRmFsc2VcIiA6IFwiVHJ1ZVwiO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZS5Sb3c+XHJcbiAgICAgICAgICA8VGFibGUuQ2VsbD57ZnJvbX08L1RhYmxlLkNlbGw+XHJcbiAgICAgICAgICA8VGFibGUuQ2VsbD57c3VjZXNzfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZS5DZWxsPnt0aW1lU3RhbXB9PC9UYWJsZS5DZWxsPlxyXG4gICAgICAgICAgPFRhYmxlLkNlbGw+e3ZhbHVlfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICA8L1RhYmxlLlJvdz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVJbmRleDogKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggKyAxKSAlIDIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVNob3dUYWJsZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93VGFibGU6ICF0aGlzLnN0YXRlLnNob3dUYWJsZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxTaWRlYmFyQ29tcG9uZW50XHJcbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XHJcbiAgICAgICAgICBoYW5kbGVTaG93Q29udHJpYnV0ZU1vZGFsPXt0aGlzLmhhbmRsZVRvZ2dsZU1vZGFsfVxyXG4gICAgICAgICAgaGFuZGxlVmlld1JlcXVlc3RzPXt0aGlzLmhhbmRsZVZpZXdSZXF1ZXN0c31cclxuICAgICAgICAgIGhhbmRsZVNob3dUYWJsZT17dGhpcy5oYW5kbGVTaG93VGFibGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbSAycmVtIDJyZW0gMnJlbVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUudmlzaWJsZSA/IFwiNnJlbVwiIDogXCJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPkNhbXBhaWduIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgICA8R3JpZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MjR9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZGViYXJWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgICBpY29uPXt0aGlzLnN0YXRlLnZpc2libGUgPyBcIm1pbnVzXCIgOiBcImFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYnV0dG9uX3ByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS52aXNpYmxlID8gXCJMZXNzXCIgOiBcIk1vcmVcIn1cclxuICAgICAgICAgICAgICBvbj17W1wiaG92ZXJcIl19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDgwXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Q29udHJpYnV0ZU1vZGFsXHJcbiAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxyXG4gICAgICAgICAgaGFuZGxlVG9nZ2xlTW9kYWw9e3RoaXMuaGFuZGxlVG9nZ2xlTW9kYWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VGFibGUgJiYgKFxyXG4gICAgICAgICAgPEFjY29yZGlvblxyXG4gICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICA/IHsgbWFyZ2luTGVmdDogXCIxMnJlbVwiLCB3aWR0aDogXCI3NSVcIiB9XHJcbiAgICAgICAgICAgICAgICA6IHsgbWFyZ2luTGVmdDogXCIxMHJlbVwiLCB3aWR0aDogXCI4MCVcIiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFjY29yZGlvbi5UaXRsZVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICBpbmRleD17MH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IDAgPyB7IHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH0gOiB7fVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJkcm9wZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gVGFibGVcclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uVGl0bGU+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uQ29udGVudFxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Gcm9tPC9UYWJsZS5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlN1Y2Nlc3M8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+VGltZXN0YW1wPC9UYWJsZS5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkFtb3VudCBUcmFuc2ZlcihXRUkpPC9UYWJsZS5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+e3RoaXMucmVuZGVyVGFibGVEYXRhKCl9PC9UYWJsZS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7QUFIQTtBQU9BOztBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQW1LQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7QUEvSUE7QUFTQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBVEE7QUFhQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQVRBO0FBYUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBVEE7QUFDQTtBQWNBO0FBRUE7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBWUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFEQTs7QUFGQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUxBO0FBZUE7QUFmQTtBQUNBO0FBZUE7QUFBQTtBQUNBOztBQUdBO0FBQUE7QUFEQTs7QUFyQkE7QUEyQkE7QUEzQkE7QUFDQTtBQTJCQTtBQUNBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFPQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTtBQU9BO0FBRUE7QUFBQTtBQUVBOztBQUxBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUEvUEE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNlBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=