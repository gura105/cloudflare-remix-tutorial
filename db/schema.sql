DROP TABLE IF EXISTS Customers;

CREATE TABLE
    IF NOT EXISTS Customers (
        CustomerId INTEGER PRIMARY KEY,
        CompanyName TEXT,
        ContactName TEXT
    );

INSERT INTO
    Customers (
        CustomerID,
        CompanyName,
        ContactName
    )
VALUES (
        1,
        'Alfreds Futterkiste',
        'Maria Anders'
    ), (
        4,
        'Around the Horn',
        'Thomas Hardy'
    ), (
        11,
        'Bs Beverages',
        'Victoria Ashworth'
    ), (
        13,
        'Bs Beverages',
        'Random Name'
    );

DROP TABLE IF EXISTS Post;

CREATE Table
    IF NOT EXISTS Post (
        ID INTEGER PRIMARY KEY,
        Title TEXT,
        Content TEXT,
        Author TEXT
    );

INSERT INTO
    Post (ID, Title, Content, Author)
VALUES (
        1,
        'First Post',
        'Content of the first post',
        'Thomas Hardy'
    ), (
        2,
        'Second Post',
        'Content of the second post',
        'Maria Anders'
    ), (
        3,
        'Third Post',
        'Content of the third post',
        'Victoria Ashworth'
    ), (
        4,
        'Fourth Post',
        'Content of the fourth post',
        'Random Name'
    );