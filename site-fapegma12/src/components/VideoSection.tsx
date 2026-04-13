const VideoSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça nossa Instituição
          </h2>
          <p className="text-muted-foreground text-lg">
            Assista ao vídeo e veja como preparamos nossos alunos para o mercado de trabalho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
            <video 
              controls 
              className="w-full h-full"
            >
              <source src="/video-institucional.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;