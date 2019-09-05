const bel = require("bel")

module.exports = inputPayable

function inputPayable ({ theme: { classes: css }, label }) {

  const input = bel`
    <div class=${css.inputContainer}>
      <label class=${css.inputParam} title="data type: ${label}">value</label>
      <div class=${css.inputArea}>
        <input class=${css.inputField} type="number" placeholder="999" oninput=${validate}>
        ${currencySelector(css)}
        <div class=${css.ethIcon} title="Select amount you want to send with this function!"><i class="fab fa-ethereum"></i></div>
      </div>
    </div>`

  return input
  function validate (e) {
    // @TODO
  }

  function currencySelector (css) {
    var button = bel`
      <select class=${css.currency}>
        <option value="wei">wei</option>
        <option value="k-wei">k-wei</option>
        <option value="m-wei">m-wei</option>
        <option value="g-wei">g-wei</option>
        <option value="micro">micro</option>
        <option value="milli">milli</option>
        <option value="ether">ether</option>
        <option value="k-ether">k-ether</option>
        <option value="m-ether">m-ether</option>
        <option value="g-ether">g-ether</option>
        <option value="t-ether">t-ether</option>
      </select>`
    return button
  }
}

