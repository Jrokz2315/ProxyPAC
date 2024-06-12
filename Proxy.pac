function FindProxyForURL(url, host) {
    // If the hostname matches, use the proxy.
    if (shExpMatch(host, "*.dmsi") ||
        shExpMatch(host, "whatismyipaddress.com")) {
        return "PROXY 138.91.158.33:3128"; 
    }
    // Else go directly without a proxy.
    return "DIRECT";
}
