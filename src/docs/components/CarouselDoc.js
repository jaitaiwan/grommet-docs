// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Carousel from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Carousel.displayName = 'Carousel';
Box.displayName = 'Box';

const USAGE =
`import Carousel from 'grommet/components/Carousel';
<Carousel>
  <img src="/img/carousel-1.png" />
  <img src="/img/carousel-2.png" />
</Carousel>`;

export default class TileDoc extends Component {

  render () {

    return (
      <DocsArticle title="Carousel">

        <section>
          <p>Image carousel.</p>

          <Carousel>
            <img src="/img/carousel-1.png" />
            <img src="/img/carousel-2.png" />
          </Carousel>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>autoplay            true|false</code></dt>
            <dd>Whether the carousel should play automatically or not.
              Defaults to <code>true</code>.</dd>
            <dt><code>autoplaySpeed       {"{number}"}</code></dt>
            <dd>How long the carousel should stay on each slide, in
              milliseconds.  Defaults to <code>5000</code> (5 seconds).</dd>
            <dt><code>infinite            true|false</code></dt>
            <dd>Whether the carousel should scroll back to the first slide
              when you get to the end, or stop at the last slide.
              Defaults to <code>true</code>.</dd>
            <dt><code>persistentNav       true|false</code></dt>
            <dd>Whether the navigational elements should always be shown,
              or only show when the user mouses over the carousel.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example code={
            <Carousel>
              <img src="/img/carousel-1.png" />
              <img src="/img/carousel-2.png" />
              <Box pad="large" colorIndex="neutral-3">
                <Box pad="medium" colorIndex="neutral-2">
                  Content inside of a Box element.
                </Box>
              </Box>
            </Carousel>
          } />

        </section>

      </DocsArticle>
    );
  }
};
