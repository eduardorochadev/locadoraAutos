// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navMobile = document.querySelector('.nav-mobile');

//     menuToggle.addEventListener('click', function() {
//         // Alterna a classe 'active' no botão hambúrguer
//         menuToggle.classList.toggle('active');
        
//         // Alterna a classe 'active' no menu de navegação móvel
//         navMobile.classList.toggle('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão do menu (hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Seleciona a navegação móvel (o menu que abre)
    const navMobile = document.querySelector('.nav-mobile');

    // Adiciona um evento de "clique" ao botão do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' no botão (para animar o 'X')
        menuToggle.classList.toggle('active');
        
        // Alterna a classe 'active' na navegação (para mostrar/esconder o menu)
        navMobile.classList.toggle('active');
    });
});