class SqlCalcuation {
    calculate() {
        return 'SQL Calculation';
    }
};

class NodeCalcuation {
    calculate() {
        return 'Node Calculation';
    }
};

class Calculation {
    calculate() {
        const setting = 0;
        if (setting) {
            return new NodeCalcuation().calculate();
        } else {
            return new SqlCalcuation().calculate();
        }
    }
}

const cal = new Calculation();

console.log(cal.calculate());
