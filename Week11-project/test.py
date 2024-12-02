class Bank:

    def __init__(self, name, balance):

        self.name = str(name)
        self.balance = float(balance)

    def deposit(self):

        amount = float(input("\nPlease input the deposit amount: "))

        if amount <= 0:
            print("\nPlease input a positive number...")
        else:
            self.balance += amount
            print(f"\nDeposited ${amount}. New total is ${self.balance}")

    def withdrawl(self):

        amount = float(input("\nPlease input the withdrawl amount: "))

        if amount > self.balance:
            print("\nInsufficient funds")
        else:
            self.balance -= amount
            print(f"\nWithdrew ${amount}. New total is ${self.balance}")

def main():
    name = input("\nPlease input your name: ")
    balance = 0

    while True:
        try:
            balance_input = float(input("\nPlease input an initial balance of at least $25: "))
            pass
        except:
            print("\ntry again!")
            continue

        if balance_input < 25.0:
            print("\nNeeds to be more than 25!")
            continue
        else: 
            balance = balance_input
            break

    user1 = Bank(name, balance)

    while True:
        print("\n1: Deposit" +
            "\n2: Withdrawl" +
            "\n3: What's my name?" +
            "\n4: Exit\n")
        user_selection = int(input("\nPlease select an option:"))

        if user_selection == 1:
            user1.deposit()
            continue
        elif user_selection == 2:
            user1.withdrawl()
            continue
        elif user_selection == 3:
            print(f"\n{user1.name}")
            continue
        elif user_selection == 4:
            print("\nThank you for coming!\n")
            break
        else: 
            print("\nstop it")
            continue

    return 0

if __name__ == "__main__":
    main()
    