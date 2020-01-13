import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";


export default ({ data }) => (
  <Layout>
    <h3>{data.markdownRemark.frontmatter.title}</h3>
    <span>{data.markdownRemark.frontmatter.date}</span>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;