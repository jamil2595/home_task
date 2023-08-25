class CreateAccount {

    firstName() {
        return $('//*[@hint="First name"]')
    }

    lastName() {
        return $('//*[@hint="Last name"]')
    }

    continueButton() {
        return $('//*[@text="Continue"]')
    }

    whatIsYourEmailTitle() {
        return $('//*[@resource-id="eu.inbank:id/email_title"]')
    }

    userInput() {
        return $('//*[@resource-id="eu.inbank:id/edit_text"]')
    }

    termsAndConditionsCheckBox() {
        return $('//*[@resource-id="eu.inbank:id/email_tc_checkbox"]')
    }

    newsCheckBox() {
        return $('//*[@resource-id="eu.inbank:id/email_news_checkbox"]')
    }

    whatIsYourPhoneNumberTitle() {
        return $('//*[@resource-id="eu.inbank:id/mobile_title"]')
    }

    prefixNumber() {
        return $('//*[@resource-id="eu.inbank:id/fake_value"]')
    }

    countryDialCodeTitle() {
        return $('//*[@resource-id="eu.inbank:id/sheet_title"]')
    }

    countryDialCodeNumber() {
        return $('//*[@resource-id="eu.inbank:id/dialing_code"]')
    }

    countryDialCodeCountry() {
        return $$('//*[@resource-id="eu.inbank:id/country_check"]')
    }

    closeTabButton() {
        return $('//*[@resource-id="eu.inbank:id/close"]')
    }

    iDCodeTitle() {
        return $('//*[@resource-id="eu.inbank:id/id_title"]')
    }

    nextButton() {
        return $('//*[@text="Next"]')
    }

    idCodeInput() {
        return $('//*[@text="Enter ID code"]')
    }


    errorMessage() {
        return $('[resource-id="eu.inbank:id/error_tv"]')
    }

    promoCodeTitle() {
        return $('//*[@text="Got a promo code?"]')
    }
    promoCodeHint() {
        return $('//*[@hint="Promo code"]')
    }

    letsGetToKnowEachOtherTitle(){
        return $('//android.widget.TextView[1]')
    }

    termsAndConditionsText(){
        return $('//*[@resource-id="eu.inbank:id/email_terms_privacy_tv"]')
    }

    newsAndOffersText(){
        return $('//*[@text="I’d like to receive valuable news and offers from Inbank."]')
    }

    browserMessage(){
        return $('//*[@text="Welcome to Chrome"]')
    }

    backButton(){
        return $('android.widget.ImageButton')
    }

    errorMessages(){
        return $$('//*[@resource-id="eu.inbank:id/error_tv"]')
    }

}

module.exports = new CreateAccount()