# TabTrack
TabTrack is a super-simple JavaScript function for tracking which element currently has focus, while tabbing through elements on a web page

## TabTrack
```js
window.addEventListener('keyup', (e) => {

  if (e.key === 'Tab') {

    console.info('Current Tab Focus: ', document.activeElement);
  }
});
```
