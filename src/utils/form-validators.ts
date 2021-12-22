export const resultFormValidators = {
  name: {
    required: "Поле обов'язкове",
    maxLength: { value: 15, message: 'Максимальна довжина 15 лiтер' },
    pattern: { value: /^[ЁёА-я ,.'-]+$/i, message: 'Лише кирилiвськi лiтери' },
  },
  email: {
    required: "Поле обов'язкове",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Введiть валiдний email',
    },
  },
  phone: {
    pattern: {
      value: /^\d+$/,
      message: 'Лише цифри',
    },
  },
};
