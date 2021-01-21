function generate(template, data) {
	var obj = {};
	for (var font in data) {
		var result = template;
		for (var prop in data[font]) result = result.replace("${" + prop + "}", data[font][prop]);
		obj[font] = result;
	}
	return obj;
}