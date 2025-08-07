import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone) {
      alert('请填写姓名和手机号');
      return;
    }
    setOrderSuccess(true);
  };

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day !== 1 && hour >= 12 && hour < 21;
  }

  if (!isOpen()) {
    return <div style={{ padding: 20 }}><h2>小螺号休息中</h2><p>营业时间：每日 12:00 - 21:30（周一休息）</p></div>
  }

  return (
    <>
      <Head>
        <title>小螺号 LittleHorn 点单</title>
      </Head>
      <div style={{ padding: 20, fontFamily: 'Arial' }}>
        <h1>欢迎来到 小螺号 LittleHorn</h1>
        <p>请填写以下信息并下单：</p>
        <input type="text" placeholder="姓名" value={name} onChange={e => setName(e.target.value)} /><br />
        <input type="text" placeholder="手机号" value={phone} onChange={e => setPhone(e.target.value)} /><br />
        <textarea placeholder="备注（如口味）" value={note} onChange={e => setNote(e.target.value)} /><br />
        <button onClick={handleSubmit}>提交订单</button>

        {orderSuccess && (
          <div style={{ marginTop: 20 }}>
            <h3>预计 30 分钟出餐 🍜</h3>
            <p>请前往支付（模拟跳转）</p>
            <a href="https://buy.stripe.com/test_cN2g1Y3hv0gZdQc5kk" target="_blank" rel="noreferrer">
              <button>跳转 Stripe 支付</button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}