jQuery(window).scroll(function () {
//     $(".team-carousel").owlCarousel({
//         loop: false,
//         nav: false,
//         autoplay: false,
//         URLhashListener: true,
//         autoplayHoverPause: false,
//         startPosition: 'URLHash',
//         autoHeight: true,
//         autoWidth: true,
//         dots:true,
//         responsive: {
//             0: {
//                 items: 2,
//                 margin: 16
//             },
//             768: {
//                 items: 2,
//                 margin: 24
//             },
//             1024: {
//                 items: 3,
//                 margin: 40
//             }
//         }




    });

    
    
//   });
 $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:false,
        margin:40,
        autoHeight: true,
        autoWidth: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive: {
                        0: {
                            items: 2,
                            margin: 16
                        },
                        768: {
                            items: 3,
                            margin: 24
                        },
                        1024: {
                            items: 4,
                            margin: 40
                        }
                    }
    });
});
