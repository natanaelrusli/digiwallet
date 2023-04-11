import './index.scss'

type ButtonProps = {
  label: string
  size?: 'small' | 'medium' | 'large' | 'full'
  className?: string
}

const buttonSize = (size?: string): string => {
  return size? size : 'medium'
}

const index = ({ className, label, size }: ButtonProps) => {
  return (
    <div className={className}>
      <button className={`button ${buttonSize(size)}`}>
        { label }
      </button>
    </div>
  )
}

export default index