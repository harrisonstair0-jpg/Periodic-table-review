"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Filter,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { categories, categoryStyles, elements } from "./data/elements";

const allCategoriesLabel = "All";
const groupNumbers = Array.from({ length: 18 }, (_, index) => index + 1);
const mainPeriodNumbers = Array.from({ length: 7 }, (_, index) => index + 1);

function getStyle(category) {
  return categoryStyles[category] ?? categoryStyles["Reactive nonmetals"];
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel);
  const [selectedElement, setSelectedElement] = useState(null);

  // useMemo recalculates the filtered list only when search/filter changes.
  const filteredElements = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return elements.filter((element) => {
      const matchesCategory =
        activeCategory === allCategoriesLabel || element.category === activeCategory;
      const searchableText = [
        element.symbol,
        element.name,
        element.category,
        element.atomicNumber,
        element.atomicMass,
        element.discovered,
        element.tagline,
        element.summary,
        element.uses,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedSearch);
    });
  }, [activeCategory, searchTerm]);

  function openRelatedTile(atomicNumber) {
    const nextElement = elements.find((element) => element.atomicNumber === atomicNumber);
    if (nextElement) {
      setSelectedElement(nextElement);
    }
  }

  return (
    <main className="h-screen overflow-hidden bg-[#090b10] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(255,92,138,0.14),transparent_28%),radial-gradient(circle_at_72%_84%,rgba(180,255,57,0.10),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <section className="relative z-10 flex h-screen w-full flex-col gap-3 px-3 py-3 sm:px-4">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          resultCount={filteredElements.length}
        />

        <PeriodicTable
          elementsList={filteredElements}
          selectedId={selectedElement?.id}
          onSelect={setSelectedElement}
        />

        {selectedElement ? (
          <DetailModal
            element={selectedElement}
            onClose={() => setSelectedElement(null)}
            onRelatedClick={openRelatedTile}
          />
        ) : null}
      </section>
    </main>
  );
}

function Header({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  resultCount,
}) {
  return (
    <header className="flex shrink-0 flex-col gap-2 border-b border-white/10 pb-2">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200/80">
            <Sparkles className="h-4 w-4" />
            Element explorer
          </div>
          <h1 className="font-display text-2xl font-black tracking-normal text-white sm:text-3xl">
            Periodic Table
          </h1>
        </div>

        <div className="grid gap-2 sm:grid-cols-[minmax(240px,360px)_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search elements, symbols, uses..."
              className="h-9 w-full rounded-md border border-white/15 bg-white/[0.07] pl-10 pr-4 text-sm text-white outline-none transition focus:border-teal-300 focus:bg-white/[0.10] focus:ring-2 focus:ring-teal-300/30"
            />
          </label>
          <div className="flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-slate-200">
            {resultCount} tiles
          </div>
        </div>
      </div>

      <nav aria-label="Category filters" className="table-scroll flex gap-2 overflow-x-auto pb-1">
        {[allCategoriesLabel, ...categories].map((category) => {
          const isActive = activeCategory === category;
          const style = category === allCategoriesLabel ? categoryStyles["Reactive nonmetals"] : getStyle(category);

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="inline-flex h-7 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border px-2.5 text-xs font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/35"
              style={{
                borderColor: isActive ? style.border : "rgba(255,255,255,0.12)",
                background: isActive ? style.soft : "rgba(255,255,255,0.045)",
                color: isActive ? style.accent : "rgba(226,232,240,0.88)",
                boxShadow: isActive ? `0 0 22px ${style.soft}` : "none",
              }}
              type="button"
            >
              <Filter className="h-4 w-4" />
              {category}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

function PeriodicTable({ elementsList, selectedId, onSelect }) {
  const visibleAtomicNumbers = new Set(
    elementsList.map((element) => element.atomicNumber),
  );
  const hasLanthanides = elementsList.some((element) => element.period === 8);
  const hasActinides = elementsList.some((element) => element.period === 9);

  if (elementsList.length === 0) {
    return (
      <section className="flex min-h-0 flex-1 items-center justify-center rounded-md border border-dashed border-white/20 bg-white/[0.04] px-6 text-center">
        <div>
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-teal-200" />
          <h2 className="text-xl font-bold text-white">No matching tiles</h2>
          <p className="mt-2 text-slate-300">Try a different search or category filter.</p>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Periodic table of elements" className="min-h-0 min-w-0 flex-1">
      <div className="table-scroll h-full overflow-auto rounded-md border border-white/10 bg-black/20 p-3 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="periodic-grid grid gap-1.5">
          <div className="axis-corner" aria-hidden="true" />
          {groupNumbers.map((group) => (
            <div
              key={`group-${group}`}
              className="axis-label group-label"
              style={{ gridColumn: group + 1, gridRow: 1 }}
            >
              {group}
            </div>
          ))}

          {mainPeriodNumbers.map((period) => (
            <div
              key={`period-${period}`}
              className="axis-label period-label"
              style={{ gridColumn: 1, gridRow: period + 1 }}
            >
              {period}
            </div>
          ))}

          <SeriesLabel row={10} label="Lanthanides" active={hasLanthanides} />
          <SeriesLabel row={11} label="Actinides" active={hasActinides} />

          {visibleAtomicNumbers.has(57) || elementsList.some((element) => element.period === 6) ? (
            <SeriesPlaceholder
              row={7}
              label="57-71"
              title="Lanthanide series"
            />
          ) : null}

          {visibleAtomicNumbers.has(89) || elementsList.some((element) => element.period === 7) ? (
            <SeriesPlaceholder
              row={8}
              label="89-103"
              title="Actinide series"
            />
          ) : null}

          {elementsList.map((element) => (
            <ElementTile
              key={element.id}
              element={element}
              selected={element.id === selectedId}
              onClick={() => onSelect(element)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeriesLabel({ row, label, active }) {
  return (
    <div
      className="series-label"
      style={{
        gridColumn: "1 / span 3",
        gridRow: row,
        opacity: active ? 1 : 0.38,
      }}
    >
      {label}
    </div>
  );
}

function SeriesPlaceholder({ row, label, title }) {
  return (
    <div
      className="series-placeholder"
      style={{ gridColumn: 4, gridRow: row }}
      aria-label={title}
    >
      <span>{label}</span>
      <small>{title}</small>
    </div>
  );
}

function ElementTile({ element, selected, onClick }) {
  const style = getStyle(element.category);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full min-h-[48px] w-full flex-col overflow-hidden rounded-md border p-1 text-left transition duration-300 hover:-translate-y-1 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-white/40"
      style={{
        gridColumn: element.group + 1,
        gridRow: element.period > 7 ? element.period + 2 : element.period + 1,
        borderColor: selected ? style.accent : style.border,
        background: `linear-gradient(145deg, ${style.soft}, rgba(255,255,255,0.045))`,
        boxShadow: selected
          ? `0 0 24px ${style.border}, inset 0 0 24px rgba(255,255,255,0.06)`
          : `0 0 12px ${style.soft}`,
      }}
      aria-label={`Open details for ${element.name}`}
    >
      <span
        className="absolute inset-x-0 top-0 h-1 opacity-90"
        style={{ background: style.accent }}
      />
      <span className="flex items-start justify-between gap-1">
        <span className="text-base font-black leading-none text-white">{element.symbol}</span>
        <span className="rounded-sm px-1 py-0.5 text-[8px] font-bold text-black" style={{ background: style.accent }}>
          {element.atomicNumber}
        </span>
      </span>
      <span className="mt-1 line-clamp-2 min-h-[1.05rem] text-[8px] font-bold leading-[1.05] text-slate-100">
        {element.name}
      </span>
      <span className="mt-auto flex items-center gap-0.5 text-[7px] font-medium text-slate-300">
        <CalendarDays className="h-2 w-2" />
        Mass {element.atomicMass}
      </span>
      <span className="mt-0.5 line-clamp-1 text-[7px] leading-tight text-slate-400">
        {element.category}
      </span>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 0%, ${style.soft}, transparent 58%)` }} />
    </button>
  );
}

function DetailModal({ element, onClose, onRelatedClick }) {
  if (!element) return null;

  const style = getStyle(element.category);
  const coolFact = element.funFacts[0];
  const relatedElements = element.related
    .map((atomicNumber) => elements.find((candidate) => candidate.atomicNumber === atomicNumber))
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-5">
      <aside
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-md border border-white/12 bg-[#10131c]/95 p-4 shadow-2xl shadow-black/60 sm:p-5"
        aria-label={`${element.name} detail panel`}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: style.accent }}>
              {element.category}
            </p>
            <h2 className="mt-1 text-3xl font-black tracking-normal text-white sm:text-4xl">{element.name}</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
              <span className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1">Atomic #{element.atomicNumber}</span>
              <span className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1">Mass {element.atomicMass}</span>
              <span className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1">Discovered {element.discovered}</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div
              className="hidden h-16 w-16 place-items-center rounded-md border text-2xl font-black text-white sm:grid"
              style={{
                borderColor: style.border,
                background: style.soft,
                boxShadow: `0 0 22px ${style.soft}`,
              }}
            >
              {element.symbol}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close detail panel"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/[0.06] text-slate-200 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <section
          className="mb-5 rounded-md border p-4"
          style={{
            borderColor: style.border,
            background: `linear-gradient(135deg, ${style.soft}, rgba(255,255,255,0.045))`,
            boxShadow: `0 0 28px ${style.soft}`,
          }}
        >
          <h3 className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: style.accent }}>
            Cool Fact
          </h3>
          <p className="mt-2 text-xl font-black leading-7 text-white">{coolFact}</p>
        </section>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <div>
            <div className="aspect-video overflow-hidden rounded-md border border-white/10 bg-black">
              <iframe
                className="h-full w-full"
                src={element.youtubeEmbedUrl}
                title={`${element.name} explainer video search`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <a
              href={element.youtubeWatchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-white text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
            >
              <Play className="h-4 w-4 fill-current" />
              Open {element.name} videos on YouTube
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            <InfoBlock title="What It Is" body={element.summary} />
            <InfoBlock title="Why It Matters" body={element.whyMatters} />

            <section>
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                Fun Facts
              </h3>
              <ul className="mt-2 grid gap-2">
                {element.funFacts.map((fact) => (
                  <li key={fact} className="rounded-md border border-white/10 bg-white/[0.045] p-3 text-sm leading-6 text-slate-200">
                    {fact}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                Related Tiles
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {relatedElements.map((related) => {
                  const relatedStyle = getStyle(related.category);
                  return (
                    <button
                      key={related.id}
                      type="button"
                      onClick={() => onRelatedClick(related.atomicNumber)}
                      className="flex min-h-14 items-center gap-3 rounded-md border bg-white/[0.045] p-2 text-left transition hover:-translate-y-0.5"
                      style={{ borderColor: relatedStyle.border }}
                    >
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-sm text-sm font-black text-black"
                        style={{ background: relatedStyle.accent }}
                      >
                        {related.symbol}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold text-white">{related.name}</span>
                        <span className="block truncate text-xs text-slate-400">Atomic #{related.atomicNumber} - {related.category}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </aside>
    </div>
  );
}

function InfoBlock({ title, body }) {
  return (
    <section>
      <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-200">{body}</p>
    </section>
  );
}

export default App;
