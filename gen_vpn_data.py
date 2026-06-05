#!/usr/bin/env python3
"""Generate VPN/security tools data for tunnelpicks.net using Qwen API"""
import urllib.request, json, time, os

# Read Qwen API key
key = None
with open('/home/edi/.hermes/api_keys.env') as f:
    for line in f:
        if line.startswith('QWEN_API_KEY_1='):
            key = line.strip().split('=', 1)[1]
            break

API_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"

# Read existing tools.ts to get interface
with open('/home/edi/tunnelpicks/app/data/tools.ts') as f:
    content = f.read()

interface_end = content.find('export const ALL_TOOLS')
if interface_end == -1:
    interface_end = content.find('const ALL_TOOLS')

# 50 VPN tools in 5 batches
BATCHES = [
    {
        "cat": "Consumer VPN",
        "tools": [
            ("nordvpn", "NordVPN"), ("expressvpn", "ExpressVPN"), ("surfshark", "Surfshark"),
            ("mullvad", "Mullvad VPN"), ("protonvpn", "ProtonVPN"), ("cyberghost", "CyberGhost VPN"),
            ("pia", "Private Internet Access"), ("windscribe", "Windscribe"),
            ("tunnelbear", "TunnelBear"), ("vyprvpn", "VyprVPN")
        ]
    },
    {
        "cat": "Enterprise VPN",
        "tools": [
            ("wireguard", "WireGuard"), ("openvpn", "OpenVPN"), ("tailscale", "Tailscale"),
            ("cloudflare-warp", "Cloudflare WARP"), ("zscaler", "Zscaler Private Access"),
            ("palo-alto-prisma", "Palo Alto Prisma Access"), ("forticlient", "Fortinet FortiClient"),
            ("cisco-anyconnect", "Cisco AnyConnect"), ("perimeter81", "Perimeter 81"),
            ("twingate", "Twingate")
        ]
    },
    {
        "cat": "Proxy & Network",
        "tools": [
            ("socks5", "SOCKS5 Proxy"), ("smart-dns", "Smart DNS Proxy"),
            ("squid-proxy", "Squid Proxy"), ("haproxy", "HAProxy"),
            ("nginx-proxy", "Nginx Proxy Manager"), ("traefik", "Traefik Proxy"),
            ("frp", "frp"), ("ngrok", "ngrok"), ("cloudflare-tunnel", "Cloudflare Tunnel"),
            ("ssh-tunnel", "SSH Tunneling")
        ]
    },
    {
        "cat": "Firewall & Security",
        "tools": [
            ("pfsense", "pfSense"), ("opnsense", "OPNsense"), ("sophos-xg", "Sophos XG Firewall"),
            ("fortigate", "FortiGate"), ("iptables", "iptables/nftables"),
            ("crowdstrike", "CrowdStrike Falcon"), ("sentinelone", "SentinelOne"),
            ("cloudflare-waf", "Cloudflare WAF"), ("aws-waf", "AWS WAF"),
            ("imperva", "Imperva WAF")
        ]
    },
    {
        "cat": "Network Monitoring",
        "tools": [
            ("wireshark", "Wireshark"), ("nmap", "Nmap"),
            ("wazuh", "Wazuh SIEM"), ("splunk-security", "Splunk Enterprise Security"),
            ("grafana-loki", "Grafana Loki"), ("elk-stack", "Elastic Security"),
            ("qualys", "Qualys VMDR"), ("tenable", "Tenable Nessus"),
            ("hashicorp-vault", "HashiCorp Vault"), ("bitwarden", "Bitwarden")
        ]
    }
]

# Icon mapping
icon_map = {
    "NordVPN": "Shield", "ExpressVPN": "Shield", "Surfshark": "Shield",
    "Mullvad VPN": "Shield", "ProtonVPN": "Lock", "CyberGhost VPN": "Shield",
    "Private Internet Access": "Lock", "Windscribe": "Globe", "TunnelBear": "Shield",
    "VyprVPN": "Globe",
    "WireGuard": "Lock", "OpenVPN": "Globe", "Tailscale": "Shield",
    "Cloudflare WARP": "Cloud", "Zscaler Private Access": "Shield",
    "Palo Alto Prisma Access": "Shield", "Fortinet FortiClient": "Shield",
    "Cisco AnyConnect": "Globe", "Perimeter 81": "Shield", "Twingate": "Shield",
    "SOCKS5 Proxy": "Globe", "Smart DNS Proxy": "Globe",
    "Squid Proxy": "Server", "HAProxy": "Server", "Nginx Proxy Manager": "Server",
    "Traefik Proxy": "Server", "frp": "Server", "ngrok": "Globe",
    "Cloudflare Tunnel": "Cloud", "SSH Tunneling": "Terminal",
    "pfSense": "Shield", "OPNsense": "Shield", "Sophos XG Firewall": "Shield",
    "FortiGate": "Shield", "iptables/nftables": "Terminal",
    "CrowdStrike Falcon": "Shield", "SentinelOne": "Shield",
    "Cloudflare WAF": "Shield", "AWS WAF": "Shield", "Imperva WAF": "Shield",
    "Wireshark": "Activity", "Nmap": "Search",
    "Wazuh SIEM": "Activity", "Splunk Enterprise Security": "Activity",
    "Grafana Loki": "Activity", "Elastic Security": "Activity",
    "Qualys VMDR": "Activity", "Tenable Nessus": "Search",
    "HashiCorp Vault": "Lock", "Bitwarden": "Lock",
}

all_tools = []

for batch in BATCHES:
    cat = batch["cat"]
    tools_list = batch["tools"]
    
    prompt = (
        f'Return a JSON array of {len(tools_list)} VPN/network security tools, category="{cat}".\n'
        f'Each object: id, name, rating(3.5-5.0), reviewCount(100-5000), description(30 words), '
        f'longDescription(50 words), pros[5], cons[3], pricing, pricingDetail, features[6], '
        f'useCase, websiteUrl, alternatives[3], scoreBreakdown with features/reviews/momentum/popularity, '
        f'userQuotes[2] with role/company/quote.\n\n'
        f'Tools:\n' + '\n'.join(f'  id="{tid}", name="{name}"' for tid, name in tools_list) +
        '\n\nReturn ONLY valid JSON array.'
    )
    
    payload = json.dumps({
        "model": "qwen-plus",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 7000,
        "temperature": 0.7
    }).encode('utf-8')
    
    print(f"=== Generating {cat} ({len(tools_list)} tools) ===", flush=True)
    
    req = urllib.request.Request(API_URL, data=payload, method='POST')
    req.add_header('Authorization', f'Bearer {key}')
    req.add_header('Content-Type', 'application/json')
    
    try:
        resp = urllib.request.urlopen(req, timeout=120)
        result = resp.read().decode()
        d = json.loads(result)
        tools = json.loads(d['choices'][0]['message']['content'])
        all_tools.extend(tools)
        print(f"  -> Got {len(tools)} valid entries", flush=True)
    except Exception as e:
        print(f"  -> FAILED: {e}", flush=True)
    
    time.sleep(1)

print(f"\nTotal: {len(all_tools)} tools", flush=True)

# Generate TypeScript output
ts_parts = []
for t in all_tools:
    name = t.get('name', 'Unknown')
    tid = t.get('id', name.lower().replace(' ', '-'))
    cat = t.get('category', 'VPN')
    rating = t.get('rating', 4.0)
    rc = t.get('reviewCount', 500)
    icon = icon_map.get(name, 'Shield')
    desc = t.get('description', '').replace('"', '\\"').replace("'", "\\'")
    ld = t.get('longDescription', '').replace('"', '\\"').replace("'", "\\'")
    pros = t.get('pros', [])
    cons = t.get('cons', [])
    pricing = t.get('pricing', 'Free/Paid').replace('"', '\\"')
    pd = t.get('pricingDetail', '').replace('"', '\\"')
    features = t.get('features', [])
    uc = t.get('useCase', '').replace('"', '\\"')
    wu = t.get('websiteUrl', f'https://www.{tid}.com')
    alts = t.get('alternatives', [])
    sb = t.get('scoreBreakdown', {})
    uq = t.get('userQuotes', [])
    if len(uq) < 2:
        uq = [{"role": "Security Engineer", "company": "TechCorp", "quote": "Solid performance and reliability."},
              {"role": "CTO", "company": "StartupX", "quote": "Easy to set up and maintain."}]
    
    t_ts = f"""  {{
    id: "{tid}",
    name: "{name}",
    category: "{cat}",
    rating: {rating},
    reviewCount: {rc},
    icon: {icon},
    description: "{desc}",
    longDescription: "{ld}",
    pros: {json.dumps(pros)},
    cons: {json.dumps(cons)},
    pricing: "{pricing}",
    pricingDetail: "{pd}",
    features: {json.dumps(features)},
    useCase: "{uc}",
    websiteUrl: "{wu}",
    alternatives: {json.dumps(alts)},
    scoreBreakdown: {{
      features: {sb.get('features', 85)},
      reviews: {sb.get('reviews', 80)},
      momentum: {sb.get('momentum', 78)},
      popularity: {sb.get('popularity', 82)}
    }},
    userQuotes: {json.dumps(uq)}
  }}"""
    ts_parts.append(t_ts)

# Write the file
header_text = content[:interface_end]
footer = """

];

export const TOOL_MAP = new Map(ALL_TOOLS.map((t) => [t.id, t]));
"""

new_content = header_text + "export const ALL_TOOLS: ToolData[] = [\n" + ",\n".join(ts_parts) + footer

with open('/home/edi/tunnelpicks/app/data/tools.ts', 'w') as f:
    f.write(new_content)

print(f"Written {len(all_tools)} tools to tools.ts", flush=True)
