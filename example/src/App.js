import React, { Component } from 'react'

import { Section, Div, P, H1, H2, H3, H4, H5, H6, Article } from 'jsx-semantic'

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
        <Article>
          All of the available components:
          
          <P>// Section</P>
          <P>export const Section = Tag('section')</P>
          
          <P>// Article</P>
          <P>export const Article = Tag('article')</P>
          
          <P>// Button</P>
          <P>export const Button = Tag('button')</P>
          
          <P>// Canvas</P>
          <P>export const Canvas = Tag('canvas')</P>
          
          <P>// Header</P>
          <P>export const Header = Tag('header')</P>
          
          <P>// Footer</P>
          <P>export const Footer = Tag('footer')</P>
          
          <P>// Span</P>
          <P>export const Span = Tag('span')</P>
          
          <P>// Strong</P>
          <P>export const Strong = Tag('strong')</P>
          
          <P>// Nav</P>
          <P>export const Nav = Tag('nav')</P>
          
          <P>// Div</P>
          <P>export const Div = Tag('div')</P>
          
          <P>// Em</P>
          <P>export const Em = Tag('em')</P>
          
          <P>// Ul</P>
          <P>export const Ul = Tag('ul')</P>
          
          <P>// Li</P>
          <P>export const Li = Tag('li')</P>
          
          <P>// H1</P>
          <P>export const H1 = Tag('h1')</P>
          
          <P>// H2</P>
          <P>export const H2 = Tag('h2')</P>
          
          <P>// H3</P>
          <P>export const H3 = Tag('h3')</P>
          
          <P>// H4</P>
          <P>export const H4 = Tag('h4')</P>
          
          <P>// H5</P>
          <P>export const H5 = Tag('h5')</P>
          
          <P>// H6</P>
          <P>export const H6 = Tag('h6')</P>
          
          <P>// P</P>
          <P>export const P = Tag('p')</P>
          
        </Article>
      </div>
    )
  }
}
