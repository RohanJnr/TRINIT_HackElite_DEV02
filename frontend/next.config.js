const removeImports = require('next-remove-imports')({
  options: { restrictedMode: true},
})
module.exports = removeImports()