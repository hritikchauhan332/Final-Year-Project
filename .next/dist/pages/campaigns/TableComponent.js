"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\campaigns\\TableComponent.js";


var TableComponent = function TableComponent(props) {
  var transcationsList = props.transcationsList;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var renderTableData = function renderTableData() {
    return transcationsList.map(function (transcation) {
      var from = transcation.from,
          isError = transcation.isError,
          timeStamp = transcation.timeStamp,
          value = transcation.value;

      var sucess = parseInt(isError) ? "False" : "True";
      return _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, from), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, sucess), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, timeStamp), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, value));
    });
  };

  var handleClick = function handleClick() {
    setActive(function (prev) {
      return !prev;
    });
  };

  if (!(transcationsList || []).length) return null;

  return _react2.default.createElement(_semanticUiReact.Accordion, {
    style: {
      marginLeft: "12rem",
      width: "75%",
      backgroundColor: "black",
      borderRadius: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_semanticUiReact.Accordion.Title, {
    active: active,
    index: 0,
    onClick: handleClick,
    style: {
      color: "white",
      textTransform: "capitalize",
      fontSize: "larger"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: "dropdown", __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), "Transaction Table"), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: active, style: { paddingBottom: "2rem" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_semanticUiReact.Table, { inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_semanticUiReact.Table.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_semanticUiReact.Table.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "From"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Success"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Timestamp"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Amount Transfer(WEI)"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, renderTableData()))));
};

exports.default = TableComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXFRhYmxlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBY2NvcmRpb24iLCJJY29uIiwiVGFibGUiLCJUYWJsZUNvbXBvbmVudCIsInByb3BzIiwidHJhbnNjYXRpb25zTGlzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJlbmRlclRhYmxlRGF0YSIsIm1hcCIsInRyYW5zY2F0aW9uIiwiZnJvbSIsImlzRXJyb3IiLCJ0aW1lU3RhbXAiLCJ2YWx1ZSIsInN1Y2VzcyIsInBhcnNlSW50IiwiaGFuZGxlQ2xpY2siLCJwcmV2IiwibGVuZ3RoIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFNOzs7Ozs7O0FBRTFCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGVBQUEsQUFBQyxPQUFVO01BQUEsQUFDeEIsbUJBRHdCLEFBQ0gsTUFERyxBQUN4Qjs7a0JBQ29CLHFCQUZJLEFBRUosQUFBUzsyREFGTDtNQUFBLEFBRXpCLG9CQUZ5QjtNQUFBLEFBRWpCLHVCQUVmOztNQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBTSxBQUM1Qjs0QkFBTyxBQUFpQixJQUFJLFVBQUEsQUFBQyxhQUFnQjtVQUFBLEFBQ25DLE9BRG1DLEFBQ0MsWUFERCxBQUNuQztVQURtQyxBQUM3QixVQUQ2QixBQUNDLFlBREQsQUFDN0I7VUFENkIsQUFDcEIsWUFEb0IsQUFDQyxZQURELEFBQ3BCO1VBRG9CLEFBQ1QsUUFEUyxBQUNDLFlBREQsQUFDVCxBQUNsQzs7VUFBTSxTQUFTLFNBQUEsQUFBUyxXQUFULEFBQW9CLFVBQW5DLEFBQTZDLEFBQzdDOzZCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQWE7QUFBYjtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFBYTtBQUFiO0FBQUEsU0FGRixBQUVFLEFBQ0EseUJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUFhO0FBQWI7QUFBQSxTQUhGLEFBR0UsQUFDQSw0QkFBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQWE7QUFBYjtBQUFBLFNBTEosQUFDRSxBQUlFLEFBR0w7QUFYRCxBQUFPLEFBWVIsS0FaUTtBQURULEFBZUE7O01BQU0sY0FBYyxTQUFkLEFBQWMsY0FBTSxBQUN4QjtjQUFVLFVBQUEsQUFBQyxNQUFEO2FBQVUsQ0FBVixBQUFXO0FBQXJCLEFBQ0Q7QUFGRCxBQUlBOztNQUFJLENBQUMsQ0FBQyxvQkFBRCxBQUFxQixJQUExQixBQUE4QixRQUFRLE9BQUEsQUFBTyxBQUU3Qzs7eUJBQ0UsQUFBQzs7a0JBQ1EsQUFDTyxBQUNaO2FBRkssQUFFRSxBQUNQO3VCQUhLLEFBR1ksQUFDakI7b0JBTEosQUFDUyxBQUlTO0FBSlQsQUFDTDs7Z0JBRko7a0JBQUEsQUFRRTtBQVJGO0FBQ0UsR0FERixrQkFRRyxjQUFELDJCQUFBLEFBQVc7WUFBWCxBQUNVLEFBQ1I7V0FGRixBQUVTLEFBQ1A7YUFIRixBQUdXLEFBQ1Q7O2FBQU8sQUFDRSxBQUNQO3FCQUZLLEFBRVUsQUFDZjtnQkFQSixBQUlTLEFBR0s7QUFITCxBQUNMOztnQkFMSjtrQkFBQSxBQVVFO0FBVkY7QUFDRSxxQkFTQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFWRixBQVVFO0FBQUE7TUFsQkosQUFRRSxBQWFBLHNDQUFDLGNBQUQsMkJBQUEsQUFBVyxXQUFRLFFBQW5CLEFBQTJCLFFBQVEsT0FBTyxFQUFFLGVBQTVDLEFBQTBDLEFBQWlCO2dCQUEzRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyx3Q0FBTSxVQUFQO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELHVCQUFBLEFBQU87O2dCQUFQO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQsdUJBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCx1QkFBQSxBQUFPOztnQkFBUDtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EseUJBQUMsY0FBRCx1QkFBQSxBQUFPOztnQkFBUDtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztnQkFBUDtrQkFBQTtBQUFBO0FBQUEsS0FIRixBQUdFLEFBQ0EsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOztnQkFBUDtrQkFBQTtBQUFBO0FBQUEsS0FOTixBQUNFLEFBQ0UsQUFJRSxBQUdKLDJDQUFDLGNBQUQsdUJBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFBYTtBQUFiO0FBQUEsS0FoQ1IsQUFDRSxBQXFCRSxBQUNFLEFBU0UsQUFLVDtBQTlERCxBQWdFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJUYWJsZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=