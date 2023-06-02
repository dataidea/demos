window.addEventListener('DOMContentLoaded', (event) => {
    const demoLinks = document.querySelectorAll('.demo')
    allDemos = []
    demoLinks.forEach(link => {
        allDemos.push(link.id)
        link.addEventListener('click', (event) => {
            event.preventDefault();
            saveDemos(link.id, allDemos)
        })
    });
})

const saveDemos = (demo, allDemos) => {
    localStorage.setItem('demo', demo);
    localStorage.setItem('allDemos', allDemos)
    window.location.href = 'details.html'
}