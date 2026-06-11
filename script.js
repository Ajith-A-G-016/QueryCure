document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('site-footer');
    const whatsappWidget = document.getElementById('whatsapp-widget');
    
    if (footer && whatsappWidget) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    whatsappWidget.classList.remove('hidden');
                } else {
                    whatsappWidget.classList.add('hidden');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(footer);
    }

    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
});