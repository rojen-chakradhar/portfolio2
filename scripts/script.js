function updateNepalTime() {
	const options = {
		timeZone: "Asia/Kathmandu",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2digit",
		second: "2digit",
		hour12: true,
	};

	const now = new Date();
	const timeString = now.toLocaleString('en-US', options);
	document.getElementById("time").innerHTML = timeString;
}

updateNepalTime();
setInterval(updateNepalTime, 1000);
