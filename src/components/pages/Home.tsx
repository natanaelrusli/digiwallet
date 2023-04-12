import React, { useEffect } from 'react'

import { useState } from "react"
import { IDropdownOption } from "../atoms/Dropdown"
import Layout from "../layouts/Layout"
import { FilterBar, UserDataBar } from "../organisms"
import { FilterData } from "../organisms/FilterBar"
import { DataTable } from '../atoms'
import { ColumnDefinitionType } from '../atoms/DataTable'

export type Transactions = {
  date: string;
  amount: number;
  description: string;
  from: number;
  to: number;
  source_of_fund: number
}

const Home = () => {

  const transactions: Transactions[]= [
    {
      "date": "2023-03-31 02:53:52.704244+07",
      "amount": 75000,
      "description": "Kopi Kenangan",
      "from": 100000001,
      "to": 10000002,
      "source_of_fund": 0
    },
    {
      "date": "2023-04-10 02:53:52.704244+07",
      "amount": 100000,
      "description": "Top Up from Bank Transfer",
      "from": 100000001,
      "to": 0,
      "source_of_fund": 1
    },
    {
      "date": "2023-03-31 02:53:52.704244+07",
      "amount": 75000,
      "description": "Kopi Kenangan",
      "from": 100000001,
      "to": 10000002,
      "source_of_fund": 0
    },
    {
      "date": "2023-04-10 02:53:52.704244+07",
      "amount": 100000,
      "description": "Top Up from Bank Transfer",
      "from": 100000001,
      "to": 0,
      "source_of_fund": 1
    },
    {
      "date": "2023-03-31 02:53:52.704244+07",
      "amount": 75000,
      "description": "Kopi Kenangan",
      "from": 100000001,
      "to": 10000002,
      "source_of_fund": 0
    },
    {
      "date": "2023-04-10 02:53:52.704244+07",
      "amount": 100000,
      "description": "Top Up from Bank Transfer",
      "from": 100000001,
      "to": 0,
      "source_of_fund": 1
    }
  ]

  const columns: ColumnDefinitionType<Transactions, keyof Transactions>[] = [
    {
      key: 'date',
      header: 'Date'
    },
    {
      key: 'amount',
      header: 'Amount'
    },
    {
      key: 'description',
      header: 'Description'
    },
    {
      key: 'from',
      header: 'From'
    },
    {
      key: 'to',
      header: 'To'
    },
    {
      key: 'source_of_fund',
      header: 'Source of fund'
    },
  ]

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
  
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === 'sort-direction') {
      setFilterData({
        ...filterData,
        sortValue: event.target.value
      })
    } else if (event.target.name === 'filter-transactions') {
      setFilterData({
        ...filterData,
        filterValue: event.target.value
      })
    }
  }

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData({
      ...filterData,
      dateValue: event.target.value
    })
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData({
      ...filterData,
      searchValue: event.target.value
    })
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
          handleDateChange={onDateChange}
          handleFilterChange={onSelectChange}
          handleSortChange={onSelectChange}
          handleSearchChange={onInputChange}
        />
        <DataTable
          data={transactions}
          columns={columns}
        />
      </Layout>
    </>
  )
}

export default Home