class Department {
  protected employees: string[] = []
  static fiscalYear = 2022

  constructor(private readonly id: string, private name: string) {}

  describe(this: Department) {
    console.log('Department :', this.name)
  }

  static createEmployee(name: string) {
    return { name }
  }

  addEmployee(...rest: string[]) {
    this.employees.push(...rest)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admin: string[]) {
    super(id, 'IT')
    this.employees = ['Ranjana', 'Deepesh']
  }
}

// const it = new ITDepartment('d2', ['Arun', 'Rajeev'])
// console.log(it)

const employee1 = Department.createEmployee('Ramila')
console.log(employee1)
