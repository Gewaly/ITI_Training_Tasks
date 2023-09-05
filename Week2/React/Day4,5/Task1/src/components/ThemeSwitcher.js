import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import ThemeContext from "../contexts/ThemeContext"



function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="button-theme"
    >
       
      <img
       
        src={theme == "dark"   }
        className="theme-icon"
        alt="theme"
      />
    </Button>
  )
}

export default ThemeSwitcher