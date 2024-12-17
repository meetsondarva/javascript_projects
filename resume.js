function toggleDetails() {
    const details = document.getElementById('project-details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}