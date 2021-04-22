"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = require("semantic-ui-react");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _SidebarComponent = require("./SidebarComponent");

var _SidebarComponent2 = _interopRequireDefault(_SidebarComponent);

var _palette = require("../palette");

var _ContributeModal = require("./ContributeModal");

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