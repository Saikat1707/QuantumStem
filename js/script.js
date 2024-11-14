

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function checkDeviceAndViewport() {
    const alertElement = document.getElementById('desktopAlert');

    // Show alert if on mobile device or viewport width <= 600px
    if (isMobileDevice() || window.innerWidth <= 1000) {
        alertElement.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent interaction
    } else {
        alertElement.classList.remove('show');
        document.body.style.overflow = ''; // Allow interaction
    }
}

window.onload = function () {
    checkDeviceAndViewport(); // Check on page load
};

// Listen for resizing and re-check the viewport
window.onresize = function () {
    checkDeviceAndViewport();
};

// Function to handle alert closure
function closeAlert() {
    const alertElement = document.getElementById('desktopAlert');
    if (isMobileDevice() || window.innerWidth <= 1000) {
        alertElement.classList.add('show'); // Re-show alert if conditions still apply
        document.body.style.overflow = 'hidden';
    } else {
        alertElement.classList.remove('show'); // Otherwise, hide it
        document.body.style.overflow = '';
    }
}






document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all UnorderList links
    document.querySelectorAll('.UnorderList li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth scroll for homeText button link
    const homeButton = document.querySelector('.homeText button a');
    if (homeButton) {
        homeButton.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = homeButton.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Smooth scroll for LogoDiv link
    const logoLink = document.querySelector('.LogoDiv p a');
    if (logoLink) {
        logoLink.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = logoLink.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});




const sections = document.querySelectorAll('section');
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            var newId = id + "1"; 
            
            sections.forEach((section) => {
                var sectionId = section.getAttribute('id') + "1"; 
                document.getElementById(sectionId)?.classList.remove('active'); 
            });
            document.getElementById(newId)?.classList.add('active');
            console.log(id);
        }
    });
}, {
    threshold: 0.5 
});


sections.forEach((section) => {
    observer.observe(section);
});
const obj = document.getElementById('object');

gsap.to(obj,{
    rotate:360,
    duration:5,
    repeat:-1,
    yoyo:true,
    borderRadius:'50%',
    ease:'bounce.out'
    // ease: "elastic.out(1,0.3)",
})
// const aboutContainer = document.getElementById('about');

// aboutContainer.addEventListener('mousemove', function(dets) {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;

 
//     var percentageWidth = (dets.clientX / windowWidth) * 2 - 1;
//     var percentageHeight = (dets.clientY / windowHeight) * 2 - 1;

//     var rotateX = percentageHeight * 25; 
//     var rotateY = -percentageWidth * 25; 

//     obj.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// aboutContainer.addEventListener('mouseleave', function() {
//     gsap.to(obj, {
//         rotateX:0,
//         rotateY:0,
//         duration:1
//     });
// });

document.getElementById('home1').addEventListener('click',function(){
    
const tl=gsap.timeline()
tl.from(".LogoDiv p",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.1,
    
})
gsap.from(".UnorderList li",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.3
})
tl.from('.homeText h2',{
    opacity:0,
    y:-30,
    duration:1,
    ease: "elastic.out(1.5,0.2)"
})
gsap.from('.homeText p',{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.3
})
})

const tl=gsap.timeline()
tl.from(".LogoDiv p",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.1,
    
})
gsap.from(".UnorderList li",{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.3
})

tl.from('.homeText h2',{
    opacity:0,
    y:-30,
    duration:1,
    ease: "elastic.out(1.5,0.2)"
})
gsap.from('.homeText p',{
    opacity:0,
    y:-30,
    duration:1,
    delay:0.3
})
document.querySelector('.MainSectionContainer').addEventListener('mousemove',function(dets){
    gsap.to('.cursor',{
        x:dets.x,
        y:dets.y,
        opacity:1,
        duration:0.5
    })
})


DynamicClassList=['Robotics','DroneTech','Coding','Ai','ThreeDPainting','Astronomy']
DynamicAnimationList=['RoboticsAni1','DroneAni1','CodingAni1','AiAni1','AstroAni1','ThreeDAni1']
Navitems=document.querySelectorAll('.SideNavBarItems')
Navitems.forEach((item)=>{
    item.addEventListener('click',()=>{
        // text parts
            Navitems.forEach((item)=>{
                item.classList.remove('active2')
            })
            item.classList.add('active2')
            itemId="."+item.getAttribute('id')
            DynamicClassList.forEach((element)=>{
                 newElement="."+element
                document.querySelector(newElement).style.display='none'
                
             })
             CurriculumText=document.querySelector(itemId)
             CurriculumText.style.display='flex'
             gsap.from(CurriculumText,{
                opacity:0,
                y:-30,
                duration:0.6,
                delay:0.2,
                scrub:true
             })

        // animation parts 
        DynamicAnimationList.forEach((item)=>{
            newItem=document.querySelector(`.${item}`)
            newItem.style.display='none'
        })

        AnimationClass=item.getAttribute('data-animation')+"1"
        document.querySelector(`.${AnimationClass}`).style.display='flex'
        gsap.from(`.${AnimationClass}`,{
                opacity:0,
                y:-30,
                duration:0.6,
                delay:0.2,
        })

            
    })
})
gsap.to('.animationWalkingMen',{
    x:1600,
    duration:15,
    repeat:-1,
    ease:"none"
})