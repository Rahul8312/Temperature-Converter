

let cInput = document.getElementById('Celcius');
  let fInput = document.getElementById('Fahrenheit');
  let kInput = document.getElementById('Kelvin');
  let clearBtn = document.getElementById('btn');


clearBtn.addEventListener('click', function () {
  cInput.value = '';
  fInput.value = '';
  kInput.value = '';
});
            
cInput.addEventListener('input', function () {
  let ctemp = parseFloat(cInput.value);
  let ftemp = (ctemp * 9 / 5) + 32;
  let ktemp = ctemp + 273.15;
  fInput.value = ftemp.toFixed(2);
  kInput.value = ktemp.toFixed(2);
});
        
fInput.addEventListener('input', function () {
  let ftemp = parseFloat(fInput.value);
  let ctemp = (ftemp - 32) * 5 / 9;
  let ktemp = (ftemp - 32) * 5 / 9 + 273.15;
  cInput.value = ctemp.toFixed(2);
  kInput.value = ktemp.toFixed(2);
});
        
kInput.addEventListener('input', function () {
  let ktemp = parseFloat(kInput.value);
  let ctemp = ktemp - 273  
  let ftemp = (ctemp * 9 / 5) + 32;
  cInput.value = ctemp.toFixed(2);
  fInput.value = ftemp.toFixed(2);
});
        
