/// <reference types="cypress" /> 

export default class AmatriumElements {

    //Login screen elements
    static privacyPolicyOpenButton = '.chakra-stack > :nth-child(1)';
    static privacyPolicyCloseButton = '.chakra-modal__close-btn';
    static termOpenButton = '.chakra-stack > :nth-child(2)';
    static termCloseButton = '.chakra-modal__close-btn';
    static emailAddressField = '#field-2';
    static passwordField = '#password';
    static passwordHideButton = '.chakra-input__right-element > .chakra-button';
    static privacyPolicyPanelHeader = '#chakra-modal--header-5';
    static loginButton = 'form > button.chakra-button';

    //Main screen elements 
    static mainScreen_Label = '.css-gmuwbf > .chakra-text';
    static mainScreen_Terms = '.chakra-stack > :nth-child(2) > .chakra-link'; 
    static mainScreen_Terms_Header = '#chakra-modal--header-24';
    static mainScreen_Terms_CloseButton = '.chakra-modal__close-btn';
    static mainScreen_Privacy = '.chakra-stack > :nth-child(1) > .chakra-link';
    static mainScreen_Privacy_Header = '#chakra-modal--header-24'; 
    static mainScreen_Privacy_CloseButton = '.chakra-modal__close-btn';
    static mainScreen_HeaderLogo = 'div.css-hrncnr';
    static mainScreen_SearchModuleButton 
    static mainScreen_PredictButton 
    static mainScreen_CompanyButton 
    static mainScreen_SearchButton 
    static mainScreen_SearchBox 
    static mainScreen_UnitConversionTable = '.css-1dqbl05 > :nth-child(1)' ;
    static mainScreen_UnitConversionTable_Header = '#chakra-modal--header-14';
    static mainScreen_UnitConversionTable_CloseButton = '.chakra-modal__footer > .chakra-button';

    static mainScreen_SendYourSuggestion = '.css-1dqbl05 > div > .chakra-button'; 
    static mainScreen_SendYourSuggestion_Header = '#chakra-modal--header-18'; 
    static mainScreen_SendYourSuggestion_SendButton = '.css-1xl7tdj';
    static mainScreen_SendYourSuggestion_CloseButton = '.css-vf2uxf';
    static mainScreen_SendYourSuggestion_TextBox = '#suggestion'; 
    static mainScreen_SendYourSuggestion_Feedback = '#field-26-feedback';
    static mainScreen_SendYourSuggestion_SuccessAlert = '#toast-4-title';
    
    static mainScreen_AskAmatriumExpert 
    static mainScreen_ChatBot 
    static mainScreen_MaterialSearchHeader
    static mainScreen_LogOutButton
    static mainScreen_HowItWorks  = '.css-1hc8ggd';
    static mainScreen_HowItWorks_Tooltips = '.introjs-tooltip-title'; 
    static mainScreen_HowItWorks_SkipButton = '.introjs-skipbutton';
    static mainScreen_HowItWorks_IntroductionVideo = '#chakra-modal--body-25 > div > video';
    static mainScreen_HowItWorks_IntroductionVideo_CloseButton = '.css-jhfvrr > button'; 
};

