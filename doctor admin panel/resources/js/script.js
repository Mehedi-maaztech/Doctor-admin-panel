function toggle(){
    var left_nav = document.getElementById("left-nav");
    var right_content = document.getElementById("right-content");
    const menu_opts = document.querySelectorAll(".menu-opt");

    if (left_nav.classList.contains("menu-inactive")) {
        left_nav.classList.remove("menu-inactive");
        right_content.classList.remove("menu-inactive");
        right_content.classList.remove("active-blur");
        document.getElementById("menu-image").classList.remove("image-slide");
        setTimeout(function(){
            menu_opts.forEach(menu_opt => {
                menu_opt.classList.remove("d-none");
            });
        },300);
    } else {
        menu_opts.forEach(menu_opt => {
            menu_opt.classList.add("d-none");
        });

        left_nav.classList.add("menu-inactive");
        right_content.classList.add("menu-inactive");
        right_content.classList.add("active-blur");
        document.getElementById("menu-image").classList.add("image-slide");
    }
}

// function toggle(){
//     var left_nav = document.getElementById("left-nav");
//     var right_content = document.getElementById("right-content");

//     if (left_nav.classList.contains("menu-inactive")) {
//         left_nav.classList.remove("menu-inactive");
//         right_content.classList.remove("menu-inactive");
//         document.getElementById("menu-image").classList.remove("image-slide");
//     } else {
//         left_nav.classList.add("menu-inactive");
//         right_content.classList.add("menu-inactive");
//         document.getElementById("menu-image").classList.add("image-slide");
//     }
// }