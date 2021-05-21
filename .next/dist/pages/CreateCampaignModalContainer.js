"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _new = require("./campaigns/new");

var _new2 = _interopRequireDefault(_new);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\CreateCampaignModalContainer.js";


var CreateCompaignModal = function (_Component) {
  (0, _inherits3.default)(CreateCompaignModal, _Component);

  function CreateCompaignModal() {
    (0, _classCallCheck3.default)(this, CreateCompaignModal);

    return (0, _possibleConstructorReturn3.default)(this, (CreateCompaignModal.__proto__ || (0, _getPrototypeOf2.default)(CreateCompaignModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(CreateCompaignModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          showModal = _props.showModal,
          handleToggleModal = _props.handleToggleModal;

      return _react2.default.createElement(_semanticUiReact.Modal, {
        open: showModal,
        closeIcon: true,
        onClose: handleToggleModal,
        style: { width: "36rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_new2.default, { handleToggleModal: handleToggleModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return CreateCompaignModal;
}(_react.Component);

exports.default = CreateCompaignModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDcmVhdGVDYW1wYWlnbk1vZGFsQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTW9kYWwiLCJDYW1wYWlnbk5ldyIsIkNyZWF0ZUNvbXBhaWduTW9kYWwiLCJwcm9wcyIsInNob3dNb2RhbCIsImhhbmRsZVRvZ2dsZU1vZGFsIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFpQjs7Ozs7Ozs7O0ksQUFFbEI7Ozs7Ozs7Ozs7OzZCQUNLO21CQUNrQyxLQURsQyxBQUN1QztVQUR2QyxBQUNDLG1CQURELEFBQ0M7VUFERCxBQUNZLDJCQURaLEFBQ1ksQUFDbkI7OzZCQUNFLEFBQUM7Y0FBRCxBQUNRLEFBQ047bUJBRkYsQUFHRTtpQkFIRixBQUdXLEFBQ1Q7ZUFBTyxFQUFFLE9BSlgsQUFJUyxBQUFTOztvQkFKbEI7c0JBQUEsQUFNRTtBQU5GO0FBQ0UsT0FERixrQkFNRSxBQUFDLCtCQUFZLG1CQUFiLEFBQWdDO29CQUFoQztzQkFQSixBQUNFLEFBTUUsQUFHTDtBQUhLOzs7Ozs7QUFNUixBLEFBaEJrQzs7a0JBZ0JsQyxBQUFlIiwiZmlsZSI6IkNyZWF0ZUNhbXBhaWduTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiRDovUmVhY3RfYW5kX0ZpbmFsX1lfUC9GaW5hbF9WZXIifQ==