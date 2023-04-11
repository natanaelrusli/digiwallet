import './index.scss'

type LabelProps = {
  text: string
  fontSize?: string
  fontWeight?: 'bold' | 'normal' | 'light' | string
  className?: string
}

const getFontWeight = (weight: string): string => {
  if (weight === 'bold') {
    return '800'
  } else if (weight === 'light') {
    return '400'
  } else if (weight === 'normal') {
    return '600'
  } else {
    return weight
  }
}

const index = ({ className, text, fontSize, fontWeight }: LabelProps) => {
  return (
    <div className={className}>
      <label
        className='header-label' 
        style={{
          fontSize: fontSize? fontSize : '2rem',
          fontWeight: getFontWeight(fontWeight?fontWeight : 'normal')
        }}
      >
        { text }
      </label>
    </div>
  )
}

export default index