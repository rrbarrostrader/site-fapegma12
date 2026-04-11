import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, CheckCircle2, MessageCircle, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [formStep, setFormStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });
  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    whatsapp: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [vagas, setVagas] = useState(8);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dados de contato atualizados
  const contactData = {
    phone: '(99) 98135-5292',
    phoneLink: '5599981355292',
    email: 'iabfapegmaitz@gmail.com',
    address: 'Rua E, 27 - Conjunto Vitória',
    city: 'Imperatriz-MA',
    cep: '65918-390',
  };

  // Imagens da galeria
  const galleryImages = [
    { src: '/assets/img1.jpg', alt: 'Galeria IAB FAPEGMA 1' },
    { src: '/assets/img2.jpg', alt: 'Galeria IAB FAPEGMA 2' },
    { src: '/assets/img3.jpg', alt: 'Galeria IAB FAPEGMA 3' },
    { src: '/assets/img4.jpg', alt: 'Galeria IAB FAPEGMA 4' },
  ];

  // Scarcity Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.05 && vagas > 2) {
        setVagas(prev => prev - 1);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [vagas]);

  const maskPhone = (value: string) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 7) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    return v;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value);
    setFormData({ ...formData, whatsapp: masked });
    setErrors({ ...errors, whatsapp: masked.replace(/\D/g, '').length < 10 });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGoStep2 = () => {
    if (!selectedObjective) {
      alert('Por favor, selecione seu objetivo antes de continuar.');
      return;
    }
    setFormStep(2);
  };

  const handleSubmitForm = () => {
    const isNomeValid = formData.nome.trim().length >= 2;
    const isEmailValid = validateEmail(formData.email);
    const isWhatsappValid = formData.whatsapp.replace(/\D/g, '').length >= 10;

    setErrors({
      nome: !isNomeValid,
      email: !isEmailValid,
      whatsapp: !isWhatsappValid,
    });

    if (isNomeValid && isEmailValid && isWhatsappValid) {
      const message = `Olá! Tenho interesse no Bacharel em Teologia da IAB FAPEGMA.

*Dados do Interessado:*
Nome: ${formData.nome}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Objetivo: ${selectedObjective}

Por favor, me enviem mais informações sobre o curso e como proceder com a inscrição.`;

      const whatsappUrl = `https://wa.me/${contactData.phoneLink}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setFormSubmitted(true);
      setVagas(prev => Math.max(1, prev - 1));
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const objectives = [
    { icon: '⛪', label: 'Ministério Pastoral' },
    { icon: '📖', label: 'Ensino & Liderança' },
    { icon: '🌍', label: 'Missões' },
    { icon: '🙏', label: 'Crescimento Pessoal' },
  ];

  const faqs = [
    {
      question: 'O diploma é reconhecido pelo MEC?',
      answer: 'Sim! O curso de Bacharel em Teologia do IAB FAPEGMA possui reconhecimento do MEC com nota máxima na avaliação. Seu diploma tem validade nacional e é aceito por igrejas, convenções e instituições em todo o Brasil.',
    },
    {
      question: 'As aulas são presenciais ou EAD?',
      answer: 'As aulas são 100% presenciais, realizadas em nossa unidade em Imperatriz-MA. Isso garante uma formação muito mais rica em termos de vivência, relacionamento e prática ministerial.',
    },
    {
      question: 'Preciso ter ensino médio completo?',
      answer: 'Para o Bacharelado reconhecido pelo MEC, sim — é necessário apresentar certificado de conclusão do Ensino Médio. Nossa secretaria pode orientar você sobre toda a documentação necessária.',
    },
    {
      question: 'Qual é a duração do curso?',
      answer: 'O curso tem duração de 4 anos (8 semestres), com carga horária completa que inclui disciplinas obrigatórias, estágio supervisionado e trabalho de conclusão de curso.',
    },
    {
      question: 'Quando é a próxima turma?',
      answer: 'As vagas são limitadas e estão preenchendo rapidamente! Atualmente restam poucas vagas para a próxima turma. Preencha o formulário para garantir a sua.',
    },
    {
      question: 'Como funciona o financiamento / mensalidades?',
      answer: 'Trabalhamos com mensalidades acessíveis e parcelamentos facilitados. Entre em contato conosco pelo WhatsApp para receber uma proposta personalizada.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        ÚLTIMAS VAGAS: MATRÍCULAS ABERTAS PARA A NOVA TURMA 2025 – <span className="text-amber-400 font-bold">GARANTA SUA VAGA HOJE!</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-blue-900 shadow-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
            ✝
          </div>
          <div className="text-white leading-tight">
            <div className="font-bold text-lg tracking-tight">IAB FAPEGMA</div>
            <div className="text-[10px] opacity-70 uppercase tracking-widest">Instituto de Ação Bíblica</div>
          </div>
        </div>
        <a href="#inscricao" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md hover:shadow-emerald-500/20">
          Quero me Matricular
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-full w-fit mb-6 text-xs font-bold uppercase tracking-wider">
              ✦ Diploma Reconhecido pelo MEC
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1]">
              Transforme seu <span className="text-amber-400">Chamado</span> em Formação Acadêmica de Excelência
            </h1>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              O Bacharelado em Teologia presencial de Imperatriz-MA com nota máxima no MEC. Formação sólida para quem busca liderança, ensino e profundidade bíblica.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Aulas presenciais em Imperatriz — MA',
                'Diploma reconhecido pelo MEC — Nota Máxima',
                'Horários flexíveis para quem trabalha',
                '+500 alunos já transformados desde 2002',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="bg-emerald-500 rounded-full p-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Video Container - Local Video File */}
            <div className="relative rounded-2xl overflow-hidden bg-black/40 aspect-video shadow-2xl border border-white/10 group">
              <video
                className="w-full h-full object-cover"
                controls
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%23000' width='16' height='9'/%3E%3C/svg%3E"
              >
                <source src="/assets/video-hero.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className="text-center mt-4 text-xs opacity-50 italic">Conheça nossa história e metodologia</p>
          </div>

          {/* Right: Form Card */}
          <div id="inscricao" className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 h-fit text-slate-800">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Garantir Minha Vaga</h3>
            <p className="text-slate-500 text-sm mb-6">Preencha os dados abaixo para iniciar sua jornada.</p>

            {/* Progress Bar */}
            {!formSubmitted && (
              <div className="flex gap-2 mb-6">
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${formStep >= 1 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${formStep >= 2 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
              </div>
            )}

            {/* Scarcity Badge */}
            {!formSubmitted && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-6 flex items-center gap-3 text-amber-800 text-sm font-medium">
                <span className="text-lg">🔥</span>
                <span>Apenas <span className="font-bold text-amber-600">{vagas} vagas</span> restantes para esta turma!</span>
              </div>
            )}

            {!formSubmitted ? (
              <>
                {/* Step 1: Objective Selection */}
                {formStep === 1 && (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                    <label className="block text-sm font-bold text-slate-700">
                      Qual é o seu objetivo com a Teologia?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {objectives.map((obj) => (
                        <button
                          key={obj.label}
                          onClick={() => setSelectedObjective(obj.label)}
                          className={`p-4 rounded-2xl border-2 transition-all text-center flex flex-col items-center gap-2 ${
                            selectedObjective === obj.label
                              ? 'border-blue-900 bg-blue-50 ring-4 ring-blue-900/5'
                              : 'border-slate-100 bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <span className="text-3xl">{obj.icon}</span>
                          <span className="text-[11px] font-bold uppercase tracking-tight leading-tight">{obj.label}</span>
                        </button>
                      ))}
                    </div>
                    <Button
                      onClick={handleGoStep2}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-6 rounded-2xl mt-4 text-lg shadow-lg shadow-emerald-500/20"
                    >
                      Continuar →
                    </Button>
                  </div>
                )}

                {/* Step 2: Contact Data */}
                {formStep === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nome Completo</label>
                      <input
                        type="text"
                        placeholder="Ex: João Silva"
                        value={formData.nome}
                        onChange={(e) => {
                          setFormData({ ...formData, nome: e.target.value });
                          setErrors({ ...errors, nome: e.target.value.trim().length < 2 });
                        }}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 rounded-xl focus:outline-none transition-all ${
                          errors.nome ? 'border-red-400 bg-red-50' : formData.nome.length >= 2 ? 'border-emerald-400' : 'border-slate-100 focus:border-blue-900'
                        }`}
                      />
                      {errors.nome && <p className="text-[10px] text-red-500 mt-1 font-bold">Por favor, insira seu nome completo.</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          setErrors({ ...errors, email: !validateEmail(e.target.value) });
                        }}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 rounded-xl focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 bg-red-50' : validateEmail(formData.email) ? 'border-emerald-400' : 'border-slate-100 focus:border-blue-900'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold">Insira um e-mail válido.</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(99) 98135-5292"
                        value={formData.whatsapp}
                        onChange={handlePhoneChange}
                        className={`w-full px-4 py-3.5 bg-slate-50 border-2 rounded-xl focus:outline-none transition-all ${
                          errors.whatsapp ? 'border-red-400 bg-red-50' : formData.whatsapp.replace(/\D/g, '').length >= 10 ? 'border-emerald-400' : 'border-slate-100 focus:border-blue-900'
                        }`}
                      />
                      {errors.whatsapp && <p className="text-[10px] text-red-500 mt-1 font-bold">WhatsApp inválido (mínimo 10 dígitos).</p>}
                    </div>

                    <Button
                      onClick={handleSubmitForm}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-6 rounded-2xl mt-4 text-lg shadow-lg shadow-emerald-500/20"
                    >
                      🎓 Garantir Minha Vaga Agora
                    </Button>
                    <button onClick={() => setFormStep(1)} className="w-full text-slate-400 text-xs font-bold hover:text-blue-900 transition-colors">← Voltar e alterar objetivo</button>
                  </div>
                )}
              </>
            ) : (
              /* Success State */
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-emerald-600 mb-3">Inscrição Recebida!</h4>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  Parabéns! Seus dados foram enviados. <br/>Você será redirecionado para o WhatsApp para finalizar sua matrícula.
                </p>
                <a
                  href={`https://wa.me/${contactData.phoneLink}?text=${encodeURIComponent(`Olá! Sou ${formData.nome} e acabei de me inscrever para o Bacharel em Teologia.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-emerald-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp Agora
                </a>
              </div>
            )}
            <p className="text-[10px] text-slate-400 text-center mt-6">🔒 Seus dados estão protegidos. Não enviamos spam.</p>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <div className="bg-blue-950 text-white py-10 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: '🏛️', title: 'MEC Reconhecido', desc: 'Nota Máxima' },
            { icon: '🎓', title: '+500 Formados', desc: 'Desde 2002' },
            { icon: '📍', title: 'Imperatriz - MA', desc: 'Aulas Presenciais' },
            { icon: '⭐', title: 'Referência', desc: 'Ensino Sólido' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-3xl filter drop-shadow-md">{item.icon}</span>
              <div>
                <div className="font-bold text-sm tracking-tight">{item.title}</div>
                <div className="text-[10px] opacity-50 uppercase font-bold tracking-widest">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section - Image Gallery Instead of Video */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div className="relative rounded-3xl overflow-hidden bg-blue-900 aspect-video shadow-2xl group">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-4">Experiência Real</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-8 leading-tight">
              Mais que um curso — uma <span className="text-amber-500">comunidade de fé e saber</span>
            </h2>
            <ul className="space-y-6">
              {[
                { icon: '⛪', text: 'Aulas 100% presenciais com foco ministerial' },
                { icon: '📚', text: 'Grade curricular completa e atualizada' },
                { icon: '🕐', text: 'Segundas-feiras: das 19:30 às 21:30' },
                { icon: '📜', text: 'Diploma com validade nacional (MEC)' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-700 font-medium leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-950">Dúvidas Frequentes</h2>
            <p className="text-slate-500 mt-2">Tudo o que você precisa saber sobre o IAB FAPEGMA</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-bold text-blue-950">✝</div>
              <strong className="text-xl tracking-tight">IAB FAPEGMA</strong>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              Formando líderes cristãos com excelência acadêmica e compromisso bíblico desde 2002 em Imperatriz-MA.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-sm uppercase tracking-widest text-amber-400">Contato</h5>
            <div className="space-y-4 text-sm opacity-80">
              <a href={`tel:+55${contactData.phoneLink}`} className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" /> {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" /> {contactData.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>{contactData.address}<br/>{contactData.city} | CEP {contactData.cep}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-sm uppercase tracking-widest text-amber-400">Links Úteis</h5>
            <ul className="space-y-3 text-sm opacity-60">
              <li>Bacharel em Teologia</li>
              <li>Processo Seletivo 2025</li>
              <li><a href="https://www.iabfapegma.com.br" className="hover:text-amber-400 underline underline-offset-4">Site Oficial</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 text-center text-[10px] opacity-40 uppercase tracking-widest leading-loose">
          © 2025 IAB FAPEGMA — Fundação Educacional FAPEGMA Ltda. <br/>
          CNPJ 04.983.033/0001-50 · Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${contactData.phoneLink}?text=Olá!%20Tenho%20interesse%20no%20Bacharel%20em%20Teologia.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
