import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Screen from "../components/screen"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone</h1>
    <p>Welcome to test Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `50%`, marginBottom: `1.45rem` }}>
      <Screen />
    </div>

    {/* <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <font color="#3AC1EF">
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </font>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul> */}

    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
// export const pageQuery = graphql`  
//   query IndexQuery {
//     allStrapiArticle {
//       edges {
//         node {
//           id
//           title
//           content
//         }
//       }
//     }
//   }
// `