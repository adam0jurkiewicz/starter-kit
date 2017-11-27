export default function getBaseUrl(){
    return getQueryStringFromParameterByName('useMockApi') ? "http://localhost:3001/" : "/";
}

function getQueryStringFromParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
