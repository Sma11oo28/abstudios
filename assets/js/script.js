document.addEventListener('DOMContentLoaded', () => {
    import('https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm').then(({ default: KeenSlider }) => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 1.5,
                        spacing: 32,
                    },
                },
            },
        });

        // Swapping event listeners for the correct direction
        document.getElementById('keen-slider-previous').addEventListener('click', () => keenSlider.next()); // Swapped to next()
        document.getElementById('keen-slider-next').addEventListener('click', () => keenSlider.prev()); // Swapped to prev()

        document.getElementById('keen-slider-previous-desktop').addEventListener('click', () => keenSlider.next()); // Swapped to next()
        document.getElementById('keen-slider-next-desktop').addEventListener('click', () => keenSlider.prev()); // Swapped to prev()
        
    }).catch(err => console.error('KeenSlider failed to load:', err));
});
