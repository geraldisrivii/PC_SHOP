interface Rule {
    type?: string;
    value?: any;
    message: string;
    callback?: Function;
    params?: Array<any>;
    regexp?: string;
}

interface IRule {
    name: string;
    rules: Array<Rule>;
}

class Validator<T> {

    private types = {
        min: (str: string, minCount: string | number) => str.length >= (typeof minCount == 'number' ? minCount : Number(minCount)),
        max: (str: string, maxCount: string | number) => str.length <= (typeof maxCount == 'number' ? maxCount : Number(maxCount)),
    }

    constructor(fields: { [key: string]: string } & T) {
        this.fields = fields
    }

    private rules: Array<IRule>;

    private fields: { [key: string]: string } & T;

    private validFields = {};

    private isntValidFields = {};

    public setRules(rules: Array<IRule>) {
        this.rules = rules;
    }

    public async run() {

        for (const key in this.fields) {

            let ruleForField = this.rules.find(rule => rule.name == key);

            if (!ruleForField) {
                continue;
            }

            let fieldIsVerified = false;

            for (const rule of ruleForField.rules) {
                // Декомпозиция обьекта
                let message = rule.message;

                if (rule.type) {
                    let result = false;
                    if (rule.type == 'custom') {
                        result = await rule.callback(this.fields[key], ...rule.params)
                    } else {
                        result = await this.types[rule.type](this.fields[key], rule.value)
                    }

                    if (result == false) {
                        fieldIsVerified = false;
                        this.isntValidFields[key] = message
                        break;
                    }

                    fieldIsVerified = true
                    continue;
                }
                // Декомпозиция обьекта
                let regexpStr = rule.regexp;
                // Выделение отрицания из регулярного выражения
                let isNegative = regexpStr.startsWith("!");
                // приведение регулярного выражения к правильному виду
                let pattern = regexpStr.slice(isNegative ? 2 : 1, regexpStr.lastIndexOf('/'));

                let flags = regexpStr.slice(regexpStr.lastIndexOf('/') + 1)

                let regexp: RegExp = new RegExp(pattern, flags)

                // проверка и применение отрицания если оно обозначено
                let result = isNegative ? !(regexp.test(this.fields[key])) : regexp.test(this.fields[key])

                // Если результат соответсвует то нужно проверить иные правила
                if (result) {
                    fieldIsVerified = true;
                    continue
                }

                // Возвращаю данные о несоответсвиях и сообщения для UI

                fieldIsVerified = false;
                let returnedResult = {};

                returnedResult[key] = message
                this.isntValidFields[key] = message
                break;
            }

            if (fieldIsVerified) {
                let returnedResult = {};

                returnedResult[key] = this.fields[key]

                this.validFields[key] = this.fields[key]
            }

        }

        return this.validFields as T;
    }

    getIsntValidFields() {
        return this.isntValidFields as T;
    }

    isAllFieldsValid(): boolean {
        let hasOneElement = false
        for (const key in this.isntValidFields) {
            hasOneElement = true
        }
        return !hasOneElement
    }
}

export default Validator;