import React, { useState, useEffect, useMemo, useRef } from "react";
import './Admin.css';
import {
  LayoutGrid,
  FileText,
  Inbox,
  Mail,
  Sparkles,
  LogOut,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  ImagePlus,
  ExternalLink,
  Code,
  Star,
  ChevronDown,
  Video,
  BookOpen,
  Archive,
  Reply,
  MailOpen,
  Send,
  Download,
  UserPlus,
  MessageCircleQuestion,
  Wand2,
  CheckCircle2,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const getAuthHeaders = () => ({ 'Authorization': 'Bearer ' + localStorage.getItem('adminToken'), 'Content-Type': 'application/json' });

// ---------------------------------------------------------------------------
// Design tokens — shared across every admin page
// ---------------------------------------------------------------------------
const INK = "#0f1f35";
const INK_2 = "#16304f";
const PAPER = "#faf8f3";
const GOLD = "#c69a4d";
const TEAL = "#3a6b64";
const LINE = "#e7e1d4";
const INK_SOFT = "#5b6b82";
const RED = "#c0453a";
const RED_BG = "#f0d9d6";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
`;

const inputStyle = {
  width: "100%",
  padding: "11px 13px",
  borderRadius: 10,
  border: `1px solid ${LINE}`,
  fontSize: 13.5,
  color: INK,
  background: "#fff",
  outline: "none",
};

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label
        style={{
          display: "block",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: INK_SOFT,
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11.5,
        color: TEAL,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 6,
      }}
    >
      {children}
    </div>
  );
}

function PageHeader({ eyebrow, title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, color: INK }}>{title}</h1>
        <p style={{ color: INK_SOFT, fontSize: 14.5, marginTop: 6, maxWidth: 480 }}>{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl px-5 py-4" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, color: INK }}>{value}</div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: INK_SOFT,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function PrimaryButton({ children, onClick, disabled, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
      style={{ background: INK, color: "#fff", fontSize: 14.5, boxShadow: "0 6px 16px rgba(15,31,53,0.18)" }}
    >
      {Icon && <Icon size={17} />}
      {children}
    </button>
  );
}

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full transition-colors"
      style={{
        background: active ? INK : "#fff",
        color: active ? "#fff" : INK,
        border: `1px solid ${active ? INK : LINE}`,
        fontSize: 13.5,
        fontWeight: 600,
        fontFamily: "'Fraunces', serif",
      }}
    >
      {children}
    </button>
  );
}

function SearchBox({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ background: "#fff", border: `1px solid ${LINE}`, minWidth: 260 }}>
      <Search size={15} color={INK_SOFT} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full"
        style={{ fontSize: 13.5, color: INK }}
      />
    </div>
  );
}

function EmptyState({ title, subtitle }) {
  return (
    <div className="py-16 text-center" style={{ color: INK_SOFT }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: INK, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13.5 }}>{subtitle}</div>
    </div>
  );
}

function ModalShell({ onClose, children, maxWidth = 480 }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-6" style={{ background: "rgba(15,31,53,0.55)" }} onClick={onClose}>
      <div
        className="rounded-2xl overflow-hidden w-full flex"
        style={{ maxWidth, maxHeight: "88vh", background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

function ConfirmModal({ title, body, confirmLabel = "Delete", onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(15,31,53,0.55)" }} onClick={onCancel}>
      <div className="rounded-2xl p-7 w-full" style={{ maxWidth: 380, background: "#fff" }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, color: INK, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 13.5, color: INK_SOFT, marginBottom: 20 }}>{body}</p>
        <div className="flex gap-3">
          <button onClick={onConfirm} className="px-5 py-2.5 rounded-lg font-semibold" style={{ background: RED, color: "#fff", fontSize: 13.5 }}>
            {confirmLabel}
          </button>
          <button onClick={onCancel} className="px-5 py-2.5 rounded-lg font-semibold" style={{ color: INK_SOFT, fontSize: 13.5 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      className="fixed bottom-7 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full z-50"
      style={{ background: INK, color: "#fff", fontSize: 13.5, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
    >
      {message}
    </div>
  );
}

function useToast() {
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  return [toast, setToast];
}

function formatDate(iso, opts) {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", opts || { day: "2-digit", month: "2-digit", year: "numeric" });
}

// ===========================================================================
// NAV
// ===========================================================================
const NAV_ITEMS = [
  { key: "projects", label: "Projects", icon: LayoutGrid },
  { key: "blog", label: "Blog", icon: FileText },
  { key: "inbox", label: "Contact Inbox", icon: Inbox },
  { key: "newsletter", label: "Newsletter", icon: Mail },
  { key: "ai", label: "AI Knowledge", icon: Sparkles },
];

// ===========================================================================
// PROJECTS PAGE
// ===========================================================================
const CATEGORIES = [
  { value: "app", label: "App" },
  { value: "web", label: "Web" },
  { value: "desktop", label: "Desktop" },
];

const seedProjects = [
  { id: "p1", title: "Dha Anywaa Challenge", category: "app", client: "Personal Project", date: "2024-03-01", description: "A Flutter language-learning game built around the Anywaa alphabet and vocabulary, with timed quizzes and a live leaderboard.", tags: ["Flutter", "Firebase", "Dart", "Realtime DB"], liveUrl: "https://oloni.app", sourceUrl: "", imageUrl: "", featured: true },
  { id: "p2", title: "PNG Game", category: "app", client: "Personal Project", date: "2025-03-01", description: "A multiplayer number guessing game where two players hold a secret 4-digit code and try to crack each other's.", tags: ["Flutter", "NestJS", "WebSockets"], liveUrl: "https://png-game.app", sourceUrl: "https://github.com/jininadev/png-game", imageUrl: "", featured: false },
  { id: "p3", title: "Multi-Version Bible App", category: "app", client: "Personal Project", date: "2024-01-15", description: "Ten translations displayed side by side, built with accessibility as a first-class concern.", tags: ["Flutter", "Firebase"], liveUrl: "", sourceUrl: "", imageUrl: "", featured: false },
  { id: "p4", title: "Dha Anywaa and Dha Anywaa Quiz", category: "app", client: "Personal Project", date: "2023-12-10", description: "Companion quiz app to Dha Anywaa Challenge, focused on spaced repetition drills.", tags: ["Flutter", "SQLite"], liveUrl: "", sourceUrl: "", imageUrl: "", featured: false },
  { id: "p5", title: "Personal Portfolio Website", category: "web", client: "Personal Project", date: "2024-02-27", description: "This site — a dark-sidebar, full-stack developer portfolio with a blog and AI assistant.", tags: ["Next.js", "Tailwind", "PostgreSQL"], liveUrl: "https://oriemiobango.netlify.app", sourceUrl: "", imageUrl: "", featured: false },
  { id: "p6", title: "DeepLabs Team Site", category: "web", client: "DeepLabs", date: "2024-06-19", description: "Marketing and team site for DeepLabs, tuned for fast load times on low bandwidth.", tags: ["Next.js", "Tailwind"], liveUrl: "", sourceUrl: "", imageUrl: "", featured: false },
  { id: "p7", title: "Be-Gena Player", category: "desktop", client: "Personal Project", date: "2023-03-10", description: "Cross-platform Flutter desktop media player shipped to Windows, macOS, and Linux from one codebase.", tags: ["Flutter", "Dart", "SQLite"], liveUrl: "", sourceUrl: "https://github.com/jininadev/be-gena-player", imageUrl: "", featured: false },
];

function emptyProjectDraft() {
  return { id: null, title: "", category: "app", client: "Personal Project", date: new Date().toISOString().slice(0, 10), description: "", tags: [], liveUrl: "", sourceUrl: "", imageUrl: "", featured: false };
}

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  
  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_URL}/projects?all=true`);
      const data = await res.json();
      setProjects(data.data || []);
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState(emptyProjectDraft());
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [toast, setToast] = useToast();
  const fileInputRef = useRef(null);

  const filtered = useMemo(() => {
    return projects
      .filter((p) => (activeCategory === "all" ? true : p.category === activeCategory))
      .filter((p) => (query.trim() === "" ? true : (p.title + " " + p.client + " " + p.tags.join(" ")).toLowerCase().includes(query.toLowerCase())))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [projects, activeCategory, query]);

  const counts = useMemo(() => {
    const c = { all: projects.length, app: 0, web: 0, desktop: 0 };
    projects.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1));
    return c;
  }, [projects]);

  function openAdd() { setDraft(emptyProjectDraft()); setTagInput(""); setModalOpen(true); }
  function openEdit(p) { setDraft({ ...p }); setTagInput(""); setModalOpen(true); }
  async function saveDraft() {
    const isNew = !draft.id;
    const url = isNew ? `${API_URL}/admin/projects` : `${API_URL}/admin/projects/${draft.id}`;
    const method = isNew ? 'POST' : 'PUT';
    
    const payload = { ...draft, sortOrder: 0, projectDate: draft.date };
    if (!payload.shortDescription) payload.shortDescription = payload.description.substring(0, 100);
    if (!payload.categoryLabel) payload.categoryLabel = payload.category;
    if (!payload.imageUrl) payload.imageUrl = '';
    
    try {
      const res = await fetch(url, { method, headers: getAuthHeaders(), body: JSON.stringify(payload) });
      if (res.ok) {
        fetchProjects();
        setToast("Project saved");
        setModalOpen(false);
      } else {
        const d = await res.json();
        setToast("Error: " + (d.message || "Failed"));
      }
    } catch(e) { setToast("Error saving"); }
  }
  function addTag() { const t = tagInput.trim(); if (!t) return; if (!draft.tags.includes(t)) setDraft((d) => ({ ...d, tags: [...d.tags, t] })); setTagInput(""); }
  function removeTag(tag) { setDraft((d) => ({ ...d, tags: d.tags.filter((t) => t !== tag) })); }
  function handleImageFile(e) { const file = e.target.files?.[0]; if (!file) return; const r = new FileReader(); r.onload = () => setDraft((d) => ({ ...d, imageUrl: r.result })); r.readAsDataURL(file); }
  function doDelete(p) { 
    fetch(`${API_URL}/admin/projects/${p.id}`, { method: 'DELETE', headers: getAuthHeaders() }).then(() => { 
      setProjects((prev) => prev.filter((x) => x.id !== p.id)); 
      setConfirmDelete(null); 
      setToast("Project deleted"); 
    }); 
  }

  return (
    <>
      <PageHeader
        eyebrow="Portfolio content"
        title="Manage Projects"
        subtitle="Add a project here and it appears on your public Portfolio page immediately — no code changes needed."
        action={<PrimaryButton onClick={openAdd} icon={Plus}>Add Project</PrimaryButton>}
      />

      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Projects" value={counts.all} />
        <StatCard label="App" value={counts.app || 0} />
        <StatCard label="Web" value={counts.web || 0} />
        <StatCard label="Desktop" value={counts.desktop || 0} />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2">
          {[{ value: "all", label: "All" }, ...CATEGORIES].map((c) => (
            <Pill key={c.value} active={activeCategory === c.value} onClick={() => setActiveCategory(c.value)}>{c.label}</Pill>
          ))}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search projects or tags..." />
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "#fff" }}>
        <div className="grid px-5 py-3" style={{ gridTemplateColumns: "2.4fr 0.9fr 1.6fr 0.9fr 1fr", background: PAPER, borderBottom: `1px solid ${LINE}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: INK_SOFT }}>
          <div>Project</div><div>Category</div><div>Tags</div><div>Date</div><div className="text-right">Actions</div>
        </div>

        {filtered.length === 0 && <EmptyState title="No projects here yet" subtitle="Try a different filter, or add your first project." />}

        {filtered.map((p, i) => (
          <div key={p.id} className="grid px-5 py-4 items-center" style={{ gridTemplateColumns: "2.4fr 0.9fr 1.6fr 0.9fr 1fr", borderBottom: i === filtered.length - 1 ? "none" : `1px solid ${LINE}` }}>
            <div className="flex items-center gap-3 min-w-0">
              <div className="shrink-0 rounded-lg overflow-hidden flex items-center justify-center" style={{ width: 46, height: 46, background: PAPER, border: `1px solid ${LINE}` }}>
                {p.imageUrl ? <img src={p.imageUrl} alt="" className="w-full h-full object-cover" /> : <ImagePlus size={16} color={INK_SOFT} />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15, color: INK }} className="truncate">{p.title}</div>
                  {p.featured && <Star size={12} fill={GOLD} color={GOLD} />}
                </div>
                <div style={{ fontSize: 12, color: INK_SOFT }} className="truncate">{p.client}</div>
              </div>
            </div>
            <div>
              <span className="px-2.5 py-1 rounded-full inline-block" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, background: p.category === "app" ? "rgba(58,107,100,0.12)" : p.category === "web" ? "rgba(198,154,77,0.16)" : "rgba(15,31,53,0.08)", color: p.category === "app" ? TEAL : p.category === "web" ? "#8a6a25" : INK }}>{p.category}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.slice(0, 2).map((t) => <span key={t} className="px-2 py-0.5 rounded-full" style={{ fontSize: 11, border: `1px solid ${LINE}`, color: INK_SOFT }}>{t}</span>)}
              {p.tags.length > 2 && <span style={{ fontSize: 11, color: INK_SOFT }}>+{p.tags.length - 2}</span>}
            </div>
            <div style={{ fontSize: 13, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace" }}>{formatDate(p.date)}</div>
            <div className="flex items-center justify-end gap-2">
              <button onClick={() => openEdit(p)} className="p-2 rounded-lg" style={{ border: `1px solid ${LINE}`, color: INK }} title="Edit"><Pencil size={14} /></button>
              <button onClick={() => setConfirmDelete(p)} className="p-2 rounded-lg" style={{ border: `1px solid ${RED_BG}`, color: RED }} title="Delete"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <ModalShell onClose={() => setModalOpen(false)} maxWidth={980}>
          <div className="flex-1 overflow-y-auto px-8 py-7" style={{ minWidth: 0 }}>
            <div className="flex items-center justify-between mb-1">
              <Eyebrow>{draft.id ? "Edit project" : "New project"}</Eyebrow>
              <button onClick={() => setModalOpen(false)} style={{ color: INK_SOFT }}><X size={18} /></button>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 600, color: INK, marginBottom: 20 }}>{draft.id ? "Update details" : "Add to your portfolio"}</h2>

            <Field label="Title"><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="e.g. Oloni Driver App" style={inputStyle} /></Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Category">
                <div className="relative">
                  <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                    {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: 14, color: INK_SOFT, pointerEvents: "none" }} />
                </div>
              </Field>
              <Field label="Client"><input value={draft.client} onChange={(e) => setDraft({ ...draft, client: e.target.value })} style={inputStyle} /></Field>
            </div>

            <Field label="Project date"><input type="date" value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} style={inputStyle} /></Field>
            <Field label="Description"><textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="What does this project do, and what problem does it solve?" rows={4} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} /></Field>

            <Field label="Tags / tech stack">
              <div className="flex gap-2 mb-2">
                <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} placeholder="e.g. Flutter — press Enter" style={inputStyle} />
                <button onClick={addTag} className="px-4 rounded-lg shrink-0" style={{ background: PAPER, border: `1px solid ${LINE}`, color: INK, fontSize: 13, fontWeight: 600 }}>Add</button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {draft.tags.map((t) => (
                  <span key={t} className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ fontSize: 12, border: `1px solid ${LINE}`, color: INK }}>
                    {t}<button onClick={() => removeTag(t)} style={{ color: INK_SOFT }}><X size={11} /></button>
                  </span>
                ))}
              </div>
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Live project URL"><input value={draft.liveUrl} onChange={(e) => setDraft({ ...draft, liveUrl: e.target.value })} placeholder="https://..." style={inputStyle} /></Field>
              <Field label="Source code URL"><input value={draft.sourceUrl} onChange={(e) => setDraft({ ...draft, sourceUrl: e.target.value })} placeholder="https://github.com/..." style={inputStyle} /></Field>
            </div>

            <Field label="Cover image">
              <div className="flex items-center gap-3">
                <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ border: `1px dashed ${INK_SOFT}`, color: INK_SOFT, fontSize: 13 }}>
                  <ImagePlus size={15} />{draft.imageUrl ? "Replace image" : "Upload image"}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageFile} className="hidden" />
                {draft.imageUrl && <img src={draft.imageUrl} alt="" className="w-11 h-11 rounded-lg object-cover" style={{ border: `1px solid ${LINE}` }} />}
              </div>
            </Field>

            <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
              <input type="checkbox" checked={draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} style={{ accentColor: INK }} />
              <span style={{ fontSize: 13.5, color: INK }}>Feature this project at the top of the portfolio</span>
            </label>

            <div className="flex items-center gap-3 mt-7">
              <button onClick={saveDraft} disabled={!draft.title.trim()} className="px-6 py-3 rounded-lg font-semibold disabled:opacity-40" style={{ background: INK, color: "#fff", fontSize: 14 }}>{draft.id ? "Save changes" : "Add project"}</button>
              <button onClick={() => setModalOpen(false)} className="px-5 py-3 rounded-lg font-semibold" style={{ color: INK_SOFT, fontSize: 14 }}>Cancel</button>
            </div>
          </div>

          <div className="hidden md:flex flex-col shrink-0 overflow-y-auto" style={{ width: 340, background: PAPER, borderLeft: `1px solid ${LINE}` }}>
            <div className="px-5 py-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: INK_SOFT, borderBottom: `1px solid ${LINE}` }}>Live preview</div>
            <div className="p-5">
              <div className="rounded-xl overflow-hidden flex items-center justify-center mb-4" style={{ height: 150, background: "#e9e4d8", border: `1px solid ${LINE}` }}>
                {draft.imageUrl ? <img src={draft.imageUrl} alt="" className="w-full h-full object-cover" /> : <ImagePlus size={22} color={INK_SOFT} />}
              </div>
              <div className="grid grid-cols-2 gap-3 p-3 rounded-lg mb-4" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, color: INK_SOFT, textTransform: "uppercase" }}>Category</div><div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 13.5, color: INK }}>{CATEGORIES.find((c) => c.value === draft.category)?.label || "—"}</div></div>
                <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, color: INK_SOFT, textTransform: "uppercase" }}>Client</div><div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 13.5, color: INK }}>{draft.client || "—"}</div></div>
              </div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, color: INK, marginBottom: 8 }}>{draft.title || "Untitled project"}</h3>
              <p style={{ fontSize: 12.5, color: INK_SOFT, lineHeight: 1.55, marginBottom: 12 }}>{draft.description || "Your project description will appear here."}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {draft.tags.length === 0 && <span style={{ fontSize: 11, color: INK_SOFT, fontStyle: "italic" }}>No tags yet</span>}
                {draft.tags.map((t) => <span key={t} className="px-2 py-0.5 rounded-full" style={{ fontSize: 10.5, border: `1px solid ${LINE}`, color: INK_SOFT }}>{t}</span>)}
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg" style={{ background: draft.liveUrl ? INK : LINE, color: draft.liveUrl ? "#fff" : INK_SOFT, fontSize: 12 }}><ExternalLink size={12} /> Live project</div>
                <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg" style={{ border: `1px solid ${LINE}`, color: draft.sourceUrl ? INK : INK_SOFT, fontSize: 12 }}><Code size={12} /> Source</div>
              </div>
            </div>
          </div>
        </ModalShell>
      )}

      {confirmDelete && <ConfirmModal title={`Delete "${confirmDelete.title}"?`} body="This removes it from your live portfolio immediately. This can't be undone." onConfirm={() => doDelete(confirmDelete)} onCancel={() => setConfirmDelete(null)} />}
      <Toast message={toast} />
    </>
  );
}

// ===========================================================================
// BLOG PAGE
// ===========================================================================
const BLOG_CATEGORIES = [
  { value: "projects", label: "Projects" },
  { value: "tutorial", label: "Tutorial" },
  { value: "video", label: "Video" },
  { value: "life", label: "Life & Notes" },
];
const BLOG_BADGE_COLOR = {
  projects: { bg: "rgba(58,107,100,0.14)", fg: TEAL },
  tutorial: { bg: "rgba(58,107,100,0.14)", fg: TEAL },
  video: { bg: "rgba(198,154,77,0.18)", fg: "#8a6a25" },
  life: { bg: "rgba(15,31,53,0.9)", fg: "#fff" },
};

const seedPosts = [
  { id: "b1", title: "Building a cross-platform desktop app in Flutter — what I'd do differently", category: "projects", status: "published", type: "read", readTime: 6, date: "2025-01-10", excerpt: "A behind-the-scenes look at shipping the same Flutter codebase to Windows, macOS, and Linux.", coverUrl: "", featured: true },
  { id: "b2", title: "Structuring a NestJS API for a Next.js frontend", category: "tutorial", status: "published", type: "read", readTime: 4, date: "2024-11-02", excerpt: "The folder structure and module patterns I default to when a project needs to scale past its first few endpoints.", coverUrl: "", featured: false },
  { id: "b3", title: "Walkthrough: from Figma prototype to shipped app", category: "video", status: "published", type: "watch", readTime: 8, date: "2024-10-21", excerpt: "A screen-recorded walkthrough of turning a rough prototype into a working Flutter build, start to finish.", coverUrl: "", featured: false },
  { id: "b4", title: "One year of freelancing — what actually changed", category: "life", status: "published", type: "read", readTime: 3, date: "2024-09-15", excerpt: "Reflections on the first twelve months working independently, the mistakes, and what I'd tell myself back then.", coverUrl: "", featured: false },
  { id: "b5", title: "Notes on Gebeta Maps vs. Google Maps for the Ethiopian market", category: "projects", status: "draft", type: "read", readTime: 5, date: "2024-08-02", excerpt: "Why local coverage mattered more than brand recognition for Oloni's routing needs.", coverUrl: "", featured: false },
];

function emptyPostDraft() {
  return { id: null, title: "", category: "projects", status: "draft", type: "read", readTime: 5, date: new Date().toISOString().slice(0, 10), excerpt: "", coverUrl: "", featured: false };
}

function BlogPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_URL}/blog?all=true`);
      const data = await res.json();
      setPosts(data.data || []);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchPosts(); }, []);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState(emptyPostDraft());
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [toast, setToast] = useToast();
  const fileInputRef = useRef(null);

  const filtered = useMemo(() => {
    return posts
      .filter((p) => (activeCategory === "all" ? true : p.category === activeCategory))
      .filter((p) => (query.trim() === "" ? true : (p.title + " " + p.excerpt).toLowerCase().includes(query.toLowerCase())))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts, activeCategory, query]);

  const counts = useMemo(() => ({
    all: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    draft: posts.filter((p) => p.status === "draft").length,
  }), [posts]);

  function openAdd() { setDraft(emptyPostDraft()); setModalOpen(true); }
  function openEdit(p) { setDraft({ ...p }); setModalOpen(true); }
  async function saveDraft() {
    const isNew = !draft.id;
    const url = isNew ? `${API_URL}/admin/blog` : `${API_URL}/admin/blog/${draft.id}`;
    const method = isNew ? 'POST' : 'PUT';
    
    const payload = { ...draft, readTime: parseInt(draft.readTime) || 0, publishedAt: draft.date };
    if (!payload.content) payload.content = '';
    
    try {
      const res = await fetch(url, { method, headers: getAuthHeaders(), body: JSON.stringify(payload) });
      if (res.ok) {
        fetchPosts();
        setToast("Post saved");
        setModalOpen(false);
      } else {
        const d = await res.json();
        setToast("Error: " + (d.message || "Failed"));
      }
    } catch(e) { setToast("Error saving"); }
  }
  function handleImageFile(e) { const file = e.target.files?.[0]; if (!file) return; const r = new FileReader(); r.onload = () => setDraft((d) => ({ ...d, coverUrl: r.result })); r.readAsDataURL(file); }
  function doDelete(p) { 
    fetch(`${API_URL}/admin/blog/${p.id}`, { method: 'DELETE', headers: getAuthHeaders() }).then(() => { 
      setPosts((prev) => prev.filter((x) => x.id !== p.id)); 
      setConfirmDelete(null); 
      setToast("Post deleted"); 
    }); 
  }
  function togglePublish(p) { setPosts((prev) => prev.map((x) => (x.id === p.id ? { ...x, status: x.status === "published" ? "draft" : "published" } : x))); }

  return (
    <>
      <PageHeader eyebrow="Portfolio content" title="Manage Blog" subtitle="Write once here — posts appear on your public Blog page, sorted newest first." action={<PrimaryButton onClick={openAdd} icon={Plus}>New Post</PrimaryButton>} />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Posts" value={counts.all} />
        <StatCard label="Published" value={counts.published} />
        <StatCard label="Drafts" value={counts.draft} />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Pill active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>All Posts</Pill>
          {BLOG_CATEGORIES.map((c) => <Pill key={c.value} active={activeCategory === c.value} onClick={() => setActiveCategory(c.value)}>{c.label}</Pill>)}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search posts..." />
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "#fff" }}>
        <div className="grid px-5 py-3" style={{ gridTemplateColumns: "2.6fr 1fr 0.9fr 0.9fr 1fr", background: PAPER, borderBottom: `1px solid ${LINE}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: INK_SOFT }}>
          <div>Post</div><div>Category</div><div>Status</div><div>Date</div><div className="text-right">Actions</div>
        </div>

        {filtered.length === 0 && <EmptyState title="No posts here yet" subtitle="Try a different filter, or write your first post." />}

        {filtered.map((p, i) => {
          const badge = BLOG_BADGE_COLOR[p.category];
          return (
            <div key={p.id} className="grid px-5 py-4 items-center" style={{ gridTemplateColumns: "2.6fr 1fr 0.9fr 0.9fr 1fr", borderBottom: i === filtered.length - 1 ? "none" : `1px solid ${LINE}` }}>
              <div className="flex items-center gap-3 min-w-0">
                <div className="shrink-0 rounded-lg overflow-hidden flex items-center justify-center" style={{ width: 46, height: 46, background: PAPER, border: `1px solid ${LINE}` }}>
                  {p.coverUrl ? <img src={p.coverUrl} alt="" className="w-full h-full object-cover" /> : (p.type === "watch" ? <Video size={16} color={INK_SOFT} /> : <BookOpen size={16} color={INK_SOFT} />)}
                </div>
                <div className="min-w-0">
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 14.5, color: INK }} className="truncate">{p.title}</div>
                  <div style={{ fontSize: 12, color: INK_SOFT }}>{p.readTime} min {p.type === "watch" ? "watch" : "read"}</div>
                </div>
              </div>
              <div><span className="px-2.5 py-1 rounded-full inline-block" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, fontWeight: 500, background: badge.bg, color: badge.fg }}>{BLOG_CATEGORIES.find((c) => c.value === p.category)?.label}</span></div>
              <div>
                <button onClick={() => togglePublish(p)} className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ fontSize: 11, fontWeight: 600, background: p.status === "published" ? "rgba(58,107,100,0.14)" : "rgba(198,154,77,0.16)", color: p.status === "published" ? TEAL : "#8a6a25" }}>
                  {p.status === "published" ? <CheckCircle2 size={11} /> : <Pencil size={11} />}{p.status}
                </button>
              </div>
              <div style={{ fontSize: 13, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace" }}>{formatDate(p.date)}</div>
              <div className="flex items-center justify-end gap-2">
                <button onClick={() => openEdit(p)} className="p-2 rounded-lg" style={{ border: `1px solid ${LINE}`, color: INK }}><Pencil size={14} /></button>
                <button onClick={() => setConfirmDelete(p)} className="p-2 rounded-lg" style={{ border: `1px solid ${RED_BG}`, color: RED }}><Trash2 size={14} /></button>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <ModalShell onClose={() => setModalOpen(false)} maxWidth={720}>
          <div className="flex-1 overflow-y-auto px-8 py-7">
            <div className="flex items-center justify-between mb-1">
              <Eyebrow>{draft.id ? "Edit post" : "New post"}</Eyebrow>
              <button onClick={() => setModalOpen(false)} style={{ color: INK_SOFT }}><X size={18} /></button>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 600, color: INK, marginBottom: 20 }}>{draft.id ? "Update post" : "Write a new post"}</h2>

            <Field label="Title"><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="e.g. Why we chose PostGIS for Oloni" style={inputStyle} /></Field>

            <div className="grid grid-cols-3 gap-4">
              <Field label="Category">
                <div className="relative">
                  <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                    {BLOG_CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: 14, color: INK_SOFT, pointerEvents: "none" }} />
                </div>
              </Field>
              <Field label="Format">
                <div className="relative">
                  <select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="read">Read</option><option value="watch">Watch</option>
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: 14, color: INK_SOFT, pointerEvents: "none" }} />
                </div>
              </Field>
              <Field label={draft.type === "watch" ? "Minutes to watch" : "Minutes to read"}>
                <input type="number" min={1} value={draft.readTime} onChange={(e) => setDraft({ ...draft, readTime: Number(e.target.value) })} style={inputStyle} />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Publish date"><input type="date" value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} style={inputStyle} /></Field>
              <Field label="Status">
                <div className="relative">
                  <select value={draft.status} onChange={(e) => setDraft({ ...draft, status: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="draft">Draft</option><option value="published">Published</option>
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: 14, color: INK_SOFT, pointerEvents: "none" }} />
                </div>
              </Field>
            </div>

            <Field label="Excerpt"><textarea value={draft.excerpt} onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} placeholder="One or two sentences that summarize the post" rows={2} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} /></Field>
            <Field label="Content (Markdown)"><textarea value={draft.content || ''} onChange={(e) => setDraft({ ...draft, content: e.target.value })} placeholder="Full blog post content..." rows={8} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} /></Field>

            <Field label="Cover image">
              <div className="flex items-center gap-3">
                <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2.5 rounded-lg" style={{ border: `1px dashed ${INK_SOFT}`, color: INK_SOFT, fontSize: 13 }}>
                  <ImagePlus size={15} />{draft.coverUrl ? "Replace image" : "Upload image"}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageFile} className="hidden" />
                {draft.coverUrl && <img src={draft.coverUrl} alt="" className="w-11 h-11 rounded-lg object-cover" style={{ border: `1px solid ${LINE}` }} />}
              </div>
            </Field>

            <label className="flex items-center gap-2 mt-2 cursor-pointer select-none">
              <input type="checkbox" checked={draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} style={{ accentColor: INK }} />
              <span style={{ fontSize: 13.5, color: INK }}>Feature this post at the top of the blog</span>
            </label>

            <div className="flex items-center gap-3 mt-7">
              <button onClick={saveDraft} disabled={!draft.title.trim()} className="px-6 py-3 rounded-lg font-semibold disabled:opacity-40" style={{ background: INK, color: "#fff", fontSize: 14 }}>{draft.id ? "Save changes" : "Save post"}</button>
              <button onClick={() => setModalOpen(false)} className="px-5 py-3 rounded-lg font-semibold" style={{ color: INK_SOFT, fontSize: 14 }}>Cancel</button>
            </div>
          </div>
        </ModalShell>
      )}

      {confirmDelete && <ConfirmModal title={`Delete "${confirmDelete.title}"?`} body="This removes the post from your live blog immediately." onConfirm={() => doDelete(confirmDelete)} onCancel={() => setConfirmDelete(null)} />}
      <Toast message={toast} />
    </>
  );
}

// ===========================================================================
// CONTACT INBOX PAGE
// ===========================================================================
const seedMessages = [
  { id: "m1", name: "Selam Tesfaye", email: "selam.t@example.com", subject: "Interested in a booking system for our NGO", message: "Hi, I saw the beneficiary tracking concept on your site — we run a small NGO in the SNNPR region and are looking for something similar for case management. Do you have time for a call next week?", date: "2026-07-05T09:20:00", read: false, archived: false },
  { id: "m2", name: "Daniel Okoth", email: "d.okoth@deeplabs.co", subject: "Follow up on the team site", message: "Thanks for the latest round of edits on the DeepLabs site — the load time improved a lot. One small thing: can we swap the hero image on the About page?", date: "2026-07-03T14:05:00", read: true, archived: false },
  { id: "m3", name: "Nyabuoy Gatkuoth", email: "nyabuoy.g@example.com", subject: "Anywaa keyboard — when is it launching?", message: "I've been waiting for an Anywaa keyboard for years. Is there a beta I can join, and will it support the digraphs properly on both Android and iOS?", date: "2026-07-01T18:40:00", read: false, archived: false },
  { id: "m4", name: "Michael Bekele", email: "mbekele@gmail.com", subject: "Quick question about Oloni pricing", message: "Does Oloni support cash payments alongside Telebirr and CBE Birr, or is it digital-only for now?", date: "2026-06-27T11:15:00", read: true, archived: false },
];

function InboxPage() {
  const [messages, setMessages] = useState([]);
  
  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/contact?limit=100`, { headers: getAuthHeaders() });
      const data = await res.json();
      setMessages((data.data || []).map(m => ({ ...m, date: m.createdAt, read: m.isRead, archived: m.isArchived })));
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchMessages(); }, []);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [toast, setToast] = useToast();

  const filtered = useMemo(() => {
    return messages
      .filter((m) => !m.archived)
      .filter((m) => (filter === "unread" ? !m.read : true))
      .filter((m) => (query.trim() === "" ? true : (m.name + " " + m.email + " " + m.subject).toLowerCase().includes(query.toLowerCase())))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [messages, filter, query]);

  const unreadCount = messages.filter((m) => !m.read && !m.archived).length;

  function openMessage(m) {
    setSelected(m);
    setReplyText("");
    if (!m.read) {
      setMessages((prev) => prev.map((x) => (x.id === m.id ? { ...x, read: true } : x)));
      fetch(`${API_URL}/admin/contact/${m.id}/read`, { method: 'PATCH', headers: getAuthHeaders() });
    }
  }
  function doDelete(m) {
    fetch(`${API_URL}/admin/contact/${m.id}`, { method: 'DELETE', headers: getAuthHeaders() }).then(() => {
      setMessages((prev) => prev.filter((x) => x.id !== m.id)); setConfirmDelete(null); setSelected(null); setToast("Message deleted");
    });
  }
  function doArchive(m) {
    fetch(`${API_URL}/admin/contact/${m.id}/archive`, { method: 'PATCH', headers: getAuthHeaders() }).then(() => {
      setMessages((prev) => prev.map((x) => (x.id === m.id ? { ...x, archived: true } : x))); setSelected(null); setToast("Message archived");
    });
  }
  function sendReply() {
    if (!replyText.trim()) return;
    setToast(`Reply sent to ${selected.name}`);
    setSelected(null);
  }

  return (
    <>
      <PageHeader eyebrow="Visitor messages" title="Contact Inbox" subtitle="Messages submitted through your site's contact form land here." />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Messages" value={messages.filter((m) => !m.archived).length} />
        <StatCard label="Unread" value={unreadCount} />
        <StatCard label="Archived" value={messages.filter((m) => m.archived).length} />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Pill active={filter === "all"} onClick={() => setFilter("all")}>All</Pill>
          <Pill active={filter === "unread"} onClick={() => setFilter("unread")}>Unread {unreadCount > 0 && `(${unreadCount})`}</Pill>
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search by name, email, subject..." />
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "#fff" }}>
        {filtered.length === 0 && <EmptyState title="Inbox zero" subtitle="No messages match this filter." />}
        {filtered.map((m, i) => (
          <button
            key={m.id}
            onClick={() => openMessage(m)}
            className="w-full text-left grid px-5 py-4 items-center transition-colors"
            style={{ gridTemplateColumns: "auto 1.4fr 2fr 1fr", borderBottom: i === filtered.length - 1 ? "none" : `1px solid ${LINE}`, background: !m.read ? "rgba(198,154,77,0.05)" : "transparent" }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 999, background: !m.read ? GOLD : "transparent" }} />
            <div className="min-w-0 pr-3">
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: !m.read ? 700 : 600, fontSize: 14.5, color: INK }} className="truncate">{m.name}</div>
              <div style={{ fontSize: 12, color: INK_SOFT }} className="truncate">{m.email}</div>
            </div>
            <div className="min-w-0 pr-3">
              <div style={{ fontSize: 13.5, color: INK, fontWeight: !m.read ? 600 : 400 }} className="truncate">{m.subject}</div>
              <div style={{ fontSize: 12, color: INK_SOFT }} className="truncate">{m.message}</div>
            </div>
            <div style={{ fontSize: 12, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace" }}>{formatDate(m.date, { day: "2-digit", month: "short" })}</div>
          </button>
        ))}
      </div>

      {selected && (
        <ModalShell onClose={() => setSelected(null)} maxWidth={620}>
          <div className="flex-1 overflow-y-auto px-8 py-7">
            <div className="flex items-center justify-between mb-5">
              <Eyebrow>Message</Eyebrow>
              <button onClick={() => setSelected(null)} style={{ color: INK_SOFT }}><X size={18} /></button>
            </div>

            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 600, color: INK, marginBottom: 4 }}>{selected.subject}</h2>
            <div style={{ fontSize: 13, color: INK_SOFT, marginBottom: 4 }}>{selected.name} · {selected.email}</div>
            <div style={{ fontSize: 12, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace", marginBottom: 18 }}>{formatDate(selected.date, { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</div>

            <div className="p-4 rounded-lg mb-6" style={{ background: PAPER, border: `1px solid ${LINE}`, fontSize: 14, color: INK, lineHeight: 1.6 }}>{selected.message}</div>

            <Field label={`Reply to ${selected.name}`}>
              <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Write your reply..." rows={4} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} />
            </Field>

            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <button onClick={sendReply} disabled={!replyText.trim()} className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold disabled:opacity-40" style={{ background: INK, color: "#fff", fontSize: 13.5 }}>
                <Reply size={14} /> Send reply
              </button>
              <button onClick={() => doArchive(selected)} className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold" style={{ border: `1px solid ${LINE}`, color: INK, fontSize: 13.5 }}>
                <Archive size={14} /> Archive
              </button>
              <button onClick={() => setConfirmDelete(selected)} className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold" style={{ border: `1px solid ${RED_BG}`, color: RED, fontSize: 13.5 }}>
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        </ModalShell>
      )}

      {confirmDelete && <ConfirmModal title="Delete this message?" body="This can't be undone." onConfirm={() => doDelete(confirmDelete)} onCancel={() => setConfirmDelete(null)} />}
      <Toast message={toast} />
    </>
  );
}

// ===========================================================================
// NEWSLETTER PAGE
// ===========================================================================
const seedSubscribers = [
  { id: "s1", email: "selam.t@example.com", date: "2026-06-01", status: "active" },
  { id: "s2", email: "d.okoth@deeplabs.co", date: "2026-05-20", status: "active" },
  { id: "s3", email: "nyabuoy.g@example.com", date: "2026-04-11", status: "active" },
  { id: "s4", email: "mbekele@gmail.com", date: "2026-03-30", status: "active" },
  { id: "s5", email: "former.reader@example.com", date: "2026-01-14", status: "unsubscribed" },
];

function NewsletterPage() {
  const [subs, setSubs] = useState(seedSubscribers);
  const [query, setQuery] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [toast, setToast] = useToast();
  const [confirmDelete, setConfirmDelete] = useState(null);

  const filtered = useMemo(
    () => subs.filter((s) => (query.trim() === "" ? true : s.email.toLowerCase().includes(query.toLowerCase()))).sort((a, b) => new Date(b.date) - new Date(a.date)),
    [subs, query]
  );

  const activeCount = subs.filter((s) => s.status === "active").length;

  function addSubscriber() {
    const email = newEmail.trim();
    if (!email || !email.includes("@")) { setToast("Enter a valid email"); return; }
    setSubs((prev) => [{ id: "s" + Date.now(), email, date: new Date().toISOString().slice(0, 10), status: "active" }, ...prev]);
    setNewEmail("");
    setToast("Subscriber added");
  }
  function toggleStatus(s) { setSubs((prev) => prev.map((x) => (x.id === s.id ? { ...x, status: x.status === "active" ? "unsubscribed" : "active" } : x))); }
  function doDelete(s) { setSubs((prev) => prev.filter((x) => x.id !== s.id)); setConfirmDelete(null); setToast("Subscriber removed"); }

  function exportCsv() {
    const rows = [["Email", "Subscribed", "Status"], ...subs.map((s) => [s.email, s.date, s.status])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "subscribers.csv"; a.click();
    URL.revokeObjectURL(url);
    setToast("Exported subscribers.csv");
  }

  function sendNewsletter() {
    if (!subject.trim() || !body.trim()) return;
    setToast(`Sent "${subject}" to ${activeCount} subscribers`);
    setSubject(""); setBody("");
  }

  return (
    <>
      <PageHeader eyebrow="Audience" title="Newsletter" subtitle="Manage subscribers and send updates about new projects and posts." action={<button onClick={exportCsv} className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold" style={{ border: `1px solid ${LINE}`, color: INK, fontSize: 14 }}><Download size={16} /> Export CSV</button>} />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Subscribers" value={subs.length} />
        <StatCard label="Active" value={activeCount} />
        <StatCard label="Unsubscribed" value={subs.length - activeCount} />
      </div>

      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2">
              <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSubscriber()} placeholder="Add subscriber by email" style={{ ...inputStyle, width: 240 }} />
              <button onClick={addSubscriber} className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold shrink-0" style={{ background: INK, color: "#fff", fontSize: 13 }}><UserPlus size={14} /> Add</button>
            </div>
            <SearchBox value={query} onChange={setQuery} placeholder="Search subscribers..." />
          </div>

          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "#fff" }}>
            <div className="grid px-5 py-3" style={{ gridTemplateColumns: "2fr 1fr 0.8fr 0.6fr", background: PAPER, borderBottom: `1px solid ${LINE}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: INK_SOFT }}>
              <div>Email</div><div>Subscribed</div><div>Status</div><div className="text-right">Actions</div>
            </div>
            {filtered.length === 0 && <EmptyState title="No subscribers yet" subtitle="Add your first one above." />}
            {filtered.map((s, i) => (
              <div key={s.id} className="grid px-5 py-3.5 items-center" style={{ gridTemplateColumns: "2fr 1fr 0.8fr 0.6fr", borderBottom: i === filtered.length - 1 ? "none" : `1px solid ${LINE}` }}>
                <div style={{ fontSize: 13.5, color: INK }} className="truncate">{s.email}</div>
                <div style={{ fontSize: 12.5, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace" }}>{formatDate(s.date)}</div>
                <div>
                  <button onClick={() => toggleStatus(s)} className="px-2.5 py-1 rounded-full" style={{ fontSize: 11, fontWeight: 600, background: s.status === "active" ? "rgba(58,107,100,0.14)" : "rgba(192,69,58,0.1)", color: s.status === "active" ? TEAL : RED }}>{s.status}</button>
                </div>
                <div className="text-right"><button onClick={() => setConfirmDelete(s)} className="p-2 rounded-lg" style={{ border: `1px solid ${RED_BG}`, color: RED }}><Trash2 size={13} /></button></div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <div className="rounded-xl p-5" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
            <Eyebrow>Compose</Eyebrow>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, color: INK, marginBottom: 14 }}>Send an update</h3>
            <Field label="Subject"><input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. New: the Oloni airport shuttle is live" style={inputStyle} /></Field>
            <Field label="Message"><textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="What's new?" rows={7} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} /></Field>
            <button onClick={sendNewsletter} disabled={!subject.trim() || !body.trim()} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold disabled:opacity-40" style={{ background: INK, color: "#fff", fontSize: 14 }}>
              <Send size={15} /> Send to {activeCount} subscribers
            </button>
          </div>
        </div>
      </div>

      {confirmDelete && <ConfirmModal title="Remove this subscriber?" body={confirmDelete.email} onConfirm={() => doDelete(confirmDelete)} onCancel={() => setConfirmDelete(null)} />}
      <Toast message={toast} />
    </>
  );
}

// ===========================================================================
// AI KNOWLEDGE PAGE
// ===========================================================================
const KNOWLEDGE_CATEGORIES = [
  { value: "about", label: "About Me" },
  { value: "skills", label: "Skills" },
  { value: "projects", label: "Projects" },
  { value: "availability", label: "Availability" },
  { value: "fun", label: "Fun Facts" },
];

const seedKnowledge = [
  { id: "k1", category: "about", question: "Who is Oriemi and where are they based?", answer: "Oriemi Obang is a full-stack software engineer from Gambella, Ethiopia, running a development studio called Jinina Dev. Fluent in Anywaa, Amharic, and English.", updated: "2026-06-20" },
  { id: "k2", category: "skills", question: "What's the core tech stack?", answer: "NestJS (TypeScript) on the backend, Flutter for mobile with BLoC, Next.js for admin/web dashboards, PostgreSQL with PostGIS and Prisma, Redis for geo queries, and Socket.IO for realtime tracking.", updated: "2026-06-18" },
  { id: "k3", category: "projects", question: "What is Oloni?", answer: "Oloni is a ride-hailing and delivery platform built specifically for the Gambella region, covering boda boda, bajaj, car, and cargo bajaj vehicle types, with an airport shuttle as the flagship route.", updated: "2026-07-01" },
  { id: "k4", category: "availability", question: "Is Oriemi available for freelance work?", answer: "Yes — Jinina Dev takes on select freelance and contract projects alongside ongoing work on Oloni. Best reached through the contact form on this site.", updated: "2026-05-02" },
  { id: "k5", category: "fun", question: "What languages does Oriemi speak?", answer: "Anywaa, Amharic, and English — and the Oloni app itself supports all three in its UI.", updated: "2026-04-14" },
];

function emptyKnowledgeDraft() {
  return { id: null, category: "about", question: "", answer: "", updated: new Date().toISOString().slice(0, 10) };
}

function KnowledgePage() {
  const [entries, setEntries] = useState([]);
  
  const fetchKnowledge = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/knowledge`, { headers: getAuthHeaders() });
      const data = await res.json();
      setEntries(data || []);
    } catch (err) { console.error(err); }
  };
  
  useEffect(() => { fetchKnowledge(); }, []);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState(emptyKnowledgeDraft());
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [testQuestion, setTestQuestion] = useState("");
  const [toast, setToast] = useToast();

  const filtered = useMemo(() => {
    return entries
      .filter((e) => (activeCategory === "all" ? true : e.category === activeCategory))
      .filter((e) => (query.trim() === "" ? true : (e.question + " " + e.answer).toLowerCase().includes(query.toLowerCase())))
      .sort((a, b) => new Date(b.updated) - new Date(a.updated));
  }, [entries, activeCategory, query]);

  const testMatches = useMemo(() => {
    if (!testQuestion.trim()) return [];
    const words = testQuestion.toLowerCase().split(/\W+/).filter((w) => w.length > 2);
    return entries
      .map((e) => ({ e, score: words.filter((w) => (e.question + " " + e.answer).toLowerCase().includes(w)).length }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map((r) => r.e);
  }, [testQuestion, entries]);

  function openAdd() { setDraft(emptyKnowledgeDraft()); setModalOpen(true); }
  function openEdit(e) { setDraft({ ...e }); setModalOpen(true); }
  async function saveDraft() {
    if (!draft.question.trim() || !draft.answer.trim()) return;
    const isNew = !draft.id;
    const url = isNew ? `${API_URL}/admin/knowledge` : `${API_URL}/admin/knowledge/${draft.id}`;
    const method = isNew ? 'POST' : 'PATCH';
    
    try {
      const res = await fetch(url, { method, headers: getAuthHeaders(), body: JSON.stringify(draft) });
      if (res.ok) {
        fetchKnowledge();
        setToast("Knowledge entry saved");
        setModalOpen(false);
      } else {
        const d = await res.json();
        setToast("Error: " + (d.message || "Failed"));
      }
    } catch(e) { setToast("Error saving"); }
  }
  function doDelete(e) { 
    fetch(`${API_URL}/admin/knowledge/${e.id}`, { method: 'DELETE', headers: getAuthHeaders() }).then(() => { 
      setEntries((prev) => prev.filter((x) => x.id !== e.id)); 
      setConfirmDelete(null); 
      setToast("Entry deleted"); 
    }); 
  }

  return (
    <>
      <PageHeader eyebrow="AI Assistant" title="AI Knowledge" subtitle="Teach your site's AI assistant what to say — every entry here becomes something it can answer visitors with." action={<PrimaryButton onClick={openAdd} icon={Plus}>Add Entry</PrimaryButton>} />

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Total Entries" value={entries.length} />
          <StatCard label="Categories" value={KNOWLEDGE_CATEGORIES.length} />
        </div>
        <div className="rounded-xl p-4" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
          <div className="flex items-center gap-2 mb-2">
            <Wand2 size={14} color={TEAL} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: INK_SOFT }}>Test the assistant</div>
          </div>
          <input value={testQuestion} onChange={(e) => setTestQuestion(e.target.value)} placeholder="Ask a question a visitor might ask..." style={{ ...inputStyle, marginBottom: 8 }} />
          {testQuestion.trim() && (
            testMatches.length > 0 ? (
              <div className="flex flex-col gap-2">
                {testMatches.map((m) => (
                  <div key={m.id} className="p-2.5 rounded-lg" style={{ background: PAPER, fontSize: 12.5, color: INK }}>{m.answer}</div>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: 12.5, color: INK_SOFT, fontStyle: "italic" }} className="flex items-center gap-1.5">
                <MessageCircleQuestion size={13} /> No matching entry yet — consider adding one.
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <Pill active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>All</Pill>
          {KNOWLEDGE_CATEGORIES.map((c) => <Pill key={c.value} active={activeCategory === c.value} onClick={() => setActiveCategory(c.value)}>{c.label}</Pill>)}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="Search knowledge..." />
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length === 0 && <div className="rounded-xl" style={{ border: `1px solid ${LINE}`, background: "#fff" }}><EmptyState title="No entries here yet" subtitle="Add the facts you want your assistant to know." /></div>}
        {filtered.map((e) => (
          <div key={e.id} className="rounded-xl p-5 flex items-start justify-between gap-4" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, background: "rgba(58,107,100,0.12)", color: TEAL }}>{KNOWLEDGE_CATEGORIES.find((c) => c.value === e.category)?.label}</span>
                <span style={{ fontSize: 11.5, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace" }}>Updated {formatDate(e.updated)}</span>
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15.5, color: INK, marginBottom: 4 }}>{e.question}</div>
              <div style={{ fontSize: 13.5, color: INK_SOFT, lineHeight: 1.55 }}>{e.answer}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => openEdit(e)} className="p-2 rounded-lg" style={{ border: `1px solid ${LINE}`, color: INK }}><Pencil size={14} /></button>
              <button onClick={() => setConfirmDelete(e)} className="p-2 rounded-lg" style={{ border: `1px solid ${RED_BG}`, color: RED }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <ModalShell onClose={() => setModalOpen(false)} maxWidth={560}>
          <div className="flex-1 overflow-y-auto px-8 py-7">
            <div className="flex items-center justify-between mb-1">
              <Eyebrow>{draft.id ? "Edit entry" : "New entry"}</Eyebrow>
              <button onClick={() => setModalOpen(false)} style={{ color: INK_SOFT }}><X size={18} /></button>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: INK, marginBottom: 20 }}>{draft.id ? "Update this fact" : "Teach the assistant something new"}</h2>

            <Field label="Category">
              <div className="relative">
                <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                  {KNOWLEDGE_CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: "absolute", right: 12, top: 14, color: INK_SOFT, pointerEvents: "none" }} />
              </div>
            </Field>
            <Field label="Question a visitor might ask"><input value={draft.question} onChange={(e) => setDraft({ ...draft, question: e.target.value })} placeholder="e.g. Do you take freelance projects?" style={inputStyle} /></Field>
            <Field label="Answer"><textarea value={draft.answer} onChange={(e) => setDraft({ ...draft, answer: e.target.value })} placeholder="What should the assistant say back?" rows={5} style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }} /></Field>

            <div className="flex items-center gap-3 mt-6">
              <button onClick={saveDraft} disabled={!draft.question.trim() || !draft.answer.trim()} className="px-6 py-3 rounded-lg font-semibold disabled:opacity-40" style={{ background: INK, color: "#fff", fontSize: 14 }}>{draft.id ? "Save changes" : "Add entry"}</button>
              <button onClick={() => setModalOpen(false)} className="px-5 py-3 rounded-lg font-semibold" style={{ color: INK_SOFT, fontSize: 14 }}>Cancel</button>
            </div>
          </div>
        </ModalShell>
      )}

      {confirmDelete && <ConfirmModal title="Delete this entry?" body="Your AI assistant will no longer be able to use this fact." onConfirm={() => doDelete(confirmDelete)} onCancel={() => setConfirmDelete(null)} />}
      <Toast message={toast} />
    </>
  );
}

// ===========================================================================
// APP SHELL
// ===========================================================================
export default function AdminApp() {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.access_token);
        setToken(data.access_token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) { alert('Login failed'); }
  };

  if (!token) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8f7f3' }}>
        <form onSubmit={login} style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid rgba(22,50,74,0.1)', width: '320px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", margin: '0 0 10px', color: '#16324a' }}>Admin Login</h2>
          <input type="email" name="email" placeholder="Email" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <input type="password" name="password" placeholder="Password" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '10px', borderRadius: '6px', background: '#16324a', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    );
  }

  return <AdminDashboard onLogout={() => { localStorage.removeItem('adminToken'); setToken(null); }} />;
}

import { Menu } from "lucide-react";

function AdminDashboard({ onLogout }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [page, setPage] = useState("projects");
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = FONTS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const PAGES = {
    projects: ProjectsPage,
    blog: BlogPage,
    inbox: InboxPage,
    newsletter: NewsletterPage,
    ai: KnowledgePage,
  };
  const Active = PAGES[page];

  return (
    <div className="flex w-full min-h-screen relative" style={{ background: PAPER, fontFamily: "'Inter', sans-serif", color: INK }}>
      
      {/* Mobile Hamburger Button */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-md text-ink"
        style={{ color: INK }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black/50 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static top-0 left-0 z-50 flex flex-col justify-between shrink-0 h-full transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ width: 264, background: INK, minHeight: "100vh" }}
      >
        <div>
          <div className="px-7 pt-8 pb-6">
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: "#fff", letterSpacing: "0.01em" }}>Admin Panel</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: GOLD, marginTop: 4, letterSpacing: "0.08em" }}>JININA DEV</div>
          </div>

          <nav className="px-3 mt-1 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.key === page;
              return (
                <button
                  key={item.key}
                  onClick={() => setPage(item.key)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors"
                  style={{ background: active ? INK_2 : "transparent", color: active ? "#fff" : "#b7c2d3", borderLeft: active ? `3px solid ${GOLD}` : "3px solid transparent", fontSize: 14.5, fontWeight: active ? 600 : 500 }}
                >
                  <Icon size={17} strokeWidth={2} style={{ opacity: active ? 1 : 0.75 }} />
                  {item.label}
                  {item.key === "inbox" && <UnreadDot />}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-3 pb-6">
          <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90" style={{ background: "#e0574c", color: "#fff", fontSize: 14 }}>
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 px-4 sm:px-10 py-16 lg:py-9 lg:ml-0 overflow-hidden" style={{ maxWidth: '100vw' }}>
        <Active />
      </main>
    </div>
  );
}

function UnreadDot() {
  // static visual indicator that the inbox has unread messages, mirrors seedMessages above
  const unread = seedMessages.filter((m) => !m.read && !m.archived).length;
  if (unread === 0) return null;
  return (
    <span className="ml-auto flex items-center justify-center rounded-full" style={{ minWidth: 18, height: 18, background: GOLD, color: INK, fontSize: 10.5, fontWeight: 700, padding: "0 5px" }}>
      {unread}
    </span>
  );
}
