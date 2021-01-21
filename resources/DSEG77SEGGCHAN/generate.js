function generate(template, data) {
	var obj = {};
	for (var font in data.names) {
		var result = template;
		for (var prop in data.names[font]) result = result.replace("${" + prop + "}", data.names[font][prop]);
		for (var item in data.parts) {
			var series = data.parts[item].type, content = "";
			data.parts[item].segments.forEach(function(line, index) {
				var segments = line.split(" ").map(function(num) {
					var coordinates = data.coordinates[series][num.charAt(0)][font], x = coordinates.x, y = coordinates.y;
					for (var i = 1; i < num.length; i++) x = data.transformations[num.charAt(i)] - x;
					return x + " " + y;
				}), len = segments.length;
				content += (content ? "\n " : "") + segments.join(" ") + " " + (index ? len == 1 ? "l" : "c" : "m") + " 0";
			});
			result = result.replace("${" + item + "}", content);
		}
		obj[font] = result;
	}
	return obj;
}