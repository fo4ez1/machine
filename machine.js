function order(drink) {
    let str = "Ваш заказ :";
    let price;
   

    switch (drink){
        case "эспрессо" :
            price=30;
            str +=price+"гривен "+" "+"эспрессо" ;
            break;
            case "капучино":
                price=20;
            str +=price+"гривен "+" "+"купучинно";
            break;
                case "латте" :
            price=15;
            str +=price+"гривен"+" "+"латте" ;
            break;
            case "горячий шоколад" :
            price=25;
            str +=price+"гривен "+" "+"горячий шоколад" ;
            break;
            default:
                str="у нас такого нету";
               

    }

    return str;
}
user = prompt("Выбирете что вы хотите")
const myOrder= order(user);
console.log(myOrder);


