function generate(template, data) {
	var i = 0, result = "", ch, curr, head, main, array = [], special, segment, j, innerCh, innerCurr, obj = {}, font, prop;
	for (ch in data.definitions) {
		curr = data.definitions[ch];
		head = "StartChar: u" + ch.toUpperCase() + "\nEncoding: " + (+("0x" + ch) + " ").repeat(2) + i++ + "\nWidth: " + curr.Width + "\nVWidth: " + curr.VWidth;
		main = "parts" in curr ? "SplineSet\n${" + curr.parts + "}\nEndSplineSet" : "";
		result += (head + "\nFlags: HW\nLayerCount: 2" + (main ? "\nFore\n" : "") + main + "\nEndChar").replace(/\n+/g, "\n") + "\n\n";
	}
	for (ch in data.characters) array.push(ch);
	array.sort(function(left, right) {
		return "0x" + left - ("0x" + right);
	}).forEach(function(item) {
		curr = data.characters[item];
		head = "StartChar: u" + item.toUpperCase() + "\nEncoding: " + (+("0x" + item) + " ").repeat(2) + i++ + "\n";
		
		if (curr.charAt(0) == "#") {
			special = data.specials[curr.slice(1)];
			head += "Width: " + special.Width + "\nVWidth: " + special.VWidth;
			main = special.content || "";
		} else {
			segment = curr.split(",");
			head += "Width: " + segment.length * data.properties.Width + "\nVWidth: " + data.properties.VWidth;
			main = "";
			segment.forEach(function(part, num) {
				j = 0;
				for (innerCh in data.definitions) {
					innerCurr = data.definitions[innerCh];
					if ("label" in innerCurr && part.indexOf(innerCurr.label) != -1) main += "Refer: " + j + " " + +("0x" + innerCh) + " N 1 0 0 1 " + data.properties.Width * (num + 1) + " 0 2\n";
					j++;
				}
			});
			if (main) main = main.slice(0, -1);
		}
		result += (head + "\nFlags: HW\nLayerCount: 2" + (main ? "\nFore\n" : "") + main + "\nEndChar").replace(/\n+/g, "\n") + "\n\n";
	});
	template += "BeginChars: 1114112 " + i + "\n\n" + result.slice(0, -1) + "EndChars\nEndSplineFont\n";
	for (font in data.fonts) {
		result = template;
		for (prop in data.fonts[font]) result = result.replace("${" + prop + "}", data.fonts[font][prop]);
		obj[font] = result;
	}
	return obj;
}