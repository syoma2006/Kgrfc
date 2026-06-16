export function HeroSection() {
  return (
    <section
      className="relative w-full mt-16 md:mt-0"
      style={{
        height: 'clamp(480px, 70vh, 800px)',
        backgroundImage: 'url(/images/IMG_0354.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-team-maroon/65" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-heading text-white mb-6 md:mb-8 leading-tight tracking-wider"
          style={{
            fontSize: 'clamp(40px, 10vw, 64px)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          己捨人為
        </h1>
        <p
          className="font-body text-white max-w-2xl leading-loose px-4"
          style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            lineHeight: 2,
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          九州学院高等学校ラグビー部は、花園出場を目指し日々練習に励んでいます。
        </p>
      </div>
    </section>
  );
}
