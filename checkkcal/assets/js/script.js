const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function handleSubmit(event) {
  event.preventDefault();

  const weightInput = getInputNumberValue('weight')
  const ageInput = getInputNumberValue('age')
  const heightInput = getInputNumberValue('height')
  const genderInput = getSelectedValue('gender')
  const activityInput = getSelectedValue('activity_level')

  const tmb = Math.round(
    genderInput === 'female'
      ? (655 + (9.6 * weightInput) + (1.8 * heightInput) - (4.7 * ageInput))
      : (66 + (13.7 * weightInput) + (5 * heightInput) - (6.8 * ageInput))
  )

  const maintenance = Math.round(tmb * activityInput);
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  const layout = `
    <h2 class="title is-4 has-text-dark">Aqui está o resultado:</h2>

    <div>

        <div class="card py-2 px-5 mx-6 my-1 has-background-dark has-text-white">Seu metabolismo basal é de ${tmb} Kcal</div>
        
        <div class="card py-2 px-5 mx-6 my-1 has-background-dark has-text-white">Para manter seu peso você precisa consumir em média ${maintenance} Kcal</div>
        
        <div class="card py-2 px-5 mx-6 my-1 has-background-dark has-text-white">Para perder peso você precisa consumir em média ${loseWeight} Kcal</div>
        
        <div class="card py-2 px-5 mx-6 my-1 has-background-dark has-text-white">Para ganhar peso você precisa consumir em média ${gainWeight} Kcal</div>
        


    </div>
  `

  const result = document.getElementById('result')

  result.innerHTML = layout
}
