function removeBrTag(str) {
    if (str == null || typeof str != "string") {
        return "";
    } else {
        return str.replace(/<br>/g, '');

    }
}