import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Projects extends React.Component {
  render() {
    const siteTitle = "< Web App Engineer >"
    //const { data }  = this.props;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <h1>Projects</h1>
      </Layout>
    )
  }
}

export default Projects
