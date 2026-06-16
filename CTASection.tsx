export function CTASection() {
  return (
    <section className="py-20 md:py-40 bg-team-maroon">
      <div className="section-container text-center">
        <h2
          className="font-heading text-white mb-6 md:mb-8"
          style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          役に立つ善人を目指して
        </h2>
        <p
          className="font-body text-white/95 mb-10 md:mb-14 max-w-3xl mx-auto leading-loose"
          style={{ fontSize: 'clamp(15px, 4vw, 18px)', fontWeight: 300, lineHeight: 2, letterSpacing: '0.05em' }}
        >
          九州学院ラグビー部で、あなたの可能性を最大限に引き出しませんか。<br />
          中学生の皆さん、保護者の方、OBの皆様、ご支援をお待ちしています。
        </p>
        <div className="flex justify-center">
          <button
            className="font-body px-12 md:px-16 py-4 md:py-5 bg-black text-white rounded-md hover:bg-white hover:text-black border-2 border-black transition-all duration-300 shadow-xl font-semibold active:scale-95 md:hover:scale-105"
            style={{ letterSpacing: '0.15em', fontSize: 'clamp(14px, 4vw, 16px)' }}
          >
            応援する
          </button>
        </div>
      </div>
    </section>
  );
}
