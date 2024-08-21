(function() {
  "use strict";
  const keys = Object.keys;
  function isBoolean(val) {
    return typeof val === "boolean";
  }
  function isElement(val) {
    return val && typeof val.nodeType === "number";
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject(val) {
    return typeof val === "object" ? val !== null : isFunction(val);
  }
  function isFunction(val) {
    return typeof val === "function";
  }
  function isComponentClass(Component2) {
    const { prototype } = Component2;
    return !!(prototype && prototype.isReactComponent);
  }
  function isArrayLike(obj) {
    return isObject(obj) && typeof obj.length === "number" && typeof obj.nodeType !== "number";
  }
  function forEach(value, fn) {
    if (!value) return;
    for (const key of keys(value)) {
      fn(value[key], key);
    }
  }
  function isRef(maybeRef) {
    return isObject(maybeRef) && "current" in maybeRef;
  }
  const isUnitlessNumber = {
    animationIterationCount: 0,
    borderImageOutset: 0,
    borderImageSlice: 0,
    borderImageWidth: 0,
    boxFlex: 0,
    boxFlexGroup: 0,
    boxOrdinalGroup: 0,
    columnCount: 0,
    columns: 0,
    flex: 0,
    flexGrow: 0,
    flexPositive: 0,
    flexShrink: 0,
    flexNegative: 0,
    flexOrder: 0,
    gridArea: 0,
    gridRow: 0,
    gridRowEnd: 0,
    gridRowSpan: 0,
    gridRowStart: 0,
    gridColumn: 0,
    gridColumnEnd: 0,
    gridColumnSpan: 0,
    gridColumnStart: 0,
    fontWeight: 0,
    lineClamp: 0,
    lineHeight: 0,
    opacity: 0,
    order: 0,
    orphans: 0,
    tabSize: 0,
    widows: 0,
    zIndex: 0,
    zoom: 0,
    // SVG-related properties
    fillOpacity: 0,
    floodOpacity: 0,
    stopOpacity: 0,
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeMiterlimit: 0,
    strokeOpacity: 0,
    strokeWidth: 0
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  const prefixes = ["Webkit", "ms", "Moz", "O"];
  keys(isUnitlessNumber).forEach((prop) => {
    prefixes.forEach((prefix) => {
      isUnitlessNumber[prefixKey(prefix, prop)] = 0;
    });
  });
  const jsxDomType = Symbol.for("jsx-dom:type");
  var JsxDomType = /* @__PURE__ */ function(JsxDomType2) {
    JsxDomType2["ShadowRoot"] = "ShadowRoot";
    return JsxDomType2;
  }(JsxDomType || {});
  function ShadowRoot(_ref) {
    let { children, ref, ...attr2 } = _ref;
    return {
      [jsxDomType]: JsxDomType.ShadowRoot,
      ref,
      attr: attr2,
      children
    };
  }
  function isShadowRoot(el) {
    return el != null && el[jsxDomType] === JsxDomType.ShadowRoot;
  }
  const SVGNamespace = "http://www.w3.org/2000/svg";
  const XLinkNamespace = "http://www.w3.org/1999/xlink";
  const XMLNamespace = "http://www.w3.org/XML/1998/namespace";
  function isVisibleChild(value) {
    return !isBoolean(value) && value != null;
  }
  function className(value) {
    if (Array.isArray(value)) {
      return value.map(className).filter(Boolean).join(" ");
    } else if (isObject(value)) {
      if (Symbol.iterator in value) {
        return className(Array.from(value));
      }
      return keys(value).filter((k) => value[k]).join(" ");
    } else if (isVisibleChild(value)) {
      return "" + value;
    } else {
      return "";
    }
  }
  const svg = {
    animate: 0,
    circle: 0,
    clipPath: 0,
    defs: 0,
    desc: 0,
    ellipse: 0,
    feBlend: 0,
    feColorMatrix: 0,
    feComponentTransfer: 0,
    feComposite: 0,
    feConvolveMatrix: 0,
    feDiffuseLighting: 0,
    feDisplacementMap: 0,
    feDistantLight: 0,
    feFlood: 0,
    feFuncA: 0,
    feFuncB: 0,
    feFuncG: 0,
    feFuncR: 0,
    feGaussianBlur: 0,
    feImage: 0,
    feMerge: 0,
    feMergeNode: 0,
    feMorphology: 0,
    feOffset: 0,
    fePointLight: 0,
    feSpecularLighting: 0,
    feSpotLight: 0,
    feTile: 0,
    feTurbulence: 0,
    filter: 0,
    foreignObject: 0,
    g: 0,
    image: 0,
    line: 0,
    linearGradient: 0,
    marker: 0,
    mask: 0,
    metadata: 0,
    path: 0,
    pattern: 0,
    polygon: 0,
    polyline: 0,
    radialGradient: 0,
    rect: 0,
    stop: 0,
    svg: 0,
    switch: 0,
    symbol: 0,
    text: 0,
    textPath: 0,
    tspan: 0,
    use: 0,
    view: 0
  };
  const nonPresentationSVGAttributes = /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
  function Fragment(attr2) {
    const fragment = document.createDocumentFragment();
    appendChild(attr2.children, fragment);
    return fragment;
  }
  class Component {
    constructor(props) {
      this.props = props;
    }
    render() {
      return null;
    }
  }
  function initComponentClass(Class, attr2, children) {
    attr2 = {
      ...attr2,
      children
    };
    const instance = new Class(attr2);
    const node = instance.render();
    if ("ref" in attr2) {
      attachRef(attr2.ref, instance);
    }
    return node;
  }
  function jsx(tag, _ref) {
    let { children, ...attr2 } = _ref;
    if (!attr2.namespaceURI && svg[tag] === 0) {
      attr2 = {
        ...attr2,
        namespaceURI: SVGNamespace
      };
    }
    let node;
    if (isString(tag)) {
      node = attr2.namespaceURI ? document.createElementNS(attr2.namespaceURI, tag) : document.createElement(tag);
      attributes(attr2, node);
      appendChild(children, node);
      if (node instanceof window.HTMLSelectElement && attr2.value != null) {
        if (attr2.multiple === true && Array.isArray(attr2.value)) {
          const values = attr2.value.map((value) => String(value));
          node.querySelectorAll("option").forEach(
            (option) => option.selected = values.includes(option.value)
          );
        } else {
          node.value = attr2.value;
        }
      }
      attachRef(attr2.ref, node);
    } else if (isFunction(tag)) {
      if (isObject(tag.defaultProps)) {
        attr2 = {
          ...tag.defaultProps,
          ...attr2
        };
      }
      node = isComponentClass(tag) ? initComponentClass(tag, attr2, children) : tag({
        ...attr2,
        children
      });
    } else {
      throw new TypeError(`Invalid JSX element type: ${tag}`);
    }
    return node;
  }
  function createElement(tag, attr2) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
      children[_key2 - 2] = arguments[_key2];
    }
    if (isString(attr2) || Array.isArray(attr2)) {
      children.unshift(attr2);
      attr2 = {};
    }
    attr2 = attr2 || {};
    if (attr2.children != null && !children.length) {
      ({ children, ...attr2 } = attr2);
    }
    return jsx(
      tag,
      {
        ...attr2,
        children
      },
      attr2.key
    );
  }
  function attachRef(ref, node) {
    if (isRef(ref)) {
      ref.current = node;
    } else if (isFunction(ref)) {
      ref(node);
    }
  }
  function appendChild(child, node) {
    if (isArrayLike(child)) {
      appendChildren(child, node);
    } else if (isString(child) || isNumber(child)) {
      appendChildToNode(document.createTextNode(child), node);
    } else if (child === null) {
      appendChildToNode(document.createComment(""), node);
    } else if (isElement(child)) {
      appendChildToNode(child, node);
    } else if (isShadowRoot(child)) {
      const shadowRoot = node.attachShadow(child.attr);
      appendChild(child.children, shadowRoot);
      attachRef(child.ref, shadowRoot);
    }
  }
  function appendChildren(children, node) {
    for (const child of [...children]) {
      appendChild(child, node);
    }
    return node;
  }
  function appendChildToNode(child, node) {
    if (node instanceof window.HTMLTemplateElement) {
      node.content.appendChild(child);
    } else {
      node.appendChild(child);
    }
  }
  function normalizeAttribute(s, separator) {
    return s.replace(/[A-Z]/g, (match) => separator + match.toLowerCase());
  }
  function style(node, value) {
    if (value == null || value === false) ;
    else if (Array.isArray(value)) {
      value.forEach((v) => style(node, v));
    } else if (isString(value)) {
      node.setAttribute("style", value);
    } else if (isObject(value)) {
      forEach(value, (val, key) => {
        if (key.indexOf("-") === 0) {
          node.style.setProperty(key, val);
        } else if (isNumber(val) && isUnitlessNumber[key] !== 0) {
          node.style[key] = val + "px";
        } else {
          node.style[key] = val;
        }
      });
    }
  }
  function attribute(key, value, node) {
    switch (key) {
      case "xlinkActuate":
      case "xlinkArcrole":
      case "xlinkHref":
      case "xlinkRole":
      case "xlinkShow":
      case "xlinkTitle":
      case "xlinkType":
        attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
        return;
      case "xmlnsXlink":
        attr(node, normalizeAttribute(key, ":"), value);
        return;
      case "xmlBase":
      case "xmlLang":
      case "xmlSpace":
        attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
        return;
    }
    switch (key) {
      case "htmlFor":
        attr(node, "for", value);
        return;
      case "dataset":
        forEach(value, (dataValue, dataKey) => {
          if (dataValue != null) {
            node.dataset[dataKey] = dataValue;
          }
        });
        return;
      case "innerHTML":
      case "innerText":
      case "textContent":
        if (isVisibleChild(value)) {
          node[key] = value;
        }
        return;
      case "dangerouslySetInnerHTML":
        if (isObject(value)) {
          node.innerHTML = value["__html"];
        }
        return;
      case "value":
        if (value == null || node instanceof window.HTMLSelectElement) {
          return;
        } else if (node instanceof window.HTMLTextAreaElement) {
          node.value = value;
          return;
        }
        break;
      case "spellCheck":
        node.spellcheck = value;
        return;
      case "class":
      case "className":
        if (isFunction(value)) {
          value(node);
        } else {
          attr(node, "class", className(value));
        }
        return;
      case "ref":
      case "namespaceURI":
        return;
      case "style":
        style(node, value);
        return;
      case "on":
      case "onCapture":
        forEach(value, (eventHandler, eventName) => {
          node.addEventListener(eventName, eventHandler, key === "onCapture");
        });
        return;
    }
    if (isFunction(value)) {
      if (key[0] === "o" && key[1] === "n") {
        let attribute2 = key.toLowerCase();
        const useCapture = attribute2.endsWith("capture");
        if (attribute2 === "ondoubleclick") {
          attribute2 = "ondblclick";
        } else if (useCapture && attribute2 === "ondoubleclickcapture") {
          attribute2 = "ondblclickcapture";
        }
        if (!useCapture && node[attribute2] === null) {
          node[attribute2] = value;
        } else if (useCapture) {
          node.addEventListener(
            attribute2.substring(2, attribute2.length - 7),
            value,
            true
          );
        } else {
          let eventName;
          if (attribute2 in window) {
            const standardEventName = attribute2.substring(2);
            eventName = standardEventName;
          } else {
            const customEventName = attribute2[2] + key.slice(3);
            eventName = customEventName;
          }
          node.addEventListener(eventName, value);
        }
      }
    } else if (isObject(value)) {
      node[key] = value;
    } else if (value === true) {
      attr(node, key, "");
    } else if (value !== false && value != null) {
      if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
        attr(node, normalizeAttribute(key, "-"), value);
      } else {
        attr(node, key, value);
      }
    }
  }
  function attr(node, key, value) {
    node.setAttribute(key, value);
  }
  function attrNS(node, namespace, key, value) {
    node.setAttributeNS(namespace, key, value);
  }
  function attributes(attr2, node) {
    for (const key of keys(attr2)) {
      attribute(key, attr2[key], node);
    }
    return node;
  }
  var index = {
    Component,
    PureComponent: Component,
    createElement,
    Fragment,
    ShadowRoot
  };
  const element = /* @__PURE__ */ index.createElement("div", { id: "greeting", class: "alert" }, "Hello World");
  document.body.appendChild(element);
})();
