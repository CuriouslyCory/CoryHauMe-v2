import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class History extends React.Component {
  render() {
    const siteTitle = "< Web App Engineer >"
    const { data }  = this.props;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Work History" />
        <h1>Work History</h1>
      </Layout>
    )
  }
}

export default History
