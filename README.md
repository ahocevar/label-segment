# label-segment

Find suitable segments of a path for its label text.

## Getting started

### The ES2015 way

To add the dependency to your project, run

    npm install --save label-segment

To use in your code, type

```js
import labelSegment from 'label-segment';
```

### The vanilla JavaScript way

Include the following script tag in your HTML:

```html
<script src="http://unpkg.com/label-segment/dist/label-segment.js"></script>
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### labelSegment

Considering a given path, maximum angle and label length, this function
returns a straight enough subset of the path in correct direction for an
upright label.

Example:

```js
var path = [[20, 33], [40, 31], [60, 30], [80, 31], [100, 33]];
var textLength = 50; // Text has a width of 50 pixels
var textPath = labelSegment(path, Math.PI / 8, 50);
// Now render text along textPath
```

**Parameters**

-   `path` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>>** Path represented by coordinate pairs.
-   `maxAngle` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Maximum angle in radians for a suitable segment.
-   `labelLength` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Required segment length for the label.

Returns **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>> | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Path to draw the label along, in the
correct direction for an upright label. Returns `undefined` when no suitable
subset of the given `path` was found.