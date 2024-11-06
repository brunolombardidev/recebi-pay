// Exibe a tela de login após o splash
window.onload = function() {
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
            document.getElementById('login-screen').style.display = 'flex';
            document.getElementById('login-screen').style.opacity = '1';
        }, 500);
    }, 3000);
}

// Função de login com validação
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'dev' && password === '01012025') {
        window.location.href = "painel.html";
    } else {
        showError("Usuário sem conta!");
    }
}

// Exibe o modal com a mensagem de erro
function showError(message) {
    const modal = document.getElementById('modal-error');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    modal.style.display = 'flex';

    // Oculta o modal automaticamente após 3 segundos
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Fecha o modal ao clicar fora da mensagem de erro
document.getElementById('modal-error').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
