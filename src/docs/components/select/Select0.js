// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Example from '../../Example';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class Select0 extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: VALUES[0] };
  }

  _onChange (pseudoEvent) {
    this.setState({ value: pseudoEvent.option });
  }

  render () {
    return (
      <Example align="center" code={
        <Form>
          <FormField>
            <Select id="item1" name="item-1"
              options={VALUES}
              value={this.state.value} onChange={this._onChange} />
          </FormField>
        </Form>
      } />
    );
  }

};
