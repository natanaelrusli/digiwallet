import React from 'react'
import './index.scss'

import { DatePicker, Dropdown, Input, Label } from '../../atoms'
import { IDropdownOption } from '../../atoms/Dropdown'
import { SortDropdown } from './DropdownOptions'

type FilterBarProps = {
  handleFilterChange?: React.ChangeEventHandler<HTMLSelectElement>
  handleDateChange?: React.ChangeEventHandler<HTMLInputElement>
  handleSortChange?: React.ChangeEventHandler<HTMLSelectElement>
  handleSearchChange?: React.ChangeEventHandler<HTMLInputElement>

  className?: string
  filterOptions: IDropdownOption[]
  filterData: FilterData
}

export type FilterData = {
  filterValue: string
  dateValue: string
  sortValue: string
  searchValue: string
}

const index = ({
  filterOptions,
  className,
  handleFilterChange,
  handleDateChange,
  handleSortChange,
  handleSearchChange,
  filterData
}: FilterBarProps) => {
  return (
    <div className={`filter-bar ${className ? className : ''}`}>
      <div className="filter-bar__left">
        <Dropdown
          name='filter-transactions'
          options={filterOptions}
          placeholder="Filter Transactions"
          selectedItem={filterData.filterValue}
          onChange={handleFilterChange}
        />
      </div>

      <div className="filter-bar__right">
        <Label 
          text='Sort by'
          fontSize='0.8rem'
          fontWeight='light'
          className='right__label'
        />

        <DatePicker
          className='right__dropdown'
          placeholder='Date'
          onChange={handleDateChange}
        />

        <Dropdown
          name='sort-direction'
          options={SortDropdown}
          placeholder="Filter Transactions"
          selectedItem={filterData.sortValue}
          onChange={handleSortChange}
          className='right__dropdown'
        />

        <Input
          onChange={handleSearchChange}
          value={filterData.searchValue}
          name='search-input'
          prefixLeft="🔍"
          backgroundColor="#F9F9F9"
          className='right-input'
        />
      </div>
    </div>
  )
}

export default index