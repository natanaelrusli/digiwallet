import Layout from "../layouts/Layout"
import { BalanceLabel, UsernameLabel } from "../molecules"
import { UserDataBar } from "../organisms"

const Home = () => {
  return (
    <>
      <Layout>
        <UserDataBar />
      </Layout>
    </>
  )
}

export default Home