import React from 'react';
import './Producer.css';

const Producer = () => {
  let users = [
    {
      id: 2,
      username: 'alcap',
      email: 'alcapone@boose.com',
      password: 'alcaponechicago',
      isProducer: true,
      name: 'Al Capone',
      city: 'Chicago',
      alcohol: 'Gin',
      ratings: 10,
      orders: [
        {
          buyer: 'Pierre Genthon',
          quantity: 20,
          unitPrice: 3,
          date: '11/21/1925',
        },
        {
          buyer: 'Nathan Vanstaevel',
          quantity: 15,
          unitPrice: 3.5,
          date: '12/02/1925',
        },
        {
          buyer: 'Thomas Ponthoreau',
          quantity: 7,
          unitPrice: 3,
          date: '12/23/1925',
        },
        {
          buyer: 'Donald Duck',
          quantity: 12,
          unitPrice: 4,
          date: '12/31/1925',
        },
      ],
      litiges: [
        { buyer: 'Matthieu Martinot', status: 'unpaid' },
        { buyer: 'Yoan Vincent', status: 'moneyless, he is a php worker...' },
      ],
      feedbacks: [
        {
          username: 'Anonymous',
          rating: 9.5,
          message: 'Fast and easy ! Thanks',
        },
        {
          username: 'Anonymous',
          rating: 9,
          message: 'One unit broken but got refund ! Thanks a lot !',
        },
        {
          username: 'Anonymous',
          rating: 10,
          message: 'Good product, good quality. We will meet again !',
        },
      ],
    },
  ];
  console.log(users[0].orders);
  return (
    <div className='producer-container'>
      <h1>Welcome Back {users[0].username}</h1>
      <div className='producer-infos'>
        <h2>Your Pending Orders</h2>
        {
          <div className='producer-orders'>
            {users[0].orders.map((e, i) => {
              return (
                <div key={i} className='infos-cards'>
                  <li>Buyer: {e.buyer}</li>
                  <li>Quantity: {e.quantity}</li>
                  <li>Price per unit: {e.unitPrice}$</li>
                  <li>Order Date: {e.date}</li>
                </div>
              );
            })}
          </div>
        }
      </div>
      <div className='container-reviews'>
        <div className='dispute-container'>
          <h2>Disputes</h2>
          <div className='main-disputes'>
            <div className='disputes'>
              <p>User: {users[0].litiges[0].buyer}</p>
              <br />
              <p className='text-disputes'>{users[0].litiges[0].status}</p>
            </div>
            <div className='disputes'>
              <p>User: {users[0].litiges[1].buyer}</p>
              <br />
              <p className='text-disputes'>{users[0].litiges[1].status}</p>
            </div>
          </div>
        </div>

        <div className='feedback'>
          <h2>Reviews</h2>
          {users[0].feedbacks.map((elem, i) => {
            return (
              <div key={i} className='cards-reviews'>
                <li>{elem.username} user</li>
                <li>Rating: {elem.rating}</li>
                <li>
                  <em>Reviews: {elem.message}</em>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Producer;
