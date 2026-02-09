document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });


    // Attention Seekers Array
    const attentionSeekers = [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'heartBeat'
    ];

    // Randomize through the array
    const randomIndex = Math.floor(Math.random() * attentionSeekers.length);

    // Grab heading title
    const headingTitle = document.getElementById('headingTitle');

    // Add the random animation
    function randomAttentionSeeker() {
        headingTitle.classList.add(`animate__${attentionSeekers[randomIndex]}`);
    };
    // Call function on page load
    randomAttentionSeeker();


    // Create a toast when the submit button is clocked only if there are no balloons selected.
    const toastTrigger = document.getElementById('submit');
    const toastLiveExample = document.getElementById('liveToast');

    document.getElementById('submit').addEventListener('click', function (e) {

        const anyChecked = Array
            .from(document.querySelectorAll('.form-check-input'))
            .some(c => c.checked);

        if (!anyChecked) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        }


        /*

        1.) querySelectorAll returns a NodeList.
        2.) Array.from(...) converts the NodeList into a real array so I can use array methods.
        3.) .some(c => c.checked) returns true if at least one checkbox in the array has checked === true

        */
    })


    // Add ability to check / uncheck all balloons with a single click.
    const checkAll = document.getElementById('checkAll');

    checkAll.addEventListener('click', function (e) {
        document.querySelectorAll('.form-check-input').forEach(c => c.checked = !c.checked);
    });


    // Changing the header color when hovering over checkbox label
    document.getElementById('checkbox-card').addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            headingTitle.style.color = `${e.target.htmlFor}`;
            if (e.target.htmlFor == 'blue_green') {
                headingTitle.style.color = 'green';
            }
        };
    });

});
