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

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\React\\Final_Ver\\pages\\campaigns\\show.js?entry";


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: "renderCards",
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
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

                var sucess = parseInt(isError) ? 'False' : 'True';
                return _react2.default.createElement(_semanticUiReact.Table.Row, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, from), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, sucess), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, timeStamp), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    }
                }, value));
            });
        }
    }, {
        key: "render",
        value: function render() {

            //console.log(this.props.transcationsList)

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, "View Requests")))))), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, "Transactions for this Contract"), _react2.default.createElement(_semanticUiReact.Table, { inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, "From"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, "Success"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, "Timestamp"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, "Amount Transfer(WEI)"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, this.renderTableData())));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
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
                                etherscanAddress = 'https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=' + props.query.address + '&startblock=0&endblock=99999999&sort=asc&apikey=92DFXGGSPQWKX9GT5IDJCM3YM8FZ9XSM5S';
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
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlRhYmxlIiwiYXhpb3MiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJ0cmFuc2NhdGlvbnNMaXN0IiwibWFwIiwidHJhbnNjYXRpb24iLCJmcm9tIiwiaXNFcnJvciIsInRpbWVTdGFtcCIsInZhbHVlIiwic3VjZXNzIiwicGFyc2VJbnQiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJyZW5kZXJUYWJsZURhdGEiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aGVyc2NhbkFkZHJlc3MiLCJnZXQiLCJ0cmFuc2NhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnROYW1lIiwidGFyZ2V0QW1vdW50IiwiZGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUM3QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztzQ0FzQlk7eUJBT0osS0FQSSxBQU9DO2dCQVBELEFBRU4s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QUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBakJ4QixBQUVJLEFBV0ksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQU9wQix1Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUF4QkosQUF3QkksQUFFQSxtREFBQSxBQUFDLHdDQUFNLFVBQVA7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0MsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSw0QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSw4QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQU5SLEFBQ0ksQUFDQSxBQUlJLEFBR0osMkNBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFwQ1osQUFDSSxBQTBCSSxBQVNJLEFBQ0ssQUFBSyxBQUt6Qjs7Ozs7aUgsQUFoSTRCOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTlDO0EsbURBQ0E7QSxtREFBbUIsK0VBQStFLE1BQUEsQUFBTSxNQUFyRixBQUEyRixVLEFBQVU7O3VDQUNuRyxnQkFBQSxBQUFNLEksQUFBTixBQUFVOztpQ0FBL0I7QSx3REFFTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7Ozs2Q0FHQyxNQUFBLEFBQU0sTUFEYixBQUNtQixBQUNyQjt5REFBcUIsUUFGbkIsQUFFbUIsQUFBUSxBQUM3Qjs2Q0FBUyxRQUhQLEFBR08sQUFBUSxBQUNqQjttREFBZSxRQUpiLEFBSWEsQUFBUSxBQUN2QjtvREFBZ0IsUUFMZCxBQUtjLEFBQVEsQUFDeEI7NkNBQVMsUUFOUCxBQU1PLEFBQVEsQUFDakI7K0NBQVcsUUFQVCxBQU9TLEFBQVEsQUFDbkI7a0RBQWMsUUFSWixBQVFZLEFBQVEsQUFDdEI7c0RBQWtCLGFBQUEsQUFBYSxLLEFBVDdCLEFBU2tDO0FBVGxDLEFBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSFosQSxBQXBJMkI7O2tCQW9JM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1JlYWN0L0ZpbmFsX1ZlciJ9