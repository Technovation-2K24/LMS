document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn1 = document.querySelector('.register-btn1');
    const registerBtn2 = document.querySelector('.register-btn2');
    const defaultLoginForm = document.querySelector('.form-box.login');
    const facultyLoginForm = document.querySelector('.form-box.login1');
    const studentLoginForm = document.querySelector('.form-box.login2');
    const backBtn = document.querySelector('.back-btn');

    registerBtn1.addEventListener('click', () => {
        defaultLoginForm.style.display = 'none';
        facultyLoginForm.style.display = 'flex';
        studentLoginForm.style.display = 'none';
        container.classList.add('active');
        
    });

    registerBtn2.addEventListener('click', () => {
        defaultLoginForm.style.display = 'none';
        facultyLoginForm.style.display = 'none';
        studentLoginForm.style.display = 'flex';
        container.classList.add('active');
    });

    backBtn.addEventListener('click', () => {
        defaultLoginForm.style.display = 'flex';
        facultyLoginForm.style.display = 'none';
        studentLoginForm.style.display = 'none';
        container.classList.remove('active');
    })
});