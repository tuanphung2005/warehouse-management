const cors = require('cors');
const express = require('express');
const dboperations = require('./dbOperations');
const app = express();
const port = 3300;

app.use(cors());
app.use(express.json());

// EMPLOYEE
app.get('/getEmployee', async (req, res) => {
    try {
        const result = await dboperations.getEmployee();
        res.json(result);
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).send('Error fetching employee');
    }
});


app.post('/addEmployee', async (req, res) => {
    try {
        const employee = req.body;
        await dboperations.addEmployee(employee);
        res.status(201).send('Employee added');
    } catch (error) {
        console.error("Error adding employee:", error);
        res.status(500).send('Error adding employee');
    }
});

app.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        const employeeID = req.params.id;
        await dboperations.deleteEmployee(employeeID);
        res.status(200).send('Employee deleted');
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).send('Error deleting employee');
    }
});

const { editEmployee } = require('./dbOperations');

app.put('/editEmployee/:employeeID', async (req, res) => {
    try {
        const result = await editEmployee(req.params.employeeID, req.body);
        res.send(result);
    } catch (error) {
        console.error('Error editing employee:', error);
        res.status(500).send(error);
    }
});
//////////////////////////////////
// CUSTOMER
app.get('/getcustomer', async (req, res) => {
    try {
        const result = await dboperations.getcustomer();
        res.json(result);
    } catch (error) {
        console.error("Error fetching customer:", error);
        res.status(500).send('Error fetching customer');
    }
});

app.post('/addcustomer', async (req, res) => {
    try {
        const customer = req.body;
        await dboperations.addcustomer(customer);
        res.status(201).send('customer added');
    } catch (error) {
        console.error("Error adding customer:", error);
        res.status(500).send('Error adding customer');
    }
});

app.delete('/deletecustomer/:id', async (req, res) => {
    try {
        const customerID = req.params.id;
        await dboperations.deletecustomer(customerID);
        res.status(200).send('customer deleted');
    } catch (error) {
        console.error("Error deleting customer:", error);
        res.status(500).send('Error deleting customer');
    }
});

const { editcustomer } = require('./dbOperations');
app.put('/editcustomer/:customerID', async (req, res) => {
    try {
        const result = await editcustomer(req.params.customerID, req.body);
        res.send(result);
    } catch (error) {
        console.error('Error editing customer:', error);
        res.status(500).send('Error editing customer');
    }
});
//////////////////////////////////
// PRODUCT
app.get('/getproduct', async (req, res) => {
    try {
        const result = await dboperations.getproduct();
        res.json(result);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).send('Error fetching product');
    }
});

app.post('/addproduct', async (req, res) => {
    try {
        const product = req.body;
        await dboperations.addproduct(product);
        res.status(201).send('product added');
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send('Error adding product');
    }
});

app.delete('/deleteproduct/:id', async (req, res) => {
    try {
        const productID = req.params.id;
        await dboperations.deleteproduct(productID);
        res.status(200).send('product deleted');
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send('Error deleting product');
    }
});

const { editproduct } = require('./dbOperations');
app.put('/editproduct/:productID', async (req, res) => {
    try {
        const result = await editproduct(req.params.productID, req.body);
        res.send(result);
    } catch (error) {
        console.error('Error editing product:', error);
        res.status(500).send('Error editing product');
    }
});
//////////////////////////////////
// ORDER
app.get('/getorder', async (req, res) => {
    try {
        const result = await dboperations.getorder();
        res.json(result);
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).send('Error fetching order');
    }
});

app.post('/addorder', async (req, res) => {
    try {
        const order = req.body;
        await dboperations.addorder(order);
        res.status(201).send('order added');
    } catch (error) {
        console.error("Error adding order:", error);
        res.status(500).send('Error adding order');
    }
});

app.delete('/deleteorder/:id', async (req, res) => {
    try {
        const orderID = req.params.id;
        await dboperations.deleteorder(orderID);
        res.status(200).send('order deleted');
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).send('Error deleting order');
    }
});

const { editorder } = require('./dbOperations');
app.put('/editorder/:orderID', async (req, res) => {
    try {
        const result = await editorder(req.params.orderID, req.body);
        res.send(result);
    } catch (error) {
        console.error('Error editing order:', error);
        res.status(500).send('Error editing order');
    }
});
//////////////////////////////////
// SUPPLIER
app.get('/getsupplier', async (req, res) => {
    try {
        const result = await dboperations.getsupplier();
        res.json(result);
    } catch (error) {
        console.error("Error fetching supplier:", error);
        res.status(500).send('Error fetching supplier');
    }
});

app.post('/addsupplier', async (req, res) => {
    try {
        const supplier = req.body;
        await dboperations.addsupplier(supplier);
        res.status(201).send('supplier added');
    } catch (error) {
        console.error("Error adding supplier:", error);
        res.status(500).send('Error adding supplier');
    }
});

app.delete('/deletesupplier/:id', async (req, res) => {
    try {
        const supplierID = req.params.id;
        await dboperations.deletesupplier(supplierID);
        res.status(200).send('supplier deleted');
    } catch (error) {
        console.error("Error deleting supplier:", error);
        res.status(500).send('Error deleting supplier');
    }
});

const { editsupplier } = require('./dbOperations');
app.put('/editsupplier/:supplierID', async (req, res) => {
    try {
        const result = await editsupplier(req.params.supplierID, req.body);
        res.send(result);
    } catch (error) {
        console.error('Error editing supplier:', error);
        res.status(500).send('Error editing supplier');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});