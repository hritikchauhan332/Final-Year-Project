"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemCards = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _palette = require("../palette");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\helper\\showHelper.js";
var getItemCards = exports.getItemCards = function getItemCards(props) {
  var cardStyle = {
    overflowWrap: "break-word",
    width: "20rem",
    height: "12rem",
    padding: "1rem"
  };

  var balance = props.balance,
      manager = props.manager,
      minimumContribution = props.minimumContribution,
      requestsCount = props.requestsCount,
      approversCount = props.approversCount,
      eventName = props.eventName,
      targetAmount = props.targetAmount;

  var items = [{
    header: eventName,
    meta: "Name Of Compaign",
    description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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
        lineNumber: 40
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
        lineNumber: 55
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
        lineNumber: 68
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
        lineNumber: 83
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
        lineNumber: 96
      }
    }, "The balance is how much money this campaign has left to spend."),
    style: (0, _extends3.default)({}, cardStyle, {
      backgroundColor: _palette.randomCardColors[5]
    })
  }, {
    header: targetAmount,
    meta: "Target Amount (Wei)",
    description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      }
    }, "It's the target amount which is needed to be raised."),
    style: (0, _extends3.default)({}, cardStyle, {
      backgroundColor: _palette.randomCardColors[2]
    })
  }];
  return items;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxoZWxwZXJcXHNob3dIZWxwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyYW5kb21DYXJkQ29sb3JzIiwid2ViMyIsImdldEl0ZW1DYXJkcyIsInByb3BzIiwiY2FyZFN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiZXZlbnROYW1lIiwidGFyZ2V0QW1vdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN1YnN0cmluZyIsInV0aWxzIiwiZnJvbVdlaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUF3Qjs7QUFDakMsQUFBTyxBQUFVLEFBQ2pCOzs7Ozs7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLE9BQVUsQUFDckM7TUFBTTtrQkFBWSxBQUNGLEFBQ2Q7V0FGZ0IsQUFFVCxBQUNQO1lBSGdCLEFBR1IsQUFDUjthQUxtQyxBQUNyQyxBQUFrQixBQUlQO0FBSk8sQUFDaEI7O01BRm1DLEFBU25DLFVBVG1DLEFBZ0JqQyxNQWhCaUMsQUFTbkM7TUFUbUMsQUFVbkMsVUFWbUMsQUFnQmpDLE1BaEJpQyxBQVVuQztNQVZtQyxBQVduQyxzQkFYbUMsQUFnQmpDLE1BaEJpQyxBQVduQztNQVhtQyxBQVluQyxnQkFabUMsQUFnQmpDLE1BaEJpQyxBQVluQztNQVptQyxBQWFuQyxpQkFibUMsQUFnQmpDLE1BaEJpQyxBQWFuQztNQWJtQyxBQWNuQyxZQWRtQyxBQWdCakMsTUFoQmlDLEFBY25DO01BZG1DLEFBZW5DLGVBZm1DLEFBZ0JqQyxNQWhCaUMsQUFlbkMsQUFHRjs7TUFBTTtZQUNKLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBSUY7c0NBQUEsQUFDSzt1QkFDYywwQkFYVCxBQUNaLEFBUUUsQUFFbUIsQUFBaUI7QUFBbEM7QUFWSixBQUNFLEdBRlU7WUFlQyxRQUFBLEFBQVEsVUFBUixBQUFrQixHQUE3QixBQUFXLEFBQXFCLE1BRGxDLEFBRUU7VUFGRixBQUVRLEFBQ047aUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtrQkFBdkI7b0JBQUE7QUFBQTtLQUFBLEVBSkosQUFJSSxBQU1GOztzQ0FBQSxBQUNLO3VCQUNjLDBCQTFCVCxBQWNaLEFBVUUsQUFFbUIsQUFBaUI7QUFBbEM7QUFaSixBQUNFO1lBY0YsQUFDVSxBQUNSO1VBRkYsQUFFUSxBQUNOO2lDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7a0JBQXZCO29CQUFBO0FBQUE7S0FBQSxFQUpKLEFBSUksQUFJRjtzQ0FBQSxBQUNLO3VCQUNjLDBCQXZDVCxBQTZCWixBQVFFLEFBRW1CLEFBQWlCO0FBQWxDO0FBVkosQUFDRTtZQVlGLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBTUY7O3NDQUFBLEFBQ0s7dUJBQ2MsMEJBdERULEFBMENaLEFBVUUsQUFFbUIsQUFBaUI7QUFBbEM7QUFaSixBQUNFO1lBY0YsQUFDVSxBQUNSO1VBRkYsQUFFUSxBQUNOO2lDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7a0JBQXZCO29CQUFBO0FBQUE7S0FBQSxFQUpKLEFBSUksQUFJRjtzQ0FBQSxBQUNLO3VCQUNjLDBCQW5FVCxBQXlEWixBQVFFLEFBRW1CLEFBQWlCO0FBQWxDO0FBVkosQUFDRTtZQWFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO1VBRkYsQUFFUSxBQUNOO2lDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7a0JBQXZCO29CQUFBO0FBQUE7S0FBQSxFQUpKLEFBSUksQUFJRjtzQ0FBQSxBQUNLO3VCQUNjLDBCQWhGVCxBQXNFWixBQVFFLEFBRW1CLEFBQWlCO0FBQWxDO0FBVkosQUFDRTtZQVlGLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBSUY7c0NBQUEsQUFDSzt1QkFDYywwQkE3RnZCLEFBQWMsQUFtRlosQUFRRSxBQUVtQixBQUFpQixBQUl4QztBQUpNO0FBVkosQUFDRTtTQWFKLEFBQU8sQUFDUjtBQXBITSIsImZpbGUiOiJzaG93SGVscGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==