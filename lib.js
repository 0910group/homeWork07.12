let allOfWorkers = [],
    allOfChiefs = [];

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

class Chief extends Worker {

    constructor(name, surname, rate, days) {
        super();
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    addWorker(workerName, workerSurname, workerRate, workerDays) {
        allOfWorkers.push(new Worker(workerName, workerSurname, workerRate, workerDays));
    }

    removeWorker(workerName) {
        let i;

        for (i = 0; i < allOfWorkers.length; i++) {
            if (allOfWorkers[i].name === workerName) {
                allOfWorkers.splice(i, 1);
            }
        }
    }

    getWorker(workerName) {
        let i, value, finding,
            workers = 0;

        document.getElementById('result').innerHTML = '';

        if (allOfWorkers.length > 0) {

            for (i = 0; i < allOfWorkers.length; i++) {
                if(allOfWorkers[i].name === workerName) {
                    finding = allOfWorkers[i];
                    for (value in finding) {
                        document.getElementById('result').innerHTML += finding[value] + ' ';
                    }
                    workers++;
                }
            }

            if (workers === 0) {
                document.getElementById('result').innerHTML = 'У нас нет таких работников! Может вы опечатались?';
            }
        } else {
            document.getElementById('result').innerHTML = 'У нас ещё нет работников!';
        }
    }

    setWorkerRate(workerName, rate) {
        let i;

        for (i = 0; i < allOfWorkers.length; i++) {
            if (allOfWorkers[i].name === workerName) {
                allOfWorkers[i].rate = rate;
            }
        }
    }
}

function addChief () {

    let name, surname, rate, days, isChiefExists, chiefBord;

    name = document.getElementById('chiefName').value;
    surname = document.getElementById('chiefSurname').value;
    rate = document.getElementById('chiefRate').value;
    days = document.getElementById('chiefDays').value;

    isChiefExists = document.getElementById('noChief');
    chiefBord = document.getElementById('chiefBord');

    allOfChiefs.push(new Chief(name, surname, rate, days));

    isChiefExists.style.display = 'none';
    chiefBord.style.display = 'flex';
    document.getElementById('nameOfTheChief').innerHTML =
        'Привет, важный директор ' + allOfChiefs[0].name + ' ' + allOfChiefs[0].surname;

}

document.getElementById('addChief').addEventListener("click", addChief);



/*let worker1 = new Worker("Дима", "Иванов", "1000", "10");
worker1.getSalary();

let worker2 = new Worker("Вася", "Петров", "2000", "20");
worker2.getSalary();

let worker3 = new Worker("Коля", "Смирнов", "3000", "30");
worker3.getSalary();*/