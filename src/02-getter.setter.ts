class Bill {
	private client: string;
	amount: number;
	readonly billId: number;
	constructor(client: string, amount: number, billId: number) {
		this.client = client;
		this.amount = amount;
		this.billId = billId;
	}

	get getBillId(): Error | number {
		if (!this.billId) {
			throw new Error("No bill id exists");
		}
		return this.billId;
	}

	set updateBill(amount: number) {
		if (!amount) {
			throw new Error("No amont given");
		}
		this.amount = this.amount + amount;
	}

	getFullInvoice() {
		return `Client ${this.client} having bill Id ${this.billId} with amount ${this.amount}`;
	}
}

const bill = new Bill("Mario", 100, 1);

bill.updateBill = 100;

console.log(bill.amount);
