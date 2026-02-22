 # **🛒 SHOPPING CART – ALL API ENDPOINTS**

## **🔐 1\. AUTH / USER APIs**

**Purpose:** User registration & login

`POST   /api/auth/register        → Register new user`  
`POST   /api/auth/login           → Login user`  
`GET    /api/users/{userId}       → Get user profile`  
`PUT    /api/users/{userId}       → Update user profile`  
`DELETE /api/users/{userId}       → Delete user`

---

## **📦 2\. PRODUCT APIs**

**Purpose:** Manage products

`POST   /api/products             → Add new product`  
`GET    /api/products             → Get all products`  
`GET    /api/products/{id}        → Get product by ID`  
`GET    /api/products/category/{categoryId} → Get products by category`  
`PUT    /api/products/{id}        → Update product`  
`DELETE /api/products/{id}        → Delete product`

---

## **🗂️ 3\. CATEGORY APIs**

**Purpose:** Product grouping

`POST   /api/categories           → Add category`  
`GET    /api/categories           → Get all categories`  
`GET    /api/categories/{id}      → Get category by ID`  
`PUT    /api/categories/{id}      → Update category`  
`DELETE /api/categories/{id}      → Delete category`

---

## **🧑‍💼 4\. SELLER APIs (Optional but realistic)**

**Purpose:** Multi-vendor support

`POST   /api/sellers              → Add seller`  
`GET    /api/sellers              → Get all sellers`  
`GET    /api/sellers/{id}         → Get seller by ID`  
`PUT    /api/sellers/{id}         → Update seller`  
`DELETE /api/sellers/{id}         → Delete seller`

---

## **🛍️ 5\. CART APIs**

**Purpose:** User cart management

`POST   /api/cart/{userId}                     → Create cart for user`  
`GET    /api/cart/{userId}                     → Get user's cart`  
`DELETE /api/cart/{userId}                     → Clear cart`

---

## **🧾 6\. CART ITEM APIs**

**Purpose:** Add/remove items from cart

`POST   /api/cart/{cartId}/items                → Add product to cart`  
`PUT    /api/cart/items/{cartItemId}            → Update quantity`  
`DELETE /api/cart/items/{cartItemId}            → Remove product from cart`

---

## **📦 7\. ORDER APIs**

**Purpose:** Checkout & order tracking

`POST   /api/orders/{userId}                    → Place order (checkout)`  
`GET    /api/orders/{orderId}                   → Get order details`  
`GET    /api/orders/user/{userId}               → Get user orders`  
`PUT    /api/orders/{orderId}/status             → Update order status`

---

## **📃 8\. ORDER ITEM APIs**

**Purpose:** View ordered products

`GET    /api/orders/{orderId}/items             → Get order items`

---

## **💳 9\. PAYMENT APIs**

**Purpose:** Payment processing

`POST   /api/payments                           → Make payment`  
`GET    /api/payments/{paymentId}               → Get payment details`  
`GET    /api/payments/order/{orderId}           → Get payment by order`

---

## **🏠 10\. ADDRESS APIs**

**Purpose:** Shipping details

`POST   /api/addresses/{userId}                 → Add address`  
`GET    /api/addresses/{userId}                 → Get user addresses`  
`PUT    /api/addresses/{addressId}              → Update address`  
`DELETE /api/addresses/{addressId}              → Delete address`

---

## **🔁 COMPLETE FLOW (VERY IMPORTANT)**

`Register/Login`  
`↓`  
`Browse Products`  
`↓`  
`Add to Cart`  
`↓`  
`View Cart`  
`↓`  
`Checkout → Order Created`  
`↓`  
`Payment`  
`↓`  
`Order Confirmed`

```java
public class Products {

    @Id
    private ObjectId pid;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @NonNull
    private String category;

    @NonNull
    private ObjectId categoryId;

    @NonNull
    private Double price;

    private Double discount_price;

    @NonNull
    private Integer Stock;

    @NonNull
    private String image;

    @NonNull
    private Double rating;

}
```

```java
public class Order {

    @Id
    private ObjectId id;

    private ObjectId userId;

    @DBRef
    private List<OrderItem> items = new ArrayList<>();

    private Double totalAmount;

    private String status;

    private Instant orderDate;

    private String deliveryAddress;
}


public class OrderItem {

    @Id
    private ObjectId productId;

    private String productTitle;

    private Double price;

    private Integer quantity;

    private Double totalPrice;
}
```

```
src/
 ├ app/
 │   ├ (public)/
 │   │   ├ page.js              // home
 │   │   ├ product/[id]/page.js
 │   │   ├ category/[id]/page.js
 │   │
 │   ├ customer/
 │   │   ├ cart/page.js
 │   │   ├ orders/page.js
 │   │   ├ profile/page.js
 │   │
 │   ├ merchant/
 │
 │   ├ layout.js
 │
 ├ components/
 │   ├ ui/                     // reusable UI
 │   │   ├ Btn.jsx
 │   │   ├ Carousel.jsx
 │
 │   ├ product/
 │   │   ├ ProductCard.jsx
 │   │   ├ ProductGrid.jsx
 │
 │   ├ cart/
 │   │   ├ CartItem.jsx
 │
 │   ├ layout/
 │   │   ├ Navbar.jsx
 │   │   ├ Footer.jsx
 │
 ├ lib/
 │   ├ api/
 │   │   ├ product.js
 │   │   ├ user.js
 │   │   ├ merchant.js
 │   │
 │   ├ fetcher.js
 │
 ├ store/                     // global state
 │   ├ cartStore.js
 │   ├ userStore.js
```