/**
* Usage - define config object
*
* const config = {
*   el: body,
*     ev: ['copy', 'paste', 'cut', 'drag', 'drop'],
*     fn: function(e) {
*        e.preventDefault()
*     }
*  }
*
* invoke function addEvents(config) pass config object as arg
*/

/**
 * If hasOwnProperty is used as a property name
 * https://stackoverflow.com/questions/11040472/how-to-check-if-object-property-exists-with-a-variable-holding-the-property-name
 * @param {object} cf Pass conf object to test if props exist in conf obj
 */
const propExists = function(cf) {
    return  Object.prototype.hasOwnProperty.call(cf, 'el')
            && Object.prototype.hasOwnProperty.call(cf, 'ev')
            && Object.prototype.hasOwnProperty.call(cf, 'fn')
}

/**
 * Add multiple event handlers
 * @param {object} cf Pass conf object to test if props exists in conf obj
 * @param {HTMLElement} cf.el DOM Element
 * @param {event} cf.ev Type of event, passed in as array
 * @param {function} cf.fn Function
 */
const addEvents = function(cf) {
    if (propExists(cf)) {
        if (Array.isArray(cf.ev)) {
            var i = 0,
                l = cf.ev.length
            for ( ; i < l; i++) {
                cf.el.addEventListener(cf.ev[i], cf.fn, false)
            }
        } else {
            console.error('Provided type is not an array')
        }
    } else {
        console.error("One of the property doesn't exist or property name is wrong in config object")
    }
}
