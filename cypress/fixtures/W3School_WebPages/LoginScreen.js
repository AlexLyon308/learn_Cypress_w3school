/// <reference types="cypress" /> 

 class LoginScreen { 

   HeaderLogo = 'a[href="https://w3schools.com"]';
   LoginField = '#modalusername';
   PasswordField = '#current-password';
   LoginButton = 'div.LoginModal_cta_bottom_box_button_login__5Fbwv > button';
   SignUp = ':nth-child(2) > span';
   ShowPassword = '.PasswordInput_show_pwd_btn__Ncc9S';
   ForgotPassword = 'LoginModal_forgot_pwd_wrapper__qttSX';
   TradeMark = ' div.TermsFooter_terms_footer__9tugK';
   CookiePolicy = 'div.TermsFooter_terms_footer__9tugK > a:nth-child(2)';
   Privacy = 'div.TermsFooter_terms_footer__9tugK > a:nth-child(3)';
   Terms = 'div.TermsFooter_terms_footer__9tugK > a:nth-child(4)'; 

   PrivacyHeader = 'h1';
   TermsHeader = 'h1';
   MyLearning_Header = '.MainHeader_mainHeaderTitle__MVKOf';
}

module.exports = new LoginScreen();