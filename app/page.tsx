'use client'

import { useState } from 'react'

const courses = [
  ['⭐', 'Matematika', 'Mantiqiy fikrlash va aniq fanlar asoslari'],
  ['🔶', 'Ingliz tili', 'Boshlang‘ichdan yuqori darajagacha'],
  ['🌟', 'IELTS', 'Imtihonga yo‘naltirilgan intensiv tayyorgarlik'],
  ['🔥', 'CEFR', 'Milliy va xalqaro sertifikatga tayyorlov'],
  ['✳️', 'Rus tili', 'Erkin muloqot va akademik rus tili'],
  ['🏵️', 'Koreys tili', 'TOPIK va kundalik suhbat kurslari'],
  ['❤️', 'Nemis tili', 'A1–B2 darajalarda tizimli ta’lim'],
  ['⭐', 'Turk tili', 'Tez va oson o‘rganish metodikasi'],
  ['✳️', 'IT savodxonlik', 'Kompyuter va raqamli ko‘nikmalar'],
]

const achievements = [
  { year: '2024', title: 'IELTS 7.5+', text: 'O‘quvchilarimiz xalqaro imtihonlarda yuqori natijalarni qo‘lga kiritishdi.', mark: '7.5' },
  { year: '2024', title: 'CEFR B2 / C1', text: 'Ko‘plab bitiruvchilarimiz milliy sertifikat sohibiga aylanishdi.', mark: 'B2' },
  { year: '2025', title: 'Yangi marralar', text: 'Linguaskill oilasi kundan-kunga yangi natijalar bilan kengaymoqda.', mark: '∞' },
]

function CertificateCard({ image, student, course, level }: { image: string; student: string; course: string; level: string }) {
  return (
    <figure className="certificate-card">
      <img src={image} alt={`${student} — ${course} ${level} sertifikati`} />
      <figcaption><strong>{student}</strong><span>{course} · {level}</span></figcaption>
    </figure>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#bosh" onClick={closeMenu}>
          <img src="/images/linguaskill-logo.png" alt="Linguaskill logotipi" />
          <span><b>LINGUASKILL</b><small>O‘QUV MARKAZI</small></span>
        </a>
        <button className="menu-toggle" aria-label="Menyuni ochish" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Asosiy menyu">
          <a href="#biz-haqimizda" onClick={closeMenu}>Biz haqimizda</a>
          <a href="#kurslar" onClick={closeMenu}>Kurslar</a>
          <a href="#muvaffaqiyatlar" onClick={closeMenu}>Muvaffaqiyatlar</a>
          <a href="#direktor" onClick={closeMenu}>Direktor</a>
          <a href="#aloqa" className="nav-cta" onClick={closeMenu}>Aloqa <span>↗</span></a>
        </nav>
      </header>

      <section id="bosh" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BILIM — ENG KATTA SARMoya</p>
          <h1>Kelajagingizni<br /><em>bilim bilan</em> yarating.</h1>
          <p className="hero-description">Linguaskill — zamonaviy ta’lim, tajribali ustozlar va katta maqsadlar sari ishonchli qadam.</p>
          <div className="hero-actions"><a className="button button-gold" href="#aloqa">Kursga yozilish <span>↗</span></a><a className="text-link" href="#kurslar">Kurslarni ko‘rish <span>↓</span></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>LS</span><span>IQ</span><span>+</span></div><p><strong>500+</strong> muvaffaqiyatli<br />o‘quvchilar</p></div>
        </div>
        <div className="hero-art"><div className="art-frame"><img src="/images/linguaskill-logo.png" alt="Linguaskill LS emblemasi" /><span className="orbit orbit-one" /><span className="orbit orbit-two" /><div className="art-caption"><span>EST. 2020</span><span>EDUCATION<br />FORWARD</span></div></div><div className="vertical-note">LINGUASKILL • O‘QUV MARKAZI</div></div>
      </section>

      <section id="biz-haqimizda" className="about section-wrap section-line"><div className="section-label">01 / BIZ HAQIMIZDA</div><div className="about-grid"><div><h2>Har bir dars —<br /><em>yangi imkoniyat.</em></h2></div><div><p className="lead">Biz o‘quvchilarga shunchaki bilim bermaymiz — ularni katta maqsadlar sari ilhomlantiramiz.</p><p>Linguaskill o‘quv markazida barcha yo‘nalishlar bo‘yicha tajribali va oliy ma’lumotli ustozlar dars beradi. Zamonaviy metodika, samimiy muhit va individual yondashuv — natijalarimizning asosidir.</p><a className="text-link" href="#aloqa">Biz bilan tanishing <span>↗</span></a></div></div></section>

      <section id="kurslar" className="courses section-wrap"><div className="section-heading"><div><div className="section-label">02 / YO‘NALISHLAR</div><h2>O‘zingizga mos<br /><em>yo‘nalishni tanlang.</em></h2></div><p>Bilim olishni bugundan boshlang.<br />Natija — biz bilan.</p></div><div className="course-grid">{courses.map(([icon, title, text]) => <a className="course-card" href="#aloqa" key={title}><span className="course-icon">{icon}</span><span className="course-title">{title}</span><span className="course-text">{text}</span><span className="card-arrow">↗</span></a>)}</div></section>

      <section id="direktor" className="director section-wrap section-line"><div className="section-label">03 / BIZNING RAHBAR</div><div className="director-grid"><div className="director-portrait"><img className="director-photo" src="/images/director-sevara.png" alt="Linguaskill direktori Abdulayeva Sevara" /><span className="portrait-stamp">L</span></div><div className="director-copy"><p className="eyebrow">LINGUASKILL FOUNDER</p><h2>Ta’lim — bu<br /><em>ishonch masalasi.</em></h2><p className="lead">“Har bir o‘quvchi o‘z imkoniyatlarini kashf etishi uchun unga to‘g‘ri yo‘l va ishonchli ustoz kerak.”</p><div className="director-name"><strong>Abdulayeva Sevara</strong><span>Direktor va asoschi</span></div><div className="director-stats"><div><b>10+</b><span>Yillik tajriba</span></div><div><b>15</b><span>Professional ustoz</span></div><div><b>500+</b><span>Bitiruvchilar</span></div></div></div></div></section>

      <section id="muvaffaqiyatlar" className="success section-wrap"><div className="section-heading"><div><div className="section-label">04 / NATIJALARIMIZ</div><h2>Natijalarimiz —<br /><em>bizning faxrimiz.</em></h2></div><p>Har bir sertifikat ortida<br />mehnat va ishonch bor.</p></div><div className="achievement-list">{achievements.map((item) => <article className="achievement" key={item.title}><span className="achievement-year">{item.year}</span><div className="achievement-mark">{item.mark}</div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="card-arrow">↗</span></article>)}</div><div className="certificate-gallery"><CertificateCard image="/images/certificate-dilnura.png" student="Dilnura Abdullayeva" course="Ingliz tili" level="B1" /><CertificateCard image="/images/certificate-oksana.png" student="Oksana Radjapova" course="Turk tili" level="B1" /><CertificateCard image="/images/certificate-gulchiroy.png" student="Gulchiroy Pavlonova" course="Ingliz tili" level="B2" /><CertificateCard image="/images/certificate-sherzod.png" student="Sherzod Adilbekov" course="Ingliz tili" level="B2" /></div><p className="gallery-note">O‘quvchilarimizning milliy sertifikatlari</p></section>

      <section id="aloqa" className="contact section-wrap"><div className="contact-box"><div className="section-label">05 / ALOQA</div><h2>Bugun boshlang.<br /><em>Kelajakni yarating.</em></h2><p>Ma’lumot olish yoki kursga yozilish uchun biz bilan bog‘laning.</p><div className="contact-actions"><a className="button button-gold" href="tel:+998914218698">+998 91 421 86 98 <span>↗</span></a><a className="button button-outline" href="https://t.me/sevaralinguaaa" target="_blank" rel="noreferrer">Telegram orqali yozish <span>↗</span></a></div></div><div className="contact-details"><div><span>Manzil</span><strong>GJRJ+RJ7, улица Аль Хорезми,<br />Urganch, Xorazm viloyati</strong><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=GJRJ%2BRJ7%2C%20Al%20Xorazmiy%20ko%27chasi%2C%20Urganch%2C%20Xorazm%20viloyati%2C%20O%27zbekiston" target="_blank" rel="noreferrer">Google Maps’da ko‘rish ↗</a><small className="landmark">Mo‘ljal: Zanalniy</small></div><div><span>Ish vaqti</span><strong>Dushanba — Shanba, 09:00 — 21:00</strong></div><div><span>Instagram</span><strong>@linguaskill.uz</strong></div></div></section>

      <footer><a className="brand" href="#bosh"><img src="/images/linguaskill-logo.png" alt="Linguaskill" /><span><b>LINGUASKILL</b><small>O‘QUV MARKAZI</small></span></a><p>© 2025 Linguaskill. Barcha huquqlar himoyalangan.</p><a className="powered-by" href="https://t.me/aytmonov" target="_blank" rel="noreferrer">Powered by Aytmonov Xushndbekbek</a><a href="#bosh">Yuqoriga ↑</a></footer>
    </main>
  )
}
