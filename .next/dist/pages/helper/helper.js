"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupStyle = exports.headerContainerTextStyle = exports.headerContainerStyle = exports.buttonContainerStyle = exports.cardContentStyle = exports.dimmerStyle = exports.defaultFlex = exports.labelStyle = exports.textStyle = exports.iconStyle = exports.buttonStyle = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _palette = require("../palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = exports.buttonStyle = {
  width: "2rem",
  height: "1.9rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "0.5rem",
  backgroundColor: "white"
};
var iconStyle = exports.iconStyle = {
  marginLeft: "0.45rem",
  color: "black"
};
var textStyle = exports.textStyle = {
  fontSize: "1.35rem",
  marginBottom: "0",
  fontWeight: "800",
  marginLeft: "0.5rem",
  color: _palette.name_color
};
var labelStyle = exports.labelStyle = {
  width: "1rem",
  height: "2.5rem",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};
var defaultFlex = exports.defaultFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var dimmerStyle = exports.dimmerStyle = (0, _extends3.default)({}, defaultFlex, {
  flexDirection: "column"
});
var cardContentStyle = exports.cardContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline"
};
var buttonContainerStyle = exports.buttonContainerStyle = {
  position: "absolute",
  right: "0",
  marginRight: "2rem",
  display: "flex"
};
var headerContainerStyle = exports.headerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2rem"
};
var headerContainerTextStyle = exports.headerContainerTextStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  textTransform: "capitalize",
  marginBottom: "0px"
};
var popupStyle = exports.popupStyle = {
  color: "white",
  overflowWrap: "break-words",
  width: "12rem",
  textAlign: "center"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxoZWxwZXJcXGhlbHBlci5qcyJdLCJuYW1lcyI6WyJidXR0b25fcHJpbWFyeSIsIm5hbWVfY29sb3IiLCJidXR0b25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uU3R5bGUiLCJjb2xvciIsInRleHRTdHlsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsImxhYmVsU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJkZWZhdWx0RmxleCIsImRpbW1lclN0eWxlIiwiZmxleERpcmVjdGlvbiIsImNhcmRDb250ZW50U3R5bGUiLCJidXR0b25Db250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImhlYWRlckNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaGVhZGVyQ29udGFpbmVyVGV4dFN0eWxlIiwidGV4dFRyYW5zZm9ybSIsInBvcHVwU3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFnQixBQUFrQixBQUUzQzs7OztBQUFPLElBQU07U0FBYyxBQUNsQixBQUNQO1VBRnlCLEFBRWpCLEFBQ1I7V0FIeUIsQUFHaEIsQUFDVDtrQkFKeUIsQUFJVCxBQUNoQjtjQUx5QixBQUtiLEFBQ1o7Y0FOeUIsQUFNYixBQUNaO21CQVBLLEFBQW9CLEFBT1IsQUFFbkI7QUFUMkIsQUFDekI7QUFRSyxJQUFNO2NBQVksQUFDWCxBQUNaO1NBRkssQUFBa0IsQUFFaEIsQUFFVDtBQUp5QixBQUN2QjtBQUdLLElBQU07WUFBWSxBQUNiLEFBQ1Y7Z0JBRnVCLEFBRVQsQUFDZDtjQUh1QixBQUdYLEFBQ1o7Y0FKdUIsQUFJWCxBQUNaO0FBTEssQUFBa0IsQUFLaEIsQUFFVDtBQVB5QixBQUN2QjtBQU1LLElBQU07U0FBYSxBQUNqQixBQUNQO1VBRndCLEFBRWhCLEFBQ1I7Z0JBSHdCLEFBR1YsQUFDZDtXQUp3QixBQUlmLEFBQ1Q7a0JBTHdCLEFBS1IsQUFDaEI7Y0FOd0IsQUFNWixBQUNaO1NBUEssQUFBbUIsQUFPakIsQUFFVDtBQVQwQixBQUN4QjtBQVFLLElBQU07V0FBYyxBQUNoQixBQUNUO2tCQUZ5QixBQUVULEFBQ2hCO2NBSEssQUFBb0IsQUFHYixBQUVkO0FBTDJCLEFBQ3pCO0FBSUssSUFBTSwrREFBQSxBQUNSO2lCQURFLEFBQU0sQUFFSSxBQUVqQjtBQUZFO0FBRUssSUFBTTtXQUFtQixBQUNyQixBQUNUO2tCQUY4QixBQUVkLEFBQ2hCO2NBSEssQUFBeUIsQUFHbEIsQUFFZDtBQUxnQyxBQUM5QjtBQUlLLElBQU07WUFBdUIsQUFDeEIsQUFDVjtTQUZrQyxBQUUzQixBQUNQO2VBSGtDLEFBR3JCLEFBQ2I7V0FKSyxBQUE2QixBQUl6QixBQUVYO0FBTm9DLEFBQ2xDO0FBS0ssSUFBTTtXQUF1QixBQUN6QixBQUNUO2tCQUZrQyxBQUVsQixBQUNoQjtjQUhrQyxBQUd0QixBQUNaO1VBSkssQUFBNkIsQUFJMUIsQUFFVjtBQU5vQyxBQUNsQztBQUtLLElBQU07WUFBMkIsQUFDNUIsQUFDVjtjQUZzQyxBQUUxQixBQUNaO2lCQUhzQyxBQUd2QixBQUNmO2dCQUpLLEFBQWlDLEFBSXhCLEFBRWhCO0FBTndDLEFBQ3RDO0FBS0ssSUFBTTtTQUFhLEFBQ2pCLEFBQ1A7Z0JBRndCLEFBRVYsQUFDZDtTQUh3QixBQUdqQixBQUNQO2FBSkssQUFBbUIsQUFJYjtBQUphLEFBQ3hCIiwiZmlsZSI6ImhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=