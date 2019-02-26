import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import './Layout.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let footer

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
      footer = (
        <footer>
          <a href={`mailto:contact@brunoluiz.net`}>e-mail</a>
          {' • '}
          <a href={`https://twitter.com/brunoluiz`}>twitter</a>
          {' • '}
          <a href={`https://github.com/brunoluiz`}>github</a>
          {' • '}
          <a href={`${__PATH_PREFIX__}/rss.xml`}>rss</a>
        </footer>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        {footer}
      </div>
    )
  }
}

export default Layout
