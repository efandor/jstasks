importance: 5

---

# Модальное диалоговое окно с формой

Создайте функцию `showPrompt(html, callback)`, которая выводит форму с сообщением (`html`), полем ввода и кнопками `OK/ОТМЕНА`.

- Пользователь должен ввести что-то в текстовое поле и нажать `key:Enter` или кнопку "OK", после чего должна вызываться функция `callback(value)` со значением поля.
- Если пользователь нажимает `key:Esc` или кнопку "ОТМЕНА", тогда вызывается `callback(null)`.

В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

Требования:

- Форма должна быть в центре окна.
- Форма является *модальным окном*, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
- При показе формы, фокус должен находиться сразу внутри `<input>`.
- Клавиши `key:Tab`/`key:Shift+Tab` должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.

Пример использования:

```js
showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});
```

Демо во фрейме:

[iframe src="solution" height=160 border=1]

P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.