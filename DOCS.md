{{ noparse }}
### Features
* Use any input type as a Statamic field.
* Set (almost) any attribute.

### Installation
Upload the `dist/input` folder to `_add-ons` and follow the setup directions below.

### Setup
Input your settings in a [fieldset](http://statamic.com/learn/control-panel/fields-and-fieldsets) like you would with any other field.

To set the input type and other attribtues, use the `attr` array setting. The keys are attribtues and the values are values.

    fields:
      price_range:
        type: input
        display: Price Range
        attr:
          type: range
          min: 0
          max: 10
          step: 0.1

If Statamic has a native way to set an option/attribute, you should use it. For example, boolean attributes like `required` can't be set via Input, but Statamic's native `required` setting takes care of that need.

    fields:
      price_range:
        type: input
        display: Price Range
        required: true
        attr:
          type: range
          min: 0
          max: 1000
          step: 1

### Pro Tip
The [MDN HTML docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input) explain input types in detail.
{{ /noparse }}