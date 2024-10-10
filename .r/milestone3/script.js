// script.ts
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var displayName = document.getElementById('display-name');
var displayContact = document.getElementById('display-contact');
var displayProfilePic = document.getElementById('display-profile-pic');
var displayEducation = document.getElementById('display-education');
var displaySkills = document.getElementById('display-skills');
var displayExperience = document.getElementById('display-experience');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user input
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value;
    // Display the data in the resume format
    displayName.textContent = name;
    displayContact.textContent = contact;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    // Handle the profile picture
    var profilePicFile = document.getElementById('profile-pic').files[0];
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayProfilePic.src = e.target.result;
        };
        reader.readAsDataURL(profilePicFile);
    }
    // Show the resume section
    resumeDisplay.style.display = 'block';
});
