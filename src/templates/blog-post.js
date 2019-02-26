import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const e = encodeURIComponent
const subject = title => e(`[blog] ${title}`)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          pathname={this.props.location.pathname}
          thumbnail={post.frontmatter.cover.childImageSharp.fixed.src}
          type='article'
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <p
          style={{
            marginBottom: rhythm(2)
          }}
        >
          <a
            href={`https://mobile.twitter.com/search?q=${e(
              `https://brunoluiz.net${this.props.location.pathname}`
            )}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Discuss on Twitter
          </a>
          {' • '}
          <a
            href={`mailto:contact@brunoluiz.net?subject=${subject(
              post.frontmatter.title
            )}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Discuss through e-mail
          </a>
        </p>
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fixed(width: 1200) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
