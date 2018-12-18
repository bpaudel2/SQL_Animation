
var schema=[];
var colSuppliers=[];
colSuppliers.push(new column("SUPPLIERS.SID",NodeType.NUMBER,4));
colSuppliers.push(new column("SUPPLIERS.SNAME",NodeType.STRING, 50));
var colProducts=[];
colProducts.push(new column("PRODUCTS.PID",NodeType.NUMBER,8));
colProducts.push(new column("PRODUCTS.PNAME",NodeType.STRING, 50));
colProducts.push(new column("PRODUCTS.SUPPLIER_ID",NodeType.NUMBER, 4));
var colCustomers=[];
colCustomers.push(new column("CUSTOMERS.CID",NodeType.NUMBER,8));
colCustomers.push(new column("CUSTOMERS.FIRST_NAME",NodeType.STRING,50));
colCustomers.push(new column("CUSTOMERS.LAST_NAME",NodeType.STRING, 50));
var colOrders=[];
colOrders.push(new column("ORDERS.OID",NodeType.NUMBER,12));
colOrders.push(new column("ORDERS.STATUS",NodeType.STRING, 50));
colOrders.push(new column("ORDERS.CUSTOMER_ID",NodeType.NUMBER, 8));
var colOrderDetails=[];
colOrderDetails.push(new column("ORDERDETAILS.OID",NodeType.NUMBER, 12));
colOrderDetails.push(new column("ORDERDETAILS.PID",NodeType.NUMBER, 8));
colOrderDetails.push(new column("ORDERDETAILS.QUANTITY",NodeType.NUMBER,10));

schema.push(new Table("Suppliers",colSuppliers));
schema.push(new Table("Products",colProducts));
schema.push(new Table("Customers",colCustomers));
schema.push(new Table("Orders",colOrders));
schema.push(new Table("OrderDetails",colOrderDetails));
console.log(schema);
//Constructor for Schema
function Table(tabName, columns){
        this.tabName_=tabName;
        this.columns_=columns;
}
function column (colName, colType, colWidth){
        this.colName_=colName;
        this.colType_=colType;
        this.colWidth_=colWidth;
}

//Data Storage
var supplierRecord=[];
var customerRecord=[];
var orderDetailRecord=[];
var productRecord=[];
var orderRecord=[];
var data=[];
supplierRecord.push([1234,"OK COMPANY"]);
supplierRecord.push([2345,"TX COMPANY"]);
supplierRecord.push([3456,"FL COMPANY"]);
supplierRecord.push([4567,"CA COMPANY"]);
supplierRecord.push([5678,"VA COMPANY"]);
supplierRecord.push([6789,"AZ COMPANY"]);
data.push(supplierRecord);

productRecord.push([12345678,"LAPTOP",1234]);
productRecord.push([23456789,"MOBILE",2345]);
productRecord.push([34567890,"DESKTOP",3456]);
productRecord.push([45678901,"WATCH",5678]);
productRecord.push([56789012,"TV",6789]);
productRecord.push([67890123,"DRONE", 1234]);
productRecord.push([78901234,"MICRO WAVE",6789]);
data.push(productRecord);

customerRecord.push([345678901,"BIKRAM","PAUDEL"]);
customerRecord.push([456789012, "JOHN","DOE"]);
customerRecord.push([567890123,"JAMES","SMITH"]);
customerRecord.push([678901234,"HARRY","POTTER"]);
customerRecord.push([789012345,"CODY","WRIGHT"]);
customerRecord.push([890123456,"NANCY","CHARLEY"]);
data.push(customerRecord);

orderRecord.push([123456789010,"ORDER RECEIVED",345678901]);
orderRecord.push([123456789012,"SHIPPING",456789012]);
orderRecord.push([234567890123,"DELIVERED",567890123]);
orderRecord.push([345678901234,"ORDER CANCELLED", 678901234]);
orderRecord.push([456789012345,"SHIPPING",456789012]);
orderRecord.push([567890123456,"SHIPPING",345678901]);
data.push(orderRecord);

orderDetailRecord.push([123456789010,12345678,9]);
orderDetailRecord.push([234567890123,34567890,5]);
orderDetailRecord.push([123456789012, 23456789,10]);
orderDetailRecord.push([345678901234,45678901,6]);
orderDetailRecord.push([456789012345,78901234,2]);
orderDetailRecord.push([567890123456,67890123,15]);
data.push(orderDetailRecord);
