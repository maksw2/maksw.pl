if (location.protocol !== 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
