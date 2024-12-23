window.onload = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const si = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');

    if (isLoggedIn === 'true') {
        // إظهار عنصر الحساب
        document.getElementById('account').classList.remove('non-active');
        document.getElementById('logout').classList.remove('non-active');
        document.getElementById('loginNavItem').classList.add('non-active');
        document.getElementById('getStartedSection').classList.add('non-active');
        
        
        
        console.log('User logged in, displaying account info.');
    } else {
        document.getElementById('account').classList.add('non-active');
        document.getElementById('logout').classList.add('non-active');
        document.getElementById('loginNavItem').classList.remove('non-active');
        document.getElementById('getStartedSection').classList.remove('non-active');
    }
};
document.getElementById('logout').addEventListener('click', async () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userData');  // إلغاء البيانات الشخصية
    localStorage.removeItem('cart');
    alert('You have logged out successfully');

    // إعادة التوجيه إلى صفحة تسجيل الدخول
    window.location.href = './login.html';
});