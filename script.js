function updateEditor(i) {
    if (i === 0) {
        let htmlCode = document.getElementById("htmlCode").value;
        let cssCode = document.getElementById("cssCode").value;
        let javascriptCode = document.getElementById("javascriptCode").value;

        let combinedCode = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + javascriptCode + "<\/script>";

        let iframe = document.getElementById('viewer').contentWindow.document;
        iframe.open();
        iframe.write(combinedCode);
        iframe.close();
    } else if (i === 1) {
        let htmlCode = document.getElementById("htmlCode").value;
        document.getElementById("htmlCode").value = htmlCode;
    }
}

function handleTab(event) {
    if (event.keyCode === 9) { 
        let textarea = event.target;
        let value = textarea.value;
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value = value.substring(0, start) + '\t' + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        event.preventDefault();
    } else if (event.keyCode === 8) { 
        updateEditor(1);
    }
}
