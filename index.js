import linelabel from 'linelabel';

function segmentSort(a, b) {
  return b.length - a.length;
}

/**
 * Considering a given path, maximum angle and label length, this function
 * returns a straight enough subset of the path in correct direction for an
 * upright label.
 *
 * Example:
 * ```js
 * var path = [[20, 33], [40, 31], [60, 30], [80, 31], [100, 33]];
 * var textLength = 50; // Text has a width of 50 pixels
 * var textPath = labelSegment(path, Math.PI / 8, 50);
 * // Now render text along textPath
 * ```
 *
 * @param {Array<Array<number>>} path Path represented by coordinate pairs.
 * @param {number} maxAngle Maximum angle in radians for a suitable segment.
 * @param {number} labelLength Required segment length for the label.
 * @return {Array<Array<number>>|undefined} Path to draw the label along, in the
 * correct direction for an upright label. Returns `undefined` when no suitable
 * subset of the given `path` was found.
 */
export default function labelSegment(path, maxAngle, labelLength) {
  var segments = linelabel(path, maxAngle).sort(segmentSort);
  var segment = segments[0];
  var coords = path.slice(segment.beginIndex, segment.endIndex);
  var pathLength = 0;
  for (var i = 1, ii = coords.length; i < ii; ++i) {
    var p1 = coords[i - 1];
    var p2 = coords[i];
    pathLength += Math.sqrt(
        Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    if (pathLength >= labelLength) {
      if (coords[0][0] > coords[coords.length - 1][0]) {
        // Make text upright
        coords.reverse();
      }
      return coords;
    }
  }
}
