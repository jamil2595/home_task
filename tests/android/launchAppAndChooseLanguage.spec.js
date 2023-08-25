const selectCountryAndLanguage = require("../PageObjects/android/selectCountryAndLanguage") 

describe('Launching app and navigation to registration form, navigation between pages', () => {
    
    it('should launch the app, select the country, select the language', async () => {
        // Verify country selection page and button texts and visiblity
        await expect(selectCountryAndLanguage.countryTitle()).toHaveText('Select a country')
        await expect(selectCountryAndLanguage.countryTitle()).toBeDisplayed()
        await expect(selectCountryAndLanguage.countryButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.countryButton()).toHaveText('Estonia')
        // Select Estonia as the country
        await selectCountryAndLanguage.countryButton().click()
        // Verify language preference 
        await expect(selectCountryAndLanguage.languagePreferTitle()).toHaveText("Which language do you prefer?")
        await expect(selectCountryAndLanguage.languagePreferTitle()).toBeDisplayed()
        await expect(selectCountryAndLanguage.languagePreferDescription()).toHaveText("You can change your preferred language later")
        await expect(selectCountryAndLanguage.languagePreferDescription()).toBeDisplayed()
        await expect(selectCountryAndLanguage.estonianLanguageButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.englishLanguageButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.russianLanguageButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.estonianLanguageButton()).toBeEnabled()
        await expect(selectCountryAndLanguage.englishLanguageButton()).toBeEnabled()
        await expect(selectCountryAndLanguage.russianLanguageButton()).toBeEnabled()
        // Select English as the preferred language
        await selectCountryAndLanguage.englishLanguageButton().click()
        // Verify main screen after language selection
        await expect(selectCountryAndLanguage.createAccountButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.createAccountButton()).toBeEnabled()
        await expect(selectCountryAndLanguage.loginButton()).toBeDisplayed()
        await expect(selectCountryAndLanguage.loginButton()).toBeEnabled()
    })

    it('should visit previous page',async()=>{
        await driver.launchApp();
        await selectCountryAndLanguage.countryButton().click()
        await selectCountryAndLanguage.backButton().click()
        //assert that back button working
        await expect(selectCountryAndLanguage.countryTitle()).toHaveText('Select a country')
    })
})