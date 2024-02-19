
"""
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
model.load_state_dict(torch.load('DDI1_model.pth', map_location=torch.device('cpu')))
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

    img = transform(img).unsqueeze(0)  # Apply the same transformations as during training

    with torch.no_grad():
        outputs = model(img)
        probabilities = torch.nn.functional.softmax(outputs, dim=1)  # Convert to probabilities
        top_probs, top_idxs = torch.topk(probabilities, 3)  # Get top 3 probabilities and their indices

        predictions = []
        for i in range(top_idxs.size(1)):
            idx = top_idxs[0, i].item()
            prob = top_probs[0, i].item()
            predictions.append({
                'class_name': index_to_disease[idx],
                'probability': prob
            })

    return jsonify({'prediction': predictions})

if __name__ == '__main__':
    app.run(debug=False)


"""


from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import io
import os  # Import os module

# Import get_model function from model.py
from model1 import get_model, disease_to_index, index_to_disease

# Load your trained model
num_classes = len(disease_to_index)  # Get the number of classes from the disease_to_index mapping
model = get_model(num_classes)
model.load_state_dict(torch.load('DDI1_model.pth', map_location=torch.device('cpu')))
model.eval()



app = Flask(__name__, static_folder='../frontend/build', static_url_path='')


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

    img = transform(img).unsqueeze(0)  # Apply the same transformations as during training

    with torch.no_grad():
        outputs = model(img)
        probabilities = torch.nn.functional.softmax(outputs, dim=1)  # Convert to probabilities
        top_probs, top_idxs = torch.topk(probabilities, 3)  # Get top 3 probabilities and their indices

        predictions = []
        for i in range(top_idxs.size(1)):
            idx = top_idxs[0, i].item()
            prob = top_probs[0, i].item()
            predictions.append({
                'class_name': index_to_disease[idx],
                'probability': prob
            })

    return jsonify({'prediction': predictions})

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')



if __name__ == '__main__':
    app.run(debug=False)

