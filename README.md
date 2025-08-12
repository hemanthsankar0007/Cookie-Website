# HealthCheck Pro - BMI Calculator & Health Assessment

A modern, interactive health check-up website that calculates Body Mass Index (BMI) and provides personalized health recommendations.

## Features

### 🏥 Comprehensive Health Assessment
- **Patient Information Collection**: Name, age, sex, weight, and height input
- **BMI Calculation**: Accurate BMI calculation using the standard formula: weight(kg) / height(m)²
- **Health Categorization**: Classifies BMI into standard categories:
  - Underweight (BMI < 18.5)
  - Normal weight (BMI 18.5-24.9)
  - Overweight (BMI 25-29.9)
  - Obese (BMI ≥ 30)

### 📊 Personalized Recommendations
- **Weight Loss Guidance**: For overweight/obese patients with specific kg targets
- **Weight Gain Guidance**: For underweight patients with healthy weight gain tips
- **Maintenance Tips**: For patients in the healthy weight range
- **Health Tips**: Practical advice for diet, exercise, and lifestyle

### 🎨 Interactive & User-Friendly Design
- **Medical Theme**: Professional blue and green color scheme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Results Panel**: Toggle results display with navigation click
- **Form Validation**: Ensures all required fields are completed
- **Smooth Animations**: Scroll-to-section navigation and result displays

### 🔧 Technical Features
- **Modern Bootstrap Framework**: Responsive grid system and components
- **Clean JavaScript**: Modular BMI calculation and result display logic
- **Accessibility**: Proper form labels and semantic HTML
- **Cross-browser Compatible**: Works in all modern browsers

## How to Use

1. **Enter Patient Information**:
   - Fill in your name, age, and select your sex
   - Enter your weight in kilograms
   - Enter your height in centimeters

2. **Calculate BMI**:
   - Click the "Calculate BMI" button
   - Results will automatically scroll into view

3. **View Results**:
   - See your BMI value and category
   - Read personalized recommendations
   - Access the results panel by clicking the health status in the navigation

4. **Recalculate**:
   - Use "Clear Results" to reset the form
   - Enter new information for another calculation

## Deployment

The website is ready for deployment and can be hosted on any web server that serves static files:

- **GitHub Pages**: Simply enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the repository folder
- **Vercel**: Connect the GitHub repository
- **Apache/Nginx**: Upload files to web server directory

## File Structure

```
├── index.html              # Main HTML file with complete website
├── js/
│   ├── bmi-calculator.js   # BMI calculation and UI logic
│   ├── bootstrap.bundle.min.js  # Bootstrap JavaScript
│   └── jquery-3.3.1.min.js     # jQuery library
├── css/
│   ├── bootstrap.min.css   # Bootstrap CSS
│   ├── all.css            # Font Awesome icons
│   └── style.css          # Original styles (referenced for compatibility)
└── README.md              # This documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Health Disclaimer

This BMI calculator is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a healthcare provider for personalized medical guidance.

## License

This project is open source and available under the MIT License.