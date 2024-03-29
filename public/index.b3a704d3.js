// Popup effect
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>{
    observer.observe(el);
});
function goToMainPage() {
    window.location.href = "https://ancvitko.github.io";
}

//# sourceMappingURL=index.b3a704d3.js.map
