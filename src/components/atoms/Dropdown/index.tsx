import './index.scss'

export interface IDropdownOption {
	label: string | number;
	labelValue: string | number;
}

export interface DropdownProps {
  name?: string;
  options: IDropdownOption[]
  className?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  selectedItem?: string | number
}

const index = ({
  options,
  className,
  name,
  onChange,
  selectedItem
}: DropdownProps) => {

  return (
    <div className={className}>
      <div className='dropdown-wrapper'>
        <select
          name={name}
          className='dropdown'
          onChange={onChange}
          value={selectedItem}
        >
          {
            options.map((option) => (
              <option value={option.labelValue} key={option.labelValue}>
                { option.label }
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default index