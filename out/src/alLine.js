"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alCodePart_1 = require("./alCodePart");
class alLine {
    constructor(content, lineNumber) {
        this.content = content;
        this.trim = content.trim();
        this.upperCase = content.toUpperCase().trim();
        this.alCodePart = [];
        var length = 0;
        var word;
        var n = 0;
        for (var i = 0; i < this.trim.length; i++) {
            if (this.trim.charAt(i) == ' ') {
                length++;
                if (word != "") {
                    this.alCodePart.push();
                    this.alCodePart[n] = new alCodePart_1.alCodePart(word, i);
                    n++;
                }
                word = "";
            }
            else
                word = word + this.trim.charAt(i);
        }
    }
}
exports.alLine = alLine;
//# sourceMappingURL=alLine.js.map