const product = {
    name: "Laptop",
    price: 1000,
};
// 동적으로 속성 추가
product.discount = 10; // 할인율
product.color = "black"; // 색상
console.log(product); // { name: 'Laptop', price: 1000, discount: 10, color: 'black' }
const employeeData = {
    John: {
        name: "John",
        position: "Developer",
        salary: 5000,
    },
};
// 동적으로 추가적인 정보 추가
employeeData["Alice"] = {
    name: "Alice",
    position: "Manager",
    salary: 6000,
    department: "Sales",
};
export {};
