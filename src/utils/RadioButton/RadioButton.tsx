import React from "react";
import { useSpring, animated } from "react-spring";
import './RadioButton.scss'


interface RadioButtonProps {
  options: Array<string>
  defaultValue?: string
}
export const RadioButton: React.FC<RadioButtonProps> = props => {
  const { options } = props

  const defaultValue = props?.defaultValue || options[0]
  const [selectedOption, setOption] = React.useState<string>(defaultValue)

  const onSelect = (event: any) => {
    setOption(event.target.value)
  }

  // for grouping
  const radioButtonName = options.join('-')
  return <div className='radio' onChange={onSelect}>
    {
      options
        .map((option, index) => {
          const key = `${option}-${index}`

          return <Option
            key={key}
            name={option}
            isSelected={option === selectedOption}
            radioButtonName={radioButtonName}
          />
        })

    }
  </div>
}

interface OptionProps {
  name: string
  isSelected: boolean
  radioButtonName: string
}

const selectedShadow = '-5px -5px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF'
const unselectedShadow = '0px 0px 0px rgba(255, 255, 255, 0.5), 0px 0px 0px rgba(174, 174, 192, 0.2), inset -0px -0px 0px rgba(0, 0, 0, 0.1), inset 0px 0px 0px #FFFFFF'
const activeColor = '#5714bc'
const inactiveColor = '#b2afb6'

const Option: React.FC<OptionProps> = props => {
  const { name, isSelected, radioButtonName } = props

  const animatedStyles = useSpring({
    boxShadow: isSelected ? selectedShadow : unselectedShadow,
    borderRadius: isSelected ? '20px' : '50px',
    color: isSelected ? activeColor : inactiveColor,
    fontWeight: isSelected ? 500 : 400
  });

  const id = `radiobutton-${name}`

  return <animated.label
    style={animatedStyles}
    className={'option'}
    htmlFor={id}
    role="radiogroup"
  >
    <input
      id={id}
      type='radio'
      name={radioButtonName}
      aria-label={name}
      value={name}
    />
    {name}
  </animated.label>
}