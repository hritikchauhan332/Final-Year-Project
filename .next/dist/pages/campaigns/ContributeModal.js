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

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\React_and_Final_Y_P\\Final_Ver\\pages\\campaigns\\ContributeModal.js";


var ContributeModal = function (_Component) {
  (0, _inherits3.default)(ContributeModal, _Component);

  function ContributeModal() {
    (0, _classCallCheck3.default)(this, ContributeModal);

    return (0, _possibleConstructorReturn3.default)(this, (ContributeModal.__proto__ || (0, _getPrototypeOf2.default)(ContributeModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContributeModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          showModal = _props.showModal,
          handleToggleModal = _props.handleToggleModal,
          address = _props.address;

      return _react2.default.createElement(_semanticUiReact.Modal, {
        open: showModal,
        closeIcon: true,
        onClose: handleToggleModal,
        style: { width: "36rem" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        address: address,
        handleToggleModal: handleToggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return ContributeModal;
}(_react.Component);

exports.default = ContributeModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXENvbnRyaWJ1dGVNb2RhbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1vZGFsIiwiQ29udHJpYnV0ZUZvcm0iLCJDb250cmlidXRlTW9kYWwiLCJwcm9wcyIsInNob3dNb2RhbCIsImhhbmRsZVRvZ2dsZU1vZGFsIiwiYWRkcmVzcyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDMkMsS0FEM0MsQUFDZ0Q7VUFEaEQsQUFDQyxtQkFERCxBQUNDO1VBREQsQUFDWSwyQkFEWixBQUNZO1VBRFosQUFDK0IsaUJBRC9CLEFBQytCLEFBQ3RDOzs2QkFDRSxBQUFDO2NBQUQsQUFDUSxBQUNOO21CQUZGLEFBR0U7aUJBSEYsQUFHVyxBQUNUO2VBQU8sRUFBRSxPQUpYLEFBSVMsQUFBUzs7b0JBSmxCO3NCQUFBLEFBTUU7QUFORjtBQUNFLE9BREYsa0JBTUUsQUFBQztpQkFBRCxBQUNXLEFBQ1Q7MkJBRkYsQUFFcUI7O29CQUZyQjtzQkFQSixBQUNFLEFBTUUsQUFNTDtBQU5LO0FBQ0U7Ozs7O0FBUVYsQSxBQW5COEI7O2tCQW1COUIsQUFBZSIsImZpbGUiOiJDb250cmlidXRlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiRDovUmVhY3RfYW5kX0ZpbmFsX1lfUC9GaW5hbF9WZXIifQ==