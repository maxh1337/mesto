import baikal from '../images/baikal.jpg'
import ermitazh from '../images/ermitazh.jpg'
import kizhi from '../images/kizhi.jpg'
import rodinamother from '../images/rodinamother.jpg'
import ozerodjeka from '../images/card-ozero_dzeka_londona.jpg'
import georgiy from '../images/georgiy.jpg'


const initialCards = [
    {
      title: "Байкал",
      src: baikal
    },
    {
      title: "Эрмитаж",
      src: ermitazh
    },
    {
      title: "Кижи",
      src: kizhi
    },
    {
      title: "Родина-мать",
      src: rodinamother
    },
    {
      title: "Озеро Джека Лондона",
      src: ozerodjeka
    },
    {
      title: "Церковь Георгия Победоносца",
      src: georgiy
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