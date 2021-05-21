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

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\helper\\showHelper.js";
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
      targetAmount = props.targetAmount,
      eventDescription = props.eventDescription;

  var items = [{
    header: eventName,
    meta: "Name Of Compaign",
    description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, "It's the name of the current compaign"),
    style: (0, _extends3.default)({}, cardStyle, {
      backgroundColor: _palette.randomCardColors[0]
    })
  }, {
    header: "Description",
    meta: "Event Description",
    description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, eventDescription),
    style: (0, _extends3.default)({}, cardStyle, {
      backgroundColor: _palette.randomCardColors[4]
    })
  }, {
    header: manager.substring(0, 16) + "...",
    meta: "Address of Manager",
    description: _react2.default.createElement("p", { style: { marginTop: "1rem" }, __source: {
        fileName: _jsxFileName,
        lineNumber: 54
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
        lineNumber: 69
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
        lineNumber: 82
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
        lineNumber: 97
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
        lineNumber: 110
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
        lineNumber: 123
      }
    }, "It's the target amount which is needed to be raised."),
    style: (0, _extends3.default)({}, cardStyle, {
      backgroundColor: _palette.randomCardColors[2]
    })
  }];
  return items;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxoZWxwZXJcXHNob3dIZWxwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyYW5kb21DYXJkQ29sb3JzIiwid2ViMyIsImdldEl0ZW1DYXJkcyIsInByb3BzIiwiY2FyZFN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiZXZlbnROYW1lIiwidGFyZ2V0QW1vdW50IiwiZXZlbnREZXNjcmlwdGlvbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdWJzdHJpbmciLCJ1dGlscyIsImZyb21XZWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBd0I7O0FBQ2pDLEFBQU8sQUFBVSxBQUNqQjs7Ozs7OztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGFBQUEsQUFBQyxPQUFVLEFBQ3JDO01BQU07a0JBQVksQUFDRixBQUNkO1dBRmdCLEFBRVQsQUFDUDtZQUhnQixBQUdSLEFBQ1I7YUFMbUMsQUFDckMsQUFBa0IsQUFJUDtBQUpPLEFBQ2hCOztNQUZtQyxBQVNuQyxVQVRtQyxBQWlCakMsTUFqQmlDLEFBU25DO01BVG1DLEFBVW5DLFVBVm1DLEFBaUJqQyxNQWpCaUMsQUFVbkM7TUFWbUMsQUFXbkMsc0JBWG1DLEFBaUJqQyxNQWpCaUMsQUFXbkM7TUFYbUMsQUFZbkMsZ0JBWm1DLEFBaUJqQyxNQWpCaUMsQUFZbkM7TUFabUMsQUFhbkMsaUJBYm1DLEFBaUJqQyxNQWpCaUMsQUFhbkM7TUFibUMsQUFjbkMsWUFkbUMsQUFpQmpDLE1BakJpQyxBQWNuQztNQWRtQyxBQWVuQyxlQWZtQyxBQWlCakMsTUFqQmlDLEFBZW5DO01BZm1DLEFBZ0JuQyxtQkFoQm1DLEFBaUJqQyxNQWpCaUMsQUFnQm5DLEFBR0Y7O01BQU07WUFDSixBQUNVLEFBQ1I7VUFGRixBQUVRLEFBQ047aUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtrQkFBdkI7b0JBQUE7QUFBQTtLQUFBLEVBSkosQUFJSSxBQUlGO3NDQUFBLEFBQ0s7dUJBQ2MsMEJBWFQsQUFDWixBQVFFLEFBRW1CLEFBQWlCO0FBQWxDO0FBVkosQUFDRSxHQUZVO1lBY1osQUFDVSxBQUNSO1VBRkYsQUFFUSxBQUNOO2lDQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsV0FBWixBQUFVLEFBQWE7a0JBQXZCO29CQUFBLEFBQ0c7QUFESDtLQUFBLEVBSkosQUFJSSxBQUlGO3NDQUFBLEFBQ0s7dUJBQ2MsMEJBeEJULEFBY1osQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7WUFhVyxRQUFBLEFBQVEsVUFBUixBQUFrQixHQUE3QixBQUFXLEFBQXFCLE1BRGxDLEFBRUU7VUFGRixBQUVRLEFBQ047aUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtrQkFBdkI7b0JBQUE7QUFBQTtLQUFBLEVBSkosQUFJSSxBQU1GOztzQ0FBQSxBQUNLO3VCQUNjLDBCQXZDVCxBQTJCWixBQVVFLEFBRW1CLEFBQWlCO0FBQWxDO0FBWkosQUFDRTtZQWNGLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBSUY7c0NBQUEsQUFDSzt1QkFDYywwQkFwRFQsQUEwQ1osQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7WUFZRixBQUNVLEFBQ1I7VUFGRixBQUVRLEFBQ047aUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtrQkFBdkI7b0JBQUE7QUFBQTtLQUFBLEVBSkosQUFJSSxBQU1GOztzQ0FBQSxBQUNLO3VCQUNjLDBCQW5FVCxBQXVEWixBQVVFLEFBRW1CLEFBQWlCO0FBQWxDO0FBWkosQUFDRTtZQWNGLEFBQ1UsQUFDUjtVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBSUY7c0NBQUEsQUFDSzt1QkFDYywwQkFoRlQsQUFzRVosQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7WUFhUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztVQUZGLEFBRVEsQUFDTjtpQ0FDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFdBQVosQUFBVSxBQUFhO2tCQUF2QjtvQkFBQTtBQUFBO0tBQUEsRUFKSixBQUlJLEFBSUY7c0NBQUEsQUFDSzt1QkFDYywwQkE3RlQsQUFtRlosQUFRRSxBQUVtQixBQUFpQjtBQUFsQztBQVZKLEFBQ0U7WUFZRixBQUNVLEFBQ1I7VUFGRixBQUVRLEFBQ047aUNBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxXQUFaLEFBQVUsQUFBYTtrQkFBdkI7b0JBQUE7QUFBQTtLQUFBLEVBSkosQUFJSSxBQUlGO3NDQUFBLEFBQ0s7dUJBQ2MsMEJBMUd2QixBQUFjLEFBZ0daLEFBUUUsQUFFbUIsQUFBaUIsQUFJeEM7QUFKTTtBQVZKLEFBQ0U7U0FhSixBQUFPLEFBQ1I7QUFsSU0iLCJmaWxlIjoic2hvd0hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9SZWFjdF9hbmRfRmluYWxfWV9QL0ZpbmFsX1ZlciJ9