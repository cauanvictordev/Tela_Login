document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const togglePassword = document.getElementById('togglePassword');
    const toggleNewPassword = document.getElementById('toggleNewPassword');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Função de Login
    window.checkLogin = function () {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert("Login bem-sucedido! Redirecionando para o jogo...");
            window.location.href = "https://cauanvictordev.github.io/Jogo-do-Mario2.0/";
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
        return false;
    }

    // Função de Registro
    window.registerUser = function () {
        const newUsername = newUsernameInput.value;
        const newPassword = newPasswordInput.value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o usuário já existe
        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            alert("Conta já registrada. Por favor, faça login.");
            showLoginForm();
            return false;
        }

        // Adiciona o novo usuário
        if (newUsername && newPassword) {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Registro bem-sucedido! Agora você pode fazer login.");
            showLoginForm();
        } else {
            alert("Por favor, forneça um nome de usuário e senha.");
        }
        return false;
    }

    // Alternar visibilidade da senha no login e registro
    function togglePasswordVisibility(input, toggleIcon) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        toggleIcon.classList.toggle('bxs-lock-open');
    }

    togglePassword.addEventListener('click', () => togglePasswordVisibility(passwordInput, togglePassword));
    toggleNewPassword.addEventListener('click', () => togglePasswordVisibility(newPasswordInput, toggleNewPassword));

    // Alternar entre formulários de login e registro
    window.showRegisterForm = function () {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    window.showLoginForm = function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Carrega informações salvas, se o usuário marcou "Remember me"
    if (localStorage.getItem('rememberMe') === 'true') {
        usernameInput.value = localStorage.getItem('savedUsername') || '';
        passwordInput.value = localStorage.getItem('savedPassword') || '';
        rememberMeCheckbox.checked = true;
    }

    // Função "Remember me"
    rememberMeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Salva o nome de usuário e senha no localStorage
            localStorage.setItem('savedUsername', usernameInput.value);
            localStorage.setItem('savedPassword', passwordInput.value);
            localStorage.setItem('rememberMe', 'true');
        } else {
            // Remove as informações salvas
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
            localStorage.setItem('rememberMe', 'false');
        }
    });

    // Função "Forgot password"
    window.forgotPassword = function () {
        alert("Para recuperar sua senha, siga as instruções enviadas para o seu e-mail.");
        // Adicione a lógica de recuperação de senha aqui, se necessário.
    };
});
