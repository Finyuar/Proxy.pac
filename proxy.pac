# Proxy.pac
function FindProxyForURL(url, host) {
    // Daftar server proxy premium
    var proxy = "PROXY proxy1.premiumservice.com:8080; PROXY proxy2.premiumservice.com:8080; DIRECT";

    // Daftar domain yang akan menggunakan proxy
    var proxyDomains = [
        ".google.com", ".facebook.com", ".youtube.com", ".twitter.com", 
        ".instagram.com", ".wikipedia.org", ".reddit.com", ".tiktok.com",
        ".mobilelegends.com", ".genshin.mihoyo.com", ".ff.garena.com"
    ];

    // Cek apakah host termasuk dalam daftar proxyDomains
    for (var i = 0; i < proxyDomains.length; i++) {
        if (host.indexOf(proxyDomains[i]) !== -1) {
            return proxy;  // Menggunakan proxy jika cocok
        }
    }

    // Untuk domain lain, langsungkan koneksi
    return "DIRECT";
}
