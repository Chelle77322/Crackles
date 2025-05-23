(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["crackles-recipe-book"] = factory(require("vue"));
	else
		root["crackles-recipe-book"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__274__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=54477c18

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Nav = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Nav");
  var _component_router_view = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("router-view");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_Nav), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("main", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_view)])], 64);
}
;// ./src/App.vue?vue&type=template&id=54477c18

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Nav.vue?vue&type=template&id=f50aef16

function Navvue_type_template_id_f50aef16_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("router-link");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("nav", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
    to: "/"
  }, {
    "default": (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(function () {
      return _cache[0] || (_cache[0] = [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Ultimate Crackles")]);
    }),
    _: 1
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", null, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.routes, function (route) {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("li", {
      key: route.path
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
      to: route.to,
      "class": (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({
        active: $setup.isActive(route.to)
      })
    }, {
      "default": (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(function () {
        return [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(route.text), 1)];
      }),
      _: 2
    }, 1032, ["to", "class"])]);
  }), 128))])]);
}
;// ./src/components/Nav.vue?vue&type=template&id=f50aef16

;// ./node_modules/vue-router/dist/vue-router.esm.js
/*!
  * vue-router v4.0.0-alpha.10
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */


const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const PolySymbol = (name) => 
// vr = vue router
hasSymbol
    ? Symbol( '[vue-router]: ' + name )
    : ( '[vue-router]: ' ) + name;
// rvlm = Router View Location Matched
const matchedRouteKey = PolySymbol( 'router view location matched' );
// rvd = Router View Depth
const viewDepthKey = PolySymbol( 'router view depth' );
// r = router
const routerKey = PolySymbol( 'router' );
// rt = route location
const routeLocationKey = PolySymbol( 'route location' );

const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    const searchPos = location.indexOf('?');
    const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = path != null ? path : location;
    // empty path means a relative query or hash `?foo=f`, `#thing`
    if (!path) {
        path = currentLocation + path;
    }
    else if (path[0] !== '/') {
        // relative to current location. Currently we only support simple relative
        // but no `..`, `.`, or complex like `../.././..`. We will always leave the
        // leading slash so we can safely append path
        path = currentLocation.replace(/[^\/]*$/, '') + path;
    }
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    let query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || pathname.toLowerCase().indexOf(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a first {@link RouteLocation}
 * @param b second {@link RouteLocation}
 */
function isSameRouteLocation(a, b) {
    let aLastIndex = a.matched.length - 1;
    let bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameLocationObject(a.params, b.params) &&
        isSameLocationObject(a.query, b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a first {@link RouteRecord}
 * @param b second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameLocationObject(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (let key in a) {
        if (!isSameLocationObjectValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameLocationObjectValue(a, b) {
    return Array.isArray(a)
        ? isEquivalentArray(a, b)
        : Array.isArray(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a array of values
 * @param b array of values or a single value
 */
function isEquivalentArray(a, b) {
    return Array.isArray(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */
const START_PATH = '';
const START = {
    fullPath: START_PATH,
};
// Generic utils
function normalizeHistoryLocation(location) {
    return {
        // to avoid doing a typeof or in that is quite long
        fullPath: location.fullPath || location,
    };
}
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}

function warn(msg, ...args) {
    console.warn('[Vue Router warn]: ' + msg, ...args);
}

/**
 * `id`s can accept pretty much any characters, including CSS combinators like >
 * or ~. It's still possible to retrieve elements using
 * `document.getElementById('~')` but it needs to be escaped when using
 * `document.querySelector('#\\~')` for it to be valid. The only requirements
 * for `id`s are them to be unique on the page and to not be empty (`id=""`).
 * Because of that, when passing an `id` selector, it shouldn't have any other
 * selector attached to it (like a class or an attribute) because it wouldn't
 * have any effect anyway. We are therefore considering any selector starting
 * with a `#` to be an `id` selector so we can directly use `getElementById`
 * instead of `querySelector`, allowing users to write simpler selectors like:
 * `#1-thing` or `#with~symbols` without having to manually escape them to valid
 * CSS selectors: `#\31 -thing` and `#with\\~symbols`.
 *
 * - More information about  the topic can be found at
 *   https://mathiasbynens.be/notes/html5-id-class.
 * - Practical example: https://mathiasbynens.be/demo/html5-id
 */
const startsWithHashRE = /^#/;
function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        x: elRect.left - docRect.left - (offset.x || 0),
        y: elRect.top - docRect.top - (offset.y || 0),
    };
}
const computeScrollPosition = () => ({
    x: window.pageXOffset,
    y: window.pageYOffset,
});
function scrollToPosition(position) {
    let normalizedPosition;
    if ('selector' in position) {
        const el = startsWithHashRE.test(position.selector)
            ? document.getElementById(position.selector.slice(1))
            : document.querySelector(position.selector);
        if (!el) {
            
                warn(`Couldn't find element with selector "${position.selector}"`);
            return;
        }
        normalizedPosition = getElementPosition(el, position.offset || {});
    }
    else {
        normalizedPosition = position;
    }
    window.scrollTo(normalizedPosition.x || 0, normalizedPosition.y || 0);
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    return scrollPositions.get(key);
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<T> {
//   compute(): T
//   scroll(position: T): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

/**
 * Creates a normalized history location from a window.location object
 * @param location
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash based url
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        // prepend the starting slash to hash so the url starts with /#
        let pathFromHash = hash.slice(1);
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return normalizeHistoryLocation(stripBase(pathFromHash, ''));
    }
    const path = stripBase(pathname, base);
    return normalizeHistoryLocation(path + search + hash);
}
function useHistoryListeners(base, historyState, location, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, window.location);
        if (!state)
            return replace(to.fullPath);
        const from = location.value;
        const fromState = historyState.value;
        location.value = to;
        historyState.value = state;
        // ignore the popstate and reset the pauseState
        if (pauseState && pauseState.fullPath === from.fullPath) {
            pauseState = null;
            return;
        }
        const delta = fromState ? state.position - fromState.position : 0;
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(location.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = location.value;
    }
    function listen(callback) {
        // setup the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = () => {
            const index = listeners.indexOf(callback);
            if (index > -1)
                listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState({
            ...history.state,
            scroll: computeScrollPosition(),
        }, '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history } = window;
    // private variables
    let location = {
        value: createCurrentLocation(base, window.location),
    };
    let historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(location.value, {
            back: null,
            current: location.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        const url = base + to.fullPath;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            warn('Error with push/replace State', err);
            // Force the navigation, this also resets the call count
            window.location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const normalized = normalizeHistoryLocation(to);
        const state = {
            ...history.state,
            ...buildState(historyState.value.back, 
            // keep back and forward entries but override current position
            normalized, historyState.value.forward, true),
            ...data,
            position: historyState.value.position,
        };
        changeLocation(normalized, state, true);
        location.value = normalized;
    }
    function push(to, data) {
        const normalized = normalizeHistoryLocation(to);
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = {
            ...history.state,
            forward: normalized,
            scroll: computeScrollPosition(),
        };
        changeLocation(currentState.current, currentState, true);
        const state = {
            ...buildState(location.value, normalized, null),
            position: currentState.position + 1,
            ...data,
        };
        changeLocation(normalized, state, false);
        location.value = normalized;
    }
    return {
        location,
        state: historyState,
        push,
        replace,
    };
}
function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners)
            historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = {
        // it's overridden right after
        // @ts-ignore
        location: '',
        base,
        go,
        ...historyNavigation,
        ...historyListeners,
    };
    Object.defineProperty(routerHistory, 'location', {
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

// TODO: verify base is working for SSR
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location.
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
function createMemoryHistory(base = '') {
    let listeners = [];
    let queue = [START];
    let position = 0;
    function setLocation(location) {
        position++;
        if (position === queue.length) {
            // we are at the end, we can simply append a new entry
            queue.push(location);
        }
        else {
            // we are in the middle, we remove everything from here in the queue
            queue.splice(position);
            queue.push(location);
        }
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop,
        };
        for (let callback of listeners) {
            callback(to, from, info);
        }
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        state: {},
        base,
        replace(to) {
            const toNormalized = normalizeHistoryLocation(to);
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(toNormalized);
        },
        push(to, data) {
            setLocation(normalizeHistoryLocation(to));
        },
        listen(callback) {
            listeners.push(callback);
            return () => {
                const index = listeners.indexOf(callback);
                if (index > -1)
                    listeners.splice(index, 1);
            };
        },
        destroy() {
            listeners = [];
        },
        go(delta, shouldTrigger = true) {
            const from = this.location;
            const direction = 
            // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) {
                triggerListeners(this.location, from, {
                    direction,
                    delta,
                });
            }
        },
    };
    Object.defineProperty(routerHistory, 'location', {
        get: () => queue[position],
    });
    return routerHistory;
}

function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    return createWebHistory(location.host ? normalizeBase(base) + '/#' : '#');
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query keys and values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryProperty(text) {
    return commonEncode(text)
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(EQUAL_RE, '%3D')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
         warn(`Error decoding "${text}". Using original value`);
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        let [key, rawValue] = searchParams[i].split('=');
        key = decode(key);
        // avoid decoding null
        let value = rawValue == null ? null : decode(rawValue);
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!Array.isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        if (search.length)
            search += '&';
        const value = query[key];
        key = encodeQueryProperty(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined)
                search += key;
            continue;
        }
        // keep null values
        let values = Array.isArray(value)
            ? value.map(v => v && encodeQueryProperty(v))
            : [value && encodeQueryProperty(value)];
        for (let i = 0; i < values.length; i++) {
            // only append & with i > 0
            search += (i ? '&' : '') + key;
            if (values[i] != null)
                search += ('=' + values[i]);
        }
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (let key in query) {
        let value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = Array.isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

var NavigationFailureType;
(function (NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["cancelled"] = 3] = "cancelled";
    NavigationFailureType[NavigationFailureType["aborted"] = 2] = "aborted";
    NavigationFailureType[NavigationFailureType["duplicated"] = 4] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [0 /* MATCHER_NOT_FOUND */]({ location, currentLocation }) {
        return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
    },
    [1 /* NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [2 /* NAVIGATION_ABORTED */]({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [3 /* NAVIGATION_CANCELLED */]({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [4 /* NAVIGATION_DUPLICATED */]({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    },
};
function createRouterError(type, params) {
    {
        return Object.assign(new Error(ErrorTypeMessages[type](params)), { type }, params);
    }
}
const propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
    if (typeof to === 'string')
        return to;
    if ('path' in to)
        return to.path;
    const location = {};
    for (const key of propertiesToLog) {
        if (key in to)
            location[key] = to[key];
    }
    return JSON.stringify(location, null, 2);
}

// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = {
        ...BASE_PATH_PARSER_OPTIONS,
        ...extraOptions,
    };
    // the amount of scores is the same as the length of segments except for the root segment "/"
    let score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub segment /:a-other-:b
            let subSegmentScore = 40 /* Segment */ +
                (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
            if (token.type === 0 /* Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* Static */;
            }
            else if (token.type === 1 /* Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern = optional ? `(?:/${subPattern})` : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || path[path.length - 1] !== '/')
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (Array.isArray(param) && !repeatable)
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = Array.isArray(param) ? param.join('/') : param;
                    if (!text) {
                        // do not append a slash on the next iteration
                        if (optional)
                            avoidDuplicatedSlash = true;
                        else
                            throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        return path;
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}

const ROOT_TOKEN = {
    type: 0 /* Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    // remove the leading slash
    if (path[0] !== '/')
        throw new Error('A non-empty path must start with "/"');
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* Static */) {
            segment.push({
                type: 0 /* Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* Param */ ||
            state === 2 /* ParamRegExp */ ||
            state === 3 /* ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* ParamRegExp */) {
            previousState = state;
            state = 4 /* EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* Param */:
                if (char === '(') {
                    state = 2 /* ParamRegExp */;
                    customRe = '';
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* ParamRegExp */:
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = {
        ...parser,
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    };
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

let noop = () => { };
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        let mainNormalizedRecord = normalizeRouteRecord(record);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push({
                    ...mainNormalizedRecord,
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                });
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            let { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                let parentPath = parent.record.path;
                let connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            // create the object before hand so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if ( parent && path[0] === '/')
                checkMissingParamsInAbsolutePath(matcher, parent);
            // if we are an alias we must tell the original record that we exist
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                {
                    checkSameParams(originalRecord, matcher);
                }
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
            }
            // only non redirect records have children
            if ('children' in mainNormalizedRecord) {
                let children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other alias (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        }
        else {
            let index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name)
                    matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        // console.log('i is', { i })
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0)
            i++;
        // console.log('END i is', { i })
        // while (i < matchers.length && matcher.score <= matchers[i].score) i++
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    /**
     * Resolves a location. Gives access to the route record that corresponds to the actual path as well as filling the corresponding params objects
     *
     * @param location - MatcherLocationRaw to resolve to a url
     * @param currentLocation - MatcherLocation of the current location
     */
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(0 /* MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = {
                ...paramsFromLocation(currentLocation.params, matcher.keys.map(k => k.name)),
                ...location.params,
            };
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            if ( path[0] !== '/') {
                warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next.`);
            }
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // TODO: dev warning of unused params if provided
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(0 /* MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = { ...currentLocation.params, ...location.params };
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    let newParams = {};
    for (let key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Transforms the `redirect` option into a `beforeEnter`
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    const commonInitialValues = {
        path: record.path,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        components: {},
    };
    if ('redirect' in record) {
        return {
            ...commonInitialValues,
            redirect: record.redirect,
        };
    }
    else {
        return {
            ...commonInitialValues,
            beforeEnter: record.beforeEnter,
            props: record.props || false,
            children: record.children || [],
            instances: {},
            leaveGuards: [],
            updateGuards: [],
            components: 'components' in record
                ? record.components
                : { default: record.component },
        };
    }
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => ({
        ...meta,
        ...record.meta,
    }), {});
}
function mergeOptions(defaults, partialOptions) {
    let options = {};
    for (let key in defaults) {
        options[key] =
            key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}
function isSameParam(a, b) {
    return (a.name === b.name &&
        a.optional === b.optional &&
        a.repeatable === b.repeatable);
}
function checkSameParams(a, b) {
    for (let key of a.keys) {
        if (!b.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
    for (let key of b.keys) {
        if (!a.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (let key of parent.keys) {
        if (!record.keys.find(isSameParam.bind(null, key)))
            return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}

/**
 * Add a navigation guard that triggers whenever the current location is
 * left. Similarly to {@link beforeRouteLeave}, it has access to the
 * component instance as `this`.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
function onBeforeRouteLeave(leaveGuard) {
    const instance = getCurrentInstance();
    if (!instance) {
        
            warn$1('onBeforeRouteLeave must be called at the top of a setup function');
        return;
    }
    const activeRecord = inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
        
            warn$1('onBeforeRouteLeave must be called at the top of a setup function');
        return;
    }
    activeRecord.leaveGuards.push(
    // @ts-ignore do we even want to allow that? Passing the context in a composition api hook doesn't make sense
    leaveGuard.bind(instance.proxy));
}
/**
 * Add a navigation guard that triggers whenever the current location is
 * updated. Similarly to {@link beforeRouteUpdate}, it has access to the
 * component instance as `this`.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
function onBeforeRouteUpdate(updateGuard) {
    const instance = getCurrentInstance();
    if (!instance) {
        
            warn$1('onBeforeRouteUpdate must be called at the top of a setup function');
        return;
    }
    const activeRecord = inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
        
            warn$1('onBeforeRouteUpdate must be called at the top of a setup function');
        return;
    }
    activeRecord.updateGuards.push(
    // @ts-ignore do we even want to allow that? Passing the context in a composition api hook doesn't make sense
    updateGuard.bind(instance.proxy));
}
function guardToPromiseFn(guard, to, from, instance) {
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false)
                reject(createRouterError(2 /* NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(1 /* NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                // TODO: call the in component enter callbacks. Maybe somewhere else
                // record && record.enterCallbacks.push(valid)
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        Promise.resolve(guard.call(instance, to, from,  canOnlyBeCalledOnce(next, to, from) )).catch(err => reject(err));
    });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function () {
        if (called++ === 1)
            warn$1(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        if (called === 1)
            next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        for (const name in record.components) {
            const rawComponent = record.components[name];
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                let options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard &&
                    guards.push(guardToPromiseFn(guard, to, from, record.instances[name]));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if ( !('catch' in componentPromise)) {
                    warn$1(`Component "${name}" at record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                    componentPromise = Promise.resolve(componentPromise);
                }
                else {
                    componentPromise = componentPromise.catch(() => null);
                }
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" for the following record with path "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    record.components[name] = resolvedComponent;
                    // @ts-ignore: the options types are not propagated to Component
                    const guard = resolvedComponent[guardType];
                    return (guard &&
                        guardToPromiseFn(guard, to, from, record.instances[name])());
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(routerKey);
    const currentRoute = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(routeLocationKey);
    const route = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => router.resolve((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(props.to)));
    const activeRecordIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
        let { matched } = route.value;
        let { length } = matched;
        const routeMatched = matched[length - 1];
        let currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        let parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the have the same path, this link is referring to the empty child
            // are we currently are on a different child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameLocationObject(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e))
            return router[(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(props.replace) ? 'replace' : 'push']((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(props.to));
        return Promise.resolve();
    }
    return {
        route,
        href: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    name: 'RouterLink',
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
    },
    setup(props, { slots, attrs }) {
        const link = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)(useLink(props));
        const { options } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(routerKey);
        const elClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)('a', {
                    'aria-current': link.isExactActive ? 'page' : null,
                    onClick: link.navigate,
                    href: link.href,
                    ...attrs,
                    class: elClass.value,
                }, children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const RouterLink = (/* unused pure expression or super */ null && (RouterLinkImpl));
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-ignore getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-ignore getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (let key in inner) {
        let innerValue = inner[key];
        let outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!Array.isArray(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
let getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    name: 'RouterView',
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    setup(props, { attrs, slots }) {
        const realRoute = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(routeLocationKey);
        const route = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => props.route || realRoute);
        const depth = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(viewDepthKey, 0);
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(viewDepthKey, depth + 1);
        const matchedRoute = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => route.value.matched[depth]);
        const ViewComponent = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => matchedRoute.value && matchedRoute.value.components[props.name]);
        const propsData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
            // propsData only gets called if ViewComponent.value exists and it depends
            // on matchedRoute.value
            const { props } = matchedRoute.value;
            if (!props)
                return {};
            if (props === true)
                return route.value.params;
            return typeof props === 'object' ? props : props(route.value);
        });
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(matchedRouteKey, matchedRoute);
        const viewRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
        function onVnodeMounted() {
            // if we mount, there is a matched record
            matchedRoute.value.instances[props.name] = viewRef.value;
            // TODO: trigger beforeRouteEnter hooks
            // TODO: watch name to update the instance record
        }
        return () => {
            // we nee the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentMatched = matchedRoute.value;
            const currentName = props.name;
            function onVnodeUnmounted() {
                if (currentMatched) {
                    // remove the instance reference to prevent leak
                    currentMatched.instances[currentName] = null;
                }
            }
            let Component = ViewComponent.value;
            const componentProps = {
                // only compute props if there is a matched record
                ...(Component && propsData.value),
                ...attrs,
                onVnodeMounted,
                onVnodeUnmounted,
                ref: viewRef,
            };
            // NOTE: we could also not render if there is no route match
            const children = slots.default && slots.default({ Component, props: componentProps });
            return children
                ? children
                : Component
                    ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(Component, componentProps)
                    : null;
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const RouterView = (/* unused pure expression or super */ null && (RouterViewImpl));

function applyRouterPlugin(app, router) {
    app.component('RouterLink', RouterLink);
    app.component('RouterView', RouterView);
    // TODO: add tests
    app.config.globalProperties.$router = router;
    Object.defineProperty(app.config.globalProperties, '$route', {
        get: () => router.currentRoute.value,
    });
    // this initial navigation is only necessary on client, on server it doesn't
    // make sense because it will create an extra unnecessary navigation and could
    // lead to problems
    if (isBrowser &&
        // @ts-ignore: used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !router._started &&
        router.currentRoute.value === START_LOCATION_NORMALIZED) {
        // @ts-ignore: see above
        router._started = true;
        router.push(router.history.location.fullPath).catch(err => {
            warn('Unexpected error when starting the router:', err);
        });
    }
    const reactiveRoute = {};
    for (let key in START_LOCATION_NORMALIZED) {
        // @ts-ignore: the key matches
        reactiveRoute[key] = computed(() => router.currentRoute.value[key]);
    }
    app.provide(routerKey, router);
    app.provide(routeLocationKey, reactive(reactiveRoute));
}

/**
 * Create a Router instance that can be used on a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    let parseQuery$1 = options.parseQuery || parseQuery;
    let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    let { scrollBehavior } = options;
    let routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
            record = parentOrRoute;
        }
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        let recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) {
            matcher.removeRoute(recordMatcher);
        }
        else {
            warn(`Cannot remove non-existent route "${String(name)}"`);
        }
    }
    function getRoutes() {
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        currentLocation = currentLocation || currentRoute.value;
        if (typeof rawLocation === 'string') {
            let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            let matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            return {
                // fullPath: locationNormalized.fullPath,
                // query: locationNormalized.query,
                // hash: locationNormalized.hash,
                ...locationNormalized,
                ...matchedRoute,
                // path: matchedRoute.path,
                // name: matchedRoute.name,
                // meta: matchedRoute.meta,
                // matched: matchedRoute.matched,
                params: decodeParams(matchedRoute.params),
                redirectedFrom: undefined,
                href: routerHistory.base + locationNormalized.fullPath,
            };
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            if (
                'params' in rawLocation &&
                !('name' in rawLocation) &&
                Object.keys(rawLocation.params).length) {
                warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
            }
            matcherLocation = {
                ...rawLocation,
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            };
        }
        else {
            matcherLocation = {
                ...rawLocation,
                params: encodeParams(rawLocation.params),
            };
        }
        let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = encodeHash(rawLocation.hash || '');
        if ( hash && hash[0] !== '#') {
            warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
        }
        // put back the unencoded params as given by the user (avoid the cost of decoding them)
        matchedRoute.params =
            'params' in rawLocation
                ? normalizeParams(rawLocation.params)
                : decodeParams(matchedRoute.params);
        const fullPath = stringifyURL(stringifyQuery$1, {
            ...rawLocation,
            hash,
            path: matchedRoute.path,
        });
        return {
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: normalizeQuery(rawLocation.query),
            ...matchedRoute,
            redirectedFrom: undefined,
            href: routerHistory.base + fullPath,
        };
    }
    function locationAsObject(to) {
        return typeof to === 'string' ? { path: to } : to;
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push({ ...locationAsObject(to), replace: true });
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const lastMatched = targetLocation.matched[targetLocation.matched.length - 1];
        if (lastMatched && 'redirect' in lastMatched) {
            const { redirect } = lastMatched;
            // transform it into an object to pass the original RouteLocaleOptions
            let newTargetLocation = locationAsObject(typeof redirect === 'function' ? redirect(targetLocation) : redirect);
            if (
                !('path' in newTargetLocation) &&
                !('name' in newTargetLocation)) {
                warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${targetLocation.fullPath}". A redirect must contain a name or path.`);
                return Promise.reject(new Error('Invalid redirect'));
            }
            return pushWithRedirect({
                // having a path here would be a problem with relative locations but
                // at the same time it doesn't make sense for a redirect to be
                // relative (no name, no path) because it would create an infinite
                // loop. Since newTargetLocation must either have a `path` or a
                // `name`, this will never happen
                ...targetLocation,
                ...newTargetLocation,
                state: data,
                force,
                replace,
            }, 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        }
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(from, targetLocation)) {
            failure = createRouterError(4 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a pus
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => {
            // a more recent navigation took place
            if (pendingLocation !== toLocation) {
                return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                    from,
                    to: toLocation,
                });
            }
            if (error.type === 2 /* NAVIGATION_ABORTED */ ||
                error.type === 1 /* NAVIGATION_GUARD_REDIRECT */) {
                return error;
            }
            // unknown error, rejects
            return triggerError(error);
        })
            .then((failure) => {
            if (failure) {
                if (failure.type === 1 /* NAVIGATION_GUARD_REDIRECT */)
                    // preserve the original redirectedFrom if any
                    return pushWithRedirect(
                    // keep options
                    {
                        ...locationAsObject(failure.to),
                        state: data,
                        force,
                        replace,
                    }, redirectedFrom || toLocation);
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    function navigate(to, from) {
        let guards;
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(from.matched.filter(record => to.matched.indexOf(record) < 0).reverse(), 'beforeRouteLeave', to, from);
        const [leavingRecords, updatingRecords,] = extractChangingRecords(to, from);
        for (const record of leavingRecords) {
            for (const guard of record.leaveGuards) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
        }
        // run the queue of per route beforeRouteLeave guards
        return runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(to.matched.filter(record => from.matched.indexOf(record) > -1), 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                for (const guard of record.updateGuards) {
                    guards.push(guardToPromiseFn(guard, to, from));
                }
            }
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && from.matched.indexOf(record) < 0) {
                    if (Array.isArray(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(
            // the type doesn't matter as we are comparing an object per reference
            to.matched.filter(record => from.matched.indexOf(record) < 0), 'beforeRouteEnter', to, from);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            return runGuardQueue(guards);
        });
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        if (pendingLocation !== toLocation) {
            return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                from,
                to: toLocation,
            });
        }
        const [leavingRecords] = extractChangingRecords(toLocation, from);
        for (const record of leavingRecords) {
            // remove registered guards from removed matched records
            record.leaveGuards = [];
            // free the references
            // TODO: to refactor once keep-alive and transition can be supported
            record.instances = {};
        }
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation, {
                    scroll: isFirstNavigation && state && state.scroll,
                    ...data,
                });
            else
                routerHistory.push(toLocation, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    // attach listener to history to trigger navigations
    routerHistory.listen((to, _from, info) => {
        // TODO: in dev try catch to correctly log the matcher error
        // cannot be a redirect route because it was in history
        const toLocation = resolve(to.fullPath);
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
            saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from)
            .catch((error) => {
            // a more recent navigation took place
            if (pendingLocation !== toLocation) {
                return createRouterError(3 /* NAVIGATION_CANCELLED */, {
                    from,
                    to: toLocation,
                });
            }
            if (error.type === 2 /* NAVIGATION_ABORTED */) {
                return error;
            }
            if (error.type === 1 /* NAVIGATION_GUARD_REDIRECT */) {
                routerHistory.go(-info.delta, false);
                // the error is already handled by router.push we just want to avoid
                // logging the error
                pushWithRedirect(error.to, toLocation).catch(() => {
                    // TODO: in dev show warning, in prod triggerError, same as initial navigation
                });
                // avoid the then branch
                return Promise.reject();
            }
            // TODO: test on different browsers ensure consistent behavior
            routerHistory.go(-info.delta, false);
            // unrecognized error, transfer to the global handler
            return triggerError(error);
        })
            .then((failure) => {
            failure =
                failure ||
                    finalizeNavigation(
                    // after navigation, all matched components are resolved
                    toLocation, from, false);
            // revert the navigation
            if (failure)
                routerHistory.go(-info.delta, false);
            triggerAfterEach(toLocation, from, failure);
        })
            .catch(() => {
            // TODO: same as above
        });
    });
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     * @param error - error to throw
     * @returns the error as a rejected promise
     */
    function triggerError(error) {
        markAsReady(error);
        errorHandlers.list().forEach(handler => handler(error));
        return Promise.reject(error);
    }
    /**
     * Returns a Promise that resolves or reject when the router has finished its
     * initial navigation. This will be automatic on client but requires an
     * explicit `router.push` call on the server. This behavior can change
     * depending on the history implementation used e.g. the defaults history
     * implementation (client only) triggers this automatically but the memory one
     * (should be used on server) doesn't
     */
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    /**
     * Mark the router as ready, resolving the promised returned by isReady(). Can
     * only be called once, otherwise does nothing.
     * @param err - optional error
     */
    function markAsReady(err) {
        if (ready)
            return;
        ready = true;
        readyHandlers
            .list()
            .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
        readyHandlers.reset();
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        let scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return nextTick()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(triggerError);
    }
    function go(delta) {
        return new Promise((resolve, reject) => {
            let removeError = errorHandlers.add(err => {
                removeError();
                removeAfterEach();
                reject(err);
            });
            let removeAfterEach = afterGuards.add((_to, _from, failure) => {
                removeError();
                removeAfterEach();
                resolve(failure);
            });
            routerHistory.go(delta);
        });
    }
    const router = {
        currentRoute,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        history: routerHistory,
        install(app) {
            applyRouterPlugin(app, this);
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    // TODO: could be optimized with one single for loop
    for (const record of from.matched) {
        if (to.matched.indexOf(record) < 0)
            leavingRecords.push(record);
        else
            updatingRecords.push(record);
    }
    for (const record of to.matched) {
        // the type doesn't matter because we are comparing per reference
        if (from.matched.indexOf(record) < 0)
            enteringRecords.push(record);
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

function useRouter() {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(routerKey);
}
function useRoute() {
    return inject(routeLocationKey);
}



;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Nav.vue?vue&type=script&lang=js


/* harmony default export */ const Navvue_type_script_lang_js = ({
  setup: function setup() {
    var routes = [{
      to: "/ingredients",
      text: "Ingredients"
    }, {
      to: "/recipes",
      text: "Recipes"
    }];
    var router = useRouter();
    var activeRoute = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(function () {
      return router.currentRoute.value.path;
    });
    var isActive = function isActive(path) {
      return path === activeRoute.value;
    };
    return {
      isActive: isActive,
      routes: routes
    };
  }
});
;// ./src/components/Nav.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/components/Nav.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Navvue_type_script_lang_js, [['render',Navvue_type_template_id_f50aef16_render]])

/* harmony default export */ const Nav = (__exports__);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ({
  name: "App",
  components: {
    Nav: Nav
  }
});
;// ./src/App.vue?vue&type=script&lang=js
 
;// ./src/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (App_exports_);
;// ./src/main.js



(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createApp)(App).mount('#app');
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=crackles-recipe-book.umd.js.map