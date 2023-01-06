// BAR - ITEMS IN TOP
var items = document.querySelector('.items');
var openItems = document.querySelector('.bar');
var positionFixed = 'position-fixed';
openItems.addEventListener('click', () => {
    if (items.style.display === "block") {
        items.style.display = "none";
        console.log("Closed bar");
    } else {
        items.style.display = "block";
        openItems.classList.add(positionFixed)
        console.log("Opening bar")
    }
});

// LINK - SOCIAL NETWORKS
var github = document.querySelector('.link-github');
var linkedin = document.querySelector('.link-linkedin');
var insta = document.querySelector('.link-instagram');
var codepen = document.querySelector('.link-codepen');

github.addEventListener('click', () => {
    window.open("https://github.com/JakkiFx", "_blank");
});
linkedin.addEventListener('click', () => {
    window.open("https://www.linkedin.com/mwlite/in/jackciel-felix-251a9a237", "_blank");
});
insta.addEventListener('click', () => {
    window.open("https://www.instagram.com/jakki_fx/", "_blank");
});
codepen.addEventListener('click', () => {
    window.open("https://codepen.io/jackcielf", "_blank");
});

// LINKS - PROJECTS
const project_codepen_calculator = document.querySelector(".img-calc");
const project_codepen_game = document.querySelector('.img-proj');

project_codepen_calculator.addEventListener('click', () => {
    window.open("https://codepen.io/jackcielf/pen/qBowgLp", "_blank");
});
project_codepen_game.addEventListener('click', () => {
    window.open("https://codepen.io/jackcielf/pen/Poeodqx", "_blank");
});

// ANIMATION - SHOW ELEMENTS
const target = document.querySelectorAll('[item-animation]');
const animation = 'animate';

window.addEventListener('scroll', animateScroll);

function animateScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
    target.forEach((element) => {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animation);
        } else {
            element.classList.remove(animation);
        }
    });
}

// SCROLL PAGE WITH BEHAVIOR (for any browser)
const menuItems = document.querySelectorAll('.items a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
}

function scrollToPosition(to) {
    smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function 
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); 
};

// LOAD PAGE
function fadeOut() {
    const loaderWrapper = document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}
window.addEventListener('load', fadeOut);

// EVENT SHOW POP-UP - About me
var hover_years = document.querySelector('.hover-years');
var hover_profission = document.querySelector('.hover-profission');
var hover_naturalness = document.querySelector('.hover-naturalness');
var hover_city = document.querySelector('.hover-city');

hover_years.addEventListener('mouseover', mouseover_years);
hover_years.addEventListener('mouseout', mouseout_years);
hover_profission.addEventListener('mouseover', mouseover_profission);
hover_profission.addEventListener('mouseout', mouseout_profission);
hover_naturalness.addEventListener('mouseover', mouseover_naturalness);
hover_naturalness.addEventListener('mouseout', mouseout_naturalness);
hover_city.addEventListener('mouseover', mouseover_city);
hover_city.addEventListener('mouseout', mouseout_city);


function mouseover_years() {
    hover_years.innerText = "I've 17 years old";
}

function mouseout_years() {
    hover_years.innerText = "YEARS OLD";
}

function mouseover_profission() {
    hover_profission.innerText = "I'm student";
}

function mouseout_profission() {
    hover_profission.innerText = "PROFISSION";
}

function mouseover_naturalness() {
    hover_naturalness.innerText = "Ceará";
}

function mouseout_naturalness() {
    hover_naturalness.innerText = "NATURALNESS";
}

function mouseover_city() {
    hover_city.innerText = "Paraipaba";
}

function mouseout_city() {
    hover_city.innerText = "CITY";
}

// 
var hover_status = document.querySelector('.hover-status');
var hover_course = document.querySelector('.hover-course');
var hover_country = document.querySelector('.hover-country');

hover_status.addEventListener('mouseover', mouseover_status);
hover_status.addEventListener('mouseout', mouseout_status);
hover_course.addEventListener('mouseover', mouseover_course);
hover_course.addEventListener('mouseout', mouseout_course);
hover_country.addEventListener('mouseover', mouseover_country);
hover_country.addEventListener('mouseout', mouseout_country);

function mouseover_status() {
    hover_status.innerText = "Top 100 best high scholl";
}

function mouseout_status() {
    hover_status.innerText = "STATUS";
}

function mouseover_course() {
    hover_course.innerText = "Information Technology";
}

function mouseout_course() {
    hover_course.innerText = "COURSE";
}

function mouseover_country() {
    hover_country.innerText = "Brasil";
}

function mouseout_country() {
    hover_country.innerText = "COUNTRY";
}

// EVENT MOVE MOUSE
var eventmove = document.querySelector('.eventmove');
var dom = document.querySelector('.DOM');
var circle_invisible = 'zero_opacity';

dom.addEventListener('mousemove', (e) => {
    eventmove.style.left = e.pageX + "px";
    eventmove.style.top = e.pageY + "px";

    setTimeout(function () {
    if (e.pageX == '100' && e.pageY == '100') {
        eventmove.classList.add(circle_invisible);
    } else {
        eventmove.classList.remove(circle_invisible);
    }
}, 5000);
});
