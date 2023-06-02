window.addEventListener('DOMContentLoaded', (event) => {
    const widgetDiv = document.querySelector('.widget')
    const otherDemosDiv = document.querySelector('.other-demos')
    const demo = localStorage.getItem('demo')
    const allDemos = localStorage.getItem('allDemos')

    if (demo) {
        widgetDiv.innerHTML = `<iframe 
                                    src="https://dataidea-${demo}.hf.space/   " 
                                    frameborder="0"
                                    class="rounded-lg"
                                    width="100%"
                                    height="450">
                                </iframe>
                            `
        // localStorage.removeItem('demo')
        // localStorage.removeItem('allDemos')
    } else {
        widgetDiv.innerHTML = `<h4>Could not find you the demos, please come back later</h4>`
    }

    if (allDemos) {
        allDemosList = allDemos.split(',')
        console.log(allDemosList)
        allDemosList.forEach(demo => {
            const otherDemoDiv = document.createElement('div')
            otherDemoDiv.innerHTML = `
                <div class="col-lg-6">
                    <div class="item">
                        <a href="details.html" class="demo" id="${demo}">
                            <img src="assets/images/game-03.jpg" alt="" class="templatemo-item">
                            <h4>${demo}</h4><span>Free</span>
                            <ul>
                                <li><i class="fa fa-star"></i> 4.8</li>
                                <li><i class="fa fa-eye"></i> 2.3k</li>
                            </ul>
                        <a>
                    </div>
                </div>
            `
            otherDemosDiv.appendChild(otherDemoDiv)
        });

    }
})