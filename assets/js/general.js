// passage de la souris zoom sur les titres


// $(document).ready(function(){


//     $('p').hide();
//     window.addEventListener('scroll', function(e) {
//         $('p').fadeIn(3000);
//     });


//     $("h3").on({
//         mouseenter: function() {
//             $(this).animate({
//                 fontSize: '+=10px',
//             });
//         },
//         mouseleave: function() {
//             $(this).animate({
//                 fontSize: '-=10px',
//             });
//         },
//     });
//     $("h5").on({
//         mouseenter: function() {
//             $(this).animate({
//                 fontSize: '+=10px',
//             });
//         },
//         mouseleave: function() {
//             $(this).animate({
//                 fontSize: '-=10px',
//             });
//         },
//     });


//     $("img").on({
//         mouseenter: function() {
//             $(this).animate({ width: '+=10%', });
//         },
//         mouseleave: function() {
//             $(this).animate({ width: '-=10%', });
//         },
//     });


    
    
    
// });

window.onload = function() {

    $('p').hide();
    window.addEventListener('scroll', function(e) {
        $('p').fadeIn(3000);
    });


    $("h3").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });

    $("h4").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });

    $("h5").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });
    


    // $(".logolifi").on({
    //         mouseenter: function() {
    //             $(this).animate({ width: '+=10%', });
    //             },
    //         mouseleave: function() {
    //             $(this).animate({ width: '-=10%', });
    //             },
    //  });
    


    
}