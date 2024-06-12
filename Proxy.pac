function FindProxyForURL(url, host) {
    // If the hostname matches, send to proxy.
    if (shExpMatch(host, "*.dmsi") ||
        shExpMatch(host, "dmsi.com")) {
        return "PROXY 138.91.158.33:3128";
    }
    // Else go directly without a proxy.
    return "DIRECT";
}
