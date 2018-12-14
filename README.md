# jsx-semantic

> Semantic HTML components written in JSX for React

[![NPM](https://img.shields.io/npm/v/jsx-semantic.svg)](https://www.npmjs.com/package/jsx-semantic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jsx-semantic
```

## Usage

```jsx
import React, { Component } from 'react'

import { Section, Div, P, H1, H2, H3, H4, H5, H6 } from 'jsx-semantic'

export default class App extends Component {
  render () {
    return (
      <div>
        <Section useTagAsClassName={false}>
          <Div>
            <H1>JSX Semantic</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
            <P>Paragraph</P>
          </Div>
        </Section>
      </div>
    )
  }
}
```

## License

MIT © [spkellydev](https://github.com/spkellydev)
