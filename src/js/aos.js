window.addEventListener('load', () => {
    import('aos').then((AOS) => {
        import('aos/dist/aos.css'); 
        AOS.init({
            duration: 800,
            once: true,
            disable: "mobile"
        });
    });
});