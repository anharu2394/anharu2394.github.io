import React from "react";
import PostLink from "../../components/post-link";
import Blog from "./../../components/blog"
import Helmet from "react-helmet"
import "./../../assets/images/blog/IMG_20180712_193037.jpg"
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
    const Mata = <Helmet
          title="Anharuのブログの一覧"
          meta={[
            { name: 'description', content: "JCエンジニアAnharuのBlogです。" },
            { property: 'og:title', content: "Anharuのブログ一覧" },
            { property: 'og:description', content:"JCエンジニアAnharuのBlogの一覧です。" },
          ]}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16'},
            { rel: 'icon', type: 'image/png', sizes: '32x32'}
          ]}
        />

  return <Blog>{Mata}<h1 className="title-all">記事一覧</h1>{Posts}</Blog>;
};

export default IndexPage;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
