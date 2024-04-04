function navigate(pagina) {
    const path = window.location.href.split("app");

    window.location.href = `${path[0]}app/pages/${pagina}`
}