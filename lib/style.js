const format = function(text, code) {
  return "\033[" + code + "m" + text + "\033[0m";
}

const bold = function(text) {
  return format(text, 1);
}

const yellowFg = function(text) {
  return format(text, 33);
}

const redFg = function(text) {
  return format(text, 31);
}

const greenFg = function(text) {
  return format(text, 32);
}

const toPrettyString = function(data) {
  if(typeof data === "object" && !Array.isArray(data)) {
    let string = "{";

    for(const key in data) {
      string += key + ": " + data[key] + ", ";
    }

    string = string.slice(0, string.length - 2);
    string += "}";

    return string;
  }

  return data;
}

exports.bold = bold;
exports.yellowFg = yellowFg;
exports.redFg = redFg;
exports.greenFg = greenFg;
exports.toPrettyString = toPrettyString;
