function FindProxyForURL(url, host) {
    // If the hostname matches, use the proxy.
    if (shExpMatch(host, "*.dmsi") ||
        shExpMatch(host, "whatismyipaddress.com")) {
        return "PROXY";
    }
    // Else go directly without a proxy.
    return "DIRECT";
}
