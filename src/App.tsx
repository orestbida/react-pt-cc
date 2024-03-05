import './App.css'
import { CookieConsentComponent } from './components/CookieConsentComponent'

function App() {
  return (
    <>
    <h1>CookieConsent v3 + React + Partytown</h1>

    <script
      type="text/plain"
      data-type="text/partytown"
      data-category="analytics"
      data-service="Google Analytics"
      dangerouslySetInnerHTML={{
        __html: `console.log("analytics pt script enabled")`}}
    ></script>

      <CookieConsentComponent/>
    </>
  )
}

export default App
