import './index.scss'

import { Dropdown, Input, Label } from '../../atoms'
import { DropdownProps, IDropdownOption } from '../../atoms/Dropdown'

export interface FilterBarProps {
  className?: string
}

const index = ({
  options,
  selectedItem,
  onChange
}: DropdownProps,
{
  className
}: FilterBarProps) => {
  return (
    <div className={`filter-bar ${className ? className : ''}`}>
      <div className="filter-bar__left">
        <Dropdown
          options={options}
          placeholder="Filter Transactions"
          selectedItem={selectedItem}
          onChange={onChange}
        />
      </div>

      <div className="filter-bar__right">
        <Label 
          text='Sort by'
          fontSize='0.8rem'
          fontWeight='light'
          className='right__label'
        />

        <div className="right__input">
          <Dropdown
            options={options}
            placeholder="Filter Transactions"
            selectedItem={selectedItem}
            onChange={onChange}
          />
        </div>

        <div className="right__input">
          <Dropdown
            options={options}
            placeholder="Filter Transactions"
            selectedItem={selectedItem}
            onChange={onChange}
          />
        </div>

        <div className='right__input'>
          <Input
            prefixLeft="🔍"
            backgroundColor="#F9F9F9"
          />
        </div>
      </div>
    </div>
  )
}

export default index