const announcementText = "Now Booking";
const AnnouncementBar = () => {
  return (
    <div>
      {/* ── Announcement bar ── */}
      <div className="w-full bg-charcoal overflow-hidden py-1">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "announcebar 22s linear infinite" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-white text-xs tracking-[0.25em] uppercase font-sans mx-12 shrink-0"
            >
              {announcementText}
            </span>
          ))}
        </div>
      </div>
       <style>{`
        @keyframes announcebar {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes heromarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
