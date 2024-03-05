import { useEffect } from "react"
import { run } from "vanilla-cookieconsent"
import { config } from "./CookieConsentConfig";
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export const CookieConsentComponent = () => {
    useEffect(() => {
        run(config);
    }, []);

    return (
        <button data-cc="show-preferencesModal" type="button">Show consent settings</button>
    )
}