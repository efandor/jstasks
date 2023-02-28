# Методы массивов

Массивы предоставляют множество методов. Чтобы было проще, в этой главе они разбиты на группы.

## Добавление/удаление элементов

Мы уже знаем методы, которые добавляют и удаляют элементы из начала или конца:

- `arr.push(...items)` -- добавляет элементы в конец,
- `arr.pop()` -- извлекает элемент из конца,
- `arr.shift()` -- извлекает элемент из начала,
- `arr.unshift(...items)` -- добавляет элементы в начало.

Есть и другие.

### splice

Как удалить элемент из массива?

Так как массивы - это объекты, то можно попробовать `delete`:

```js run
let arr = ["I", "go", "home"];

delete arr[1]; // удалить "go"

alert( arr[1] ); // undefined

// теперь arr = ["I",  , "home"];
alert( arr.length ); // 3
```

Элемент был удалён, но в массиве всё ещё три элемента, мы можем увидеть, что `arr.length == 3`.

Это естественно, потому что `delete obj.key` удаляет значение по ключу `key`.  Это всё, что он делает. Хорошо для объектов. Но для массивов мы обычно хотим, чтобы оставшиеся элементы сдвинулись и заняли освободившееся место. Мы ждём, что массив станет короче.

Поэтому нужно использовать специальные методы.

Метод [arr.splice(str)](mdn:js/Array/splice) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

Синтаксис:

```js
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

Он изменяет `arr` начиная с индекса `start`: удаляет `deleteCount` элементов и затем вставляет `elem1, ..., elemN` на их место. Возвращает массив из удалённых элементов.

Этот метод легко понять, рассмотрев примеры.

Начнём с удаления:

```js run
let arr = ["Я", "изучаю", "JavaScript"];

*!*
arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
*/!*

alert( arr ); // осталось ["Я", "JavaScript"]
```

Легко, правда? Начиная с индекса `1`, он убрал `1` элемент.

В следующем примере мы удалим 3 элемента и заменим их двумя другими.

```js run
let arr = [*!*"Я", "изучаю", "JavaScript",*/!* "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

alert( arr ) // теперь [*!*"Давай", "танцевать"*/!*, "прямо", "сейчас"]
```

Здесь видно, что `splice` возвращает массив из удалённых элементов:

```js run
let arr = [*!*"Я", "изучаю",*/!* "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);

alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов
```

Метод `splice` также может вставлять элементы без удаления, для этого достаточно установить `deleteCount` в `0`:

```js run
let arr = ["Я", "изучаю", "JavaScript"];

// с индекса 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"
```

````smart header="Отрицательные индексы разрешены"
В этом и в других методах массива допускается использование отрицательных индексов. Они определяют позицию с конца массива, как тут:

```js run
let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```
````

### slice

Метод [arr.slice](mdn:js/Array/slice) намного проще, чем похожий на него `arr.splice`.

Синтаксис:

```js
arr.slice([start], [end])
```

Он возвращает новый массив, в который копирует все элементы с индекса `start` до `end` (не включая `end`). `start` и `end` могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

Это похоже на строковый метод `str.slice`, но вместо подстрок возвращает подмассивы.

Например:

```js run
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)
```

Можно вызвать `slice` без аргументов: `arr.slice()` создаёт копию `arr`. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.

### concat

Метод [arr.concat](mdn:js/Array/concat) создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

Синтаксис:

```js
arr.concat(arg1, arg2...)
```

Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.

В результате -- новый массив, включающий в себя элементы из `arr`, затем `arg1`, `arg2` и так далее.

Если аргумент `argN` -- массив, то копируются все его элементы. Иначе копируется сам аргумент.

Например:

```js run
let arr = [1, 2];

// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть:

```js run
let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

...Но если массивоподобный объект имеет специальное свойство `Symbol.isConcatSpreadable`, то он обрабатывается как массив, с помощью `concat`: вместо него добавляются его элементы:

```js run
let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
*!*
  [Symbol.isConcatSpreadable]: true,
*/!*
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё
```

## Перебор: forEach

Метод [arr.forEach](mdn:js/Array/forEach) позволяет запускать функцию для каждого элемента массива.

Синтаксис:
```js
arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});
```

Например, этот код выведет на экран каждый элемент массива:

```js run
// Вызов alert для каждого элемента
["Бильбо", "Гэндальф", "Назгул"].forEach(alert);
```

А этот вдобавок расскажет и о позиции элемента в целевом массиве:

```js run
["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  alert(`У ${item} индекс ${index} в ${array}`);
});
```

Результат функции (если она что-то возвращает) отбрасывается и игнорируется.


## Поиск в массиве

Теперь рассмотрим методы поиска в массиве.

### indexOf/lastIndexOf и includes

У методов [arr.indexOf](mdn:js/Array/indexOf) и [arr.includes](mdn:js/Array/includes) одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

- `arr.indexOf(item, from)` ищет `item` начиная с индекса `from` и возвращает номер индекса, на котором был найден искомый элемент, в противном случае `-1`.
- `arr.includes(item, from)` ищет `item` начиная с индекса `from` и возвращает `true`, если поиск успешен.

Обычно эти методы используются только с одним аргументом: искомым `item`. По умолчанию поиск ведется с начала.

Например:

```js run
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
```

Пожалуйста, обратите внимание, что методы используют строгое сравнение `===`. Таким образом, если мы ищем `false`, он находит именно `false`, а не ноль.

Если мы хотим проверить наличие элемента в массиве и нет необходимости знать его индекс, предпочтительно использовать `arr.includes`.

Метод [arr.lastIndexOf](mdn:js/Array/lastIndexOf) похож на `indexOf`, но ищет справа налево.

```js run
let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')
```

````smart header="Метод `includes` правильно обрабатывает `NaN`"
Незначительная, но заслуживающая внимания особенность `includes` -- он правильно обрабатывает `NaN`, в отличие от `indexOf`:

```js run
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (неверно, должен быть 0)
alert( arr.includes(NaN) );// true (верно)
```
Это связано с тем, что  `includes` был добавлен в JavaScript гораздо позже и использует более современный алгоритм сравнения.
````

### find и findIndex/findLastIndex

Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?

Здесь пригодится метод [arr.find](mdn:js/Array/find).

Синтаксис:
```js
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
```

Функция вызывается по очереди для каждого элемента массива:

- `item` - очередной элемент.
- `index` - его индекс.
- `array` - сам массив.

Если функция возвращает `true`, поиск прерывается и возвращается `item`. Если ничего не найдено, возвращается `undefined`.

Например, у нас есть массив пользователей, каждый из которых имеет поля `id` и `name`. Найдем пользователя с `id == 1`:

```js run
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // Вася
```

В реальной жизни массивы объектов -- обычное дело, поэтому метод `find` крайне полезен.

Обратите внимание, что в данном примере мы передаём `find` функцию `item => item.id == 1` с одним аргументом. Это типично, другие аргументы этой функции используются редко.

У метода [arr.findIndex](mdn:js/Array/findIndex) такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент. Значение `-1` возвращается, если ничего не найдено.

Метод [arr.findLastIndex](mdn:js/Array/findLastIndex) похож на  `findIndex`, но ищет справа налево, наподобие `lastIndexOf`.

Например:

```js run
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
  {id: 4, name: "Вася"}
];

// Найти индекс первого Васи
alert(users.findIndex(user => user.name == 'Вася')); // 0

// Найти индекс последнего Васи
alert(users.findLastIndex(user => user.name == 'Вася')); // 3
```

### filter

Метод `find` ищет один (первый) элемент, который заставит функцию вернуть `true`.

Если найденных элементов может быть много, можно использовать [arr.filter(fn)](mdn:js/Array/filter).

Синтаксис схож с `find`, но `filter` возвращает массив из всех подходящих элементов:

```js
let results = arr.filter(function(item, index, array) {
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});
```

Например:

```js run
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

## Преобразование массива

Перейдём к методам преобразования и упорядочения массива.

### map

Метод [arr.map](mdn:js/Array/map) является одним из наиболее полезных и часто используемых.

Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

Синтаксис:

```js
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
```

Например, здесь мы преобразуем каждый элемент в его длину:

```js run
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6
```

### sort(fn)

Вызов [arr.sort()](mdn:js/Array/sort) сортирует массив *на месте*, меняя в нём порядок элементов.

Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам `arr`.

Например:

```js run
let arr = [ 1, 2, 15 ];

// метод сортирует содержимое arr
arr.sort();

alert( arr );  // *!*1, 15, 2*/!*
```

Не заметили ничего странного в этом примере?

Порядок стал `1, 15, 2`. Это неправильно. Но почему?

**По умолчанию элементы сортируются как строки.**

Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что `"2" > "15"`.

Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента `arr.sort()`.

Функция должна для пары значений возвращать:

```js
function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}
```

Например, для сортировки чисел:

```js run
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

*!*
arr.sort(compareNumeric);
*/!*

alert(arr);  // *!*1, 2, 15*/!*
```

Теперь всё работает как надо.

Сделаем отступление и подумаем, что происходит. `arr` может быть массивом чего угодно, верно? Он может содержать числа, строки, объекты или что-то ещё. У нас есть набор *каких-то элементов*. Чтобы отсортировать его, нам нужна *упорядочивающая функция*, которая знает, как сравнивать его элементы. По умолчанию элементы сортируются как строки.

Метод `arr.sort(fn)` реализует общий алгоритм сортировки. Нам не нужно заботиться о том, как он работает внутри (в большинстве случаев это оптимизированная [быстрая сортировка](https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0) или [Timsort](https://ru.wikipedia.org/wiki/Timsort)). Она проходится по массиву, сравнивает его элементы с помощью предоставленной функции и переупорядочивает их. Всё, что нам нужно, -- предоставить `fn`, которая делает сравнение.

Кстати, если мы когда-нибудь захотим узнать, какие элементы сравниваются -- ничто не мешает нам вывести их на экран:

```js run
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
```

В процессе работы алгоритм может сравнивать элемент со множеством других, но он старается сделать как можно меньше сравнений.

````smart header="Функция сравнения может вернуть любое число"
На самом деле от функции сравнения требуется любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».

Это позволяет писать более короткие функции:

```js run
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // *!*1, 2, 15*/!*
```
````

````smart header="Лучше использовать стрелочные функции"
Помните [стрелочные функции](info:arrow-functions-basics)? Можно использовать их здесь для того, чтобы сортировка выглядела более аккуратной:

```js
arr.sort( (a, b) => a - b );
```

Будет работать точно так же, как и более длинная версия выше.
````

````smart header="Используйте `localeCompare` для строк"
Помните алгоритм сравнения [строк](info:string#correct-comparisons)? По умолчанию, он сравнивает буквы по их кодам.

Для многих алфавитов лучше использовать метод `str.localeCompare`, для правильной сортировки букв, таких как `Ö`.

Например, отсортируем несколько стран на немецком языке:

```js run
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (неправильно)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (правильно!)
```
````

### reverse

Метод [arr.reverse](mdn:js/Array/reverse) меняет порядок элементов в `arr` на обратный.

Например:

```js run
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

Он также возвращает массив `arr` с изменённым порядком элементов.

### split и join

Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: `Вася, Петя, Маша`. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить?

Метод [str.split(delim)](mdn:js/String/split) именно это и делает. Он разбивает строку на массив по заданному разделителю `delim`.

В примере ниже таким разделителем является строка из запятой и пробела.

```js run
let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}
```

У метода `split` есть необязательный второй числовой аргумент -- ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен. На практике это редко используется:

```js run
let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);

alert(arr); // Вася, Петя
```

````smart header="Разбивка по буквам"
Вызов `split(s)` с пустым аргументом `s` разбил бы строку на массив букв:

```js run
let str = "тест";

alert( str.split('') ); // т,е,с,т
```
````

Вызов [arr.join(glue)](mdn:js/Array/join) делает в точности противоположное `split`. Он создаёт строку из элементов `arr`, вставляя `glue` между ними.

Например:

```js run
let arr = ['Вася', 'Петя', 'Маша'];

let str = arr.join(';'); // объединить массив в строку через ;

alert( str ); // Вася;Петя;Маша
```

### reduce/reduceRight

Когда нам нужно перебрать массив -- мы можем использовать `forEach`, `for` или `for..of`.

Когда нам нужно перебрать массив и вернуть данные для каждого элемента -- мы можем использовать `map`.

Методы [arr.reduce](mdn:js/Array/reduce) и [arr.reduceRight](mdn:js/Array/reduceRight) похожи на методы выше, но они немного сложнее. Они используются для вычисления единого значения на основе всего массива.

Синтаксис:

```js
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

Аргументы:

- `accumulator` -- результат предыдущего вызова этой функции, равен `initial` при первом вызове (если передан `initial`),
- `item` -- очередной элемент массива,
- `index` -- его позиция,
- `array` -- сам массив.

При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.

Так, первый аргумент является по сути аккумулятором, который хранит объединённый результат всех предыдущих вызовов функции. По окончании он становится результатом `reduce`.

Звучит сложно?

Этот метод проще всего понять на примере.

Тут мы получим сумму всех элементов массива одной строкой:

```js run
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

Функция, переданная в `reduce`, использует только два аргумента, этого обычно достаточно.

Разберём детально как это работает.

1. При первом запуске `sum` равен `initial` (последний аргумент `reduce`), то есть `0`, а `current` -- первый элемент массива, равный `1`. Таким образом, результат функции равен `1`.
2. При втором запуске `sum = 1`, к нему мы добавляем второй элемент массива (`2`) и возвращаем.
3. При третьем запуске `sum = 3`, к которому мы добавляем следующий элемент, и так далее...

Поток вычислений получается такой:

![](reduce.svg)

Или в виде таблицы, где каждая строка показывает вызов функции на очередном элементе массива:

|   |`sum`|`current`|`result`|
|---|-----|---------|---------|
|первый вызов|`0`|`1`|`1`|
|второй вызов|`1`|`2`|`3`|
|третий вызов|`3`|`3`|`6`|
|четвёртый вызов|`6`|`4`|`10`|
|пятый вызов|`10`|`5`|`15`|

Здесь отчётливо видно, как результат предыдущего вызова передаётся в первый аргумент следующего.

Мы также можем опустить начальное значение:

```js run
let arr = [1, 2, 3, 4, 5];

// убрано начальное значение (нет 0 в конце)
let result = arr.reduce((sum, current) => sum + current);

alert( result ); // 15
```

Результат – точно такой же! Это потому, что при отсутствии `initial` в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

Таблица вычислений будет такая же за вычетом первой строки.

Но такое использование требует крайней осторожности. Если массив пуст, то вызов `reduce` без начального значения выдаст ошибку.

Вот пример:

```js run
let arr = [];

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
arr.reduce((sum, current) => sum + current);
```

Поэтому рекомендуется всегда указывать начальное значение.

Метод [arr.reduceRight](mdn:js/Array/reduceRight) работает аналогично, но проходит по массиву справа налево.

## Array.isArray

Массивы не образуют отдельный тип языка. Они основаны на объектах.

Поэтому `typeof` не может отличить простой объект от массива:

```js run
alert(typeof {}); // object
alert(typeof []); // тоже object
```

...Но массивы используются настолько часто, что для этого придумали специальный метод: [Array.isArray(value)](mdn:js/Array/isArray). Он возвращает `true`, если `value` массив, и `false`, если нет.

```js run
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
```

## Большинство методов поддерживают «thisArg»

Почти все методы массива, которые вызывают функции -- такие как `find`, `filter`, `map`, за исключением метода `sort`, принимают необязательный параметр `thisArg`.

Этот параметр не объяснялся выше, так как очень редко используется, но для наиболее полного понимания темы мы обязаны его рассмотреть.

Вот полный синтаксис этих методов:

```js
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg -- необязательный последний аргумент
```

Значение параметра `thisArg` становится `this` для `func`.

Например, тут мы используем метод объекта `army` как фильтр, и `thisArg` передаёт ему контекст:

```js run
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

*!*
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);
*/!*

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

Если бы мы в примере выше использовали просто `users.filter(army.canJoin)`, то вызов `army.canJoin` был бы в режиме отдельной функции, с `this=undefined`. Это тут же привело бы к ошибке.

Вызов `users.filter(army.canJoin, army)` можно заменить на `users.filter(user => army.canJoin(user))`, который делает то же самое. Последняя запись используется даже чаще, так как функция-стрелка более наглядна.

## Итого

Шпаргалка по методам массива:

- Для добавления/удаления элементов:  
  - `push (...items)` -- добавляет элементы в конец,
  - `pop()` -- извлекает элемент с конца,
  - `shift()` -- извлекает элемент с начала,
  - `unshift(...items)` -- добавляет элементы в начало.
  - `splice(pos, deleteCount, ...items)` -- начиная с индекса `pos` удаляет `deleteCount` элементов и вставляет `items`.
  - `slice(start, end)` -- создаёт новый массив, копируя в него элементы с индекса `start` до `end` (не включая `end`).
  - `concat(...items)` -- возвращает новый массив: копирует все члены текущего массива и добавляет к нему `items`. Если какой-то из `items` является массивом, тогда берутся его элементы.  

- Для поиска среди элементов:
  - `indexOf/lastIndexOf(item, pos)` -- ищет `item`, начиная с позиции `pos`, и возвращает его индекс или `-1`, если ничего не найдено.
  - `includes(value)` -- возвращает `true`, если в массиве имеется элемент `value`, в противном случае `false`.
  - `find/filter(func)` -- фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается `true`.
  - `findIndex` похож на `find`, но возвращает индекс вместо значения.

- Для перебора элементов:
  - `forEach(func)` -- вызывает `func` для каждого элемента. Ничего не возвращает.

- Для преобразования массива:
  - `map(func)` -- создаёт новый массив из результатов вызова `func` для каждого элемента.
  - `sort(func)` -- сортирует массив «на месте», а потом возвращает его.
  - `reverse()` -- «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
  - `split/join` -- преобразует строку в массив и обратно.
  - `reduce/reduceRight(func, initial)` -- вычисляет одно значение на основе всего массива, вызывая `func` для каждого элемента и передавая промежуточный результат между вызовами.

- Дополнительно:
  - `Array.isArray(arr)` проверяет, является ли `arr` массивом.

Пожалуйста, обратите внимание, что методы `sort`, `reverse` и `splice` изменяют исходный массив.

Эти методы -- самые используемые, их достаточно в 99% случаев. Но существуют и другие:

- [arr.some(fn)](mdn:js/Array/some)/[arr.every(fn)](mdn:js/Array/every) проверяет массив.

  Функция `fn` вызывается для каждого элемента массива аналогично `map`. Если какие-либо/все результаты вызовов являются `true`, то метод возвращает `true`, иначе `false`.

  Эти методы ведут себя примерно так же, как операторы `||` и `&&`: если `fn` возвращает истинное значение, `arr.some()` немедленно возвращает `true` и останавливает перебор остальных элементов; если `fn` возвращает ложное значение, `arr.every()` немедленно возвращает `false` и также прекращает перебор остальных элементов.

  Мы можем использовать `every` для сравнения массивов:
  
  ```js run
  function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  alert( arraysEqual([1, 2], [1, 2])); // true
  ```

- [arr.fill(value, start, end)](mdn:js/Array/fill) -- заполняет массив повторяющимися `value`, начиная с индекса `start` до `end`.

- [arr.copyWithin(target, start, end)](mdn:js/Array/copyWithin) -- копирует свои элементы, начиная с позиции `start` и заканчивая `end`, в *себя*, на позицию `target` (перезаписывая существующие).

- [arr.flat(depth)](mdn:js/Array/flat)/[arr.flatMap(fn)](mdn:js/Array/flatMap) создаёт новый плоский массив из многомерного массива.

Полный список есть в [справочнике MDN](mdn:js/Array).

На первый взгляд может показаться, что существует очень много разных методов, которые довольно сложно запомнить. Но это гораздо проще, чем кажется.

Внимательно изучите шпаргалку, представленную выше, а затем, чтобы попрактиковаться, решите задачи, предложенные в данной главе. Так вы получите необходимый опыт в правильном использовании методов массива.

Всякий раз, когда вам будет необходимо что-то сделать с массивом, а вы не знаете, как это сделать -- приходите сюда, смотрите на таблицу и ищите правильный метод. Примеры помогут вам всё сделать правильно, и вскоре вы быстро запомните методы без особых усилий.