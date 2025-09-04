  
  const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];

 
  let currentKeyIndex = 0;


  const keyElement = document.getElementById('key');


  function setRandomKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
  }


  document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === keys[currentKeyIndex]) {
      PNotify.success({
        text: 'Правильно! Натисни наступну клавішу!'
      });
      setRandomKey();
    } else {
      PNotify.error({
        text: `Помилка! Ти натиснув "${event.key}", а треба "${keys[currentKeyIndex]}".`
      });
    }
  });

 
  document.addEventListener('keypress', function(event) {
    event.preventDefault();
  });

 
  document.getElementById('newGameBtn').addEventListener('click', function() {
    setRandomKey();
    PNotify.info({
      text: 'Нова гра розпочата! Натисни правильну клавішу.'
    });
  });

 
  setRandomKey();