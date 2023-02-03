if (location.protocol !== 'https:') {
    location.replace(`http:${location.href.substring(location.protocol.length)}`);
}
