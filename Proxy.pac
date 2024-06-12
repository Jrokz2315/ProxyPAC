function FindProxyForURL(url, host) {
  // Use proxy for hostnames ending with .dmsi
  if (shExpMatch(host, "*.dmsi")) {
    return "PROXY 138.91.158.33:3128";
  }
  // Use proxy for whatismyipaddress.com
  if (shExpMatch(host, "whatismyipaddress.com")) {
    return "PROXY 138.91.158.33:3128";
  }
  // Else go directly without a proxy
  return "DIRECT";
}
