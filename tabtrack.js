window.addEventListener('keyup', (e) => {

  if (e.key !== 'Tab') return;

  console.info('Current Tab Focus: ', document.activeElement);
});
