import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div className="">
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link className={styles.btn} to="/project">
            My portfolio projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`
