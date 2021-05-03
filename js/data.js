const initialCards = [
    {
      title: "Байкал",
      src:"./images/baikal.jpg",
    },
    {
      title: "Эрмитаж",
      src:"./images/ermitazh.jpg",
    },
    {
      title: "Кижи",
      src:"./images/kizhi.jpg",
    },
    {
      title: "Родина-мать",
      src:"./images/rodinamother.jpg",
    },
    {
      title: "Озеро Джека Лондона",
      src:"./images/card-ozero_dzeka_londona.jpg",
    },
    {
      title: "Церковь Георгия Победоносца",
      src:"./images/georgiy.jpg",
    },
  ];


 const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-btn",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  };

  export {initialCards, validationConfig}