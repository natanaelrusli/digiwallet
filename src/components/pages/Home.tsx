import React, { useEffect } from 'react'

import { useState } from "react"
import { IDropdownOption } from "../atoms/Dropdown"
import Layout from "../layouts/Layout"
import { FilterBar, UserDataBar } from "../organisms"
import { FilterData } from "../organisms/FilterBar"
import { DataTable } from '../atoms'

import { useCookies } from 'react-cookie'
import { TApiResponse, useApiGet } from '../../hooks/useFetch'
import { BASE_URL, profiles } from '../../constants/apiEndpoint'

export type Transactions = {
  date: string;
  amount: number;
  description: string;
  from: number;
  to: number;
  source_of_fund: number
}


const Home = () => {
  const transactionsData = [
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

  const [cookie] = useCookies(['token']);
  const [transactions, setTransactions] = useState<Transactions[]>(transactionsData)

  const columns: string[] = [
    'Date',
    'Type',
    'Amount',
    'Description',
    'From'
  ]

  const [filterData, setFilterData] = useState<FilterData>({
    filterValue: '',
    dateValue: '',
    sortValue: '',
    searchValue: '',
  });
  
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

  // USING CUSTOM HOOKS
  type UserData = {
    Username: string;
    AccountNumber: string;
    Balance: number;
  }
  
  const response: TApiResponse = useApiGet(`${BASE_URL}${profiles}`, cookie.token)
  
  let userData: UserData = {
    Username: '',
    AccountNumber: '',
    Balance: 0
  }

  if (!response.loading) {
    userData = {
      Username: response.data.Name,
      Balance: response.data.Balance,
      AccountNumber: response.data.WalletID
    }
  }

  // END OF USING CUSTOM HOOKS

  useEffect(() => {
    setFilterData({
      filterValue: '10',
      dateValue: '',
      sortValue: 'desc',
      searchValue: ''
    })
  }, [])

  useEffect(() => {
    const filteredArray = transactionsData.filter((obj) => {
      return obj.description.toLowerCase().includes(filterData.searchValue.toLowerCase()) || obj.amount.toString().toLowerCase().includes(filterData.searchValue.toLowerCase());
    })
    
    setTransactions(filteredArray)
  }, [filterData])

  return (
    <>
      <Layout>
        <UserDataBar
          data={userData}
        />
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