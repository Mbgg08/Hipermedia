document.getElementById('mealForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const calories = parseFloat(document.getElementById('calories').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const proteins = parseFloat(document.getElementById('proteins').value);
    const fats = parseFloat(document.getElementById('fats').value);

    // Sumando los valores a los totales actuales
    const totalCalories = document.getElementById('totalCalories');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalProteins = document.getElementById('totalProteins');
    const totalFats = document.getElementById('totalFats');

    totalCalories.textContent = (parseFloat(totalCalories.textContent) + calories).toFixed(2);
    totalCarbs.textContent = (parseFloat(totalCarbs.textContent) + carbs).toFixed(2);
    totalProteins.textContent = (parseFloat(totalProteins.textContent) + proteins).toFixed(2);
    totalFats.textContent = (parseFloat(totalFats.textContent) + fats).toFixed(2);

    // Limpiar el formulario después de agregar el alimento
    document.getElementById('mealForm').reset();
});