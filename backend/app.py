# backend/app.py

# Import the necessary libraries
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import io

# Import get_model function from model.py
from model1 import get_model, disease_to_index, index_to_disease

# Load your trained model
num_classes = len(disease_to_index)  # Get the number of classes from the disease_to_index mapping
model = get_model(num_classes)
model.load_state_dict(torch.load('DDI_model.pth', map_location=torch.device('cpu')))
model.eval()


app = Flask(__name__)
CORS(app)



# Define the transformation for input images
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    file = request.files['image']
    img_bytes = file.read()
    img = Image.open(io.BytesIO(img_bytes))
    # Convert image to RGB if not already
    if img.mode != 'RGB':
        img = img.convert('RGB')

    img = transform(img).unsqueeze(0)  # transform is the same as used during training

    with torch.no_grad():
        outputs = model(img)
        _, predicted = torch.max(outputs, 1)  # Find the index of the class with the highest probability
        predicted_class_index = predicted.item()
        predicted_class_name = index_to_disease[predicted_class_index]  # Convert index to class name

    return jsonify({'prediction': predicted_class_name})

if __name__ == '__main__':
    app.run(debug=True)
