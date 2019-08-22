/**
 * Set overflow class
 * Example Usage: setOverflow({isEnabled: true, elem: document.body}) -> this will set a class of no-overflow on body element
 */
 
/**
 * If hasOwnProperty is used as a property name
 * https://stackoverflow.com/questions/11040472/how-to-check-if-object-property-exists-with-a-variable-holding-the-property-name
 * @param {object} obj Pass conf object to test if props exist in conf obj
 */
const propExists = function(obj) {
    return  Object.prototype.hasOwnProperty.call(obj, 'isEnabled') && Object.prototype.hasOwnProperty.call(obj, 'elem')
}

/**
 * Set overflow class
 * @param {Object} obj Config object
 * @param {Boolean} obj.isEnabled Add or remove class no-overflow based on TRUE/FALSE value
 * @param {HTMLElement} obj.elem Grab DOM element where we want to set the class
 */
const setOverflow = function(obj) {
    if (propExists(obj)) {
       obj.isEnabled ? obj.elem.classList.add('no-overflow') : obj.elem.classList.remove('no-overflow');
    } else {
       throw new Error("Property doesn't exist, config object have these properties - isEnabled and elem");
    }
}
