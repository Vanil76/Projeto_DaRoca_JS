function scrollDosItens() {
    const sections = document.querySelectorAll(".js-scroll")
    const windowTopo = window.innerHeight * 0.79
    //732.33 => 79% do tamanho da tela
    function scrollItem (){
        sections.forEach((item)=>{
            const itemTopo = item.getBoundingClientRect().top
            if (itemTopo <= windowTopo) {
                item.classList.add('animacao')                    
            }
        })
    }
    scrollItem ()        
    window.addEventListener('scroll', scrollItem)
}
scrollDosItens()

function scrollSuave() {    
    const links = document.querySelectorAll('a[href^="#"]')
    const sections = document.querySelectorAll('.js-linkSuave')

    function mostrar(index, event) {
        event.preventDefault()

        sections[index].scrollIntoView({
            behavior: "smooth",
            block: 'start',
        })
    /*     let topo = sections[index].getBoundingClientRect().top
        window.scrollTo({
            top: topo - 110,
            behavior: "smooth",
        }) */
    }
    links.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            mostrar(index, event)
        })    
    })
}
scrollSuave()