//filter => loc du lieu 
const user = [
    {
        id: 1,
        name: "le van tuan",
        age: 19,
        tien: 200,
    },
    {
        id: 2,
        name: "nguyen van thang",
        age: 18,
        tien: 300,
    },
    {
        id: 3,
        name: "tan van tung",
        age: 20,
        tien: 400,
    }
]
//tim kiem filter no loc tra ve mang con find tra ve 1 gia tri duy nhat
const tan = user.filter((user) => {
    return user.tien >= 300
})
console.log(tan)
const tang = user.find((user) => {
    return user.tien == 200
})
console.log(tang)
const tin = user.map((user) => {
    return {
        ...user,
        tien: user.tien - 300
    }
})
console.log(tin)