const selectCountryAndLanguage = require("../PageObjects/android/selectCountryAndLanguage")
const createAccount = require("../PageObjects/android/createAccount")
const loginPage = require("../PageObjects/android/loginPage")

describe('Registration with valid data and login page naviagate to previous page', () => {

  it('should fill in the registration form with valid data', async () => {
    //navigate to registration form
    await selectCountryAndLanguage.countryButton().click()
    await selectCountryAndLanguage.englishLanguageButton().click()
    await selectCountryAndLanguage.createAccountButton().click()
    //add valid input for name nand surname
    await createAccount.firstName().addValue("Jamil")
    await createAccount.lastName().addValue("Gurbanzade")
    await createAccount.continueButton().click()
    //add valid emaill address
    await createAccount.userInput().addValue('contact.jamilgurbanzade@gmail.com')
    await createAccount.termsAndConditionsCheckBox().click()
    await createAccount.newsCheckBox().click()
    await createAccount.continueButton().click()
    //add valid phone number
    await createAccount.userInput().addValue(56241991)
    await createAccount.continueButton().click()
    //add valid user ID code
    await createAccount.userInput().addValue(39503180075)
    await createAccount.nextButton().click()
    await driver.closeApp()
  })

  it('should open log in page and elements should be visible', async () => {
    await driver.launchApp();
    //navigate to registration form
    await selectCountryAndLanguage.countryButton().click()
    await selectCountryAndLanguage.englishLanguageButton().click()
    //click login button
    await selectCountryAndLanguage.loginButton().click()
    //verify visiblity of elements
    await expect(loginPage.loginLogo()).toBeDisplayed()
    await expect(loginPage.mobileIdButton()).toBeDisplayed()
    await expect(loginPage.smartIdButton()).toBeDisplayed()
    await expect(loginPage.loginButton()).not.toBeEnabled()
    await expect(loginPage.idCodeHint()).toBeDisplayed()
    await expect(createAccount.prefixNumber().toBeDisplayed())
    await loginPage.smartIdButton().click()
    await expect(createAccount.prefixNumber()).not.toBeDisplayed()
  })

  it('should be able to go back previous page',async ()=>{
    await driver.launchApp();
    //navigate to registration form
    await selectCountryAndLanguage.countryButton().click()
    await selectCountryAndLanguage.englishLanguageButton().click()
    await selectCountryAndLanguage.createAccountButton().click()
    //add valid input for name nand surname
    await createAccount.firstName().addValue("Jamil")
    await createAccount.lastName().addValue("Gurbanzade")
    await createAccount.continueButton().click()
    await createAccount.backButton().click()
    //assert that back button works
    await expect(createAccount.letsGetToKnowEachOtherTitle()).toHaveText('Let\'s get to know each other');
  })
})
