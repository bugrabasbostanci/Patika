# Selection Sort Projesi - Proje 1

Selection Sort sıralama algortimasında dizideki elemanları tek tek inceleyerek en küçüğünü bulur ve ilk eleman ile yer değiştiririz. Bu işleme dizideki elemanlar küçükten büyüğe sıralanana kadar devam ederiz.

---

[22,27,16,2,18,6] --> Selection Sort

**1-Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.**

1. adım: [22,27,16,**2**,18,6] => [**2**,27,16,22,18,6]

2.adım: [2,27,16,22,18,**6**] => [**2,6**,16,22,18,27]

3.adım: [2,6,**16**,22,18,27] => [**2,6,16**,22,18,27]

4.adım: [2,6,16,22,**18**,27] =>[**2,6,16,18**,22,27]

5.adım:[2,6,16,18,**22**,27] => [**2,6,16,18,22,27**]

---

[22,27,16,2,18,6]

**2-Yukarıda verilen dizinin Big-O gösterimini yazınız.**

1. adımda **n** tane sayıya inceleriz

2. adımda **n-1** tane sayıyı inceleriz

3. adımda **n-2** tane sayıyı inceleriz

n. adımda **1** tane sayıyı inceleriz

=> **1**'den **n**'e kadar olan sayıların toplamı

`n(n+1)/2 =  işlem sonucunda dominant olan tarafı alırız ve O(n^2) olur`

---

[22,27,16,2,18,6]

**3-Yukarıda verilen dizide, Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız**

18 sayısı dizinin ortalarında olduğundan **Average case**'e kapsamına girer.

---

4-[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

1.adım: [7,3,5,8,**2**,9,4,15,6] => [**2**,3,5,8,7,9,4,15,6]

2.adım: [2,**3**,5,8,7,9,4,15,6] => [**2,3**,5,8,7,9,4,15,6]

3.adım: [2,3,5,8,7,9,**4**,15,6] => [**2,3,4**,8,7,9,5,15,6]

4.adım: [2,3,4,8,7,9,**5**,15,6] => [**2,3,4,5**,7,9,8,15,6]

5.adım: [2,3,4,5,7,9,8,15,**6**] => [**2,3,4,5,6**,9,8,15,7]

6.adım : [2,3,4,5,6,9,8,15,**7**] => [**2,3,4,5,6,7**,8,15,9]

7.adım: [2,3,4,5,6,7,**8**,15,9] => [**2,3,4,5,6,7,8**,15,9]

8.adım: [2,3,4,5,6,7,8,15,**9**] => [**2,3,4,5,6,7,8,9**,15]

9.adım: [2,3,4,5,6,7,8,9,**15**] => [**2,3,4,5,6,7,8,9,15**]
