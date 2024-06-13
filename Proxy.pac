function FindProxyForURL(url, host) {
  // Use proxy for hostnames ending with .dmsi
  if (shExpMatch(host, "*.dmsi") || shExpMatch(host, "*.dmsi.*")) {
    return "PROXY";
  }
  // Use proxy for whatismyipaddress.com
  if (shExpMatch(host, "whatismyipaddress.com")) {
    return "PROXY";
  }
  // Else go directly without a proxy
  return "DIRECT";
}
