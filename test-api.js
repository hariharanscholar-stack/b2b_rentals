// test API
fetch('http://localhost:3000/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productName: "Test Product",
      firstName: "Test",
      lastName: "User",
      mobile: "1234567890",
      email: "test@example.com",
      city: "Test City",
      pinCode: "12345",
      organisation: "Test Org",
      jobFunction: "Test Job",
      message: "Test Message",
    })
  })
  .then(async r => {
      console.log('Status 3000:', r.status);
      console.log('Body 3000:', await r.text());
  })
  .catch(console.error);
  
fetch('http://localhost:3001/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productName: "Test Product",
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
    })
  })
  .then(async r => {
      console.log('Status 3001:', r.status);
      console.log('Body 3001:', await r.text());
  })
  .catch(console.error);
