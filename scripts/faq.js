// FAQ Accordian
var accordion = document.getElementsByClassName("faq__question");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
       
        var panel = this.nextElementSibling;
        var isOpen = panel.style.display === "block";

        var allPanels = document.getElementsByClassName("faq__answer");
        var allIcons = document.querySelectorAll(".faq__question i");
        for (var j = 0; j < allPanels.length; j++) {
            allPanels[j].style.display = "none";
            allPanels[j].previousElementSibling.classList.remove("active");
            allPanels[j].parentElement.classList.remove("active");
            allIcons[j].classList.remove("rotate-icon");
        }

        
        if (!isOpen) {
            this.classList.add("active");
            this.parentElement.classList.add("active");
            panel.style.display = "block";
            this.querySelector("i").classList.add("rotate-icon");
        } else {
            
            panel.style.display = "none";
            this.classList.remove("active");
            this.parentElement.classList.remove("active");
            this.querySelector("i").classList.remove("rotate-icon");
        }
    });
}
