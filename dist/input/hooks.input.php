<?php

class Hooks_input extends Hooks
{

  public function control_panel__add_to_head()
  {
    if (!URL::getCurrent(false) == '/publish') {
      return false;
    }

    return $this->css->link('input.css');
  }

}
