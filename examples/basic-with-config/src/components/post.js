import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'

import Layout from './post-layout'
import PostTitle from './post-title'

export default ({ data: { blogPost } }) => (
  <Layout>
    <Helmet title={blogPost.title} />
    <PostTitle>{blogPost.title}</PostTitle>
    <MDXRenderer>{blogPost.body}</MDXRenderer>
  </Layout>
)
