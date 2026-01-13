export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

        <span>
          © {new Date().getFullYear()} Victor Rodrigues
        </span>

        <span>
          Pentest Web Jr
        </span>

      </div>
    </footer>
  );
}
