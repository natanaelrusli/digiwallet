import React from "react"

import Layout from "../layouts/Layout"
import { TopupForm } from "../organisms"
import { Card } from "../atoms"

const Topup = () => {
  return (
    <>
      <Layout>
        <Card marginTop="5rem">
          <TopupForm />
        </Card>
      </Layout>
    </>
  )
}

export default Topup