const createAccount = require("../PageObjects/android/createAccount");
const selectCountryAndLanguage = require("../PageObjects/android/selectCountryAndLanguage")

describe('Validation tests for InPay app', () => {

  context('Invalid data validation and button state check for Lets get to know each other page', () => {

    beforeEach(async () => {
      //navigate to Lets get to know each other page valid data
      await driver.launchApp();
      await selectCountryAndLanguage.countryButton().click()
      await selectCountryAndLanguage.englishLanguageButton().click()
      await selectCountryAndLanguage.createAccountButton().click()
    });

    it('should check hints for input fields and title text', async () => {
      //assert texts and hints for input fields
      await expect(createAccount.letsGetToKnowEachOtherTitle()).toHaveText('Let\'s get to know each other');
      await expect(createAccount.letsGetToKnowEachOtherTitle()).toBeDisplayed();
      await expect(createAccount.firstName()).toBeDisplayed();
      await expect(createAccount.firstName()).toHaveText('First name');
      await expect(createAccount.firstName()).toBeDisplayed();
      await expect(createAccount.lastName()).toBeDisplayed();
      await expect(createAccount.promoCodeTitle()).toHaveText('Got a promo code?');
      await expect(createAccount.promoCodeHint()).toBeDisplayed();
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    it('should show error message with integer input', async () => {
      // assertion with integer input
      await createAccount.firstName().addValue(372);
      await createAccount.lastName().addValue(372);
      const errorMessages = await createAccount.errorMessages();
      //error message for last name
      const errorMesssage = errorMessages[1];
      await expect(errorMesssage).toHaveText("Invalid last name");
      await expect(createAccount.errorMessage()).toBeDisplayed();
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    it('should show error message with wrong strings', async () => {
      // assertion with  wrong string
      await createAccount.firstName().addValue("      test");
      await createAccount.lastName().addValue("      test");
      const errorMessages = await createAccount.errorMessages();
      //error message for last name
      const errorMessage = errorMessages[1];
      await expect(errorMessage).toHaveText("Invalid last name");
      await expect(createAccount.errorMessage()).toBeDisplayed();
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    it('should show error message with special character', async () => {
      // assertion with characters
      await createAccount.firstName().addValue("!~@#$%^&");
      await createAccount.lastName().addValue("!~@#$%^&");
      const errorMessages = await createAccount.errorMessages();
      //error messages for last name
      const errorMessage = errorMessages[1];
      await expect(errorMessage).toHaveText("Invalid last name");
      await expect(createAccount.errorMessage()).toBeDisplayed();
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    afterEach(async () => {
      await driver.closeApp();
    });

  })


  context('Button state and validation tests for `What is your email` page ', () => {

    beforeEach(async () => {
      //navigate to what is your email page with valid data
      await driver.launchApp()
      await selectCountryAndLanguage.countryButton().click()
      await selectCountryAndLanguage.englishLanguageButton().click()
      await selectCountryAndLanguage.createAccountButton().click()
      await createAccount.firstName().addValue("Jamil")
      await createAccount.lastName().addValue("Gurbanzade")
      await createAccount.continueButton().click()
    });

    it('should check by default button and checkbox states and page title', async () => {
      //assert button and checkbox states
      await expect(createAccount.whatIsYourEmailTitle()).toHaveText('What is your email?');
      await expect(createAccount.whatIsYourEmailTitle()).toBeDisplayed();
      await expect(createAccount.termsAndConditionsCheckBox()).not.toBeChecked();
      await expect(createAccount.newsCheckBox()).not.toBeChecked();
      await expect(createAccount.termsAndConditionsText()).toBeDisplayed();
      await expect(createAccount.newsAndOffersText()).toBeDisplayed();
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    it('should check Continue button state  after wrong email input', async () => {
      await createAccount.userInput().addValue('plainaddress');
      await createAccount.termsAndConditionsCheckBox().click();
      await createAccount.newsCheckBox().click();
      // button should be disabled after wrong input
      await expect(createAccount.continueButton()).toBeDisabled();
    });

    it('should check receive news and offers is optional for contniue button state', async () => {
      await createAccount.userInput().addValue('contact.jamilgurbanzade@gmail.com');
      await createAccount.termsAndConditionsCheckBox().click();
      //button still disabled after clicking only news and offers checkbox
      await expect(createAccount.continueButton()).not.toBeDisabled();
    });

    it('should check hyperlink is redirecting to browser', async () => {
      await createAccount.userInput().addValue('contact.jamilgurbanzade@gmail.com');
      await createAccount.termsAndConditionsText().click();
      // after clicking text, hyperlink will redirec to browerser. So as a nassertion, it checks the chrome browser is open
      await expect((createAccount.browserMessage())).toBeDisplayed()
      //and swithces back to app
      await driver.switchContext('NATIVE_APP')
      await driver.back()
    });


    afterEach(async () => {
      await driver.closeApp()
    })
  })

  context('Button state and validation tests for `What is your phone number` page ', () => {

    beforeEach(async () => {
      //navgite to what is your phone number page with valid data
      await driver.launchApp()
      await selectCountryAndLanguage.countryButton().click()
      await selectCountryAndLanguage.englishLanguageButton().click()
      await selectCountryAndLanguage.createAccountButton().click()
      await createAccount.firstName().addValue("Jamil")
      await createAccount.lastName().addValue("Gurbanzade")
      await createAccount.continueButton().click()
      await createAccount.userInput().addValue('contact.jamilgurbanzade@gmail.com');
      await createAccount.termsAndConditionsCheckBox().click();
      await createAccount.newsCheckBox().click()
      await createAccount.continueButton().click()
    });

    it('should check title and by default Continue button state', async () => {
      await expect(createAccount.whatIsYourPhoneNumberTitle()).toHaveText('What is your phone number?');
      await expect(createAccount.whatIsYourPhoneNumberTitle()).toBeDisplayed();
      //asserts button is disabled by default
      await expect(createAccount.continueButton()).toBeDisabled();

    });
    it('should check prefix value and state and country dial code', async () => {
      //asseertions for prefix number and phone number input hint and dial code texts
      await expect(createAccount.prefixNumber()).toHaveText("+372");
      await expect(createAccount.userInput()).toHaveText('Phone number');
      await createAccount.prefixNumber().click();
      await expect(createAccount.countryDialCodeTitle()).toHaveText("Country dial code");
      await expect(createAccount.countryDialCodeNumber()).toHaveText("+372");
      await expect(createAccount.countryDialCodeCountry()).toHaveText("Estonia");
    });

    afterEach(async () => {
      await driver.closeApp()
    })

  })

  context('Button state and validation tests for `What is your personal ID code` page', () => {
    beforeEach(async () => {
      //navigate to ID code page with valid data
      await driver.launchApp()
      await selectCountryAndLanguage.countryButton().click()
      await selectCountryAndLanguage.englishLanguageButton().click()
      await selectCountryAndLanguage.createAccountButton().click()
      await createAccount.firstName().addValue("Jamil")
      await createAccount.lastName().addValue("Gurbanzade")
      await createAccount.continueButton().click()
      await createAccount.userInput().addValue('contact.jamilgurbanzade@gmail.com');
      await createAccount.termsAndConditionsCheckBox().click();
      await createAccount.newsCheckBox().click()
      await createAccount.continueButton().click()
      await createAccount.userInput().addValue(56241991)
      await createAccount.continueButton().click()
    });

    it('should check title and by default Next button by default state and hint', async () => {
      //verify the button state  by default and ID code input hints
      await expect(createAccount.iDCodeTitle()).toHaveText('What is your personal ID code?');
      await expect(createAccount.iDCodeTitle()).toBeDisplayed();
      await expect(createAccount.idCodeInput()).toHaveText('Enter ID code');
      await expect(createAccount.nextButton()).toBeDisabled();
    });

    it('should check disabled button state if ID code length is less than 12', async () => {
      await createAccount.idCodeInput().addValue(3950318007);
      //button will be disabled if given inout is less 12 digits
      await expect(createAccount.nextButton()).toBeDisabled();
    });


    afterEach(async () => {
      await driver.closeApp()
    })

  })

})