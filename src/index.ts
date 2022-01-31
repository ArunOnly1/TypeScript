class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department :', this.name)
  }
}

const hm = new Department('Hotel Management')
hm.describe()
