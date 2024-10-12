document.addEventListener("DOMContentLoaded", function () {
    const productCopy = document.querySelector(".product-copy");
    const productImage = document.querySelector(".product-img img");
    const segmentHeight =
        (productCopy.scrollHeight - window.innerHeight) / 9;

        const imageUrls = [
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-01.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-02.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-03.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-04.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-05.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-06.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-07.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-08.webp",
            "https://cdn.meideinthe.cloud/entirestudios.com/content/player/498-daryna-wears-militia-jumpsuit-undyed/entire-studios-militia-jumpsuit-cream-daryna-01.webp",
        ];
    
        window.addEventListener("scroll", function () {
            let currentSegment = Math.floor(window.scrollY / segmentHeight) + 1;
            currentSegment = Math.min(9, Math.max(1, currentSegment));
            productImage.src = imageUrls[currentSegment - 1]; 
        });
        
});

document.addEventListener("DOMContentLoaded", function () {
    function randomCharacter() {
        const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        return chars[Math.floor(Math.random() * chars.length)]; 
    };

    function setInitialDataTextAttribute() {
        const paragraphs = document.querySelectorAll('p'); 
        paragraphs.forEach((p) => {
            const textContent = p.textContent.trim();
            if (!p.getAttribute('data-text') && textContent) {
                p.setAttribute('data-text', textContent); 
                p.textContent = "";
            }
        });
    };

    function revealedText(element) {
        const originalText = element.getAttribute('data-text');
        let revealedText = "";
        let index = 0;

        function revealNextLetter() {
            if (index < originalText.length) {
                revealedText += originalText[index];
                let tempText = revealedText;

                for (let i = index + 1; i < originalText.length; i++) {
                    tempText += randomCharacter();
                }

                element.textContent = tempText; 
                index++;

                setTimeout(revealNextLetter, 20);
            } else {
                element.textContent = originalText;
            }
        }
        revealNextLetter();
    }

    setInitialDataTextAttribute();

    const paragraphs = document.querySelectorAll('p[data-text]'); 
    paragraphs.forEach((p) => {
        revealedText(p);
    });
});

gsap.from(".nav", {
    duration: 0.5,
    y : -100,
    delay: 0,
});

gsap.from('.product-img',{
    duration: 0.5,
    x : -100,
    opacity: 0,
    delay: 0.5,

});

gsap.from('.product-vars img',{
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.75,
});

gsap.from('.product-size .size',{
    duration: 0.5,
    x: 50,
    opacity: 0,
    stagger: 0.025,
    delay: 1,
});

gsap.from('.size-btn',{
    duration: 0.3,
    scale: 0,
    delay: 1.25
});

gsap.from(".product",{
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.25,
    delay: 1.5

})
