"use client";

import { useEffect, useState } from "react";

type Threat = {
    id: number;
    source_ip: string;
    threat_type: string;
    location: string;
    country: string;
    severity: number;
}

export default function ThreatSidebar() {
    const [threats, setThreats] = useState<Threat[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/threats")
            .then((res) => res.json())
            .then(setThreats)
    })

    return (
        <div className="absolute left-0 top-0 h-full w-64 bg-black/60 p-4">
            <h2 className="text-xl font-semibold mb-4">Current Threats</h2>
            <ul className="space-y-3">
                {threats.map((threat) => (
                    <li key={threat.id} className="p-2 bg-black/40 rounded border border-cyan-500/30">
                        <span className="font-mono text-sm">{threat.source_ip}</span>{" "}
                        — <strong>{threat.threat_type}</strong> in {threat.country} (Severity {threat.severity})
                    </li>
                ))}
            </ul>
        </div>
    );
}

