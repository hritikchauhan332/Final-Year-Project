"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _palette = require("./palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\index.js?entry";


var SignUpPage = function SignUpPage() {
  var _useState = (0, _react.useState)(undefined),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      lastName = _useState4[0],
      setLastName = _useState4[1];

  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0, _react.useState)(undefined),
      _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
      password = _useState8[0],
      setPassword = _useState8[1];

  var _useState9 = (0, _react.useState)(undefined),
      _useState10 = (0, _slicedToArray3.default)(_useState9, 2),
      account = _useState10[0],
      setAccount = _useState10[1];

  var handleAccountChange = (0, _react.useCallback)(function (event) {
    setAccount(event.target.value);
  }, []);
  var handleFirstNameChange = (0, _react.useCallback)(function (event) {
    setFirstName(event.target.value);
  }, []);
  var handleLastNameChange = (0, _react.useCallback)(function (event) {
    setLastName(event.target.value);
  }, []);
  var handleEmailChange = (0, _react.useCallback)(function (event) {
    setEmail(event.target.value);
  }, []);

  var handlePasswordChange = (0, _react.useCallback)(function (event) {
    setPassword(event.target.value);
  }, []);

  var inputConfig = (0, _react.useMemo)(function () {
    return [{
      key: "first_name",
      label: "First name",
      placeholder: "First name",
      value: firstName,
      onChange: handleFirstNameChange
    }, {
      key: "last_name",
      label: "Last name",
      placeholder: "Last name",
      value: lastName,
      onChange: handleLastNameChange
    }, {
      key: "email",
      label: "Email",
      placeholder: "email@abc.com",
      value: email,
      onChange: handleEmailChange
    }, {
      key: "password",
      label: "Password",
      placeholder: "**********",
      value: password,
      onChange: handlePasswordChange
    }, {
      key: "account",
      label: "Primary Account",
      placeholder: "xxxxxxxxx123",
      value: account,
      onChange: handleAccountChange
    }];
  }, [firstName, lastName, password, email, account]);

  var allSubmit = (0, _react.useMemo)(function () {
    return !!firstName && !!lastName && !!email && !!password && !!account;
  }, [firstName, lastName, email, password, account]);

  var handleSubmit = (0, _react.useCallback)(function () {
    localStorage.setItem("user", (0, _stringify2.default)({ firstName: firstName, lastName: lastName, email: email, password: password, account: account }));
    if (allSubmit) {
      window.location.pathname = "/login";
    }
  }, [allSubmit]);
  return _react2.default.createElement("div", {
    style: {
      width: "100%",
      height: "100vh",
      background: "#D3D3D3",
      display: "flex",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement("div", { style: { marginTop: "5%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, _react2.default.createElement("div", {
    style: {
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Sign Up"), _react2.default.createElement("div", {
    style: {
      width: "24rem",
      height: "28rem",
      backgroundColor: "white",
      padding: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, inputConfig.map(function (config) {
    return _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    }, _react2.default.createElement("label", { key: config.key, __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      }
    }, config.label), _react2.default.createElement("input", {
      style: {
        marginBottom: "1rem",
        width: "95%",
        padding: "0.5rem 0.25rem 0.5rem 0.5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "1px solid #d3d3d3",
        borderRadius: "0.25rem"
      },
      key: config.key,
      name: config.key,
      placeholder: config.placeholder,
      value: config.value,
      onChange: config.onChange,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      }
    }));
  }), _react2.default.createElement(_semanticUiReact.Button, {
    type: "submit",
    primary: true,
    disabled: !allSubmit,
    style: {
      padding: "0.25rem",
      width: "6rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, "Submit")))));
};

exports.default = SignUpPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsImJ1dHRvbl9wcmltYXJ5IiwiU2lnblVwUGFnZSIsInVuZGVmaW5lZCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiaGFuZGxlQWNjb3VudENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGaXJzdE5hbWVDaGFuZ2UiLCJoYW5kbGVMYXN0TmFtZUNoYW5nZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJpbnB1dENvbmZpZyIsImtleSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFsbFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1hcCIsImNvbmZpZyIsImFsaWduSXRlbXMiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQWEsQUFBUzs7OztBQUN0QyxBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBc0I7Ozs7Ozs7QUFFL0IsSUFBTSxhQUFhLFNBQWIsQUFBYSxhQUFNO2tCQUNXLHFCQURYLEFBQ1csQUFBUzsyREFEcEI7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LEFBUWxCLEFBQUMsQUFDSjt5QkFDRSxjQUFBOzthQUNTLEFBQ0UsQUFDUDtjQUZLLEFBRUcsQUFDUjtrQkFISyxBQUdPLEFBQ1o7ZUFKSyxBQUlJLEFBQ1Q7c0JBTkosQUFDUyxBQUtXO0FBTFgsQUFDTDs7Z0JBRko7a0JBQUEsQUFTRTtBQVRGO0FBQ0UsR0FERixrQkFTRSxjQUFBLFNBQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhO2dCQUF6QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQ1MsQUFDSyxBQUNWO2tCQUZLLEFBRU8sQUFDWjtpQkFISyxBQUdNLEFBQ1g7b0JBTEosQUFDUyxBQUlTO0FBSlQsQUFDTDs7Z0JBRko7a0JBQUE7QUFBQTtBQUNFLEtBRkosQUFDRSxBQVVBLDRCQUFBLGNBQUE7O2FBQ1MsQUFDRSxBQUNQO2NBRkssQUFFRyxBQUNSO3VCQUhLLEFBR1ksQUFDakI7ZUFMSixBQUNTLEFBSUk7QUFKSixBQUNMOztnQkFGSjtrQkFBQSxBQVFFO0FBUkY7QUFDRSxxQkFPQSxBQUFDLHVDQUFLLFVBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0c7QUFESDtpQkFDRyxBQUFZLElBQUksVUFBQSxBQUFDLFFBQUQ7MkJBQ2YsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxjQUFBLFdBQU8sS0FBSyxPQUFaLEFBQW1CO2tCQUFuQjtvQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBZ0MsQUFDaEM7O3NCQUNTLEFBQ1MsQUFDZDtlQUZLLEFBRUUsQUFDUDtpQkFISyxBQUdJLEFBQ1Q7aUJBSkssQUFJSSxBQUNUO3dCQUxLLEFBS1csQUFDaEI7b0JBTkssQUFNTyxBQUNaO2dCQVBLLEFBT0csQUFDUjtzQkFUSixBQUNTLEFBUVMsQUFFaEI7QUFWTyxBQUNMO1dBU0csT0FYUCxBQVdjLEFBQ1o7WUFBTSxPQVpSLEFBWWUsQUFDYjttQkFBYSxPQWJmLEFBYXNCLEFBQ3BCO2FBQU8sT0FkVCxBQWNnQixBQUNkO2dCQUFVLE9BZlosQUFlbUIsQUFDakI7Z0JBaEJGOztrQkFBQTtvQkFIYSxBQUNmLEFBRUU7QUFBQTtBQUNFO0FBTFIsQUFDRyxBQXVCRCxzQkFBQSxBQUFDO1VBQUQsQUFDTyxBQUNMO2FBRkYsQUFHRTtjQUFVLENBSFosQUFHYSxBQUNYOztlQUFPLEFBQ0ksQUFDVDthQU5KLEFBSVMsQUFFRTtBQUZGLEFBQ0w7O2dCQUxKO2tCQUFBO0FBQUE7QUFDRSxLQXREWixBQUNFLEFBU0UsQUFXRSxBQVFFLEFBd0JFLEFBZ0JYO0FBbkpELEFBcUpBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==