# Disable Specific Days in WPForms Date Field

## Overview
This script disables specific days in the date field of WPForms using the Flatpickr calendar. It dynamically disables predefined holiday dates when users navigate between months using arrows or dropdowns.

## Features
- Disables specific dates in the WPForms date picker.
- Works when users change months via navigation arrows or dropdown selection.
- Uses jQuery and Flatpickr classes to manipulate the calendar.

## Installation
1. Add the provided JavaScript code to your WordPress theme's JavaScript file or enqueue it using `functions.php`.
2. Ensure that WPForms and Flatpickr are enabled on your WordPress site.
3. Test the functionality by opening the date field and navigating through months.

## Code Implementation

```javascript
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
```

## How It Works
- The script listens for clicks on navigation arrows and dropdown changes in the Flatpickr calendar.
- It fetches the currently selected month and checks for predefined disabled dates.
- The `checkDay()` function iterates through all calendar days and disables the specified holidays.

## Dependencies
- jQuery
- WPForms plugin (with date picker enabled)
- Flatpickr library

## Customization
To disable additional dates, update the `disabledDates` object in the `checkDay()` function.

## License
This project is open-source and can be used and modified freely.

## Author
Developed by Moin Akhtar.

