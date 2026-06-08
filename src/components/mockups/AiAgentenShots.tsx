"use client";

export function AiAgentenDashboardCardShot() {
  const ACCENT = "#00c2cb";
  const BLUE = "#2563eb";
  const BG = "#060d18";
  const SIDEBAR_BG = "#040910";
  const CARD_BG = "#0a1628";
  const BORDER = "#0f2040";
  const waveHeights = [8,18,30,48,24,38,52,40,14,32,44,60,36,22,28,56,64,50,38,28,44,58,52,36,60,48,30,20,36,44,24,16,38,52,46,34,56,62,42,26];

  return (
    <div
      role="presentation"
      aria-hidden={true}
      style={{ width: "100%", height: "100%", overflow: "hidden", background: BG }}
    >
      <div style={{ transform: "scale(0.48)", transformOrigin: "top left", width: "208%", height: "208%" }}>
        {/* Tab bar */}
        <div style={{ height: 46, background: SIDEBAR_BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 4 }}>
          <div style={{ padding: "0 16px", height: "100%", fontSize: 13, fontWeight: 500, color: ACCENT, display: "flex", alignItems: "center", gap: 7, borderBottom: `2px solid ${ACCENT}` }}>
            <span style={{ fontSize: 14 }}>◎</span> Live Dashboard
          </div>
          <div style={{ padding: "0 16px", height: "100%", fontSize: 13, fontWeight: 500, color: "#64748b", display: "flex", alignItems: "center", gap: 7, borderBottom: "2px solid transparent" }}>
            <span style={{ fontSize: 14 }}>💬</span> WhatsApp Bot
          </div>
          <div style={{ padding: "0 16px", height: "100%", fontSize: 13, fontWeight: 500, color: "#64748b", display: "flex", alignItems: "center", gap: 7, borderBottom: "2px solid transparent" }}>
            <span style={{ fontSize: 14 }}>▣</span> Statistiken
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 12, color: "#475569" }}><span style={{ color: ACCENT }}>●</span> LYNIQ Media</div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", height: "calc(100% - 46px)", overflow: "hidden" }}>
          {/* Sidebar */}
          <div style={{ width: 220, background: SIDEBAR_BG, borderRight: `1px solid ${BORDER}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ padding: "20px 16px 16px", borderBottom: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${ACCENT}, ${BLUE})`, clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>LYNIQ</div>
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.08em" }}>VOICE AGENT</div>
                </div>
              </div>
            </div>
            <nav style={{ padding: "12px 8px", flex: 1 }}>
              {[
                { icon: "⊞", label: "Dashboard", active: true },
                { icon: "☎", label: "Anrufe", badge: 2 },
                { icon: "◈", label: "Leads" },
                { icon: "◷", label: "Kalender" },
                { icon: "◎", label: "KI Agenten" },
                { icon: "◉", label: "Wissensbasis" },
                { icon: "▣", label: "Statistiken" },
                { icon: "⊕", label: "Integrationen" },
                { icon: "◐", label: "Einstellungen" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 12px", borderRadius: 8, marginBottom: 2,
                  fontSize: 13, cursor: "pointer",
                  background: item.active ? "rgba(0,194,203,0.12)" : "transparent",
                  color: item.active ? ACCENT : "#64748b",
                  borderRight: item.active ? `2px solid ${ACCENT}` : "2px solid transparent",
                }}>
                  <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{ background: ACCENT, color: "#000", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "1px 6px" }}>{item.badge}</span>
                  )}
                </div>
              ))}
            </nav>
            <div style={{ padding: "12px 16px", borderTop: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>Agent aktiv</span>
                </div>
                <div style={{ width: 36, height: 20, background: `linear-gradient(to right, ${ACCENT}, ${BLUE})`, borderRadius: 10, position: "relative" }}>
                  <div style={{ position: "absolute", right: 2, top: 2, width: 16, height: 16, background: "#fff", borderRadius: "50%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Top bar */}
            <div style={{ height: 56, background: SIDEBAR_BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", padding: "0 24px", gap: 16, flexShrink: 0 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>AI Voice Agent</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "4px 12px" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>Gespräch aktiv</span>
              </div>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#94a3b8" }}>🔔</div>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${ACCENT}, ${BLUE})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>AD</div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflow: "hidden", padding: 20, display: "flex", gap: 16 }}>
              {/* Left column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
                {/* Active call card */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Aktives Gespräch</div>
                      <div style={{ fontSize: 36, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>03:42</div>
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      {[
                        { icon: "🎤", bg: "rgba(37,99,235,0.2)", border: "rgba(37,99,235,0.4)" },
                        { icon: "⌨", bg: "rgba(37,99,235,0.2)", border: "rgba(37,99,235,0.4)" },
                        { icon: "⏸", bg: "rgba(37,99,235,0.2)", border: "rgba(37,99,235,0.4)" },
                        { icon: "📵", bg: "rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.4)" },
                      ].map((btn, i) => (
                        <div key={i} style={{ width: 42, height: 42, borderRadius: "50%", background: btn.bg, border: `1px solid ${btn.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{btn.icon}</div>
                      ))}
                    </div>
                  </div>

                  {/* Waveform */}
                  <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "flex-end", gap: 3, height: 80, marginBottom: 8 }}>
                    {waveHeights.map((h, i) => (
                      <div key={i} style={{ flex: 1, borderRadius: 2, background: `linear-gradient(to top, ${BLUE}, ${ACCENT})`, height: h }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT }} />
                    <span style={{ fontSize: 11, color: ACCENT, fontWeight: 600, letterSpacing: "0.08em" }}>LIVE</span>
                  </div>

                  {/* Chips */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[
                      { label: "Max Mustermann", sub: "Anrufer", icon: "👤" },
                      { label: "Website Lead", sub: "Quelle", icon: "🌐" },
                      { label: "KI Telefonassistent", sub: "Interesse", icon: "🤖" },
                    ].map((chip) => (
                      <div key={chip.label} style={{ background: "rgba(0,194,203,0.08)", border: "1px solid rgba(0,194,203,0.2)", borderRadius: 20, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 13 }}>{chip.icon}</span>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>{chip.label}</div>
                          <div style={{ fontSize: 10, color: "#64748b" }}>{chip.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transcript */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, flex: 1 }}>
                  <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Live Transkript</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { speaker: "KI Agent", msg: "Guten Tag! Sie sprechen mit dem LYNIQ Voice Assistant. Wie kann ich Ihnen heute helfen?", time: "03:12", ai: true },
                      { speaker: "Max Mustermann", msg: "Ja, hallo. Ich habe Interesse an Ihrem KI-Telefonassistenten für unser Unternehmen.", time: "03:28", ai: false },
                      { speaker: "KI Agent", msg: "Sehr gut! Ich freue mich über Ihr Interesse. Darf ich fragen, in welcher Branche Ihr Unternehmen tätig ist?", time: "03:35", ai: true },
                    ].map((msg, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: msg.ai ? `linear-gradient(135deg, ${ACCENT}, ${BLUE})` : "rgba(100,116,139,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>
                          {msg.ai ? "KI" : "M"}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: msg.ai ? ACCENT : "#94a3b8" }}>{msg.speaker}</span>
                            <span style={{ fontSize: 10, color: "#475569" }}>{msg.time}</span>
                          </div>
                          <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, background: msg.ai ? "rgba(0,194,203,0.05)" : "rgba(255,255,255,0.03)", padding: "8px 12px", borderRadius: 8, borderLeft: `2px solid ${msg.ai ? ACCENT : "#334155"}` }}>
                            {msg.msg}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Lead Score */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Lead Score</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
                      <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#0f2040" strokeWidth="10" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#sg)" strokeWidth="10" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="37" transform="rotate(-90 50 50)" />
                        <defs>
                          <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={ACCENT} />
                            <stop offset="100%" stopColor={BLUE} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>92</div>
                        <div style={{ fontSize: 9, color: "#64748b" }}>%</div>
                      </div>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
                      {["Budget vorhanden", "Entscheidungsträger", "Hohe Dringlichkeit", "Terminbereitschaft"].map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#22c55e", flexShrink: 0 }}>✓</div>
                          <span style={{ fontSize: 11, color: "#94a3b8" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gesprächsqualität */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Gesprächsqualität</div>
                  <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 6, padding: "8px 12px", display: "flex", alignItems: "flex-end", gap: 2, height: 36, marginBottom: 10 }}>
                    {[20,30,45,55,40,65,70,80,55,60,75,85,70,60,50,80,90,75,65,85,70,55,80,95,85,70,60,50].map((h, i) => (
                      <div key={i} style={{ flex: 1, borderRadius: 1, background: `linear-gradient(to top, ${BLUE}, ${ACCENT})`, height: `${h}%` }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>Sehr gut</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#22c55e" }}>4.8 / 5.0</span>
                  </div>
                </div>

                {/* KI Erkenntnisse */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>KI Erkenntnisse</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "Terminbuchung erkannt", color: "#22c55e" },
                      { label: "CRM Synchronisierung", color: "#22c55e" },
                    ].map(item => (
                      <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{item.label}</span>
                        <div style={{ fontSize: 11, fontWeight: 600, color: item.color, background: `${item.color}18`, borderRadius: 4, padding: "2px 8px" }}>✓ Aktiv</div>
                      </div>
                    ))}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>KI Confidence Score</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: ACCENT }}>96%</span>
                      </div>
                      <div style={{ background: "#0f2040", borderRadius: 4, height: 6, overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(to right, ${ACCENT}, ${BLUE})`, width: "96%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Gesprächszusammenfassung</div>
                  <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                    Max Mustermann ist Geschäftsführer eines mittelständischen Unternehmens und hat konkretes Interesse an einer KI-Telefonlösung. Budget ist vorhanden, Entscheidung kann kurzfristig getroffen werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiAgentenWhatsappCardShot() {
  const msgs = [
    {from:'bot',text:'Hallo! 👋 Wie kann ich Ihnen helfen?'},
    {from:'user',text:'Ich brauche Informationen zu Ihren Preisen.'},
    {from:'bot',text:'Gerne! Unsere Pakete starten ab 49€/Monat. Welche Lösung interessiert Sie?'},
    {from:'user',text:'Den Voice Agent für unsere Fahrschule.'},
    {from:'bot',text:'Perfekt! Ich verbinde Sie mit unserem Team. Wann passt ein kurzes Gespräch?'},
  ];
  return (
    <div
      role="presentation"
      aria-hidden={true}
      style={{width:'100%',height:'100%',background:'#060d18',overflow:'hidden',fontFamily:'sans-serif'}}
    >
      <div style={{transform:'scale(0.48)',transformOrigin:'top left',width:'208%',height:'208%',display:'flex',flexDirection:'column'}}>
        <div style={{background:'#075e54',padding:'12px 16px',display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#128c7e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}}>L</div>
          <div>
            <div style={{fontSize:'12px',fontWeight:600,color:'#fff'}}>LYNIQ Media Bot</div>
            <div style={{fontSize:'9px',color:'rgba(255,255,255,0.7)'}}>● Online</div>
          </div>
        </div>
        <div style={{flex:1,padding:'12px',overflow:'hidden',display:'flex',flexDirection:'column',gap:'8px',background:'#060d18'}}>
          {msgs.map((m,i)=>(
            <div key={i} style={{display:'flex',justifyContent:m.from==='user'?'flex-end':'flex-start'}}>
              <div style={{maxWidth:'70%',background:m.from==='user'?'#005c4b':'rgba(255,255,255,0.06)',borderRadius:m.from==='user'?'12px 12px 2px 12px':'12px 12px 12px 2px',padding:'8px 10px'}}>
                <div style={{fontSize:'10px',color:'#e9edef',lineHeight:1.4}}>{m.text}</div>
                <div style={{fontSize:'8px',color:'rgba(255,255,255,0.3)',textAlign:'right',marginTop:'2px'}}>✓✓</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{padding:'10px 12px',background:'#1f2c34',display:'flex',gap:'8px',alignItems:'center'}}>
          <div style={{flex:1,background:'#2a3942',borderRadius:'24px',padding:'8px 14px',fontSize:'11px',color:'rgba(255,255,255,0.3)'}}>Nachricht</div>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#00a884',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}}>➤</div>
        </div>
      </div>
    </div>
  );
}

export function AiAgentenWebsiteCardShot() {
  return (
    <div
      role="presentation"
      aria-hidden={true}
      style={{width:'100%',height:'100%',background:'#060d18',overflow:'hidden',fontFamily:'sans-serif'}}
    >
      <div style={{transform:'scale(0.48)',transformOrigin:'top left',width:'208%',height:'208%'}}>
        <div style={{padding:'20px 24px',borderBottom:'1px solid rgba(255,255,255,0.05)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontSize:'14px',fontWeight:700,color:'#f5f9ff'}}>Kundenwebsite</div>
          <div style={{display:'flex',gap:'16px'}}>
            {['Leistungen','Über uns','Kontakt'].map(l=>(
              <span key={l} style={{fontSize:'10px',color:'rgba(255,255,255,0.4)'}}>{l}</span>
            ))}
          </div>
          <div style={{background:'#00c2cb',color:'#060d18',borderRadius:'6px',padding:'6px 12px',fontSize:'10px',fontWeight:700}}>Anfragen</div>
        </div>
        <div style={{padding:'32px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',alignItems:'center'}}>
          <div>
            <div style={{fontSize:'28px',fontWeight:800,color:'#f5f9ff',lineHeight:1.1,marginBottom:'12px'}}>Ihr Partner für <span style={{color:'#00c2cb'}}>digitale Lösungen</span></div>
            <div style={{fontSize:'11px',color:'rgba(255,255,255,0.5)',lineHeight:1.7,marginBottom:'20px'}}>Moderne Software, KI-Integration und Automatisierung für Ihr Unternehmen.</div>
            <div style={{background:'#00c2cb',color:'#060d18',borderRadius:'4px',padding:'10px 20px',fontSize:'12px',fontWeight:700,display:'inline-block'}}>Projekt anfragen →</div>
          </div>
          <div style={{position:'relative'}}>
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(0,194,203,0.15)',borderRadius:'12px',padding:'16px',width:'220px',marginLeft:'auto'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
                <div>
                  <div style={{fontSize:'10px',fontWeight:600,color:'#f5f9ff'}}>LYNIQ Assistant</div>
                  <div style={{fontSize:'8px',color:'rgba(255,255,255,0.4)'}}>KI-Assistent</div>
                </div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.3)'}}>×</div>
              </div>
              <div style={{fontSize:'10px',color:'rgba(255,255,255,0.6)',marginBottom:'10px',lineHeight:1.5}}>Hallo! Wie kann ich Ihnen helfen?</div>
              {['Leistungen & Preise','Referenzprojekte','Termin vereinbaren'].map(opt=>(
                <div key={opt} style={{border:'1px solid rgba(0,194,203,0.2)',borderRadius:'6px',padding:'6px 8px',fontSize:'9px',color:'#00c2cb',marginBottom:'4px',textAlign:'center'}}>{opt}</div>
              ))}
              <div style={{display:'flex',gap:'6px',marginTop:'8px'}}>
                <div style={{flex:1,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'6px',padding:'6px 8px',fontSize:'9px',color:'rgba(255,255,255,0.3)'}}>Nachricht...</div>
                <div style={{background:'#00c2cb',width:'26px',height:'26px',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',color:'#060d18',flexShrink:0}}>➤</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
