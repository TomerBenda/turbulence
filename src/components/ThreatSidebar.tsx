export default function ThreatSidebar() {
    return (
        <aside className="w-[320px] bg-gray-900 p-4 border-l border-gray-700 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Current Threats</h2>
            <ul className="space-y-3">
                <li className="bg-gray-800 p-3 rounded">
                    <p className="text-sm font-medium">Mirai Scanning in Germany</p>
                    <p className="text-xs text-gray-400">Detected 3 mins ago</p>
                </li>
                <li className="bg-gray-800 p-3 rounded">
                    <p className="text-sm font-medium">Phishing Campaign: Email Spoof</p>
                    <p className="text-xs text-gray-400">Targeting Israel, USA</p>
                </li>
            </ul>
        </aside>
    );
}

