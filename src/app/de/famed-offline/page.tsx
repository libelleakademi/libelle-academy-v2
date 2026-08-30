export default function HomeExtras() {
  const testimonials = ["Doz. Dr. Özge Özdal Zincire","Zahnärztin Hayriye Erpak","Dr. Kübra Kökcen"];
  return (
    <>
      <section className="bg-[#f7f5f9] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="self-center">
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">PELEXA</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Lernen endet nicht nach dem Live-Unterricht.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/50">Über Pelexa greifen Teilnehmende auf Aufzeichnungen, Lernmaterialien und digitale Lerninhalte zu.</p>
          </div>
          <div className="rounded-[2.5rem] bg-[#17131c] p-5">
            <div className="rounded-[1.8rem] bg-[#29232f] p-6 text-white">
              <div className="text-xs font-bold tracking-[0.16em] text-white/35">LIBELLE DIGITAL LEARNING</div>
              <div className="mt-3 text-2xl font-semibold">Pelexa Lernbereich</div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Kursaufzeichnungen","Lernmaterialien","Digitale Inhalte","Prüfungsvorbereitung"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-white/65">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tutoren" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">TUTOREN</div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Von Kolleginnen und Kollegen lernen.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[["Firdevs Murad","FSP Medizin"],["Alkış Şensoy","FaMed"]].map(([name, role]) => (
            <div key={name} className="flex items-center gap-5 rounded-[2rem] bg-[#f7f5f9] p-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.5rem] bg-[#31175B]/10 text-xl font-semibold text-[#31175B]">{name.charAt(0)}</div>
              <div><div className="text-xl font-semibold">{name}</div><div className="mt-2 text-sm font-medium text-[#31175B]">{role}</div><div className="mt-3 text-sm text-black/35">Tutor-Foto wird ergänzt.</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#17131c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-xs font-bold tracking-[0.18em] text-[#58ECF1]">TEILNEHMERSTIMMEN</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Erfahrungen unserer Teilnehmenden.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((name) => (
              <div key={name} className="rounded-[2rem] border border-white/10 p-7">
                <div className="text-lg font-semibold">{name}</div>
                <p className="mt-6 text-sm leading-7 text-white/45">Verifizierte Teilnehmerstimme aus dem Libelle-Katalog wird hier eingebunden.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-[#31175B]">@ALMANCAHEDEFIM</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Deutsch lernen – auch zwischen den Unterrichtsstunden.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-black/50">Grammatik, Prüfungstipps und Einblicke in die Libelle Akademie auf Instagram.</p>
            <a href="https://www.instagram.com/almancahedefim/" target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full border border-black/10 px-6 py-3 text-sm font-semibold">Auf Instagram folgen</a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[["bg-[#31175B]","FSP"],["bg-[#58ECF1]","DER / DIE / DAS"],["bg-[#f2f0ed]","FaMed"],["bg-[#D2ECFF]","A1–B2"],["bg-[#4B238B]","MEDICAL"],["bg-[#58ECF1]","GRAMMATIK"]].map(([color, label]) => (
              <div key={label} className={`${color} flex aspect-[4/5] items-end rounded-2xl p-3`}><span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-black">{label}</span></div>
            ))}
          </div>
        </div>
      </section>
      <footer className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <div className="grid gap-10 border-t border-black/5 pt-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div><div className="font-bold tracking-[0.18em] text-[#31175B]">LIBELLE AKADEMIE</div><p className="mt-4 max-w-sm text-sm leading-6 text-black/45">Medizinisches Deutsch, Prüfungsvorbereitung und Deutschkurse von A1 bis B2.</p></div>
          <div className="text-sm leading-8 text-black/55"><div>FSP Medizin</div><div>FaMed</div><div>Zahnmedizin</div><div>Simulationen</div><div>Deutsch A1–B2</div></div>
          <div className="text-sm leading-8 text-black/55"><div>+49 160 1285008</div><div>info@libelle-academy.com</div><a href="https://www.instagram.com/almancahedefim/" target="_blank" rel="noreferrer">Instagram</a><div className="mt-3 text-xs text-black/30">Impressum · Datenschutz · AGB</div></div>
        </div>
      </footer>
    </>
  );
}
