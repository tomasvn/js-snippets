/**
 * Set overflow class
 * @param {Object} obj Config object
 * @param {Boolean} obj.isEnabled Add or remove class no-overflow based on TRUE/FALSE value
 * @param {HTMLElement} obj.elem Grab DOM element where we want to set the class
 *
 * Example Usage: setOverflow({isEnabled: true, elem: document.body}) -> this will set a class of no-overflow on body element
 */
 
const setOverflow = function(obj) {
    if (obj.isEnabled) {
        obj.elem.classList.add('no-overflow');
    } else {
        obj.elem.classList.remove('no-overflow');
    }
}
