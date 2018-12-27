import React from "react";
import classNames from "classnames";

export const Tag = (tag, defaultProps) => props => {
  const Tag = tag;

  const { useTagAsClassName, ...attrs } = props;
  return (
    <Tag
      {...attrs}
      className={classNames(
        useTagAsClassName === false ? "" : tag,
        attrs.className
      )}
    >
      {props.children}
    </Tag>
  );
};

export const Section = Tag("section");
Section.displayName = "Section";
export const Article = Tag("article");
Article.displayName = "Article";
export const Button = Tag("button");
Button.displayName = "Button";
export const Canvas = Tag("canvas");
Canvas.displayName = "Canvas";
export const Header = Tag("header");
Header.displayName = "Header";
export const Footer = Tag("footer");
Footer.displayName = "Footer";
export const Mark = Tag("Mark");
Mark.displayName = "Mark";
export const Span = Tag("span");
Span.displayName = "Span";
export const Strong = Tag("strong");
Strong.displayName = "Strong";
export const Nav = Tag("nav");
Nav.displayName = "Nav";
export const Div = Tag("div");
Div.displayName = "Div";
export const Em = Tag("em");
Em.displayName = "Em";
export const Ul = Tag("ul");
Ul.displayName = "Ul";
export const Li = Tag("li");
Li.displayName = "Li";
export const H1 = Tag("h1");
H1.displayName = "H1";
export const H2 = Tag("h2");
H2.displayName = "H2";
export const H3 = Tag("h3");
H3.displayName = "H3";
export const H4 = Tag("h4");
H4.displayName = "H4";
export const H5 = Tag("h5");
H5.displayName = "H5";
export const H6 = Tag("h6");
H6.displayName = "H6";
export const P = Tag("p");
P.displayName = "P";
