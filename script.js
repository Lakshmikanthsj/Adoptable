
fetch('data.json')
  .then(response =>{
    if (!response.ok) {
      throw new Error('No Network respoonse');
    }
      return response.json()
  }) 

  .then(data => {
    displayData(data); 
  })

  .catch(error => {
    console.error('Fetch error:', error); 
  });

function displayData(data) {
  const output = document.getElementById('output');
  output.innerHTML = data.map(pet => `
    <div class="pet">
     <div class="names">
      <h2>${pet.name}</h2>
     </div>
      <img src="${pet.image}" alt="${pet.name}">
      <div class="details">
       <h3>Pet ID: ${pet.ID}</h3>
       <p> ${pet.desc}</p>
       <p>Pet type: ${pet.type}</p>
       <p>Species: ${pet.species}</p>
       <p>Age: ${pet.age}</p>
       <p>Weight: ${pet.weight} kg/kgs</p>
       <p>Sex: ${pet.sex}</p>
      </div>
    </div>
  `).join('');
}
