import React  from 'react'
import {WaterMeterContainer,ElectricityMeterContainer }from '../../Components'

const Stats = ()=> {
    import os
import random
import numpy as np
import cv2

# Kirsch masks for eight directions
kirsch_masks = [
    np.array([
        [5, 5, 5],
        [-3, 0, -3],
        [-3, -3, -3]
    ]),
    np.array([
        [5, 5, -3],
        [5, 0, -3],
        [-3, -3, -3]
    ]),
    np.array([
        [5, -3, -3],
        [5, 0, -3],
        [5, -3, -3]
    ]),
    np.array([
        [-3, -3, -3],
        [5, 0, -3],
        [5, 5, -3]
    ]),
    np.array([
        [-3, -3, -3],
        [-3, 0, -3],
        [5, 5, 5]
    ]),
    np.array([
        [-3, -3, 5],
        [-3, 0, 5],
        [-3, -3, 5]
    ]),
    np.array([
        [-3, 5, 5],
        [-3, 0, 5],
        [-3, -3, -3]
    ]),
    np.array([
        [5, 5, 5],
        [-3, 0, 5],
        [-3, -3, -3]
    ])
]

def extract_ldp_features(image_path, k):
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    _, binary_image = cv2.threshold(image, 2**(8-k), 255, cv2.THRESH_BINARY)
    
    feature_vectors = []
    for mask in kirsch_masks:
        filtered_image = cv2.filter2D(binary_image, -1, mask)
        feature_vector = filtered_image.flatten()
        feature_vectors.append(feature_vector)
    
    return np.array(feature_vectors)

def generate_feature_sets(dataset_folder, k_values, num_samples):
    feature_sets = {}
    
    for k in k_values:
        feature_sets[f"FaceFeature{k}"] = []
    
    files = os.listdir(dataset_folder)
    random.shuffle(files)
    for filename in files[:num_samples]:
        if filename.endswith(".jpg") or filename.endswith(".png"):
            image_path = os.path.join(dataset_folder, filename)
            for k in k_values:
                feature_vectors = extract_ldp_features(image_path, k)
                feature_sets[f"FaceFeature{k}"].extend(feature_vectors)
    
    for k in k_values:
        feature_sets[f"FaceFeature{k}"] = np.array(feature_sets[f"FaceFeature{k}"])
    
    return feature_sets

def save_feature_sets(feature_sets, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    for feature_name, feature_set in feature_sets.items():
        output_file = os.path.join(output_folder, f"{feature_name}.txt")
        with open(output_file, 'w') as file:
            for feature_vector in feature_set:
                file.write(' '.join(str(val) for val in feature_vector))
                file.write('\n')

# Set the dataset folder path, k values, number of samples, and output folder
dataset_folder = r"C:\Users\Student\OneDrive - University of Kwazulu-Natal\Desktop\TestImage"
k_values = [3, 4, 5]
num_samples = 100  # Specify the number of samples to be used
output_folder = r"C:\Users\Student\OutputFolder"

# Generate feature sets
feature_sets = generate_feature_sets(dataset_folder, k_values, num_samples)

# Save feature sets to separate text files
save_feature_sets(feature_sets, output_folder)
  
 
   return (
  <>
    <WaterMeterContainer />
    <ElectricityMeterContainer />
  </>
   )

}

export default Stats