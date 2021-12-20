import { useTheme } from '../hooks/useTheme'
import ModeIcon from '../assets/mode_change.svg'

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  const colors = ['#fecaca', '#fbcfe8', '#bae6fd', '#34d399', '#a5b4fc', '#fda4af']

  const modeChange = () => {
    changeMode( mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

  return (
    <div className='f-container mt-4 place-content-between'>
      <div>
        <img 
          className='cursor-pointer' 
          src={ModeIcon}
          onClick={modeChange}  
          style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}       
        />
      </div>
      <div className='flex'>
        {colors.map((color) => (
          <button 
            key={color} 
            onClick={() => changeColor(color)} 
            className='theme-selector' 
            style={{ backgroundColor: color }} 
          />
        ))}
      </div>
    </div>
  )
}

export default ThemeSelector
