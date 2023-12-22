const data = {
  // Вставте JSON-дані сюди
}

// Завантажте JSON з файлу асинхронно
async function loadJSON() {
  try {
    const response = await fetch('array-methods.json')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error loading JSON:', error)
  }
}

loadJSON().then((data) => {
  const tableBody = document.querySelector('tbody')

  data.methods.forEach((method) => {
    const row = tableBody.insertRow()
    row.innerHTML = `
			
			<td><a href=${method.mdnUrl} target='_blank'>${method.name}</a></td>   
			<td>${method.returns}</td>
			<td>${method.description}</td>
			<td>${method.example}</td>
	`
    if (method.mutating) {
      row.classList.add('mutating')
    }
  })
})
