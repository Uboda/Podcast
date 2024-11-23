document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon"); // Кнопка меню
    const navMenu = document.querySelector(".header__nav"); // Меню навигации

    // Скрываем меню по умолчанию при 390x844
    const setMenuVisibility = () => {
        if (window.innerWidth <= 390 && window.innerHeight <= 844) {
            navMenu.style.display = "none"; // Скрыть меню
        } else {
            navMenu.style.display = ""; // Восстановить стандартное состояние
        }
    };

    // Обработчик для показа/скрытия меню
    menuIcon.addEventListener("click", (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        if (navMenu.style.display === "none" || navMenu.style.display === "") {
            navMenu.style.display = "block"; // Показать меню
        } else {
            navMenu.style.display = "none"; // Скрыть меню
        }
    });

    // Проверяем размер экрана при загрузке
    setMenuVisibility();

    // Проверяем при изменении размера окна
    window.addEventListener("resize", setMenuVisibility);
});
