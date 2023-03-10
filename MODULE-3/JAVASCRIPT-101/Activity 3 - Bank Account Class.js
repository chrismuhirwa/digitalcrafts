class BankAccount {
    constructor(balance, accountType) {
      this.balance = balance;
      this.accountType = accountType;

      
    }
  
    deposit(amount) {
      
        console.log("you deposited 100")
    }
  
    withdraw(amount) {
        console.log("you withdraw 50 ")
    }
  }
  
  const DepositedAmount = new BankAccount(100,checking);
  const RemainingAmount  = new BankAccount(50,checking);

  
  
  
  DepositedAmount.deposit();
  georgiaPines.printIntro();
  alabamaRollTide.printIntro();
  
  virginiaMeadows.isOpenForBusiness();
  georgiaPines.isOpenForBusiness();
  
  alabamaRollTide.isOpen = false;
  
  alabamaRollTide.isOpenForBusiness();

  






  class GolfCourse {
    constructor(name, state, holes, par) {
      this.isOpen = true;
      this.name = name;
      this.state = state;
      this.holes = holes;
      this.par = par;
    }
  
    printIntro() {
      const message = `Welcome to ${this.name}, here in the lovely state of ${this.state}. We have ${this.holes} holes of golf with a par of ${this.par}.`;
      console.log(message);
    }
  
    isOpenForBusiness() {
      if (this.isOpen) {
        console.log('Yes!');
      } else {
        console.log(`Sorry, ${this.name} is no longer in business.`);
      }
    }
  }
  
  const virginiaMeadows = new GolfCourse('Virginia Meadows', 'Virginia', 18, 72);
  const georgiaPines = new GolfCourse('Georgia Pines', 'Georgia', 9, 36);
  const alabamaRollTide = new GolfCourse('Alabama Roll Tide', 'Alabama', 18, 71);
  
  virginiaMeadows.printIntro();
  georgiaPines.printIntro();
  alabamaRollTide.printIntro();
  
  virginiaMeadows.isOpenForBusiness();
  georgiaPines.isOpenForBusiness();
  
  alabamaRollTide.isOpen = false;
  
  alabamaRollTide.isOpenForBusiness();