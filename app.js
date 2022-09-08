//select html elements
const sections = document.querySelectorAll('.section')
const selButtons = document.querySelectorAll('.controls')
const selButton = document.querySelectorAll('.control')
const content = document.querySelector('.main-content')

function PageTransition() {
    //Button click active class
    for(let i = 0; i < selButton.length; i++) {
        selButton[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Active class sections
    content.addEventListener('click', (e) => {
        //dataset refers to target data id 
        const id = e.target.dataset.id;
        if(id){
            //remove original screen
            selButtons.forEach((btn) => {
                btn.classList.remove('active')
            })
            // (removes bug) e.target.classList.add('active')
            //hide other sections 
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })

    //theme switch
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransition();