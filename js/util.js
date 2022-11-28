const showErrorAlert = (text) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.bottom = '0';
  alertContainer.style.zIndex = '9999';
  alertContainer.style.display = 'flex';
  alertContainer.style.justifyContent = 'center';
  alertContainer.style.alignItems = 'center';
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100vh';
  alertContainer.style.padding = '10px 15px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.backgroundColor = 'rgba(0,0,0,.9)';

  alertContainer.textContent = text;

  document.body.append(alertContainer);
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    alertContainer.remove();
    document.body.style.overflow = 'auto';
  }, 5000);
};

export {showErrorAlert};
