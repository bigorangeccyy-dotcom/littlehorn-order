
import { useState } from 'react';

export default function Home() {
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const menu = [
    { id: 1, name: "金牌螺蛳粉", en: "Signature Luosifen", price: 11.5 },
    { id: 2, name: "干拌螺蛳粉", en: "Dry Luosifen", price: 11.5 },
    { id: 3, name: "豚螺螺蛳粉", en: "Pork Rib Luosifen", price: 12.0 }
  ];

  const handleAdd = (item) => {
    setOrder([...order, item]);
  };

  const handleCheckout = () => {
    if (!name || !phone) {
      alert("请输入姓名和电话");
      return;
    }
    alert("订单提交成功，预计30分钟出餐");
    // This is where Stripe or order API would be called
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>小螺号 LittleHorn 点单系统</h1>
      <p>欢迎点单（每日12:00-21:30，每周一休息）</p>

      <h2>菜单 Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} / {item.en} - £{item.price.toFixed(2)}
            <button onClick={() => handleAdd(item)} style={{ marginLeft: 10 }}>加入购物车</button>
          </li>
        ))}
      </ul>

      <h2>购物车 Cart</h2>
      <ul>
        {order.map((item, i) => (
          <li key={i}>{item.name} - £{item.price.toFixed(2)}</li>
        ))}
      </ul>

      <h2>填写信息</h2>
      <input placeholder="姓名" value={name} onChange={e => setName(e.target.value)} /><br />
      <input placeholder="电话" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
      <button onClick={handleCheckout}>提交订单并付款</button>
    </div>
  );
}
