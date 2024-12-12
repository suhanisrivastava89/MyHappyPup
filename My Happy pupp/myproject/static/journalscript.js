const moodOptions = document.querySelectorAll('.mood-option');
const saveButton = document.getElementById('save-button');
const moodList = document.getElementById('mood-list');
const notes = document.getElementById('notes');

// Mood Selector 

let selectedMood = null; // Variable to store the currently selected mood

moodOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove selected class from all mood options
    moodOptions.forEach(opt => opt.classList.remove('selected'));

    // Add selected class to the clicked mood option
    option.classList.add('selected');

    // Set the selected mood to the clicked mood option
    selectedMood = option.dataset.mood;

    // Update colors of mood options
    updateMoodColors();
  });
});

function updateMoodColors() {
  // Loop through mood options and update their colors based on selection
  moodOptions.forEach(option => {
    if (option.dataset.mood === selectedMood) {
      option.style.backgroundColor = getColorForMood(selectedMood);
    } else {
      option.style.backgroundColor = '#ffffff'; // Set background color to white for non-selected moods
    }
  });
}

function getColorForMood(mood) {
  // Return color based on selected mood
  switch (mood) {
    case 'happy':
      return '#facc1d';
    case 'calm':
      return '#90caf9';
    case 'neutral':
      return '#cccccc';
    case 'sad':
      return '#3897f0';
    case 'angry':
      return '#f44336';
    default:
      return '#ffffff';
  }
}

saveButton.addEventListener('click', () => {
    // Inside the saveButton.addEventListener('click', ...) function
const moodInput = document.getElementById('mood-input');
moodInput.value = selectedMood;

  const note = notes.value.trim();

  if (selectedMood) {
    const moodEntry = {
      mood: selectedMood,
      note: note,
    };
    // Add mood entry to mood history
    addMoodEntry(moodEntry);

    notes.value = ''; // Clear notes after saving
    selectedMood = null; // Reset selected mood
    updateMoodColors(); // Update colors of mood options
  } else {
    alert('Please select a mood');
  }
});

// Weather Selector 

const weatherOptions = document.querySelectorAll('.weather-option');
let selectedWeather = null; // Variable to store the currently selected weather

weatherOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all weather options
        weatherOptions.forEach(opt => opt.classList.remove('selected'));

        // Add selected class to the clicked weather option
        option.classList.add('selected');

        // Set the selected weather to the clicked weather option
        selectedWeather = option.dataset.weather;

        // Update colors of weather options
        updateWeatherColors();
    });
});

function updateWeatherColors() {
    // Loop through weather options and update their colors based on selection
    weatherOptions.forEach(option => {
        if (option.dataset.weather === selectedWeather) {
            option.style.backgroundColor = getColorForWeather(selectedWeather);
        } else {
            option.style.backgroundColor = '#ffffff'; // Set background color to white for non-selected weathers
        }
    });
}

function getColorForWeather(weather) {
    // Return color based on selected weather
    switch (weather) {
        case 'sunny':
            return '#ffe34c';
        case 'cloudy':
            return '#c0c0c0';
        case 'rainy':
            return '#4682b4';
        case 'snowy':
            return '#ffffff';
        case 'stormy':
            return '#808080';
        default:
            return '#ffffff';
    }
}

saveButton.addEventListener('click', () => {
    const note = notes.value.trim();

    if (selectedWeather) {
        const weatherEntry = {
            weather: selectedWeather,
            note: note,
        };
        // Add weather entry to weather history
        addWeatherEntry(weatherEntry);

        notes.value = ''; // Clear notes after saving
        selectedWeather = null; // Reset selected weather
        updateWeatherColors(); // Update colors of weather options
    } else {
        alert('Please select a weather');
    }
});

const peopleOptions = document.querySelectorAll('.people-option');
let selectedPeople = null; // Variable to store the currently selected type of people

peopleOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all people options
        peopleOptions.forEach(opt => opt.classList.remove('selected'));

        // Add selected class to the clicked people option
        option.classList.add('selected');

        // Set the selected type of people to the clicked option
        selectedPeople = option.dataset.people;

        // Update colors of people options
        updatePeopleColors();
    });
});

function updatePeopleColors() {
    // Loop through people options and update their colors based on selection
    peopleOptions.forEach(option => {
        if (option.dataset.people === selectedPeople) {
            option.style.backgroundColor = getColorForPeople(selectedPeople);
        } else {
            option.style.backgroundColor = '#ffffff'; // Set background color to white for non-selected types of people
        }
    });
}

function getColorForPeople(people) {
    // Return color based on selected type of people
    switch (people) {
        case 'friends':
            return '#87CEEB';
        case 'family':
            return '#90EE90';
        case 'partner':
            return '#FFC0CB';
        case 'others':
            return '#D3D3D3';
        case 'none':
            return '#FFA07A';
        default:
            return '#ffffff';
    }
}

saveButton.addEventListener('click', () => {
    const note = notes.value.trim();

    if (selectedPeople) {
        const peopleEntry = {
            people: selectedPeople,
            note: note,
        };
        // Add people entry to people history
        addPeopleEntry(peopleEntry);

        notes.value = ''; // Clear notes after saving
        selectedPeople = null; // Reset selected type of people
        updatePeopleColors(); // Update colors of people options
    } else {
        alert('Please select a type of people');
    }
});

const emotionOptions = document.querySelectorAll('.emotion-option');
let selectedEmotion = null; // Variable to store the currently selected emotion

emotionOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all emotion options
        emotionOptions.forEach(opt => opt.classList.remove('selected'));

        // Add selected class to the clicked emotion option
        option.classList.add('selected');

        // Set the selected emotion to the clicked emotion option
        selectedEmotion = option.dataset.emotion;

        // Update colors of emotion options
        updateEmotionColors();
    });
});

function updateEmotionColors() {
    // Loop through emotion options and update their colors based on selection
    emotionOptions.forEach(option => {
        if (option.dataset.emotion === selectedEmotion) {
            option.style.backgroundColor = getColorForEmotion(selectedEmotion);
        } else {
            option.style.backgroundColor = '#ffffff'; // Set background color to white for non-selected emotions
        }
    });
}

function getColorForEmotion(emotion) {
    // Return color based on selected emotion
    switch (emotion) {
        case 'joy':
            return '#ffd700';
        case 'love':
            return '#ff69b4';
        case 'laughter':
            return '#00bfff';
        case 'surprise':
            return '#ffa500';
        case 'sadness':
            return '#0000ff';
        case 'anger':
            return '#ff0000';
        case 'fear':
            return '#808080';
        case 'disgust':
            return '#00ff00';
        case 'relief':
            return '#ffff00';
        case 'contentment':
            return '#ff4500';
        case 'gratitude':
            return '#32cd32';
        case 'admiration':
            return '#9370db';
        case 'pride':
            return '#ff8c00';
        case 'guilt':
            return '#800080';
        case 'shame':
            return '#8b4513';
        default:
            return '#ffffff';
    }
}


// for Image Upload 
const fileInput = document.getElementById('file-input');
const cameraButton = document.getElementById('camera-button');
const uploadedImageContainer = document.getElementById('uploaded-image-container');
const uploadedImage = document.getElementById('uploaded-image');
const deleteButton = document.getElementById('delete-button');

function setupImageUpload() {
    fileInput.addEventListener('change', handleFileUpload);
    cameraButton.addEventListener('click', handleCameraCapture);
    deleteButton.addEventListener('click', handleDelete);
}

function handleFileUpload() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImageContainer.style.display = 'block'; // Show uploaded image container
            deleteButton.style.display = 'inline-block'; // Show delete button
        };

        reader.readAsDataURL(file);
    }
}

function handleCameraCapture() {
    const constraints = {
        video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            const mediaStreamTrack = mediaStream.getVideoTracks()[0];
            const imageCapture = new ImageCapture(mediaStreamTrack);
            
            imageCapture.takePhoto()
                .then(function(blob) {
                    const imgUrl = URL.createObjectURL(blob);
                    uploadedImage.src = imgUrl;
                    uploadedImageContainer.style.display = 'block'; // Show uploaded image container
                    deleteButton.style.display = 'inline-block'; // Show delete button
                })
                .catch(function(error) {
                    console.error('takePhoto() failed: ', error);
                });
        })
        .catch(function(error) {
            console.error('getUserMedia() error: ', error);
        });
}


function handleDelete() {
    uploadedImage.src = ''; // Clear the uploaded image
    uploadedImageContainer.style.display = 'none'; // Hide uploaded image container
    deleteButton.style.display = 'none'; // Hide delete button
}

setupImageUpload(); // Setup event listeners initially



function addMoodEntry(moodEntry) {
  // Add mood entry to mood history list
  const listItem = document.createElement('li');
  listItem.textContent = moodEntry.mood + (moodEntry.note ? ` - ${moodEntry.note}` : ''); // Include note if available
  moodList.appendChild(listItem);
}
