
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
window.onload = function () {
    document.querySelector('.animated-text').classList.add('show');
};


const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.backgroundColor = '#20B2AA';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.zIndex = '1000';
scrollToTopBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const sections = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    
    alert('Thank you for your message, ' + name + '!');
    this.reset(); 
});
function toggleContent(event) {
    event.preventDefault(); 
    const hiddenContent = event.target.nextElementSibling; 
    hiddenContent.classList.toggle('hidden'); 
}

window.onload = function() {
    const textElement = document.querySelector('.animated-text');
    textElement.classList.add('fade-in');
};

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width; 
        bar.style.width = '0%'; 
        setTimeout(() => {
            bar.style.width = targetWidth; 
        }, 50); 
    });
}

document.getElementById('toggleTechnical').onclick = function() {
    document.getElementById('skillsContainer').classList.remove('hidden');
    document.getElementById('technicalSkills').classList.remove('hidden');
    document.getElementById('communicationSkills').classList.add('hidden');
    animateProgressBars(); 
};
document.getElementById('toggleCommunication').onclick = function() {
    document.getElementById('skillsContainer').classList.remove('hidden');
    document.getElementById('communicationSkills').classList.remove('hidden');
    document.getElementById('technicalSkills').classList.add('hidden');
    animateProgressBars(); // Call the function to animate
};

function sendMail() { 
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_d4w5axr", "template_o88a34l", params).then(alert("Email sent!!!"));
}


