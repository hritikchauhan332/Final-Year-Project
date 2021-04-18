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
      showModal: false
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
            lineNumber: 86
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
            lineNumber: 99
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
            lineNumber: 114
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
            lineNumber: 127
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
            lineNumber: 142
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
            lineNumber: 155
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
            lineNumber: 168
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
          lineNumber: 180
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
            lineNumber: 192
          }
        }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, from), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, sucess), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, timeStamp), _react2.default.createElement(_semanticUiReact.Table.Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
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
          lineNumber: 204
        }
      }, _react2.default.createElement(_SidebarComponent2.default, {
        visible: this.state.visible,
        handleShowContributeModal: this.handleToggleModal,
        handleViewRequests: this.handleViewRequests,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, _react2.default.createElement("div", {
        style: {
          padding: "1rem 2rem 2rem 2rem",
          marginLeft: this.state.visible ? "6rem" : ""
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Campaign Details"), _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: "2rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 220
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
            lineNumber: 225
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
          lineNumber: 223
        }
      }))), _react2.default.createElement(_ContributeModal2.default, {
        address: this.props.address,
        showModal: this.state.showModal,
        handleToggleModal: this.handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlRhYmxlIiwiSWNvbiIsIkRpbW1lciIsIlBvcHVwIiwiYXhpb3MiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJTaWRlYmFyQ29tcG9uZW50IiwiYnV0dG9uX3ByaW1hcnkiLCJnZXRSYW5kb21Db2xvcnMiLCJyYW5kb21DYXJkQ29sb3JzIiwiQ29udHJpYnV0ZU1vZGFsIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJ2aXNpYmxlIiwic2hvd01vZGFsIiwiaGFuZGxlVG9nZ2xlTW9kYWwiLCJzZXRTdGF0ZSIsInByZXYiLCJoYW5kbGVTaWRlYmFyVmlzaWJsZSIsImhhbmRsZVZpZXdSZXF1ZXN0cyIsIndpbmRvdyIsIm9wZW4iLCJwcm9wcyIsImFkZHJlc3MiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJldmVudE5hbWUiLCJ0YXJnZXRBbW91bnQiLCJjYXJkU3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3Vic3RyaW5nIiwidXRpbHMiLCJmcm9tV2VpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidHJhbnNjYXRpb25zTGlzdCIsIm1hcCIsInRyYW5zY2F0aW9uIiwiZnJvbSIsImlzRXJyb3IiLCJ0aW1lU3RhbXAiLCJ2YWx1ZSIsInN1Y2VzcyIsInBhcnNlSW50IiwibWFyZ2luTGVmdCIsInJlbmRlckNhcmRzIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsImNvbG9yIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJldGhlcnNjYW5BZGRyZXNzIiwiZ2V0IiwidHJhbnNjYXRpb25zIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBUyxBQUFnQixBQUFpQixBQUF3Qjs7QUFDbEUsQUFBTyxBQUFxQjs7Ozs7Ozs7O0ksQUFFdEI7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7ZUFBUSxBQUNHLEFBQ1Q7aUIsQUFGTSxBQUVLO0FBRkwsQUFDTixhLEFBSUYsb0JBQW9CLFlBQU0sQUFDeEI7WUFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLE1BQUQ7O3FCQUNELENBQUMsS0FEQSxBQUFXLEFBQ047QUFETSxBQUN2QjtBQURGLEFBR0Q7QSxhLEFBRUQsdUJBQXVCLFlBQU0sQUFDM0I7WUFBQSxBQUFLO2lCQUNNLENBQUMsTUFBQSxBQUFLLE1BRGpCLEFBQWMsQUFDUyxBQUV4QjtBQUhlLEFBQ1o7QSxhLEFBSUoscUJBQXFCLFlBQU0sQUFDekI7YUFBQSxBQUFPLHFCQUFtQixNQUFBLEFBQUssTUFBL0IsQUFBcUMsdUJBQXJDLEFBQXlELEFBQzFEO0E7Ozs7O2tDQTBCYTttQkFTUixLQVRRLEFBU0g7VUFURyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHVCQUxVLEFBS1Y7VUFMVSxBQU1WLHdCQU5VLEFBTVY7VUFOVSxBQU9WLG1CQVBVLEFBT1Y7VUFQVSxBQVFWLHNCQVJVLEFBUVYsQUFFRjs7VUFBTTtzQkFBWSxBQUNGLEFBQ2Q7ZUFGZ0IsQUFFVCxBQUNQO2dCQUhnQixBQUdSLEFBQ1I7aUJBSkYsQUFBa0IsQUFJUCxBQUVYO0FBTmtCLEFBQ2hCO1VBS0k7Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7c0JBQXZCO3dCQUFBO0FBQUE7U0FBQSxFQUpKLEFBSUksQUFJRjswQ0FBQSxBQUNLOzJCQUNjLDBCQVhULEFBQ1osQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0UsT0FGVTtnQkFlQyxRQUFBLEFBQVEsVUFBUixBQUFrQixHQUE3QixBQUFXLEFBQXFCLE1BRGxDLEFBRUU7Y0FGRixBQUVRLEFBQ047cUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtzQkFBdkI7d0JBQUE7QUFBQTtTQUFBLEVBSkosQUFJSSxBQU1GOzswQ0FBQSxBQUNLOzJCQUNjLDBCQTFCVCxBQWNaLEFBVUUsQUFFbUIsQUFBaUI7QUFBbEM7QUFaSixBQUNFO2dCQWNGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO3NCQUF2Qjt3QkFBQTtBQUFBO1NBQUEsRUFKSixBQUlJLEFBSUY7MENBQUEsQUFDSzsyQkFDYywwQkF2Q1QsQUE2QlosQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7Z0JBWUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7c0JBQXZCO3dCQUFBO0FBQUE7U0FBQSxFQUpKLEFBSUksQUFNRjs7MENBQUEsQUFDSzsyQkFDYywwQkF0RFQsQUEwQ1osQUFVRSxBQUVtQixBQUFpQjtBQUFsQztBQVpKLEFBQ0U7Z0JBY0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7c0JBQXZCO3dCQUFBO0FBQUE7U0FBQSxFQUpKLEFBSUksQUFJRjswQ0FBQSxBQUNLOzJCQUNjLDBCQW5FVCxBQXlEWixBQVFFLEFBRW1CLEFBQWlCO0FBQWxDO0FBVkosQUFDRTtnQkFhUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztjQUZGLEFBRVEsQUFDTjtxQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO3NCQUF2Qjt3QkFBQTtBQUFBO1NBQUEsRUFKSixBQUlJLEFBSUY7MENBQUEsQUFDSzsyQkFDYywwQkFoRlQsQUFzRVosQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7Z0JBWUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7c0JBQXZCO3dCQUFBO0FBQUE7U0FBQSxFQUpKLEFBSUksQUFJRjswQ0FBQSxBQUNLOzJCQUNjLDBCQTdGdkIsQUFBYyxBQW1GWixBQVFFLEFBRW1CLEFBQWlCLEFBS3hDO0FBTE07QUFWSixBQUNFOzsyQ0FlRixBQUFDLHNCQUFELEFBQU07ZUFBTixBQUNTLEFBQ1A7ZUFBTyxFQUFFLFNBQUYsQUFBVyxRQUFRLGdCQUY1QixBQUVTLEFBQW1DOztvQkFGNUM7c0JBREYsQUFDRSxBQUtIO0FBTEc7QUFDRSxPQURGOzs7O3NDQU9jLEFBQ2hCO2tCQUFPLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLElBQUksVUFBQSxBQUFDLGFBQWdCO1lBQUEsQUFDOUMsT0FEOEMsQUFDVixZQURVLEFBQzlDO1lBRDhDLEFBQ3hDLFVBRHdDLEFBQ1YsWUFEVSxBQUN4QztZQUR3QyxBQUMvQixZQUQrQixBQUNWLFlBRFUsQUFDL0I7WUFEK0IsQUFDcEIsUUFEb0IsQUFDVixZQURVLEFBQ3BCLEFBQ2xDOztZQUFNLFNBQVMsU0FBQSxBQUFTLFdBQVQsQUFBb0IsVUFBbkMsQUFBNkMsQUFDN0M7K0JBQ0csY0FBRCx1QkFBQSxBQUFPOztzQkFBUDt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNHLGNBQUQsdUJBQUEsQUFBTzs7c0JBQVA7d0JBQUEsQUFBYTtBQUFiO0FBQUEsV0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRCx1QkFBQSxBQUFPOztzQkFBUDt3QkFBQSxBQUFhO0FBQWI7QUFBQSxXQUZGLEFBRUUsQUFDQSx5QkFBQyxjQUFELHVCQUFBLEFBQU87O3NCQUFQO3dCQUFBLEFBQWE7QUFBYjtBQUFBLFdBSEYsQUFHRSxBQUNBLDRCQUFDLGNBQUQsdUJBQUEsQUFBTzs7c0JBQVA7d0JBQUEsQUFBYTtBQUFiO0FBQUEsV0FMSixBQUNFLEFBSUUsQUFHTDtBQVhELEFBQU8sQUFZUixPQVpROzs7OzZCQWNBLEFBQ1A7NkJBQ0csY0FBRCxnQkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7aUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO21DQUEyQixLQUY3QixBQUVrQyxBQUNoQzs0QkFBb0IsS0FIdEIsQUFHMkI7O29CQUgzQjtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O21CQUNTLEFBQ0ksQUFDVDtzQkFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsU0FIckMsQUFDUyxBQUVxQztBQUZyQyxBQUNMOztvQkFGSjtzQkFBQSxBQU1FO0FBTkY7QUFDRSx5QkFLQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EscUNBQUEsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7b0JBQTFCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBVE4sQUFPRSxBQUNFLEFBQ0UsQUFBeUIsQUFBSyxBQUdsQyxrQ0FBQSxBQUFDO2lDQUVHLEFBQUM7bUJBQ1UsS0FEWCxBQUNnQixBQUNkO29CQUZGLEFBR0U7Z0JBQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLFVBSDdCLEFBR3VDLEFBQ3JDOztzQkFBTyxBQUNLLEFBQ1Y7bUJBRkssQUFFRSxBQUNQO29CQUhLLEFBR0csQUFDUjtvQkFKSyxBQUlHLEFBQ1I7cUJBTEssQUFLSSxBQUNUO0FBTkssQUFNWSxBQUNqQjttQkFYSixBQUlTLEFBT0U7QUFQRixBQUNMOztzQkFMSjt3QkFGSixBQUVJLEFBZUY7QUFmRTtBQUNFLFNBREY7a0JBRkosQUFpQlcsQUFDVDtpQkFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsU0FsQmhDLEFBa0J5QyxBQUN2QztZQUFJLENBbkJOLEFBbUJNLEFBQUMsQUFDTDs7MkJBQU8sQUFDWSxBQUNqQjtpQkF0QkosQUFvQlMsQUFFRTtBQUZGLEFBQ0w7O29CQXJCSjtzQkFuQk4sQUFNRSxBQUNFLEFBWUUsQUEyQko7QUEzQkk7QUFDRSw0QkEwQk4sQUFBQztpQkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDcEI7bUJBQVcsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3RCOzJCQUFtQixLQUhyQixBQUcwQjs7b0JBSDFCO3NCQS9DSixBQUNFLEFBOENFLEFBT0w7QUFQSztBQUNFOzs7Ozs0RyxBQWxOcUI7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QSxtQ0FDQTtBLG1DQUNKLCtFQUNBLE1BQUEsQUFBTSxNQUROLEFBQ1ksVSxBQUNaOzt1QkFDeUIsZ0JBQUEsQUFBTSxJLEFBQU4sQUFBVTs7bUJBQS9CO0Esd0NBRU47O3dCQUFBLEFBQVEsSUFBUixBQUFZOzs7MkJBR0QsTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEFBQ2pCOzZCQUFXLFFBUE4sQUFPTSxBQUFRLEFBQ25CO2dDQUFjLFFBUlQsQUFRUyxBQUFRLEFBQ3RCO29DQUFrQixhQUFBLEFBQWEsSyxBQVQxQixBQVMrQjtBQVQvQixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFsQ3FCLEFBaVAzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==