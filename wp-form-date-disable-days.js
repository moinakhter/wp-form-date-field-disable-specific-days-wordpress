// Disabling holidays on month change using arrows
$(document).delegate(".flatpickr-calendar .flatpickr-next-month,.flatpickr-calendar .flatpickr-prev-month,.wpforms-datepicker-wrap .wpforms-field-date-time-date","click", function () {
    var month = $(".flatpickr-calendar .flatpickr-monthDropdown-months option:selected").val();
    month = parseInt(month);
    var addMonth = (month + 1);
    checkDay(addMonth);
});

// Disabling holidays on month change using dropdown
$(document).delegate(".flatpickr-calendar .flatpickr-monthDropdown-months", "change", function () {
    var month = $(this).val();
    month = parseInt(month);
    var addMonth = (month + 1);
    checkDay(addMonth);
});

function checkDay(addMonth) {
    $(".flatpickr-calendar span.flatpickr-day").each(function () {
        var thisday = $(this).html();
        thisday = parseInt(thisday);
        
        // Disabling specific holiday dates by month
        var disabledDates = {
            4: [29],
            5: [3, 4, 5],
            7: [18],
            8: [11],
            9: [19, 23],
            10: [10],
            11: [3, 23]
        };
        
        if (disabledDates[addMonth] && disabledDates[addMonth].includes(thisday)) {
            $(this).addClass("flatpickr-disabled");
        }
    });
}
