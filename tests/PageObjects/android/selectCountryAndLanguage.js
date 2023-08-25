 class SelectCountryAndLanguage {

    countryTitle(){
        return $('//*[@resource-id="eu.inbank:id/country_title"]')
    }

    countryButton(){
        return $('//*[@resource-id="eu.inbank:id/label"]')
    }

    languagePreferTitle(){
        return $('//*[@resource-id="eu.inbank:id/language_title"]')
    }

    languagePreferDescription(){
        return $('//*[@resource-id="eu.inbank:id/language_description"]')
    }

    estonianLanguageButton(){
       return $('//*[@text="Eesti"]')
    }

    englishLanguageButton(){
        return $('//*[@text="English"]')
    }

    russianLanguageButton(){
        return $('//*[@text="Русский"]')
    }

    createAccountButton(){
        return $('//*[@text="Create account"]')
    }

    loginButton(){
        return $('//*[@text="Log in"]')
    }

    backButton(){
        return $('//*[@resource-id="eu.inbank:id/language_back"]')
    }
}

module.exports = new SelectCountryAndLanguage()