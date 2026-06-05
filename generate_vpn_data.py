#!/usr/bin/env python3
"""
Generate 50-60 real VPN/Network Security tools data for tunnelpicks.net.
Uses DeepSeek API to generate tool data in batches.
"""

import json
import os
import sys
import time
import requests
import re
import subprocess

def get_api_key():
    """Try to get API key from environment or bash."""
    for var in ["DEEPSEEK_API_KEY_1", "DEEPSEEK_API_KEY_2", "DEEPSEEK_API_KEY"]:
        val = os.environ.get(var, "")
        if val and "***" not in val:
            return val
    
    try:
        result = subprocess.run(
            ['bash', '-c', 'source ~/.bashrc 2>/dev/null; echo "${DEEPSEEK_API_KEY_1:-${DEEPSEEK_API_KEY}}"'],
            capture_output=True, text=True, timeout=10, env={**os.environ, 'BASH_ENV': os.path.expanduser('~/.bashrc')}
        )
        key = result.stdout.strip()
        if key and "***" not in key:
            return key
    except:
        pass
    
    return None

API_KEY = get_api_key()
if not API_KEY:
    print("ERROR: No DeepSeek API key found")
    sys.exit(1)

print(f"API Key found: {API_KEY[:10]}...", flush=True)

API_URL = "https://api.deepseek.com/chat/completions"
PROXIES = {"http": "http://127.0.0.1:7890", "https": "http://127.0.0.1:7890"}

# Real VPN/Security tools organized by category
CATEGORIES = {
    "Consumer VPN": [
        "NordVPN", "ExpressVPN", "Surfshark", "Mullvad VPN", "ProtonVPN",
        "CyberGhost VPN", "Private Internet Access", "Windscribe", "TunnelBear",
        "VyprVPN", "Hotspot Shield", "IPVanish", "Atlas VPN", "Hide.me",
        "Perfect Privacy VPN"
    ],
    "Enterprise VPN": [
        "WireGuard", "OpenVPN", "Tailscale", "Cloudflare WARP", "Zscaler Private Access",
        "Palo Alto Prisma Access", "Fortinet FortiClient", "Cisco AnyConnect",
        "NetMotion Mobility", "Perimeter 81", "Twingate", "OpenVPN Cloud",
        "Algo VPN", "StrongSwan", "SoftEther VPN"
    ],
    "Proxy": [
        "SOCKS5 Proxy", "Smart DNS Proxy", "Squid Proxy", "HAProxy",
        "Nginx Proxy Manager", "Traefik Proxy", "Privoxy", "V2Ray",
        "Shadowsocks", "Trojan Proxy", "Charles Proxy", "Fiddler Everywhere",
        "mitmproxy", "Proxyman", "Burp Suite Proxy"
    ],
    "Firewall/Security": [
        "pfSense", "OPNsense", "Fortinet FortiGate", "Cisco Firepower",
        "SonicWall TZ Series", "WatchGuard Firebox", "Sophos XG Firewall",
        "Ubiquiti UniFi Gateway", "Check Point Quantum", "Palo Alto Networks",
        "Untangle NG Firewall", "IPFire", "ClearOS", "Endian Firewall Community",
        "VyOS"
    ]
}

# Icon mapping
ICON_MAP = {
    "NordVPN": "Shield", "ExpressVPN": "Globe", "Surfshark": "ShieldCheck",
    "Mullvad VPN": "Lock", "ProtonVPN": "Eye", "CyberGhost VPN": "Privacy",
    "Private Internet Access": "Lock", "Windscribe": "Globe", "TunnelBear": "Shield",
    "VyprVPN": "Lock", "Hotspot Shield": "ShieldCheck", "IPVanish": "Eye",
    "Atlas VPN": "Globe", "Hide.me": "Privacy", "Perfect Privacy VPN": "Shield",
    "WireGuard": "Zap", "OpenVPN": "Lock", "Tailscale": "Shield",
    "Cloudflare WARP": "Globe", "Zscaler Private Access": "ShieldCheck",
    "Palo Alto Prisma Access": "Lock", "Fortinet FortiClient": "Shield",
    "Cisco AnyConnect": "Globe", "NetMotion Mobility": "Eye",
    "Perimeter 81": "ShieldCheck", "Twingate": "Lock", "OpenVPN Cloud": "Globe",
    "Algo VPN": "Shield", "StrongSwan": "Lock", "SoftEther VPN": "Globe",
    "SOCKS5 Proxy": "Eye", "Smart DNS Proxy": "Globe", "Squid Proxy": "Database",
    "HAProxy": "Zap", "Nginx Proxy Manager": "Settings", "Traefik Proxy": "Zap",
    "Privoxy": "Shield", "V2Ray": "Globe", "Shadowsocks": "Eye",
    "Trojan Proxy": "Shield", "Charles Proxy": "Search", "Fiddler Everywhere": "Search",
    "mitmproxy": "Code2", "Proxyman": "Search", "Burp Suite Proxy": "Target",
    "pfSense": "ShieldCheck", "OPNsense": "ShieldCheck", "Fortinet FortiGate": "Shield",
    "Cisco Firepower": "ShieldCheck", "SonicWall TZ Series": "Lock",
    "WatchGuard Firebox": "Shield", "Sophos XG Firewall": "ShieldCheck",
    "Ubiquiti UniFi Gateway": "Globe", "Check Point Quantum": "Lock",
    "Palo Alto Networks": "Shield", "Untangle NG Firewall": "Settings",
    "IPFire": "Shield", "ClearOS": "Settings", "Endian Firewall Community": "Shield",
    "VyOS": "Terminal"
}

# Website URLs
WEBSITE_MAP = {
    "NordVPN": "https://nordvpn.com", "ExpressVPN": "https://www.expressvpn.com",
    "Surfshark": "https://surfshark.com", "Mullvad VPN": "https://mullvad.net",
    "ProtonVPN": "https://protonvpn.com", "CyberGhost VPN": "https://www.cyberghostvpn.com",
    "Private Internet Access": "https://www.privateinternetaccess.com",
    "Windscribe": "https://windscribe.com", "TunnelBear": "https://www.tunnelbear.com",
    "VyprVPN": "https://www.vyprvpn.com", "Hotspot Shield": "https://www.hotspotshield.com",
    "IPVanish": "https://www.ipvanish.com", "Atlas VPN": "https://atlasvpn.com",
    "Hide.me": "https://hide.me", "Perfect Privacy VPN": "https://www.perfect-privacy.com",
    "WireGuard": "https://www.wireguard.com", "OpenVPN": "https://openvpn.net",
    "Tailscale": "https://tailscale.com", "Cloudflare WARP": "https://1.1.1.1",
    "Zscaler Private Access": "https://www.zscaler.com/products/zscaler-private-access",
    "Palo Alto Prisma Access": "https://www.paloaltonetworks.com/prisma/access",
    "Fortinet FortiClient": "https://www.fortinet.com/products/endpoint-security/forticlient",
    "Cisco AnyConnect": "https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client",
    "NetMotion Mobility": "https://www.netmotionsoftware.com",
    "Perimeter 81": "https://www.perimeter81.com", "Twingate": "https://www.twingate.com",
    "OpenVPN Cloud": "https://openvpn.net/cloud-vpn",
    "Algo VPN": "https://github.com/trailofbits/algo", "StrongSwan": "https://www.strongswan.org",
    "SoftEther VPN": "https://www.softether.org", "SOCKS5 Proxy": "https://www.socks-proxy.net",
    "Smart DNS Proxy": "https://www.smartdnsproxy.com", "Squid Proxy": "http://www.squid-cache.org",
    "HAProxy": "https://www.haproxy.org", "Nginx Proxy Manager": "https://nginxproxymanager.com",
    "Traefik Proxy": "https://traefik.io", "Privoxy": "https://www.privoxy.org",
    "V2Ray": "https://www.v2ray.com", "Shadowsocks": "https://shadowsocks.org",
    "Trojan Proxy": "https://trojan-gfw.github.io/trojan", "Charles Proxy": "https://www.charlesproxy.com",
    "Fiddler Everywhere": "https://www.telerik.com/fiddler/fiddler-everywhere",
    "mitmproxy": "https://mitmproxy.org", "Proxyman": "https://proxyman.io",
    "Burp Suite Proxy": "https://portswigger.net/burp",
    "pfSense": "https://www.pfsense.org", "OPNsense": "https://opnsense.org",
    "Fortinet FortiGate": "https://www.fortinet.com/products/next-generation-firewall",
    "Cisco Firepower": "https://www.cisco.com/c/en/us/products/security/firepower-ngfw",
    "SonicWall TZ Series": "https://www.sonicwall.com/products/firewalls/tz-series",
    "WatchGuard Firebox": "https://www.watchguard.com/wgrd-products/firebox-firewalls",
    "Sophos XG Firewall": "https://www.sophos.com/en-us/products/next-gen-firewall",
    "Ubiquiti UniFi Gateway": "https://ui.com/cloud-gateways",
    "Check Point Quantum": "https://www.checkpoint.com/quantum",
    "Palo Alto Networks": "https://www.paloaltonetworks.com/network-security",
    "Untangle NG Firewall": "https://www.untangle.com/ng-firewall",
    "IPFire": "https://www.ipfire.org", "ClearOS": "https://www.clearos.com",
    "Endian Firewall Community": "https://www.endian.com/community",
    "VyOS": "https://vyos.io"
}

def make_id(name):
    """Create a consistent ID from tool name."""
    n = name.lower().replace(' ', '-').replace('/', '-')
    n = re.sub(r'[()]', '', n)
    n = re.sub(r'--+', '-', n)
    return n.strip('-')

def get_alt_id(name):
    return make_id(name)

def call_deepseek(prompt, temperature=0.3, max_retries=3):
    """Call DeepSeek API."""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": "You are a data generation assistant. Output ONLY valid JSON array. No markdown formatting, no code fences, no explanation text. Return pure JSON only."},
            {"role": "user", "content": prompt}
        ],
        "temperature": temperature,
        "max_tokens": 8192
    }
    
    for attempt in range(max_retries):
        try:
            resp = requests.post(
                API_URL, headers=headers, json=payload, 
                proxies=PROXIES, timeout=180
            )
            if resp.status_code == 200:
                content = resp.json()["choices"][0]["message"]["content"]
                return content
            else:
                print(f"  API error (attempt {attempt+1}): {resp.status_code}")
                if attempt < max_retries - 1:
                    time.sleep(5)
        except Exception as e:
            print(f"  Exception (attempt {attempt+1}): {e}")
            if attempt < max_retries - 1:
                time.sleep(5)
    return None

def clean_json(text):
    """Extract JSON array from text that might have markdown wrapping."""
    text = re.sub(r'```json\s*', '', text)
    text = re.sub(r'```\s*', '', text)
    text = text.strip()
    
    start = text.find('[')
    end = text.rfind(']')
    if start != -1 and end != -1 and end > start:
        text = text[start:end+1]
    
    return text

def generate_batch(tools_list, category):
    """Generate data for a batch of tools."""
    names_json = json.dumps(tools_list, ensure_ascii=False)
    
    prompt = f"""Generate {len(tools_list)} tool data entries for a VPN & network security review website called tunnelpicks.net.

Each entry must be a JSON object with these exact fields:
- id: string (lowercase-kebab, e.g. "nordvpn-consumer")
- name: string (display name)
- category: string (the category name)
- rating: number (4.0-5.0, one decimal place)
- reviewCount: number (realistic, between 500-50000)
- icon: string (one of: Shield, Lock, Globe, Eye, ShieldCheck, Privacy, Zap, Database, Settings, Code2, Search, Target, Terminal)
- description: string (10-15 words, punchy pitch)
- longDescription: string (80-150 words, detailed review with technical specs, honest assessment of strengths and weaknesses)
- pros: string[] (5-7 items, each with specific technical detail)
- cons: string[] (3-5 items, honest drawbacks)
- pricing: string (e.g. "From $3.99/mo" or "Free" or "Contact Sales")
- pricingDetail: string (detailed pricing tiers with dollar amounts)
- features: string[] (8-12 specific features, real capabilities)
- useCase: string (who it's best for and who should look elsewhere)
- websiteUrl: string (the official website URL)
- alternatives: string[] (2-4 IDs of related tools from this same list)
- scoreBreakdown: object with "features", "reviews", "momentum", "popularity" (numbers 60-98)
- userQuotes: array of 2 objects, each with "role", "company", "quote" fields

CATEGORY: {category}
TOOLS to generate data for: {names_json}

CRITICAL: Return ONLY a valid JSON array. Each object must have ALL fields above exactly as specified. No markdown. No comments."""

    result = call_deepseek(prompt)
    if not result:
        return None
    
    cleaned = clean_json(result)
    
    try:
        data = json.loads(cleaned)
        if not isinstance(data, list):
            print(f"  Result is not a list: {type(data)}")
            return None
        
        valid = []
        for item in data:
            required = ["id", "name", "category", "rating", "reviewCount", "icon",
                       "description", "longDescription", "pros", "cons", "pricing",
                       "pricingDetail", "features", "useCase", "websiteUrl",
                       "alternatives", "scoreBreakdown", "userQuotes"]
            missing = [r for r in required if r not in item]
            if missing:
                print(f"  Skipping {item.get('name', '?')}: missing {missing}")
                continue
            
            # Ensure scoreBreakdown has all 4 fields
            sb = item.get("scoreBreakdown", {})
            for k in ["features", "reviews", "momentum", "popularity"]:
                if k not in sb:
                    sb[k] = 80
            
            valid.append(item)
        
        return valid
    except json.JSONDecodeError as e:
        print(f"  JSON parse error: {e}")
        print(f"  First 300 chars: {cleaned[:300]}")
        return None

def fmt(val, indent=0):
    """Format value as TypeScript."""
    sp = "  " * indent
    sp2 = "  " * (indent + 1)
    sp3 = "  " * (indent + 2)
    
    if isinstance(val, str):
        escaped = val.replace('\\', '\\\\').replace('"', "'")
        return f'"{escaped}"'
    elif isinstance(val, bool):
        return "true" if val else "false"
    elif isinstance(val, (int, float)):
        return str(val)
    elif isinstance(val, list):
        if not val:
            return "[]"
        items = ",\n".join(fmt(v, indent) for v in val)
        return f"[\n{items}]"
    elif isinstance(val, dict):
        items = []
        for k, v in val.items():
            items.append(f"{sp2}{k}: {fmt(v, indent + 1)}")
        return "{\n" + ",\n".join(items) + f"\n{sp2}}}"
    return str(val)

def tool_to_ts(tool, name):
    """Convert tool dict to TS object."""
    icon_name = ICON_MAP.get(name, "Shield")
    
    parts = [f"  {{"]
    parts.append(f'    id: "{tool["id"]}",')
    parts.append(f'    name: "{tool["name"]}",')
    parts.append(f'    category: "{tool["category"]}",')
    parts.append(f'    rating: {tool["rating"]},')
    parts.append(f'    reviewCount: {tool["reviewCount"]},')
    parts.append(f"    icon: {icon_name},")
    parts.append(f'    description: "{tool["description"].replace(chr(34), chr(39))}",')
    parts.append(f'    longDescription:\n      "{tool["longDescription"].replace(chr(34), chr(39))}",')
    
    # Pros
    pros = tool.get("pros", [])
    pro_str = ",\n      ".join(f'"{p.replace(chr(34), chr(39))}"' for p in pros)
    parts.append(f"    pros: [\n      {pro_str}],")
    
    # Cons
    cons = tool.get("cons", [])
    con_str = ",\n      ".join(f'"{c.replace(chr(34), chr(39))}"' for c in cons)
    parts.append(f"    cons: [\n      {con_str}],")
    
    parts.append(f'    pricing: "{tool["pricing"].replace(chr(34), chr(39))}",')
    parts.append(f'    pricingDetail: "{tool["pricingDetail"].replace(chr(34), chr(39))}",')
    
    # Features
    feats = tool.get("features", [])
    feat_str = ",\n      ".join(f'"{f.replace(chr(34), chr(39))}"' for f in feats)
    parts.append(f"    features: [\n      {feat_str}],")
    
    parts.append(f'    useCase: "{tool["useCase"].replace(chr(34), chr(39))}",')
    
    # Website
    url = tool.get("websiteUrl", WEBSITE_MAP.get(name, ""))
    parts.append(f'    websiteUrl: "{url}",')
    
    # Alternatives
    alts = tool.get("alternatives", [])[:3]
    alt_str = ",\n        ".join(f'"{a}"' for a in alts)
    parts.append(f"    alternatives: [\n        {alt_str}],")
    
    # Score breakdown
    sb = tool.get("scoreBreakdown", {})
    parts.append(f"""    scoreBreakdown: {{
      features: {sb.get("features", 85)},
      reviews: {sb.get("reviews", 80)},
      momentum: {sb.get("momentum", 78)},
      popularity: {sb.get("popularity", 82)},
    }},""")
    
    # Quotes
    quotes = tool.get("userQuotes", [])
    if quotes and len(quotes) >= 2:
        q_parts = []
        for q in quotes[:2]:
            q_parts.append(f"""      {{
        role: "{q.get("role", "User").replace(chr(34), chr(39))}",
        company: "{q.get("company", "Company").replace(chr(34), chr(39))}",
        quote: "{q.get("quote", "").replace(chr(34), chr(39))}"
      }}""")
        parts.append(f"    userQuotes: [\n{', '.join(q_parts)}\n    ],")
    else:
        parts.append(f"""    userQuotes: [
      {{
        role: "Privacy Advocate",
        company: "Tech Review",
        quote: "Solid performance and reliable privacy protection. The interface is clean and the speeds are consistently good."
      }},
      {{
        role: "IT Professional",
        company: "Enterprise Company",
        quote: "Deployed this across our organization. Setup was straightforward and the security features meet our compliance requirements."
      }}
    ],""")
    
    parts.append("  }")
    return "\n".join(parts)


def main():
    all_tools = []
    
    for category, tool_names in CATEGORIES.items():
        print(f"\n{'='*60}")
        print(f"Category: {category} ({len(tool_names)} tools)")
        print(f"{'='*60}")
        
        # Generate in chunks of 5
        for i in range(0, len(tool_names), 5):
            chunk = tool_names[i:i+5]
            print(f"  Batch {i//5+1}: {', '.join(chunk)}")
            
            batch = generate_batch(chunk, category)
            if batch:
                print(f"  -> Got {len(batch)} valid entries")
                for t in batch:
                    # Fix IDs to use our consistent format
                    t['id'] = make_id(t['name'])
                    all_tools.append(t)
            else:
                print(f"  -> FAILED!")
            
            time.sleep(1)
    
    print(f"\n{'='*60}")
    print(f"Total tools: {len(all_tools)}")
    print(f"{'='*60}")
    
    if len(all_tools) < 40:
        print(f"ERROR: Only {len(all_tools)} tools. Saving partial...")
        with open("/home/edi/tunnelpicks/partial_output.json", "w") as f:
            json.dump(all_tools, f, indent=2, ensure_ascii=False)
        sys.exit(1)
    
    # Build ID map for alternatives
    id_map = {}
    for t in all_tools:
        id_map[t['name'].lower()] = t['id']
    
    # Generate TypeScript file
    header = """import {
  BarChart3,
  ShieldCheck,
  MessageSquare,
  Users,
  CreditCard,
  Briefcase,
  Layers,
  Zap,
  Globe,
  Lock,
  Layout,
  FileText,
  LifeBuoy,
  Activity,
  PieChart,
  Palette,
  Camera,
  PhoneCall,
  Target,
  Search,
  TrendingUp,
  Eye,
  Settings,
  Code2,
  Box,
  GitBranch,
  BookOpen,
  Headphones,
  Share2,
  Mail,
  DollarSign,
  Cloud,
  Database,
  Monitor,
  Link,
  ShoppingCart,
  Beaker,
  MousePointerClick,
  PenTool,
  Shield,
  Privacy,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface ToolData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingDetail: string;
  features: string[];
  useCase: string;
  websiteUrl: string;
  alternatives: string[];
  scoreBreakdown: {
    features: number;
    reviews: number;
    momentum: number;
    popularity: number;
  };
  userQuotes: {
    role: string;
    company: string;
    quote: string;
  }[];
}

export const ALL_TOOLS: ToolData[] = ["""

    
    lines = [header]
    
    for idx, tool in enumerate(all_tools):
        name = tool['name']
        
        # Fix alternatives to use proper IDs
        alts = tool.get('alternatives', [])
        fixed = []
        for a in alts[:3]:
            a_key = a.lower().strip()
            if a_key in id_map:
                fixed.append(id_map[a_key])
            else:
                fixed.append(get_alt_id(a))
        tool['alternatives'] = fixed
        
        lines.append(tool_to_ts(tool, name))
        if idx < len(all_tools) - 1:
            lines[-1] += ","
    
    lines.append("];\n")
    
    result = "\n".join(lines)
    
    outpath = "/home/edi/tunnelpicks/app/data/tools.ts"
    with open(outpath, "w", encoding="utf-8") as f:
        f.write(result)
    
    print(f"\nWritten to {outpath}")
    
    # Verify
    with open(outpath) as f:
        content = f.read()
    
    tool_count = content.count("id: \"")
    print(f"Verification: {tool_count} entries")
    for fld in ["scoreBreakdown", "userQuotes", "icon:", "pros:", "cons:"]:
        print(f"  {fld}: {content.count(fld)}")

if __name__ == "__main__":
    main()
