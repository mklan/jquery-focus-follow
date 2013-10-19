# jquery.focus-follow

A responsive indicator that follows your focus, while hovering over your elements (for example your image gallery). The elements can have different dimensions and have a different `border-radius`. Everything gets recalculated on the fly, so you can use it within your responsive websites.

## Dependencies

In order to use jquery.focus-follow you have to include the jQuery library.

## Installation

Include the script after jQuery:

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.focus-follow.js"></script>
```

## Usage

#### followFocus method

Select your elements that should take advantage of the focus-follow feature and call the `followFocus()` method

```javascript
$("img").followFocus();
```

#### Options

<table>
<thead>
<tr>
   <th>option</th><th>type</th><th>default</th><th>description</th>
</tr>
</thead>
<tbody>
<tr>
   <td><i>color</i></td><td>string</td><td>"orange"</td><td>color of the focus indicator. </td>
</tr>
<tr>
   <td><i>opacity</i></td><td>float</td><td>1.0</td><td>opacity of the focus indicator (range: 0.0 - 1.0). </td>
</tr>
<tr>
   <td><i>speed</i></td><td>int</td><td>400</td><td>duration in milliseconds that takes until the focus indicator moves from the last hovered element to the new one.</td>
</tr>
<tr>
   <td><i>margin</i></td><td>int</td><td>2</td><td>margin of the focus indicator </td>
</tr>
<tr>
   <td><i>margin_horizontal</i></td><td>int</td><td>2</td><td>horizontal margin of the focus indicator </td>
<tr>
   <td><i>margin_vertical</i></td><td>int</td><td>2</td><td>vertical margin of the focus indicator </td>
<tr>
   <td><i>border_radius</i></td><td>int</td><td>auto</td><td>border radius of the focus indicator. (If this option is not in use, the plugin will automaticly detect the border radius of the elements and use these)</td>
</tr>
<tr>
   <td><i>wrapper</i></td><td>string</td><td>-</td><td>id or class of a wrapper container that typically surrounds the elements. If you leave this wrapper the focus indicator will disappear.</td>
</tr>
<tr>
   <td><i>timeout</i></td><td>int</td><td>200</td><td>time in milliseconds after the focus indicator will completly be faded out if no other element will be hovered during this timeout or you leave a specified wrapper. </td>
</tr>
   <td><i>z-index</i></td><td>int</td><td>-1</td><td>If you have other z-index elements, you can push the focus indicator into the right layer.</td>
</tbody>

</table>


## Example

Check out the [example](https://github.com/vaceta/jquery-focus-follow/tree/master/examples) 


## Author

[Matthias Klan](https://github.com/vaceta/)

contact: matthias.klan@gmail.com 


## Licence

The MIT License (MIT)

Copyright (c) 2013 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
