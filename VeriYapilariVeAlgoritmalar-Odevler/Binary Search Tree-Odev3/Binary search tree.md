# Binary search tree Projesi - Proje 3

elimizde bulunan ver grubunun sıralı olduğunu kabul ederiz ve bu veri grubu tree şeklinde bir yapıdadır. En üstteki başalngıç elemanına root, diğer elemanlara ise node denir.

---

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] --> Binary Search Tree

**Yukarıdaki dizinin aşamalarını yazınız.**
Root **5** olsun ve tree yapımızı oluşturalım. Root'un solundaki değerler root değerinden küçüktür, root'un sağındaki değerler root değerinden büyüktür.


                5
               /  \
              /    \
             /      \
            3        7
           / \      / \
          1   4    6   8
         / \        \   \
         0  2        7   9


3 değeri 6 değerinden küçük olduğu için sol düğüme yazılmıştır. 7 değeri de 6 değerinden büyük olduğu için sağ düğüme yazılmıştır. Diğer değerlerde bu mantık izlenerek düğümlere yerleştirilmiştir.
