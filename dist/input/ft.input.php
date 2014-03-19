<?php

require_once('config.php');

class Fieldtype_input extends Fieldtype
{

  public $meta = array(
    'name'        => INPUT_NAME,
    'version'     => INPUT_V,
    'author'      => INPUT_AUTHOR,
    'author_url'  => INPUT_AUTHOR_URL
  );


  public function render()
  {
    // Make user-defined attributes more easily accessible.
    // If the dev didn't set any attributes, default to a text field.
    if (isset($this->field_config['attr'])) {
      $attr_user = $this->field_config['attr'];
    } else {
      $attr_user = array(
        'type' => 'text'
      );
    }

    $type = $attr_user['type'];

    // Set some basic attributes.
    $attr = array(
      'name'     => $this->fieldname,
      'id'       => $this->field_id,
      'tabindex' => $this->tabindex,
      'value'    => HTML::convertSpecialCharacters($this->field_data),
      'class'    => $type
    );

    // Use Statamic's button styling for button-like inputs.
    if ($type == 'reset'  ||
        $type == 'button' ||
        $type == 'submit') {
      $attr['class'] .= ' btn';
    }

    // Merge user-defined attributes with basic ones (which may overwrite some user-defined).
    $attr_all = array_merge($attr_user, $attr);

    return HTML::makeInput($type, $attr_all, $this->is_required);
  }

}
