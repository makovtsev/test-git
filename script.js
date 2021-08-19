let money = prompt("Ваш бюджет на месяц",''),
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };

    let a1 = prompt("Введите обязательную стотью расходов в этом месяце", ''),
    a2 = prompt ("Во сколько обойдеться?",''),
     a3 = prompt("Введите обязательную стотью расходов в этом месяце", ''),
    a4 = prompt ("Во сколько обойдеться?",'');
    appData.expenses.a1=a2;
    appData.expenses.a3=a4;
    alert(appData.budget / 30);
