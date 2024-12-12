const moodContainer = document.getElementById('mood-container'); 

const addMoodButton = document.getElementById('add-mood'); 

const moods = ['😊', '😐', '😢', '😡', '😴']; 



addMoodButton.addEventListener('click', () => { 

    const randomMood = moods[Math.floor(Math.random() * moods.length)]; 

    const moodElement = document.createElement('span'); 

    moodElement.textContent = randomMood; 

    moodContainer.appendChild(moodElement); 

}); 