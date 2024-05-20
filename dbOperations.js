var config = require('./dbconfig');
const sql = require('msnodesqlv8');
const express = require('express');
const app = express();

app.use(express.json());


//EMPLOYEE
async function getEmployee() {
    return new Promise((resolve, reject) => {
        sql.query(config, "select * from Employee", (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

async function addEmployee(employee) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO Employee (Name, Position, PhoneNum, Email) VALUES (?, ?, ?, ?)";
        const parameters = [employee.name, employee.position, employee.phone, employee.email];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error adding employee:', err);
                reject(err);
            } else {
                console.log('Employee added:', result);
                resolve(result);
            }
        });
    });
}

async function deleteEmployee(employeeID) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM Employee WHERE EmployeeID = ?";
        const parameters = [employeeID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error deleting employee:', err);
                reject(err);
            } else {
                console.log('Employee deleted:', result);
                resolve(result);
            }
        });
    });
}

async function editEmployee(employeeID, employeeData) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE Employee SET Name = ?, Position = ?, PhoneNum = ?, Email = ? WHERE EmployeeID = ?";
        const parameters = [employeeData.name, employeeData.position, employeeData.phone, employeeData.email, employeeID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error editing employee:', err);
                reject(err);
            } else {
                console.log('Employee edited:', result);
                resolve(result);
            }
        });
    });
}
//////////////////////////////////
// CUSTOMER

async function getcustomer() {
    return new Promise((resolve, reject) => {
        sql.query(config, "select * from Customer", (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

async function addcustomer(customer) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO Customer (Name, PhoneNum, Address, Email) VALUES (?, ?, ?, ?)";
        const parameters = [customer.name, customer.phone, customer.address, customer.email];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error adding customer:', err);
                reject(err);
            } else {
                console.log('Customer added:', result);
                resolve(result);
            }
        });
    });
}

async function deletecustomer(customerID) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM Customer WHERE CustomerID = ?";
        const parameters = [customerID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error deleting customer:', err);
                reject(err);
            } else {
                console.log('Customer deleted:', result);
                resolve(result);
            }
        });
    });
}

async function editcustomer(customerID, customerData) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE Customer SET Name = ?, PhoneNum = ?, Address = ?, Email = ? WHERE CustomerID = ?";
        const parameters = [customerData.name, customerData.phone, customerData.address, customerData.email, customerID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error editing customer:', err);
                reject(err);
            } else {
                console.log('Customer edited:', result);
                resolve(result);
            }
        });
    });
}
//////////////////////////////////
// PRODUCT
async function getproduct() {
    return new Promise((resolve, reject) => {
        sql.query(config, "select * from Product", (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

async function addproduct(product) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO Product (SupplierID, Name, Description, Price, Quantity) VALUES (?, ?, ?, ?, ?)";
        const parameters = [product.supplierid, product.name, product.description, product.price, product.quantity];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error adding product:', err);
                reject(err);
            } else {
                console.log('Product added:', result);
                resolve(result);
            }
        });
    });
}

async function deleteproduct(productID) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM Product WHERE ProductID = ?";
        const parameters = [productID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error deleting product:', err);
                reject(err);
            } else {
                console.log('Product deleted:', result);
                resolve(result);
            }
        });
    });
}

async function editproduct(productID, productData) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE Product SET SupplierID = ?, Name = ?, Description = ?, Price = ?, Quantity = ? WHERE ProductID = ?";
        const parameters = [productData.supplierid, productData.name, productData.description, productData.price, productData.quantity, productID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error editing product:', err);
                reject(err);
            } else {
                console.log('Product edited:', result);
                resolve(result);
            }
        });
    });
}
//////////////////////////////////
// ORDER
async function getorder() {
    return new Promise((resolve, reject) => {
        sql.query(config, "select * from [Order]", (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

async function addorder(order) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO [Order] (EmployeeID, CustomerID, Status, TotalAmount, OrderDate) VALUES (?, ?, ?, ?, ?)";
        const parameters = [order.employeeid, order.customerid, order.status, order.totalamount, order.orderdate];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error adding order:', err);
                reject(err);
            } else {
                console.log('Order added:', result);
                resolve(result);
            }
        });
    });
}

async function deleteorder(orderID) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM [Order] WHERE OrderID = ?";
        const parameters = [orderID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error deleting order:', err);
                reject(err);
            } else {
                console.log('Order deleted:', result);
                resolve(result);
            }
        });
    });
}

async function editorder(orderID, orderData) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE [Order] SET EmployeeID = ?, CustomerID = ?, Status = ?, TotalAmount = ?, OrderDate = ? WHERE OrderID = ?";
        const parameters = [orderData.employeeid, orderData.customerid, orderData.status, orderData.totalamount, orderData.orderdate, orderID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error editing order:', err);
                reject(err);
            } else {
                console.log('Order edited:', result);
                resolve(result);
            }
        });
    });
}
//////////////////////////////////
// SUPPLIER
async function getsupplier() {
    return new Promise((resolve, reject) => {
        sql.query(config, "select * from Supplier", (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
}

async function addsupplier(supplier) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO Supplier (Name, Email, PhoneNum, ContactPerson, Address) VALUES (?, ?, ?, ?, ?)";
        const parameters = [supplier.name, supplier.email, supplier.phone, supplier.contactperson, supplier.address];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error adding supplier:', err);
                reject(err);
            } else {
                console.log('Supplier added:', result);
                resolve(result);
            }
        });
    });
}

async function deletesupplier(supplierID) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM Supplier WHERE SupplierID = ?";
        const parameters = [supplierID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error deleting supplier:', err);
                reject(err);
            } else {
                console.log('Supplier deleted:', result);
                resolve(result);
            }
        });
    });
}

async function editsupplier(supplierID, supplierData) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE Supplier SET Name = ?, Email = ?, PhoneNum = ?, ContactPerson = ?, Address = ? WHERE SupplierID = ?";
        const parameters = [supplierData.name, supplierData.email, supplierData.phone, supplierData.contactperson, supplierData.address, supplierID];

        sql.query(config, query, parameters, (err, result) => {
            if (err) {
                console.error('Error editing supplier:', err);
                reject(err);
            } else {
                console.log('Supplier edited:', result);
                resolve(result);
            }
        });
    });
}

module.exports = { getEmployee, addEmployee, deleteEmployee, editEmployee, 
    getcustomer, addcustomer, deletecustomer, editcustomer,
    getproduct, addproduct, deleteproduct, editproduct,
    getorder, addorder, deleteorder, editorder,
    getsupplier, addsupplier, deletesupplier, editsupplier
}; // Update the export to include deleteEmployee