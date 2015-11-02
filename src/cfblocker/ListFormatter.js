

export default class ListFormatter {

    static parse(input) {
        if (!input) {
            input = "";
        }
        
        var token = String(input).split(/[ ,]/);
        for (var i = token.length - 1 ; i >= 0 ; i--) {
            var item = token[i].trim();
            if (item === "") {
                token.splice(i,1);
            } else {
                token[i] = item;
            }
        }
        
        return token;
    }
    
    static stringify(input) {
        if (input === null) {
            input = [];
        }
        if (!$.isArray(input)) {
            return String(input);
        }
        return input.join(", ");
    }
    
}