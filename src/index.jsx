import React from "react"
import { render } from "react-dom"
import { DarkModeProvider } from "./context/darkModeContext"
import App from "./components/App"

render(<DarkModeProvider><App /></DarkModeProvider>, document.querySelector("#root"))