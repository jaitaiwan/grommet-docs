// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

const USAGE =
`import Form from 'grommet/components/Form';
<Form onSubmit={...}>
  <Header>
    <h1>Heading</h1>
  </Header>
  <FormFields>
    <fieldset>
      <FormField label="Field name" htmlFor="input-id"
        error={errors.name}>
        <input id="input-id" name="name" type="text"
          value={...} onChange={...} />
      </FormField>
    </fieldset>
  </FormFields>
  <Footer pad={{vertical: 'medium'}}>
    <Button label="Add" primary={true}
      onClick={...} />
  </Footer>
</Form>`;

export default class FormDoc extends Component {

  constructor () {
    super();
    this.state = {};
  }

  _onSubmit (event) {
    event.preventDefault();
  }

  _onCancel (event) {
    event.preventDefault();
  }

  render () {
    return (
      <DocsArticle title="Form">

        <section>
          <p>A web form.</p>
          <Form onSubmit={() => alert('submit')}>
            <Header>
              <h1>Heading</h1>
            </Header>
            <FormFields>
              <fieldset>
                <FormField label="Field name" htmlFor="input-id">
                  <input id="input-id" name="name" type="text"
                    value={this.state.value}
                    onChange={(event) => this.setState({ value: value })} />
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{vertical: 'medium'}}>
              <Button label="Submit" primary={true}
                onClick={() => alert('submit')} />
            </Footer>
          </Form>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
          <dt><code>compact   true|false</code></dt>
          <dd>Whether to render the form in a compact style.</dd>
          <dt><code>onSubmit  {"{function}"}</code></dt>
          <dd>A function called when the user submits the form.</dd>
          <dt><code>pad       {"none|small|medium|large|{...}"}</code></dt>
          <dd>The amount of padding to put around the contents.
            An object can be specified to distinguish horizontal and
            vertical padding: <code>
            {"{horizontal: none|small|medium|large, " +
              "vertical: none|small|medium|large}"}
            </code>. Defaults to <code>none</code>.
          </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/form/examples`}>
            Form Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
