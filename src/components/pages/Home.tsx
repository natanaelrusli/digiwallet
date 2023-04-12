import React, { useEffect } from 'react'

import { useState } from "react"
import { IDropdownOption } from "../atoms/Dropdown"
import Layout from "../layouts/Layout"
import { FilterBar, UserDataBar } from "../organisms"
import { FilterData } from "../organisms/FilterBar"

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | number>();

  const [filterData, setFilterData] = useState<FilterData>({
    filterValue: '',
    dateValue: '',
    sortValue: '',
    searchValue: '',
  });

  useEffect(() => {
    setFilterData({
      filterValue: '10',
      dateValue: '',
      sortValue: 'desc',
      searchValue: ''
    })
  }, [])

  useEffect(() => {
    console.log(filterData)
  }, [filterData])
  
  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === 'sort-direction') {
      setFilterData({
        ...filterData,
        sortValue: event.target.value
      })
    } else if (event.target.name === 'sort-date') {
      setFilterData({
        ...filterData,
        dateValue: event.target.value
      })
    } else if (event.target.name === 'filter-transactions') {
      setFilterData({
        ...filterData,
        filterValue: event.target.value
      })
    }
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
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
        <FilterBar
          filterOptions={dropdownOptions}
          filterData={filterData}
          handleDateChange={onValueChange}
          handleFilterChange={onValueChange}
          handleSortChange={onValueChange}
          handleSearchChange={onInputChange}
        />
      </Layout>
    </>
  )
}

export default Home