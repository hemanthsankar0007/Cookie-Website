// BMI Calculator functionality
(function() {
    const bmiForm = document.getElementById('bmi-form');
    const resultsSection = document.getElementById('results-section');
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    const clearButton = document.getElementById('clear-cart');

    // Show/hide results panel when clicking on health status
    cartInfo.addEventListener('click', function() {
        cart.classList.toggle('show-cart');
    });

    // Clear results
    clearButton.addEventListener('click', function(e) {
        e.preventDefault();
        clearResults();
    });

    // Handle form submission
    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBMI();
    });

    function calculateBMI() {
        // Get form values
        const name = document.getElementById('patient-name').value.trim();
        const age = parseInt(document.getElementById('age').value);
        const sex = document.getElementById('sex').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Validate inputs
        if (!name || !age || !sex || !weight || !height) {
            alert('Please fill in all fields.');
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Display results
        displayResults(name, age, sex, weight, height, bmi);
        
        // Show results section
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        // Update cart info
        updateCartInfo(bmi);
    }

    function displayResults(name, age, sex, weight, height, bmi) {
        const patientSummary = document.getElementById('patient-summary');
        const bmiDisplay = document.getElementById('bmi-display');
        const weightRecommendation = document.getElementById('weight-recommendation');

        // Display patient info
        patientSummary.innerHTML = `
            <div class="alert alert-info">
                <h4><i class="fas fa-user"></i> Patient: ${name}</h4>
                <p><strong>Age:</strong> ${age} years | <strong>Sex:</strong> ${sex.charAt(0).toUpperCase() + sex.slice(1)} | <strong>Weight:</strong> ${weight} kg | <strong>Height:</strong> ${height} cm</p>
            </div>
        `;

        // Determine BMI category and color
        let category, categoryClass, icon;
        if (bmi < 18.5) {
            category = 'Underweight';
            categoryClass = 'bmi-underweight';
            icon = 'fas fa-arrow-up';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
            categoryClass = 'bmi-normal';
            icon = 'fas fa-check-circle';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            categoryClass = 'bmi-overweight';
            icon = 'fas fa-exclamation-triangle';
        } else {
            category = 'Obese';
            categoryClass = 'bmi-obese';
            icon = 'fas fa-exclamation-circle';
        }

        // Display BMI result
        bmiDisplay.innerHTML = `
            <div class="bmi-result ${categoryClass}">
                <h2><i class="${icon}"></i> Your BMI: ${bmi.toFixed(1)}</h2>
                <h3>Category: ${category}</h3>
            </div>
        `;

        // Calculate and display weight recommendations
        const heightInMeters = height / 100;
        const idealWeightMin = 18.5 * heightInMeters * heightInMeters;
        const idealWeightMax = 24.9 * heightInMeters * heightInMeters;
        
        let recommendation = '';
        if (bmi < 18.5) {
            const weightToGain = idealWeightMin - weight;
            recommendation = `
                <div class="alert alert-primary">
                    <h5><i class="fas fa-arrow-up"></i> Weight Gain Recommendation</h5>
                    <p>You may benefit from gaining approximately <strong>${weightToGain.toFixed(1)} kg</strong> to reach a healthy weight range.</p>
                    <p><strong>Ideal weight range:</strong> ${idealWeightMin.toFixed(1)} - ${idealWeightMax.toFixed(1)} kg</p>
                    <div class="mt-3">
                        <h6>Healthy weight gain tips:</h6>
                        <ul>
                            <li>Eat nutrient-dense, calorie-rich foods</li>
                            <li>Include healthy fats like nuts, avocados, and olive oil</li>
                            <li>Strength training to build muscle mass</li>
                            <li>Consult a healthcare provider for personalized advice</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (bmi >= 25) {
            const weightToLose = weight - idealWeightMax;
            recommendation = `
                <div class="alert alert-warning">
                    <h5><i class="fas fa-arrow-down"></i> Weight Loss Recommendation</h5>
                    <p>You may benefit from losing approximately <strong>${weightToLose.toFixed(1)} kg</strong> to reach a healthy weight range.</p>
                    <p><strong>Ideal weight range:</strong> ${idealWeightMin.toFixed(1)} - ${idealWeightMax.toFixed(1)} kg</p>
                    <div class="mt-3">
                        <h6>Healthy weight loss tips:</h6>
                        <ul>
                            <li>Create a moderate calorie deficit (300-500 calories/day)</li>
                            <li>Focus on whole foods: fruits, vegetables, lean proteins</li>
                            <li>Regular physical activity (150 minutes/week moderate exercise)</li>
                            <li>Stay hydrated and get adequate sleep</li>
                            <li>Consult a healthcare provider for personalized advice</li>
                        </ul>
                    </div>
                </div>
            `;
        } else {
            recommendation = `
                <div class="alert alert-success">
                    <h5><i class="fas fa-check-circle"></i> Maintain Your Weight</h5>
                    <p>Congratulations! Your weight is in the healthy range.</p>
                    <p><strong>Current weight:</strong> ${weight} kg | <strong>Healthy range:</strong> ${idealWeightMin.toFixed(1)} - ${idealWeightMax.toFixed(1)} kg</p>
                    <div class="mt-3">
                        <h6>Tips to maintain your healthy weight:</h6>
                        <ul>
                            <li>Continue eating a balanced diet</li>
                            <li>Stay active with regular exercise</li>
                            <li>Monitor your weight regularly</li>
                            <li>Get adequate sleep and manage stress</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        weightRecommendation.innerHTML = recommendation;
    }

    function updateCartInfo(bmi) {
        const itemCount = document.getElementById('item-count');
        const itemTotal = document.querySelector('.item-total');
        const cartTotal = document.getElementById('cart-total');
        
        // Update the display elements
        itemCount.textContent = 'BMI:';
        itemTotal.textContent = bmi.toFixed(1);
        cartTotal.textContent = bmi.toFixed(1);
        
        // Show results in cart
        document.getElementById('results-container').style.display = 'flex';
        document.getElementById('results-buttons').style.display = 'flex';
    }

    function clearResults() {
        // Reset form
        bmiForm.reset();
        
        // Hide results
        resultsSection.style.display = 'none';
        document.getElementById('results-container').style.display = 'none';
        document.getElementById('results-buttons').style.display = 'none';
        
        // Reset cart info
        document.getElementById('item-count').textContent = 'Your';
        document.querySelector('.item-total').textContent = 'Assessment';
        document.getElementById('cart-total').textContent = '0.0';
        
        // Hide cart
        cart.classList.remove('show-cart');
        
        // Scroll to calculator
        document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
    }
})();