var accordion = document.getElementsByClassName(
    "faq__question"); //seleciona todos os elementos com a classe e salva na variável 'accordion'
var i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        // Fecha todas as perguntas abertas e remove a classe de rotação do ícone
        var allPanels = document.getElementsByClassName("faq__answer");
        var allIcons = document.querySelectorAll(".faq__question i");
        for (var j = 0; j < allPanels.length; j++) {
            allPanels[j].style.display = "none";
            allPanels[j].previousElementSibling.classList.remove("active");
            allPanels[j].parentElement.classList.remove("active");
            allIcons[j].classList.remove("rotate-icon");
        }

        // Abre ou fecha a pergunta clicada e adiciona ou remove a classe de rotação do ícone
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.querySelector("i").classList.remove("rotate-icon");
        } else {
            panel.style.display = "block";
            this.querySelector("i").classList.add("rotate-icon");
        }
    });
}