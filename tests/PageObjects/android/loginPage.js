class LoginPage{

    loginButton(){
        return $('//*[@text="Log in"]')
    }

    loginLogo(){
        return $('//*[@resource-id="eu.inbank:id/login_logo"]')
    }

    welcomeMessage(){
        $('//*[@resource-id="eu.inbank:id/login_welcome_tv"]')
    }

    mobileIdButton(){
        return $('//*[@text="Mobile-ID"]')
    }

    smartIdButton(){
        return $('//*[@text="Smart-ID"]')
    }

    idCodeField(){
        return $('//*[@hint="ID code"]')
    }

    phoneNumberField(){
        return $('//*[@hint="Phone number"]')
    }

    idCodeHint(){
        return $('//*[@hint="ID code"]')
    }
}

module.exports= new LoginPage()