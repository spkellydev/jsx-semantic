# jsx-semantic

> Semantic HTML components written in JSX for React

[![NPM](https://img.shields.io/npm/v/jsx-semantic.svg)](https://www.npmjs.com/package/jsx-semantic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`https://spkellydev.github.io/jsx-semantic`

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

# Available tags
```js
export const Section = Tag('section')
export const Article = Tag('article')
export const Button = Tag('button')
export const Canvas = Tag('canvas')
export const Header = Tag('header')
export const Footer = Tag('footer')
export const Span = Tag('span')
export const Strong = Tag('strong')
export const Nav = Tag('nav')
export const Div = Tag('div')
export const Em = Tag('em')
export const Ul = Tag('ul')
export const Li = Tag('li')
export const H1 = Tag('h1')
export const H2 = Tag('h2')
export const H3 = Tag('h3')
export const H4 = Tag('h4')
export const H5 = Tag('h5')
export const H6 = Tag('h6')
export const P = Tag('p')
```

## License

MIT © [spkellydev](https://github.com/spkellydev)
