import { useState } from "react"
import { Dropdown } from "../atoms"
import { IDropdownOption } from "../atoms/Dropdown"
import Layout from "../layouts/Layout"
import { UserDataBar } from "../organisms"

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | number>();
  
  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(
      event.target.value
    )
  }

  const dropdownOptions: IDropdownOption[] = [
    {
      label: 'Last 10 Transactions',
      labelValue: '10'
    },
    {
      label: 'This Month',
      labelValue: 'month'
    },
    {
      label: 'Last Month',
      labelValue: 'last_month'
    }
  ]

  return (
    <>
      <Layout>
        <UserDataBar />
        <Dropdown
          options={dropdownOptions}
          placeholder="Filter Transactions"
          selectedItem={selectedFilter}
          onChange={onValueChange}
        />
      </Layout>
    </>
  )
}

export default Home