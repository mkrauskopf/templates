function init() {
  console.log('init() called')
  document.body.insertAdjacentHTML('beforeend', '<p><strong>This is strong text (inserted).</strong></p>')
  return true
}

export { init }
