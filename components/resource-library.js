"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";
import RESOURCES from "@/lib/resources.json";

const TYPES = ["All", "PDF", "DOCX", "PNG"];
const TYPE_LABEL = { PDF: "PDF guide", DOCX: "Editable template", PNG: "Visual guide" };

// Search and filter the AI-in-HR files; every card downloads straight away.
export function ResourceLibrary() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return RESOURCES.filter((r) => (type === "All" || r.type === type)
      && (!term || [r.title, r.description, r.bestFor, ...r.tags].join(" ").toLowerCase().includes(term)));
  }, [q, type]);

  return (
    <div className="lib">
      <div className="lib__bar">
        <label className="lib__search">
          <span className="sr-only">Search resources</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search prompts, policy, analytics, vendors" />
        </label>
        <div className="prog__tabs lib__types" role="group" aria-label="File type">
          {TYPES.map((t) => <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)}>{t === "All" ? "All files" : t}</button>)}
        </div>
      </div>
      <p className="lib__count" aria-live="polite">{shown.length} {shown.length === 1 ? "resource" : "resources"}</p>
      {shown.length ? (
        <ul className="lib__grid">
          {shown.map((r) => (
            <li key={r.id} className={`libcard libcard--${r.type.toLowerCase()}`}>
              <div className="libcard__top"><span className="libcard__type">{TYPE_LABEL[r.type]}</span><span>{r.minutes} min</span></div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <p className="libcard__for"><b>Best for</b> {r.bestFor}</p>
              <a className="libcard__dl" href={encodeURI(r.file)} download><Icon name="download" size={18} /> Download {r.type}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="lib__empty"><b>No resources match &ldquo;{q}&rdquo;.</b><button type="button" onClick={() => { setQ(""); setType("All"); }}>Clear search</button></div>
      )}
    </div>
  );
}
