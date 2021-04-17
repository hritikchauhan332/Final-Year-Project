webpackHotUpdate(5,{

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1438);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = __webpack_require__(588);

var _factory = __webpack_require__(1141);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1421);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1422);

var _palette = __webpack_require__(1435);

var _campaign = __webpack_require__(1436);

var _campaign2 = _interopRequireDefault(_campaign);

var _reactCopyToClipboard = __webpack_require__(1469);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shesh\\final-project\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "getIntials",
    value: function getIntials(name) {
      var splits = name.split(" ");
      if (splits.length === 1) return splits[0].toUpperCase().charAt(0);
      if (splits.length > 1) {
        var char1 = splits[0].toUpperCase().charAt(0);
        var char2 = splits[1].toUpperCase().charAt(0);
        return "" + char1 + char2;
      }
    }
  }, {
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this2 = this;

      var _props = this.props,
          campaigns = _props.campaigns,
          campaignNames = _props.campaignNames;

      var buttonStyle = {
        width: "2rem",
        height: "1.9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0.5rem",
        backgroundColor: "white",
        border: "1.5px solid " + _palette.button_primary
      };
      var iconStyle = {
        marginLeft: "0.45rem",
        color: "black"
      };
      var textStyle = {
        fontSize: "1.35rem",
        marginBottom: "0",
        fontWeight: "800",
        marginLeft: "0.5rem"
      };
      var items = campaigns.map(function (address) {
        return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: "blue", __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement(_semanticUiReact.CardContent, {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement(_semanticUiReact.Label, {
          horizontal: true,
          style: {
            width: "1rem",
            height: "2.5rem",
            borderRadius: "100%",
            backgroundColor: "#1034A6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _this2.getIntials(campaignNames[address])), _react2.default.createElement("p", { style: textStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, campaignNames[address])), _react2.default.createElement("div", {
          style: {
            position: "absolute",
            right: "0",
            marginRight: "2rem",
            display: "flex"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          style: buttonStyle,
          onClick: function onClick() {
            window.open("/campaigns/" + address, "_blank");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "eye", style: iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        })), _react2.default.createElement(_reactCopyToClipboard2.default, { text: address, __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { style: buttonStyle, onClick: _this2.handleOpen, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "copy", style: iconStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }))))));
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("p", {
        style: {
          fontSize: "1.5rem",
          fontWeight: "700",
          textTransform: "capitalize",
          marginBottom: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "New Campaign",
        icon: "add circle",
        primary: true,
        floated: "right",
        style: { backgroundColor: _palette.button_primary },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })))), this.renderCampaigns());
    }
  }], [{
    key: "getSummary",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
        var campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(item);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSummary(_x) {
        return _ref.apply(this, arguments);
      }

      return getSummary;
    }()
  }, {
    key: "getData",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(campaigns) {
        var _this3 = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _promise2.default.all(campaigns.map(function (curCampaign) {
                  return _this3.getSummary(curCampaign);
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getData(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var campaigns, data, campaignNames;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context3.sent;
                _context3.next = 5;
                return this.getData(campaigns);

              case 5:
                data = _context3.sent;
                campaignNames = {};

                data.map(function (curdata, index) {
                  campaignNames = (0, _extends3.default)({}, campaignNames, (0, _defineProperty3.default)({}, campaigns[index], curdata[5]));
                });
                return _context3.abrupt("return", { campaigns: campaigns, campaignNames: campaignNames });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJDYXJkQ29udGVudCIsIkljb24iLCJMYWJlbCIsIkRpbW1lciIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiYnV0dG9uX3ByaW1hcnkiLCJDYW1wYWlnbiIsIkNvcHlUb0NsaXBib2FyZCIsIkNhbXBhaWduSW5kZXgiLCJuYW1lIiwic3BsaXRzIiwic3BsaXQiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImNoYXJBdCIsImNoYXIxIiwiY2hhcjIiLCJwcm9wcyIsImNhbXBhaWducyIsImNhbXBhaWduTmFtZXMiLCJidXR0b25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJpY29uU3R5bGUiLCJjb2xvciIsInRleHRTdHlsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImJvcmRlclJhZGl1cyIsImdldEludGlhbHMiLCJwb3NpdGlvbiIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwiaGFuZGxlT3BlbiIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJhbGwiLCJjdXJDYW1wYWlnbiIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiZ2V0RGF0YSIsImRhdGEiLCJjdXJkYXRhIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7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Ozs7O21CQUNoQjtBLDJCQUFXLHdCLEFBQUEsQUFBUzs7dUJBQ2IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RyxBQUd4Qjs7Ozs7OztvRUFDWixBQUFRLGNBQ2IsQUFBVSxJQUFJLFVBQUEsQUFBQyxhQUFEO3lCQUFpQixPQUFBLEFBQUssV0FBdEIsQUFBaUIsQUFBZ0I7QSxBQUQxQyxBQUNMLGlCQUFBLENBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU1pQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUF6RDtBOzt1QkFDVyxLQUFBLEFBQUssUSxBQUFMLEFBQWE7O21CQUExQjtBLGlDQUNBO0EsZ0NBQ0osQSxBQURvQjs7cUJBQ3BCLEFBQUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0I7NkRBQUEsQUFDSyxpREFDRixVQUZILEFBRUcsQUFBVSxRQUFTLFFBRnRCLEFBRXNCLEFBQVEsQUFFL0I7QUFMRDtrREFNTyxFQUFFLFdBQUYsV0FBYSxlLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQXRCaUIsQUFnSzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3NoZXNoL2ZpbmFsLXByb2plY3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\shesh\\final-project\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\shesh\\final-project\\pages\\index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jY2Y5M2M5YTRkNzc4Y2U0ZGJjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDkwMWYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgSWNvbixcclxuICBMYWJlbCxcclxuICBEaW1tZXIsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCB7IGJ1dHRvbl9wcmltYXJ5IH0gZnJvbSBcIi4vcGFsZXR0ZVwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0U3VtbWFyeShpdGVtKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGl0ZW0pO1xyXG4gICAgcmV0dXJuIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXREYXRhKGNhbXBhaWducykge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICBjYW1wYWlnbnMubWFwKChjdXJDYW1wYWlnbikgPT4gdGhpcy5nZXRTdW1tYXJ5KGN1ckNhbXBhaWduKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmdldERhdGEoY2FtcGFpZ25zKTtcclxuICAgIGxldCBjYW1wYWlnbk5hbWVzID0ge307XHJcbiAgICBkYXRhLm1hcCgoY3VyZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgY2FtcGFpZ25OYW1lcyA9IHtcclxuICAgICAgICAuLi5jYW1wYWlnbk5hbWVzLFxyXG4gICAgICAgIFtjYW1wYWlnbnNbaW5kZXhdXTogY3VyZGF0YVs1XSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zLCBjYW1wYWlnbk5hbWVzIH07XHJcbiAgfVxyXG5cclxuICBnZXRJbnRpYWxzKG5hbWUpIHtcclxuICAgIGNvbnN0IHNwbGl0cyA9IG5hbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDEpIHJldHVybiBzcGxpdHNbMF0udG9VcHBlckNhc2UoKS5jaGFyQXQoMCk7XHJcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc3QgY2hhcjEgPSBzcGxpdHNbMF0udG9VcHBlckNhc2UoKS5jaGFyQXQoMCk7XHJcbiAgICAgIGNvbnN0IGNoYXIyID0gc3BsaXRzWzFdLnRvVXBwZXJDYXNlKCkuY2hhckF0KDApO1xyXG4gICAgICByZXR1cm4gYCR7Y2hhcjF9JHtjaGFyMn1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xyXG4gICAgY29uc3QgeyBjYW1wYWlnbnMsIGNhbXBhaWduTmFtZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcclxuICAgICAgd2lkdGg6IFwiMnJlbVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMS45cmVtXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogYDEuNXB4IHNvbGlkICR7YnV0dG9uX3ByaW1hcnl9YCxcclxuICAgIH07XHJcbiAgICBjb25zdCBpY29uU3R5bGUgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMC40NXJlbVwiLFxyXG4gICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcclxuICAgICAgZm9udFNpemU6IFwiMS4zNXJlbVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjgwMFwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGl0ZW1zID0gY2FtcGFpZ25zLm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGZsdWlkIGNvbG9yPVwiYmx1ZVwiPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxMDM0QTZcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRJbnRpYWxzKGNhbXBhaWduTmFtZXNbYWRkcmVzc10pfVxyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3RleHRTdHlsZX0+e2NhbXBhaWduTmFtZXNbYWRkcmVzc119PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYC9jYW1wYWlnbnMvJHthZGRyZXNzfWAsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZXllXCIgc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e2FkZHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb3B5XCIgc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwPntpdGVtc308L0NhcmQuR3JvdXA+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMnJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBPcGVuIENhbXBhaWduc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiTmV3IENhbXBhaWduXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbl9wcmltYXJ5IH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVEE7QUFTQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTs7QUFTQTtBQUNBO0FBQUE7QUFGQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTs7QUFIQTtBQWFBO0FBYkE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBT0E7QUFQQTs7QUFTQTtBQUNBO0FBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7O0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFIQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQVVBO0FBVkE7QUFDQTs7Ozs7Ozs7OztBQS9JQTtBQUFBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBRUE7QUFGQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=