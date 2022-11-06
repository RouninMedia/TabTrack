window.addEventListener('keyup', (e) => {

  if (e.key === 'Tab') {

    console.info('Current Tab Focus: ', document.activeElement);
  }
});
