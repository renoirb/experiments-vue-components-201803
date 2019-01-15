/**
 * Cool things found in Vue.js source.
 *
 * It's simple copy-pasta for now COPIED VERBATIM from vue.runtime.js from v2.x source.
 *
 * {@link https://github.com/vuejs/vue/blob/2.6/dist/vue.runtime.js}
 * =======================================================
 */

/**
 * Helper that recursively merges two data objects together.
 */
export function mergeData(to, from) {
  if (!from) {
    return to
  }
  var key, toVal, fromVal
  var keys = Object.keys(from)
  for (var i = 0; i < keys.length; i++) {
    key = keys[i]
    toVal = to[key]
    fromVal = from[key]
    if (!hasOwn(to, key)) {
      set(to, key, fromVal)
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

export function isUndef(v) {
  return v === undefined || v === null
}

export function isDef(v) {
  return v !== undefined && v !== null
}

export function isTrue(v) {
  return v === true
}

export function isFalse(v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString

export function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */

export function isValidArrayIndex(val) {
  var n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */

export function toString(val) {
  return val == null
    ? ''
    : typeof val === 'object'
    ? JSON.stringify(val, null, 2)
    : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */

export function toNumber(val) {
  var n = parseFloat(val)
  return isNaN(n) ? val : n
}
