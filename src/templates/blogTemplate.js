import React from "react";
import "./style.scss";
import Avater from "./../assets/images/anharu.jpg"
import Blog from "./../components/blog"
import Helmet from "react-helmet"

import AnharuIcon16 from "./../assets/favicons/favicon-16x16.jpg"
import AnharuIcon32 from "./../assets/favicons/favicon-32x32.jpg"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Blog>
        <Helmet
          title={frontmatter.title + " - Anharuのブログ"}
          meta={[
            { property: 'og:title', content: frontmatter.title },
            { property: 'og:description', content: frontmatter.title },
          ]}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: AnharuIcon16 },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: AnharuIcon32 }
          ]}
        />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="title">{frontmatter.title}</h1>
        <p className="date">{frontmatter.date}</p>
        <div className="title-border" />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Blog>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
