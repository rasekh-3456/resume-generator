// Toggle Skills Section
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsButton?.addEventListener('click', () => {
    skillsSection?.classList.toggle('active');
});

// Toggle Certifications Section
const toggleCertificationsButton = document.getElementById('toggleCertifications');
const certificationsSection = document.getElementById('certificationsSection');

toggleCertificationsButton?.addEventListener('click', () => {
    certificationsSection?.classList.toggle('active');
});
