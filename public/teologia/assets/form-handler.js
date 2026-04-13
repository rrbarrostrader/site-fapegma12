function initForm() {
    const form = document.getElementById('inscricao-form');
    if (form) {
        console.log("Formulário encontrado e inicializado.");
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Número do WhatsApp (conforme encontrado no site original)
            const whatsappNumber = "5599981355292";
            
            // Formatar mensagem para o WhatsApp
            const textoWhatsApp = `*Nova Inscrição - Bacharel em Teologia*%0A%0A` +
                                 `*Nome:* ${nome}%0A` +
                                 `*E-mail:* ${email}%0A` +
                                 `*Telefone:* ${telefone}%0A` +
                                 `*Mensagem:* ${mensagem}`;
            
            // Criar URL do WhatsApp
            const url = `https://wa.me/${whatsappNumber}?text=${textoWhatsApp}`;
            
            // Abrir WhatsApp em nova aba
            window.open(url, '_blank');
            
            // Feedback visual (opcional)
            alert('Obrigado por sua inscrição! Você será redirecionado para o nosso WhatsApp para finalizar o processo.');
        });
    } else {
        // Se não encontrar o formulário, tenta novamente em breve (útil para conteúdo dinâmico)
        setTimeout(initForm, 500);
    }
}

document.addEventListener('DOMContentLoaded', initForm);
