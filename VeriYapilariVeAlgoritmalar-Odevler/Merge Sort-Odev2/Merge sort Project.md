# Merge Sort Projesi - Proje 2

Merge sort sıralama algoritmasında dizideki elemanları ikiye bölerek alt dizilere ayırırız. Bu işleme her eleman tek kalana kadar devam ederiz. Sonrasında ise elemanları küçükten büyüğe sıralayarak ve gruplayarak diziyi küçükten büyüğe sıralamış oluruz.

---

[16,21,11,8,12,22] --> Merge Sort

**1-Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.**

1.adım:[**16,21,11**] - [**8,12,22**] iki alt gruba ayırdık

2.adım:[**16,21**] - [**11**] - [**8,12**] - [**22**] tekrar gruplara ayırdık

3.adım:[**16**] - [**21**] - [**11**] - [**8**] - [**12**] - [**22**] tekrar gruplara ayırırız

4:adım:[**16-21**] - [11] - [**8,12**] - [22] gruplarken küçükten büyüğe sıralama yaparak gruplarız

5.adım:[**11-16-21**] - [**8,12,22**] tekrar gruplarken küçükten büyüğe sıralama yaparak sıralarız

6.adım:[**8,11,12,16,21,22**] son kez küçükten büyüğe sıralama yaparız ve dizimiz sıralanmış olur

---

**2-Yukarıdaki dizinin Big-O gösterimini yazınız.**

`Gruplarken her aşamada n elemanı inceleriz O(n) ve
bu işlemi 2^x=n => logn kere yaparız. 
Merge sort da O(nlogn) olur`
