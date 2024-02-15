# Suppler App

## Overview
This application utilizes a React frontend and a Flask backend to predict skin conditions using the MobileNetV2 machine learning model. Users can upload skin images, and the app will provide instant predictions.

## Structure
- `frontend`: Contains the React application.
- `backend`: Houses the Flask API and the MobileNetV2 model.
- `data_science/DDI_Dataset`: Dataset used for training the model.

## Getting Started

### Prerequisites
- Node.js (React dependencies)
- Python 3 (Flask and ML model dependencies)

### Installation

#### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

Navigate to `http://localhost:3000` to access the React frontend.

## Usage
Upload an image through the React app interface, and receive a skin condition prediction powered by the Flask API using the MobileNetV2 model.

## Technologies
- **Frontend**: React
- **Backend**: Flask
- **ML Model**: MobileNetV2

## Contributing
We encourage public contributions! 
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## Contact
- Aroma Atieno - [aroma@uni.minerva.edu](mailto:aroma@uni.minerva.edu)





