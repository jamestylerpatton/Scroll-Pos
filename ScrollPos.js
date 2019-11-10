const ScrollPos = (elemSelector, callback, userOptions = {}) => {
  /**
   * Set Element
   */
  let elem
  if (elemSelector instanceof HTMLElement) {
    elem = elemSelector
  } else if (typeof elemSelector === 'string') {
    elem = document.querySelector(elemSelector)
  }

  if (!elem) {
    console.error('elem is not found');
    return;
  }

  /**
   * Set Options
   */
  let defaults = {
    // top or bottom of window hits top of element
    start: 'bottom', // top, bottom
    // top or bottom of window hits bottom of element
    end: 'bottom' // top, bottom
  }
  let options = Object.assign({}, defaults, userOptions)

  /**
   * Set Vars
   */
  let scrollTop, windowHeight, elemTop, elemHeight, startFrom, endTo, value

  /**
   * Calculate percentage
   */
  const getPercentage = () => {
    // Get inital vars
    scrollTop = window.pageYOffset
    windowHeight = window.innerHeight
    elemTop = elem.getBoundingClientRect().top + scrollTop
    elemHeight = elem.offsetHeight

    // Set offset values
    startFrom = options.start === 'top' ? scrollTop : scrollTop + windowHeight
    endTo = options.end === 'bottom' ? elemHeight - windowHeight : elemHeight

    // Calculate and return value
    value = (startFrom - elemTop) / endTo
    return Math.min(1, Math.max(0, value))
  }

  window.addEventListener('scroll', () => {
    callback(getPercentage())
  })

  callback(getPercentage())

  return
}

export { ScrollPos }
