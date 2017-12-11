class Worker {
	
	constructor(name, surname, rate, days) {
    this.name = name;
	this.surname = surname;
	this.rate = rate;
	this.days = days;
  }
  
  getSalary() {
    alert(this.rate*this.days);
  }
}

let worker1 = new Worker("Дима", "Иванов", "1000", "10");
worker1.getSalary();

let worker2 = new Worker("Вася", "Петров", "2000", "20");
worker2.getSalary();

let worker3 = new Worker("Коля", "Смирнов", "3000", "30");
worker3.getSalary();