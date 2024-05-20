USE warehouse_management;

-- Thiết lập bảng

CREATE TABLE Employee (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255),
    Position VARCHAR(255),
    PhoneNum VARCHAR(255),
    Email VARCHAR(255)
);

CREATE TABLE Customer (
    CustomerID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255),
    PhoneNum VARCHAR(255),
    Address VARCHAR(255),
    Email VARCHAR(255)
);

CREATE TABLE [Order] (
    OrderID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeID INT,
    CustomerID INT,
    Status VARCHAR(255),
    TotalAmount FLOAT(2),
    OrderDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

CREATE TABLE Supplier (
    SupplierID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    PhoneNum VARCHAR(255),
    ContactPerson VARCHAR(255),
    Address VARCHAR(255),
);

CREATE TABLE Product (
    ProductID INT IDENTITY(1,1) PRIMARY KEY,
    SupplierID INT,
    Name VARCHAR(255),
    Description VARCHAR(255),
    Price FLOAT(2),
    Quantity INT,
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

-- Thêm dữ liệu mẫu
-- Order
INSERT INTO [Order] (EmployeeID, CustomerID, Status, TotalAmount, OrderDate)
VALUES
    (3, 12, 'Completed', 749.94, '2024-04-05'),
    (8, 7, 'Pending', 179.90, '2024-04-10'),
    (2, 10, 'Shipped', 1099.99, '2024-04-15'),
    (6, 3, 'Completed', 1999.98, '2024-04-20'),
    (14, 5, 'Pending', 699.97, '2024-04-25'),
    (1, 1, 'Shipped', 93.00, '2024-04-30'),
    (7, 2, 'Completed', 219.99, '2024-05-05'),
    (9, 8, 'Pending', 1599.98, '2024-05-10'),
    (12, 6, 'Processing', 379.95, '2024-05-15'),
    (15, 4, 'Completed', 159.90, '2024-05-20'),
    (11, 9, 'Processing', 499.98, '2024-05-25'),
    (5, 13, 'Shipped', 279.98, '2024-04-15'),
    (10, 11, 'Completed', 1219.99, '2024-04-17'),
    (13, 14, 'Pending', 329.97, '2024-04-19'),
    (4, 15, 'Shipped', 300.00, '2024-05-05');

-- Supplier
INSERT INTO Supplier (Name, Email, PhoneNum, ContactPerson, Address)
VALUES
     ('Harman International (JBL)', 'support@harman.com', '800-336-4525', 'Sarah Lee', '400 Atlantic Street, Stamford, CT 06901'),
     ('Nike, Inc.', 'support@nike.com', '800-344-6453', 'James Smith', 'One Bowerman Drive, Beaverton, OR 97005'),
     ('Apple Inc.', 'contact@apple.com', '800-275-2273', 'Alice Johnson', 'One Apple Park Way, Cupertino, CA 95014'),
     ('LG Electronics', 'support@lge.com', '800-243-0000', 'Chris Evans', '111 Sylvan Ave, Englewood Cliffs, NJ 07632'),
     ('Philips Electronics', 'info@philips.com', '800-542-8368', 'Daniel White', '3000 Minuteman Road, Andover, MA 01810'),
     ('Samsung Electronics', 'info@samsung.com', '800-726-7864', 'John Kim', '85 Challenger Road, Ridgefield Park, NJ 07660'),
     ('Honeywell International Inc.', 'contact@honeywell.com', '877-841-2840', 'Linda Johnson', '300 South Tryon Street, Charlotte, NC 28202'),
     ('Levi Strauss & Co.', 'support@levi.com', '800-872-5384', 'Laura Martinez', '1155 Battery Street, San Francisco, CA 94111'),
     ('ASUS', 'service@asus.com', '888-678-3688', 'David Lee', '800 Corporate Way, Fremont, CA 94539'),
     ('Serta Simmons Bedding', 'sales@sertasim.com', '888-557-3782', 'Emily Davis', '2451 Industry Avenue, Doraville, GA 30360'),
     ('Zinus, Inc.', 'support@zinus.com', '800-613-1225', 'Patricia Clark', '5731 Palmer Way, Carlsbad, CA 92010'),
     ('IKEA', 'support@ikea.com', '888-888-4532', 'Robert Wilson', '420 Alan Wood Rd, Conshohocken, PA 19428'),
     ('Fitbit, Inc.', 'support@fitbit.com', '877-623-4997', 'Michael Brown', '199 Fremont Street, San Francisco, CA 94105'),
     ('Deckers Outdoor Corporation (UGG)', 'info@ugg.com', '888-432-8530', 'Natalie Martin', '250 Coromar Drive, Goleta, CA 93117'),
     ('Walker Edison', 'contact@walkeredison.com', '877-203-2917', 'Peter Brown', '4350 W 2100 S, Salt Lake City, UT 84120');

-- Employee
INSERT INTO Employee (Name, Position, PhoneNum, Email)
VALUES
    ('Alex Johnson', 'Warehouse Safety Officer', '2238777471', 'alex.johnsonbc98@gmail.com'),
    ('Emma Wilson', 'Sales Representative', '987654321', 'bohara@gmail.com'),
    ('Ryan Brown', 'Warehouse Manager', '6403524946', 'ryan93@gmail.com'),
    ('Olivia Martinez', 'Sales Associate', '5716642306', 'olivia.mz99@example.com'),
    ('Ethan Taylor', 'Inventory Clerk', '2155339729', 'upollich@gmail.com'),
    ('Ava Garcia', 'Customer Service Representative', '6307789506', 'gilberto.waters@gmail.com'),
    ('Noah Smith', 'Shipping Coordinator', '8386828617', 'noahs2003@gmail.com'),
    ('Sophia Davis', 'Purchasing Agent', '3579514861', 'sophia19@yahoo.com'),
    ('Mason Miller', 'Logistics Manager', '8459595725', 'paucek.una@yahoo.com'),
    ('Isabella Anderson', 'Quality Control Inspector', '7792753704', 'isabell1024@example.com'),
    ('David Lee', 'Warehouse Manager', '9726212407', 'mustafa46@gmail.com'),
    ('Sarah White', 'Assistant Manager', '9716434692', 'sarahhh1412@gamil.com'),
    ('Robert Johnson', 'Inventory Clerk', '8082972617', 'rjohnson@miami.edu'),
    ('Jessica Garcia', 'Warehouse Worker', '2012588978', 'jgarci6@gmail.com'),
    ('Michael Martinez', 'Warehouse Worker', '9316560458', 'mnmartinez@gmail.com');

-- Product
INSERT INTO Product (SupplierID, Name, Description, Price, Quantity)
VALUES
    (6, 'Samsung QN55Q60AAFXZA', '5-inch QLED 4K Ultra HD TV with HDR', 599.99, 90),
    (1, 'JBL Flip 5', 'Portable Bluetooth speaker with waterproof', 89.95, 300),
    (3, 'AirPods Pro (2nd gen)', 'Noise-cancelling wireless earbuds with charging case', 249.00, 300),
    (9, 'ASUS ROG Zephyrus G14 (2024)', 'AMD™ Ryzen 9 8940H, NVIDIA® GeForce RTX™ 4070', 2199.99, 70),
    (2, 'Nike Air Zoom Pegasus 37', 'Men''s running shoes with responsive cushioning', 90.00, 200),
    (8, 'Levi’s 501 Jeans', 'Classic straight-fit jeans for men', 34.98, 100),
    (10, 'Serta Rane Sofa', 'Modern upholstered futon sofa with tufted back', 199.99, 80),
    (12, 'IKEA BILLY Bookcase', 'Bookcase with adjustable shelves', 79.99, 55),
    (13, 'Fitbit Charge 4', 'Advanced fitness & health tracker', 93.00, 400),
    (4, 'LG LFXS2697 Refrigerator', 'French door refrigerator with Smart Cooling system', 1099.99, 25),
    (7, 'Honeywell HPA300 Air Purifier', 'Air purifier with HEPA filter for large rooms', 219.99, 60),
    (5, 'Philips 3200 Espresso Machine', 'Automatic Espresso machine with milk frother', 799.99, 35),
    (11, 'Zinus Green Tea Mattress', 'Queen-size memory foam mattress', 249.00, 40),
    (14, 'UGG Ascot Slipper', 'suede slippers with wool lining', 110.00, 180),
    (15, 'Walker Edison TV Stand', 'Wood TV stand for TVs up to 64 inches', 200.00, 30);

-- Customer
INSERT INTO Customer (Name, PhoneNum, Address, Email)
VALUES
    ('John Doe', '4152854451', '582 Delaware Avenue, San Francisco', 'john.doe89@gmail.com'),
    ('Jane Smith', '7174496434', '456 Park Avenue, Carlisle', 'j.smith97@gmail.com'),
    ('Michael Johnson', '4567891234', '789 Elm Street, Oklahoma', 'michael.johnson2809@gmail.com'),
    ('Emily Brown', '7023281030', '796 Mesa Drive, Las Vegas', 'emilybrown65@gmail.com'),
    ('Daniel Davis', '3042437690', '1263 Tavern Place, West Virginia', 'davisss2012@gmail.com'),
    ('Sarah Wilson', '7891234567', '247 Crosswind Drive, Kentucky', 'sarahhws@gmail.com'),
    ('David Martinez', '8055091956', '4656 Leisure Lane, Los Angeles', 'daniel.martin90@gmail.com'),
    ('Maria Garcia', '6466195428', '4690 Cantebury Drive, New York', 'mariag1203@gmail.com'),
    ('James Miller', '2583691471', '2340 Massachusetts Avenue, Washington', 'james.miller98@gmail.com'),
    ('Jennifer Taylor', '6063759169', '1397 May Street, Winchester', 'jennyyy@gmail.com'),
    ('Sean James', '3362168488', '2467 Bryan Street, North Carolina', 'seangjames@gmail.com'),
    ('Mae Watson', '7179511187', '3789 Simpson Avenue, Pennsylvania', 'maewatson2000@gmail.com'),
    ('Marie Hughes', '9017636302', '4094 Burton Avenue, Tennessee', 'hughes2004@gmail.com'),
    ('Elise Lloyd', '4404584226', '534 Vineyard Drive, Ohio', 'elise2405@gmail.com'),
    ('Emanuel Gardner', '9514896676', '152 Denver Avenue, Los Angeles', 'emanuell2005@gmail.com');

--INSERT
INSERT INTO Customer (Name, PhoneNum, Address, Email)
VALUES
    ('Alice Carter', ' 8244614292', '123 Maple Street, Washington', 'alice1997@gmail.com'),
    ('Bob Harris', ' 4037696925', '456 Oak Avenue, Denver', 'bobbbb@hotmail.com'),
    ('Carol Williams', '4155550198', '789 Pine Road, San Francisco', 'wayne27@gorczany.com'),
    ('David Johnson', '3125550162', '101 Elm Boulevard, Chicago', 'david.johnson@example.com'),
    ('Eva Martinez', ' 4907540559', '202 Cedar Lane, Los Angeles', 'eve1235@gmail.com');

-- DELETE
DELETE FROM [Order] 
WHERE EmployeeID = 11;
DELETE FROM Employee
WHERE EmployeeID = 11;

DELETE FROM [Order]
WHERE EmployeeID = 12;
DELETE FROM Employee 
WHERE Name = 'Sarah White';

DELETE FROM [Order]
WHERE EmployeeID = 13;
DELETE FROM Employee 
WHERE PhoneNum = '8082972617';

DELETE FROM [Order]
WHERE EmployeeID = 14;
DELETE FROM Employee 
WHERE Email = 'jgarci6@gmail.com';

DELETE FROM [Order]
WHERE EmployeeID = 10;
DELETE FROM Employee 
WHERE Position = 'Quality Control Inspector';

-- UPDATE

UPDATE Employee 
SET Phone_Number = ' 6978097273'
WHERE Employee_ID = 1;

UPDATE Employee 
SET Email = 'emma2001@gmail.com'
WHERE Name = 'Emma Wilson';

UPDATE Employee 
SET Position = 'Main Manager'
WHERE Phone_Number = '6403524946';

UPDATE Employee 
SET Name = 'Olivia Smith'
WHERE Email = 'olivia.mz99@example.com';

UPDATE Employee 
SET Email = 'garciaava93@gmail.com'
WHERE Position = 'Customer Service Representative';

-- SELECT
-- pending orders
SELECT 
    E.EmployeeID, 
    E.Name AS EmployeeName, 
    C.CustomerID, 
    C.Name AS CustomerName,
    COUNT(O.OrderID) AS PendingOrders
FROM 
    [Order] O
JOIN 
    Employee E ON O.EmployeeID = E.EmployeeID
JOIN 
    Customer C ON O.CustomerID = C.CustomerID
WHERE 
    O.Status = 'Pending'
GROUP BY 
    E.EmployeeID, E.Name, C.CustomerID, C.Name
HAVING 
    COUNT(O.OrderID) > 0;
-- average order value
SELECT 
    C.Name AS CustomerName, 
    AVG(O.TotalAmount) AS AverageOrderValue
FROM 
    [Order] O
JOIN 
    Customer C ON O.CustomerID = C.CustomerID
GROUP BY 
    C.Name
HAVING 
    AVG(O.TotalAmount) > 500;
-- sold something
SELECT 
    E.EmployeeID, 
    E.Name AS EmployeeName, 
    COUNT(O.OrderID) AS CompletedOrders
FROM 
    [Order] O
JOIN 
    Employee E ON O.EmployeeID = E.EmployeeID
WHERE 
    O.Status = 'Completed'
GROUP BY 
    E.EmployeeID, E.Name
HAVING 
    COUNT(O.OrderID) > 0;
--supplier contribute to high-value products
SELECT 
    S.SupplierID, 
    S.Name AS SupplierName, 
    AVG(P.Price) AS AverageProductPrice
FROM 
    Product P
JOIN 
    Supplier S ON P.SupplierID = S.SupplierID
GROUP BY 
    S.SupplierID, S.Name
HAVING 
    AVG(P.Price) > 100;
--cusomter aleast shopped once
SELECT 
    C.CustomerID, 
    C.Name AS CustomerName, 
    COUNT(O.OrderID) AS NumberOfOrders
FROM 
    [Order] O
JOIN 
    Customer C ON O.CustomerID = C.CustomerID
GROUP BY 
    C.CustomerID, C.Name
HAVING 
    COUNT(O.OrderID) > 0;   