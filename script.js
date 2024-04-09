function pegarCod() {
    document.querySelectorAll(".tab-grid-content-header.tab-text").forEach(div => {
        let [, cod] = div.textContent.trim().split("|");
        if (cod) console.log(cod.trim());
    });
}