"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatingButtonStyle = exports.popupStyle = exports.headerContainerTextStyle = exports.headerContainerStyle = exports.buttonContainerStyle = exports.cardContentStyle = exports.dimmerStyle = exports.defaultFlex = exports.labelStyle = exports.textStyle = exports.iconStyle = exports.buttonStyle = undefined;

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
var floatingButtonStyle = exports.floatingButtonStyle = {
  position: "fixed",
  right: "5%",
  bottom: "10%",
  zIndex: "1",
  padding: "1.5rem",
  backgroundColor: _palette.button_primary,
  color: "white"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxoZWxwZXJcXGhlbHBlci5qcyJdLCJuYW1lcyI6WyJidXR0b25fcHJpbWFyeSIsIm5hbWVfY29sb3IiLCJidXR0b25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uU3R5bGUiLCJjb2xvciIsInRleHRTdHlsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsImxhYmVsU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJkZWZhdWx0RmxleCIsImRpbW1lclN0eWxlIiwiZmxleERpcmVjdGlvbiIsImNhcmRDb250ZW50U3R5bGUiLCJidXR0b25Db250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImhlYWRlckNvbnRhaW5lclN0eWxlIiwibWFyZ2luIiwiaGVhZGVyQ29udGFpbmVyVGV4dFN0eWxlIiwidGV4dFRyYW5zZm9ybSIsInBvcHVwU3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ0ZXh0QWxpZ24iLCJmbG9hdGluZ0J1dHRvblN0eWxlIiwiYm90dG9tIiwiekluZGV4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWdCLEFBQWtCLEFBRTNDOzs7O0FBQU8sSUFBTTtTQUFjLEFBQ2xCLEFBQ1A7VUFGeUIsQUFFakIsQUFDUjtXQUh5QixBQUdoQixBQUNUO2tCQUp5QixBQUlULEFBQ2hCO2NBTHlCLEFBS2IsQUFDWjtjQU55QixBQU1iLEFBQ1o7bUJBUEssQUFBb0IsQUFPUixBQUVuQjtBQVQyQixBQUN6QjtBQVFLLElBQU07Y0FBWSxBQUNYLEFBQ1o7U0FGSyxBQUFrQixBQUVoQixBQUVUO0FBSnlCLEFBQ3ZCO0FBR0ssSUFBTTtZQUFZLEFBQ2IsQUFDVjtnQkFGdUIsQUFFVCxBQUNkO2NBSHVCLEFBR1gsQUFDWjtjQUp1QixBQUlYLEFBQ1o7QUFMSyxBQUFrQixBQUtoQixBQUVUO0FBUHlCLEFBQ3ZCO0FBTUssSUFBTTtTQUFhLEFBQ2pCLEFBQ1A7VUFGd0IsQUFFaEIsQUFDUjtnQkFId0IsQUFHVixBQUNkO1dBSndCLEFBSWYsQUFDVDtrQkFMd0IsQUFLUixBQUNoQjtjQU53QixBQU1aLEFBQ1o7U0FQSyxBQUFtQixBQU9qQixBQUVUO0FBVDBCLEFBQ3hCO0FBUUssSUFBTTtXQUFjLEFBQ2hCLEFBQ1Q7a0JBRnlCLEFBRVQsQUFDaEI7Y0FISyxBQUFvQixBQUdiLEFBRWQ7QUFMMkIsQUFDekI7QUFJSyxJQUFNLCtEQUFBLEFBQ1I7aUJBREUsQUFBTSxBQUVJLEFBRWpCO0FBRkU7QUFFSyxJQUFNO1dBQW1CLEFBQ3JCLEFBQ1Q7a0JBRjhCLEFBRWQsQUFDaEI7Y0FISyxBQUF5QixBQUdsQixBQUVkO0FBTGdDLEFBQzlCO0FBSUssSUFBTTtZQUF1QixBQUN4QixBQUNWO1NBRmtDLEFBRTNCLEFBQ1A7ZUFIa0MsQUFHckIsQUFDYjtXQUpLLEFBQTZCLEFBSXpCLEFBRVg7QUFOb0MsQUFDbEM7QUFLSyxJQUFNO1dBQXVCLEFBQ3pCLEFBQ1Q7a0JBRmtDLEFBRWxCLEFBQ2hCO2NBSGtDLEFBR3RCLEFBQ1o7VUFKSyxBQUE2QixBQUkxQixBQUVWO0FBTm9DLEFBQ2xDO0FBS0ssSUFBTTtZQUEyQixBQUM1QixBQUNWO2NBRnNDLEFBRTFCLEFBQ1o7aUJBSHNDLEFBR3ZCLEFBQ2Y7Z0JBSkssQUFBaUMsQUFJeEIsQUFFaEI7QUFOd0MsQUFDdEM7QUFLSyxJQUFNO1NBQWEsQUFDakIsQUFDUDtnQkFGd0IsQUFFVixBQUNkO1NBSHdCLEFBR2pCLEFBQ1A7YUFKSyxBQUFtQixBQUliLEFBRWI7QUFOMEIsQUFDeEI7QUFLSyxJQUFNO1lBQXNCLEFBQ3ZCLEFBQ1Y7U0FGaUMsQUFFMUIsQUFDUDtVQUhpQyxBQUd6QixBQUNSO1VBSmlDLEFBSXpCLEFBQ1I7V0FMaUMsQUFLeEIsQUFDVDtBQU5pQyxBQU1oQixBQUNqQjtTQVBLLEFBQTRCLEFBTzFCO0FBUDBCLEFBQ2pDIiwiZmlsZSI6ImhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zaGVzaC9maW5hbC1wcm9qZWN0In0=