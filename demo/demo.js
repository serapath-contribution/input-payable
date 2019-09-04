const csjs = require('csjs-inject')
const inputPayable = require('../')

const classes = {
    inputContainer: 'inputContainer',
    inputParam: 'inputParam',
    inputArea: 'inputArea',
    inputField: 'inputField',
    ethIcon: 'ethIcon',
    currency: 'currency'
}

const colors = {
    bodyFont: `'Nunito', sans-serif`,
    inputParamColor: '#2c323c',
    inputParamFontSize: '1.3rem',
    inputParamTextAlign: 'right',
    inputParamPadding: '6px 15px 0 0',
    inputFieldTextAlign: 'center',
    inputFieldColor: '#2c323c',
    inputFieldPlaceholderColor: '#8d8d8d',
    inputFieldBackgroundColor: 'transparent',
    inputFieldBorder: '1px solid #ccc',
    inputFieldBorderRadius: '2px',
    inputFieldFontSize: '1.4rem',
    ethIconFontSize: '1.6rem',
    ethIconColor: '#3c3c3d',
}

document.body.innerHTML = `<style>
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
html {
    font-size: 62.5%;
}
body {
    font-size: 1.6rem;
  }
.inputContainer {
    display: grid;
    grid-template: auto / 100px auto;
    margin-bottom: 15px;
  }
  .inputParam {
    padding: ${colors.inputParamPadding};
    color: ${colors.inputParamColor};
    font-size: ${colors.inputParamFontSize};
    text-align: ${colors.inputParamTextAlign};
  }
  .inputArea {
    display: grid;
    grid-template: auto / auto auto 30px;
    grid-column-gap: 5px;
  }
  .inputField {
    background-color: ${colors.inputFieldBackgroundColor};
    border-radius: 2px;
    color: ${colors.inputFieldColor};
    border: ${colors.inputFieldBorder};
    text-align: center;
    font-family: ${colors.bodyFont};
    font-size: ${colors.inputFieldFontSize};
    padding: 5px;
    width: calc(100% - 10px);
  }
  .inputField::placeholder {
    color: ${colors.inputFieldPlaceholderColor};
  }
  .currency {
    font-family: ${colors.bodyFont};
    border-radius: ${colors.currencyBorderRadius};
    border: ${colors.currencyBorder};
    padding: 5px 7px;
    color: ${colors.currencyColor};
    background-color: ${colors.currencyBackgroundColor};
    font-size: ${colors.currencyFontSize};
  }
  
  .ethIcon {
    color: ${colors.ethIconColor};
    font-size: ${colors.ethIconFontSize};
    text-align: center;
    align-self: center;
  }
</style>`

const el = inputPayable({ theme: { classes }, label: 'label'})

document.body.appendChild(el)