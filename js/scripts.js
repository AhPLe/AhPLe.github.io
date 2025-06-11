/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

//updated vibe coding - 5-19-25
window.addEventListener('DOMContentLoaded', event => {

    // Function to calculate the height of the fixed navbar
    function calculateNavbarHeight() {
        const navbar = document.querySelector('.navbar');
        return navbar ? navbar.offsetHeight : 0;
    }

    // Function to initialize or refresh scrollspy
    function initScrollSpy() {
        const sideNav = document.body.querySelector('#sideNav');
        if (sideNav) {
            // Set the offset to the dynamically calculated height of the navbar
            const navbarHeight = calculateNavbarHeight();
            new bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: navbarHeight,
            });

            // Debugging: Log the current active section
            document.body.addEventListener('activate.bs.scrollspy', function (e) {
                console.log('Active section:', e.target.querySelector('.active').getAttribute('href'));
            });
        }
    }

    // Initialize scrollspy
    initScrollSpy();

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Recalculate and reinitialize scrollspy on window resize
    window.addEventListener('resize', function() {
        initScrollSpy();
    });
});


// //further vibe coding to automatically adjust the scrollspy offset based on the height of the navbar
// window.addEventListener('DOMContentLoaded', event => {

//     // Function to calculate the height of the fixed navbar
//     function calculateNavbarHeight() {
//         const navbar = document.querySelector('.navbar');
//         return navbar ? navbar.offsetHeight : 0;
//     }

//     // Activate Bootstrap scrollspy on the main nav element
//     const sideNav = document.body.querySelector('#sideNav');
//     if (sideNav) {
//         // Set the offset to the dynamically calculated height of the navbar
//         const navbarHeight = calculateNavbarHeight();
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#sideNav',
//             offset: navbarHeight,
//         });

//         // Debugging: Log the current active section
//         document.body.addEventListener('activate.bs.scrollspy', function (e) {
//             console.log('Active section:', e.target.querySelector('.active').getAttribute('href'));
//         });
//     }

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });


// //vibe coding code
// window.addEventListener('DOMContentLoaded', event => {

//     // Activate Bootstrap scrollspy on the main nav element
//     const sideNav = document.body.querySelector('#sideNav');
//     if (sideNav) {
//         // Set the offset to the height of your fixed navbar
//         const navbarHeight = 74; // Replace with the actual height of your navbar
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#sideNav',
//             offset: navbarHeight,
//         });

//         // Debugging: Log the current active section
//         document.body.addEventListener('activate.bs.scrollspy', function (e) {
//             console.log('Active section:', e.target.querySelector('.active').getAttribute('href'));
//         });
//     }

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });



//old code
// window.addEventListener('DOMContentLoaded', event => {

//     // Activate Bootstrap scrollspy on the main nav element
//     const sideNav = document.body.querySelector('#sideNav');
//     if (sideNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#sideNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });
