class Invoice {
	private client: string;
	amount: number;
	readonly billId: number;
	constructor(client: string, amount: number, billId: number) {
		this.client = client;
		this.amount = amount;
		this.billId = billId;
	}

	getInvoice() {
		return `Client ${this.client} having bill Id ${this.billId} with amount ${this.amount}`;
	}
}

const invoice = new Invoice("Mario", 121, 1211);

console.log(invoice.getInvoice());
