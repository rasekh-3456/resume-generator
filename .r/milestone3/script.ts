// script.ts
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

const displayName = document.getElementById('display-name') as HTMLHeadingElement;
const displayContact = document.getElementById('display-contact') as HTMLParagraphElement;
const displayProfilePic = document.getElementById('display-profile-pic') as HTMLImageElement;
const displayEducation = document.getElementById('display-education') as HTMLParagraphElement;
const displaySkills = document.getElementById('display-skills') as HTMLUListElement;
const displayExperience = document.getElementById('display-experience') as HTMLParagraphElement;

resumeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user input
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Display the data in the resume format
    displayName.textContent = name;
    displayContact.textContent = contact;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;

    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });

    // Handle the profile picture
    const profilePicFile = (document.getElementById('profile-pic') as HTMLInputElement).files[0];
    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayProfilePic.src = e.target.result as string;
        }
        reader.readAsDataURL(profilePicFile);
    }

    // Show the resume section
    resumeDisplay.style.display = 'block';
});
