data = {
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "registered_at": "2023-08-12T09:34:00Z",
      "is_active": true
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "registered_at": "2023-10-05T14:11:20Z",
      "is_active": false
    }
  ],
  "products": [
    {
      "id": 101,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 25.99,
      "stock": 150
    },
    {
      "id": 102,
      "name": "Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "stock": 85
    },
    {
      "id": 103,
      "name": "Coffee Mug",
      "category": "Home & Kitchen",
      "price": 9.5,
      "stock": 300
    }
  ],
  "orders": [
    {
      "order_id": 5001,
      "user_id": 1,
      "order_date": "2024-02-15T11:45:00Z",
      "items": [
        {
          "product_id": 101,
          "quantity": 2
        },
        {
          "product_id": 103,
          "quantity": 1
        }
      ],
      "total_amount": 61.48,
      "status": "Shipped"
    },
    {
      "order_id": 5002,
      "user_id": 2,
      "order_date": "2024-03-20T16:22:00Z",
      "items": [
        {
          "product_id": 102,
          "quantity": 1
        }
      ],
      "total_amount": 49.99,
      "status": "Pending"
    }
  ]
}


// 4. Write a function that returns the user and the number of orders placed by a user with a given user_id in an object.

function getOrderCount(userId) {
  const user = data.users.find(u => u.id === userId);
  if (!user) return null;
  const orderCount = data.orders.filter(o => o.user_id === userId).length;
  console.log(`The number of orders placed by ${user.name} is: ${orderCount}`);
  return { user: user.name, orderCount };
}

getOrderCount(2);
