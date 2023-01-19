// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// обєкт посилань
const refs = {
	days: document.querySelector(".value[data-days]"),
	hours: document.querySelector(".value[data-hours]"),
	minutes: document.querySelector(".value[data-minutes]"),
	seconds: document.querySelector(".value[data-seconds]"),
	calendar: document.querySelector('#datetime-picker'),
	startButton: document.querySelector('button[data-start]'),
};
// посилання на поле
refs.startButton.setAttribute("disabled", "disabled");
// слухач події
refs.startButton.addEventListener('click', startButtonTimer);
// обєкт налаштувань
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		console.log(selectedDates[0]);
		if (options.defaultDate > selectedDates[0]) {
			alert("Please choose a date in the future");
			refs.startButton.setAttribute("disabled", "disabled");
		} else {
			refs.startButton.removeAttribute("disabled");
		};

	},
};
// функція бібліотеки з обєктом
flatpickr(refs.calendar, options);
// функція після кліку
function startButtonTimer() {
	const timerID = setInterval(changeButtonValue , 1000);
};
// функція в інтервалі повертає обєкт новий
function changeButtonValue() {
	refs.startButton.setAttribute("disabled", "disabled");
		const currentTime = new Date;
		const inputValue = refs.calendar.value
		const ms = Date.parse(inputValue) - Date.parse(currentTime);

			convertMs(ms);
				function convertMs(ms) {
					// Number of milliseconds per unit of time
					const second = 1000;
					const minute = second * 60;
					const hour = minute * 60;
					const day = hour * 24;
				  
					// Remaining days
					const days = Math.floor(ms / day);
					// Remaining hours
					const hours = Math.floor((ms % day) / hour);
					// Remaining minutes
					const minutes = Math.floor(((ms % day) % hour) / minute);
					// Remaining seconds
					const seconds = Math.floor((((ms % day) % hour) % minute) / second);
				  
					return { days, hours, minutes, seconds };
				  }
		const newObjData = convertMs(ms)
		addLeadingZero(newObjData);
				//   console.log(convertMs(ms));
}

// функція обробки обєкту і пушу в ХТМЛ 
function addLeadingZero(value) {
	const timeDays = value.days.toString().padStart(2,"0");
	const timeHours = value.hours.toString().padStart(2,"0");
	const timeMinutes = value.minutes.toString().padStart(2,"0");
	const timeSeconds = value.seconds.toString().padStart(2,"0");

	console.log(value);
	refs.days.innerHTML = timeDays
	refs.hours.innerHTML = timeHours
	refs.minutes.innerHTML = timeMinutes
	refs.seconds.innerHTML = timeSeconds
};

