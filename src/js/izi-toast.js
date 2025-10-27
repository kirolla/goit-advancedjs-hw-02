// izi-toast.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Ошибки
export const errorTost = msg => {
  return iziToast.show({
    position: 'topRight',
    timeout: 4000,
    close: false,
    progressBar: false,
    backgroundColor: '#fd5548', 
    title: '',
    icon: false,
    message: `
      <div class="custom-error-toast" style="color: #fff;">
        <span class="toast-icon"></span>
        <span class="toast-message">${msg}</span>
      </div>
    `,
  });
};

// Успех
export const successTost = msg => {
  return iziToast.show({
    position: 'topRight',
    timeout: 4000,
    close: false,
    progressBar: false,
    backgroundColor: '#3bcd8d', 
    title: '',
    icon: false,
    message: `
      <div class="custom-success-toast" style="color: #fff;">
        <span class="toast-icon"></span>
        <span class="toast-message">${msg}</span>
      </div>
    `,
  });
};
