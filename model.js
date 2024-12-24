let classifier;
let img;

function setup() {
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tQewPndtx/', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

document.getElementById("classifyButton").addEventListener("click", () => {
    const fileInput = document.getElementById("imageUpload");
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            img = document.getElementById("myImage");
            img.src = event.target.result;
            img.style.display = "block";
            classifyImage();
        };
        
        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image first.");
    }
});

function classifyImage() {
    classifier.classify(img, gotResult);
}

function gotResult(results, error) {
    if (error) {
        console.error(error);
        return;
    }
    
    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById("myResult").innerHTML = label + "<br>Confidence: " + confidence + "%";
}

// Initialize the model when the page loads
window.onload = setup;