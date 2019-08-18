function factorial(n) { // Функция вычисления факториалов
    if (n <= 1) return n;
    else return n*factorial(n-1);
}
document.write("<table>"); // Начало HTML-таблицы
document.write("<tr><th>n</th><th>n!</th></tr>"); // Вывести заголовок таблицы
for(var i = 1; i <= 10; i++) { // Вывести 10 строк
    document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}
document.write("</table>"); // Конец таблицы
document.write("Generated at " + new Date()); // Вывести время
