var $dveBS$mersennetwister = require("mersenne-twister");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $d95fcd07ae2947b6$export$2e2bcd8739ae039; });

console.log({
    MersenneTwister: $dveBS$mersennetwister
});
var $896594a561c66733$exports = {};
function $896594a561c66733$var$newPaper(diameter, color) {
    var container = document.createElement('div');
    container.style.borderRadius = '50px';
    container.style.overflow = 'hidden';
    container.style.padding = '0px';
    container.style.margin = '0px';
    container.style.width = '' + diameter + 'px';
    container.style.height = '' + diameter + 'px';
    container.style.display = 'inline-block';
    container.style.background = color;
    return {
        container: container
    };
}
$896594a561c66733$exports = $896594a561c66733$var$newPaper;


var $9a93e6d9d162961b$exports = {};
$9a93e6d9d162961b$exports = [
    '#01888C',
    '#FC7500',
    '#034F5D',
    '#F73F01',
    '#FC1960',
    '#C7144C',
    '#F3C100',
    '#1598F2',
    '#2465E1',
    '#F19E02'
];


var $d95fcd07ae2947b6$var$shapeCount = 4;
var $d95fcd07ae2947b6$var$svgns = 'http://www.w3.org/2000/svg';
var $d95fcd07ae2947b6$export$2e2bcd8739ae039 = $d95fcd07ae2947b6$var$generateIdenticon;
var $d95fcd07ae2947b6$var$generator;
function $d95fcd07ae2947b6$var$generateIdenticon(diameter, seed) {
    $d95fcd07ae2947b6$var$generator = new $dveBS$mersennetwister(seed);
    var remainingColors = $d95fcd07ae2947b6$var$hueShift($9a93e6d9d162961b$exports.slice(), $d95fcd07ae2947b6$var$generator);
    var elements = $896594a561c66733$exports(diameter, $d95fcd07ae2947b6$var$genColor(remainingColors));
    var container = elements.container;
    var svg = document.createElementNS($d95fcd07ae2947b6$var$svgns, 'svg');
    svg.setAttributeNS(null, 'x', '0');
    svg.setAttributeNS(null, 'y', '0');
    svg.setAttributeNS(null, 'width', diameter);
    svg.setAttributeNS(null, 'height', diameter);
    container.appendChild(svg);
    for(var i = 0; i < $d95fcd07ae2947b6$var$shapeCount - 1; i++)$d95fcd07ae2947b6$var$genShape(remainingColors, diameter, i, $d95fcd07ae2947b6$var$shapeCount - 1, svg);
    return container;
}
function $d95fcd07ae2947b6$var$genShape(remainingColors, diameter, i, total, svg) {
    var center = diameter / 2;
    var shape = document.createElementNS($d95fcd07ae2947b6$var$svgns, 'rect');
    shape.setAttributeNS(null, 'x', '0');
    shape.setAttributeNS(null, 'y', '0');
    shape.setAttributeNS(null, 'width', diameter);
    shape.setAttributeNS(null, 'height', diameter);
    var firstRot = $d95fcd07ae2947b6$var$generator.random();
    var angle = Math.PI * 2 * firstRot;
    var velocity = diameter / total * $d95fcd07ae2947b6$var$generator.random() + i * diameter / total;
    var tx = Math.cos(angle) * velocity;
    var ty = Math.sin(angle) * velocity;
    var translate = 'translate(' + tx + ' ' + ty + ')';
    // Third random is a shape rotation on top of all of that.
    var secondRot = $d95fcd07ae2947b6$var$generator.random();
    var rot = firstRot * 360 + secondRot * 180;
    var rotate = 'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')';
    var transform = translate + ' ' + rotate;
    shape.setAttributeNS(null, 'transform', transform);
    var fill = $d95fcd07ae2947b6$var$genColor(remainingColors);
    shape.setAttributeNS(null, 'fill', fill);
    svg.appendChild(shape);
}
function $d95fcd07ae2947b6$var$genColor(colors) {
    var rand = $d95fcd07ae2947b6$var$generator.random();
    var idx = Math.floor(colors.length * $d95fcd07ae2947b6$var$generator.random());
    var color = colors.splice(idx, 1)[0];
    return color;
}
var $d95fcd07ae2947b6$var$wobble = 30;
function $d95fcd07ae2947b6$var$hueShift(colors, generator) {
    var amount = generator.random() * 30 - $d95fcd07ae2947b6$var$wobble / 2;
    var rotate = function(hex) {
        return $d95fcd07ae2947b6$var$colorRotate(hex, amount);
    };
    return colors.map(rotate);
}
function $d95fcd07ae2947b6$var$colorRotate(hex, degrees) {
    var hsl = $d95fcd07ae2947b6$var$hexToHSL(hex);
    var hue = hsl.h;
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.h = hue;
    return $d95fcd07ae2947b6$var$HSLToHex(hsl);
}
function $d95fcd07ae2947b6$var$hexToHSL(hex) {
    // Convert hex to RGB first
    var r = "0x" + hex[1] + hex[2];
    var g = "0x" + hex[3] + hex[4];
    var b = "0x" + hex[5] + hex[6];
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    var cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r) h = (g - b) / delta % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return {
        h: h,
        s: s,
        l: l
    };
}
function $d95fcd07ae2947b6$var$HSLToHex(hsl) {
    var h = hsl.h, s = hsl.s, l = hsl.l;
    s /= 100;
    l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
    // Prepend 0s, if necessary
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
}


//# sourceMappingURL=main.js.map
