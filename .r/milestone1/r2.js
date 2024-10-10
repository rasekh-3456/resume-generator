// Toggle Skills Section
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skillsSection');

if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', function() {
        if (skillsSection) {
            skillsSection.classList.toggle('active');
        }
    });
}

// Toggle Certifications Section
const toggleCertificationsButton = document.getElementById('toggleCertifications');
const certificationsSection = document.getElementById('certificationsSection');

if (toggleCertificationsButton) {
    toggleCertificationsButton.addEventListener('click', function() {
        if (certificationsSection) {
            certificationsSection.classList.toggle('active');
        }
    });
}
